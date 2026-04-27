import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/search.scss"
import darkmodeStyles from "./styles/darkmode.scss"
// @ts-ignore
import script from "./scripts/search.inline"
// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { pathToRoot } from "../util/path"

export interface SearchOptions {
  enablePreview: boolean
}

const defaultOptions: SearchOptions = {
  enablePreview: false,
}

const searchUXScript = `
(() => {
  const searchRoot = document.querySelector(".search")
  if (!searchRoot) return

  const searchContainer = searchRoot.querySelector(".search-container")
  const searchBar = searchRoot.querySelector(".search-bar")
  const searchLayout = searchRoot.querySelector(".search-layout")
  if (!searchContainer || !searchBar || !searchLayout) return

  searchContainer.classList.add("active")

  const hideResults = () => {
    searchLayout.classList.remove("display-results")
  }

  const escapeHtml = (text) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;")

  const humanizeSegment = (segment) =>
    decodeURIComponent(segment)
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())

  const normalizeQuery = (raw) => {
    const term = raw.trim()
    if (!term.startsWith("#")) return term
    const tagMode = term.slice(1).trim()
    const firstSpace = tagMode.indexOf(" ")
    return firstSpace === -1 ? tagMode : tagMode.slice(firstSpace + 1).trim()
  }

  const processResults = () => {
    const query = normalizeQuery(searchBar.value)
    const tokens = query
      .split(/\s+/)
      .map((t) => t.trim())
      .filter(Boolean)
      .sort((a, b) => b.length - a.length)
    const mainToken = tokens[0]?.toLowerCase()

    const cards = searchRoot.querySelectorAll(".results-container .result-card")
    cards.forEach((card) => {
      const title = card.querySelector(".card-title")
      if (!title) return
      if ((title.textContent ?? "").trim().toLowerCase() !== "index") return

      const href = card.getAttribute("href") ?? ""
      if (!href) return
      const pathname = new URL(href, window.location.href).pathname
      const segments = pathname.split("/").filter(Boolean)
      const parentSegment = segments.length > 1 ? segments[segments.length - 2] : segments[0]
      title.textContent = parentSegment ? humanizeSegment(parentSegment) : "Home"
    })

    const descriptions = searchRoot.querySelectorAll(".results-container .card-description")
    descriptions.forEach((node) => {
      const el = node
      if (!el.dataset.fullText) {
        el.dataset.fullText = (el.textContent ?? "").replace(/\s+/g, " ").trim()
      }
      const fullText = el.dataset.fullText ?? ""
      if (!fullText) return

      const words = fullText.split(" ")
      let center = -1
      if (mainToken) {
        center = words.findIndex((w) => w.toLowerCase().includes(mainToken))
      }
      if (center === -1) center = Math.min(6, Math.floor(words.length / 2))

      const start = Math.max(0, center - 5)
      const end = Math.min(words.length, center + 7)
      const snippetWords = words.slice(start, end)
      const snippetHtml = snippetWords
        .map((word) => {
          const safeWord = escapeHtml(word)
          if (!mainToken) return safeWord
          return word.toLowerCase().includes(mainToken) ? "<strong>" + safeWord + "</strong>" : safeWord
        })
        .join(" ")

      const nextHtml = (start > 0 ? "... " : "") + snippetHtml + (end < words.length ? " ..." : "")
      if (el.innerHTML !== nextHtml) {
        el.innerHTML = nextHtml
      }
    })
  }

  let compactScheduled = false
  const scheduleCompact = () => {
    if (compactScheduled) return
    compactScheduled = true
    window.requestAnimationFrame(() => {
      compactScheduled = false
      processResults()
    })
  }

  document.addEventListener(
    "keydown",
    (e) => {
      const isTypingTarget =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target instanceof HTMLElement && e.target.isContentEditable)

      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey && !isTypingTarget) {
        e.preventDefault()
        searchBar.focus()
        return
      }

      if (e.key !== "Escape") return
      if (!searchRoot.contains(document.activeElement)) return
      e.preventDefault()
      e.stopImmediatePropagation()
      searchBar.blur()
      hideResults()
    },
    true,
  )

  searchRoot.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (searchRoot.contains(document.activeElement)) return
      hideResults()
      searchContainer.classList.add("active")
    }, 0)
  })

  searchBar.addEventListener("input", scheduleCompact)

  const observer = new MutationObserver(() => scheduleCompact())
  observer.observe(searchLayout, { childList: true, subtree: true })
  if (typeof window.addCleanup === "function") {
    window.addCleanup(() => {
      observer.disconnect()
      searchBar.removeEventListener("input", scheduleCompact)
    })
  }
})()
`

export default ((userOpts?: Partial<SearchOptions>) => {
  const Search: QuartzComponent = ({ fileData, displayClass, cfg }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    // const searchPlaceholder = i18n(cfg.locale).components.search.searchBarPlaceholder
    const searchPlaceholder = "Search..."
    const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
    const baseDir = pathToRoot(fileData.slug!)

    return (
      <div class={classNames(displayClass, "page-title")}>
        <a class="site-link" href={baseDir}>{title}</a>

        <div class="search">
          <button class="search-button" aria-label={searchPlaceholder} hidden></button>
          <div id="search-container" class="search-container active">
            <div id="search-space" class="search-space">
              <input
                autocomplete="off"
                id="search-bar"
                class="search-bar"
                name="search"
                type="text"
                aria-label={searchPlaceholder}
                placeholder={searchPlaceholder}
              />
              <div id="search-layout" class="search-layout" data-preview={opts.enablePreview}></div>
            </div>
          </div>
        </div>




        <div class="theme-toggle-container">
          <label class="theme-toggle" title="Toggle theme">
            <input type="checkbox" id="darkmode-toggle" />
            <span class="theme-toggle-sr">Toggle theme</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="1.5em"
              height="1.5em"
              fill="var(--border)"
              class="theme-toggle__expand"
              viewBox="0 0 32 32"
            >
              <clipPath id="theme-toggle__expand__cutout">
                <path d="M0-11h25a1 1 0 0017 13v30H0Z" />
              </clipPath>
              <g clip-path="url(#theme-toggle__expand__cutout)">
                <circle cx="16" cy="16" r="8.4" />
                <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" />
              </g>
            </svg>
          </label>
        </div>
      </div>
    )
  }

  Search.beforeDOMLoaded = darkmodeScript
  Search.afterDOMLoaded = script + "\n" + searchUXScript
  Search.css = style + "\n" + darkmodeStyles

  return Search
}) satisfies QuartzComponentConstructor