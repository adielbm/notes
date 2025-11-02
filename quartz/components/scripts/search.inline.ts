import FlexSearch from "flexsearch"
import { ContentDetails } from "../../plugins/emitters/contentIndex"
import { registerEscapeHandler, removeAllChildren } from "./util"
import { FullSlug, normalizeRelativeURLs, resolveRelative } from "../../util/path"

interface Item {
  id: number
  slug: FullSlug
  title: string
  tags: string[]
}

// Can be expanded with things like "term" in the future
type SearchType = "basic" | "tags"
let searchType: SearchType = "basic"
let currentSearchTerm: string = ""
const encoder = (str: string) => str.toLowerCase().split(/([^a-z]|[^\x00-\x7F])/)
let index = new FlexSearch.Document<Item>({
  charset: "latin:extra",
  encode: encoder,
  document: {
    id: "id",
    tag: "tags",
    index: [
      {
        field: "title",
        tokenize: "forward",
      },
      {
        field: "tags",
        tokenize: "forward",
      },
    ],
  },
})

const p = new DOMParser()
const numSearchResults = 8
const numTagResults = 5

const tokenizeTerm = (term: string) => {
  const tokens = term.split(/\s+/).filter((t) => t.trim() !== "")
  const tokenLen = tokens.length
  if (tokenLen > 1) {
    for (let i = 1; i < tokenLen; i++) {
      tokens.push(tokens.slice(0, i + 1).join(" "))
    }
  }

  return tokens.sort((a, b) => b.length - a.length) // always highlight longest terms first
}

function highlight(searchTerm: string, text: string) {
  const tokenizedTerms = tokenizeTerm(searchTerm)
  const tokenizedText = text.split(/\s+/).filter((t) => t !== "")

  const slice = tokenizedText
    .map((tok) => {
      // see if this tok is prefixed by any search terms
      for (const searchTok of tokenizedTerms) {
        if (tok.toLowerCase().includes(searchTok.toLowerCase())) {
          const regex = new RegExp(searchTok.toLowerCase(), "gi")
          return tok.replace(regex, `<span class="highlight">$&</span>`)
        }
      }
      return tok
    })
    .join(" ")

  return slice
}

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const currentSlug = e.detail.url
  const data = await fetchData
  const container = document.getElementById("search-container")
  const searchBar = document.getElementById("search-bar") as HTMLInputElement | null
  const searchLayout = document.getElementById("search-layout")
  const idDataMap = Object.keys(data) as FullSlug[]

  const appendLayout = (el: HTMLElement) => {
    if (searchLayout?.querySelector(`#${el.id}`) === null) {
      searchLayout?.appendChild(el)
    }
  }

  const results = document.createElement("div")
  results.id = "results-container"
  appendLayout(results)

  function hideSearch() {
    container?.classList.remove("active")
    if (results) {
      removeAllChildren(results)
    }
    if (searchLayout) {
      searchLayout.classList.remove("display-results")
    }
    currentHover = null
  }

  function showSearch() {
    // Only show the container when there are results to display
    if (!searchLayout?.classList.contains("display-results")) {
      container?.classList.remove("active")
      return
    }
    container?.classList.add("active")
  }

  function scrollIntoView(element: HTMLElement) {
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()

    // Check if element is above the visible area
    if (elementRect.top < containerRect.top) {
      element.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
    // Check if element is below the visible area
    else if (elementRect.bottom > containerRect.bottom) {
      element.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }

  let currentHover: HTMLInputElement | null = null

  async function shortcutHandler(e: HTMLElementEventMap["keydown"]) {
    if (e.key === "k" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
      e.preventDefault()
      searchBar?.focus()
      return
    } else if (e.shiftKey && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      // Hotkey to open tag search
      e.preventDefault()
      searchBar?.focus()
      // add "#" prefix for tag search
      if (searchBar) searchBar.value = "#"
      return
    }

    if (currentHover) {
      currentHover.classList.remove("focus")
    }

    // If search is active, then we will render the first result and display accordingly
    if (!container?.classList.contains("active")) return
    if (e.key === "Enter") {
      // If result has focus, navigate to that one, otherwise pick first result
      const activeResult = currentHover || (document.getElementsByClassName("result-card")[0] as HTMLInputElement | null)
      if (!activeResult || activeResult.classList.contains("no-match")) return
      activeResult.click()
    } else if (e.key === "ArrowUp" || (e.shiftKey && e.key === "Tab")) {
      e.preventDefault()
      const allResults = Array.from(document.getElementsByClassName("result-card")) as HTMLInputElement[]
      if (allResults.length === 0) return

      if (!currentHover) {
        // Focus last item
        const lastResult = allResults[allResults.length - 1]
        lastResult.classList.add("focus")
        currentHover = lastResult
        scrollIntoView(lastResult)
      } else {
        const currentIndex = allResults.indexOf(currentHover)
        currentHover.classList.remove("focus")

        if (currentIndex > 0) {
          // Move to previous item
          const prevResult = allResults[currentIndex - 1]
          prevResult.classList.add("focus")
          currentHover = prevResult
          scrollIntoView(prevResult)
        } else {
          // At first item, go back to search bar
          currentHover = null
          searchBar?.focus()
        }
      }
    } else if (e.key === "ArrowDown" || e.key === "Tab") {
      e.preventDefault()
      const allResults = Array.from(document.getElementsByClassName("result-card")) as HTMLInputElement[]
      if (allResults.length === 0) return

      if (!currentHover) {
        // Focus first item
        const firstResult = allResults[0]
        firstResult.classList.add("focus")
        currentHover = firstResult
        scrollIntoView(firstResult)
      } else {
        const currentIndex = allResults.indexOf(currentHover)
        currentHover.classList.remove("focus")

        if (currentIndex < allResults.length - 1) {
          // Move to next item
          const nextResult = allResults[currentIndex + 1]
          nextResult.classList.add("focus")
          currentHover = nextResult
          scrollIntoView(nextResult)
        } else {
          // At last item, wrap to first
          const firstResult = allResults[0]
          firstResult.classList.add("focus")
          currentHover = firstResult
          scrollIntoView(firstResult)
        }
      }
    }
  }

  const formatForDisplay = (term: string, id: number) => {
    const slug = idDataMap[id]
    return {
      id,
      slug,
      title: searchType === "tags" ? data[slug].title : highlight(term, data[slug].title ?? ""),
      tags: highlightTags(term.substring(1), data[slug].tags),
    }
  }

  function highlightTags(term: string, tags: string[]) {
    if (!tags || searchType !== "tags") {
      return []
    }

    return tags
      .map((tag) => {
        if (tag.toLowerCase().includes(term.toLowerCase())) {
          return `<li><p class="match-tag">#${tag}</p></li>`
        } else {
          return `<li><p>#${tag}</p></li>`
        }
      })
      .slice(0, numTagResults)
  }

  function resolveUrl(slug: FullSlug): URL {
    return new URL(resolveRelative(currentSlug, slug), location.toString())
  }

  const resultToHTML = ({ slug, title, tags }: Item) => {
    const htmlTags = tags.length > 0 ? `<ul class="tags">${tags.join("")}</ul>` : ``
    const itemTile = document.createElement("a")
    itemTile.classList.add("result-card")
    itemTile.id = slug
    itemTile.href = resolveUrl(slug).toString()
    itemTile.innerHTML = `<h3>${title}</h3>${htmlTags}`
    itemTile.addEventListener("click", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      hideSearch()
    })
    itemTile.addEventListener("click", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      hideSearch()
      if (searchBar) {
        searchBar.value = ""
        searchBar.blur()
      }
    })

    const handler = (event: MouseEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      hideSearch()
      if (searchBar) {
        searchBar.value = ""
        searchBar.blur()
      }
    }

    function onMouseEnter(ev: MouseEvent) {
      if (!ev.target) return
      const target = ev.target as HTMLInputElement

      // Remove focus from previously hovered item
      if (currentHover && currentHover !== target) {
        currentHover.classList.remove("focus")
      }

      target.classList.add("focus")
      currentHover = target
    }

    itemTile.addEventListener("mouseenter", onMouseEnter)
    window.addCleanup(() => itemTile.removeEventListener("mouseenter", onMouseEnter))
    itemTile.addEventListener("click", handler)
    window.addCleanup(() => itemTile.removeEventListener("click", handler))

    return itemTile
  }

  async function displayResults(finalResults: Item[]) {
    if (!results) return

    removeAllChildren(results)
    currentHover = null

    if (finalResults.length === 0) {
      results.innerHTML = `<a class="result-card no-match">
          <h3>No results.</h3>
      </a>`
    } else {
      results.append(...finalResults.map(resultToHTML))
    }
  }

  async function onType(e: HTMLElementEventMap["input"]) {
    if (!searchLayout || !index) return
    currentSearchTerm = (e.target as HTMLInputElement).value
    const hasContent = currentSearchTerm.trim() !== ""
    searchLayout.classList.toggle("display-results", hasContent)
    if (hasContent) {
      showSearch()
    } else {
      hideSearch()
      return
    }
    searchType = currentSearchTerm.startsWith("#") ? "tags" : "basic"

    let searchResults: FlexSearch.SimpleDocumentSearchResultSetUnit[]
    if (searchType === "tags") {
      currentSearchTerm = currentSearchTerm.substring(1).trim()
      const separatorIndex = currentSearchTerm.indexOf(" ")
      if (separatorIndex != -1) {
        // search by title and content index and then filter by tag (implemented in flexsearch)
        const tag = currentSearchTerm.substring(0, separatorIndex)
        const query = currentSearchTerm.substring(separatorIndex + 1).trim()
        searchResults = await index.searchAsync({
          query: query,
          // return at least 10000 documents, so it is enough to filter them by tag (implemented in flexsearch)
          limit: Math.max(numSearchResults, 10000),
          index: ["title"],
          tag: tag,
        })
        for (let searchResult of searchResults) {
          searchResult.result = searchResult.result.slice(0, numSearchResults)
        }
        // set search type to basic and remove tag from term for proper highlightning and scroll
        searchType = "basic"
        currentSearchTerm = query
      } else {
        // default search by tags index
        searchResults = await index.searchAsync({
          query: currentSearchTerm,
          limit: numSearchResults,
          index: ["tags"],
        })
      }
    } else if (searchType === "basic") {
      searchResults = await index.searchAsync({
        query: currentSearchTerm,
        limit: numSearchResults,
        index: ["title"],
      })
    }

    const getByField = (field: string): number[] => {
      const results = searchResults.filter((x) => x.field === field)
      return results.length === 0 ? [] : ([...results[0].result] as number[])
    }

    const allIds: Set<number> = new Set([
      ...getByField("title"),
      ...getByField("tags"),
    ])
    const finalResults = [...allIds].map((id) => formatForDisplay(currentSearchTerm, id))
    await displayResults(finalResults)
  }

  document.addEventListener("keydown", shortcutHandler)
  window.addCleanup(() => document.removeEventListener("keydown", shortcutHandler))

  searchBar?.addEventListener("input", onType)
  window.addCleanup(() => searchBar?.removeEventListener("input", onType))

  searchBar?.addEventListener("focus", () => {
    if (currentSearchTerm.trim() !== "") {
      showSearch()
    }
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const searchElement = document.querySelector(".search")
    if (searchElement && !searchElement.contains(e.target as Node)) {
      hideSearch()
    }
  })

  registerEscapeHandler(container, hideSearch)
  await fillDocument(data)
})

/**
 * Fills flexsearch document with data
 * @param index index to fill
 * @param data data to fill index with
 */
async function fillDocument(data: { [key: FullSlug]: ContentDetails }) {
  let id = 0
  const promises: Array<Promise<unknown>> = []
  for (const [slug, fileData] of Object.entries<ContentDetails>(data)) {
    promises.push(
      index.addAsync(id++, {
        id,
        slug: slug as FullSlug,
        title: fileData.title,
        tags: fileData.tags,
      }),
    )
  }

  return await Promise.all(promises)
}
