import fs from "fs"
import path from "path"
import { Root } from "remark-parse/lib"
import { ReplaceFunction, findAndReplace as mdastFindReplace } from "mdast-util-find-and-replace"
import { PluggableList } from "unified"
import { QuartzTransformerPlugin } from "../types"

type CSLJsonAuthor = {
  family?: string
  given?: string
}

type CSLJsonItem = {
  id: string
  type?: string
  title?: string
  publisher?: string
  author?: CSLJsonAuthor[]
  issued?: {
    "date-parts"?: number[][]
  }
}

export interface Options {
  bibliographyFile: string
  referenceHeading: string
  referenceHeadingId: string
}

const defaultOptions: Options = {
  bibliographyFile: ".obsidian/plugins/bibliography/data.json",
  referenceHeading: "References",
  referenceHeadingId: "references",
}

let cachedBib: Map<string, CSLJsonItem> | null = null
let cachedBibPath: string | null = null
let cachedBibLoadError: string | null = null

function slugifyIdForAnchor(id: string) {
  return id
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}

function getYear(item: CSLJsonItem): string | undefined {
  const year = item.issued?.["date-parts"]?.[0]?.[0]
  return typeof year === "number" ? String(year) : undefined
}

function getFamilyName(item: CSLJsonItem): string | undefined {
  const family = item.author?.[0]?.family
  return family?.trim() ? family.trim() : undefined
}

function formatInlineCitation(item: CSLJsonItem, fallbackId: string) {
  const family = getFamilyName(item)
  const year = getYear(item)
  if (family && year) return `(${family}, ${year})`
  if (family) return `(${family})`
  if (year) return `(${fallbackId}, ${year})`
  return `(${fallbackId})`
}

function formatBibliographyEntry(item: CSLJsonItem) {
  const family = getFamilyName(item)
  const given = item.author?.[0]?.given?.trim()
  const year = getYear(item)
  const title = item.title?.trim()
  const publisher = item.publisher?.trim()

  const authorPart = family
    ? given
      ? `${family}, ${given}`
      : family
    : item.id

  const yearPart = year ? ` (${year}).` : "."
  const titlePart = title ? ` ${title}.` : ""
  const publisherPart = publisher ? ` ${publisher}.` : ""
  return `${authorPart}${yearPart}${titlePart}${publisherPart}`.trim()
}

function loadBibliography(absPath: string): Map<string, CSLJsonItem> {
  if (cachedBib && cachedBibPath === absPath) return cachedBib

  cachedBibPath = absPath
  cachedBibLoadError = null

  try {
    const raw = fs.readFileSync(absPath, "utf-8")
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) {
      throw new Error("Expected a JSON array")
    }

    const map = new Map<string, CSLJsonItem>()
    for (const entry of parsed) {
      const item = entry as CSLJsonItem
      if (typeof item?.id !== "string" || item.id.trim() === "") continue
      map.set(item.id.trim(), item)
    }

    cachedBib = map
    return map
  } catch (err) {
    cachedBib = new Map()
    cachedBibLoadError = (err as Error).message
    return cachedBib
  }
}

function hasReferenceSection(tree: Root, referenceHeadingId: string, referenceHeading: string) {
  const headingLower = referenceHeading.trim().toLowerCase()
  for (const node of tree.children ?? []) {
    if (node && typeof node === "object" && (node as any).type === "heading") {
      const heading = node as any
      const id = heading.data?.hProperties?.id
      if (typeof id === "string" && id === referenceHeadingId) return true

      const text = (heading.children ?? [])
        .filter((c: any) => c?.type === "text" && typeof c.value === "string")
        .map((c: any) => c.value)
        .join("")
        .trim()
        .toLowerCase()
      if (text === headingLower) return true
    }
  }
  return false
}

export const ObsidianBibliography: QuartzTransformerPlugin<Partial<Options> | undefined> = (
  userOpts,
) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "ObsidianBibliography",
    markdownPlugins(ctx) {
      const plugins: PluggableList = []

      plugins.push(() => {
        return (tree: Root, file) => {
          const baseDir = ctx.argv.directory ? path.resolve(process.cwd(), ctx.argv.directory) : process.cwd()
          const absBibPath = path.resolve(baseDir, opts.bibliographyFile)
          const bib = loadBibliography(absBibPath)

          const citedIds = new Set<string>()

          const citeRegex = /\[@([^\]]+?)\]/g
          const replacement: ReplaceFunction = (value: string, ...capture: string[]) => {
            const raw = capture?.[0] ?? ""
            const rawId = raw.trim()
            if (!rawId) return value

            citedIds.add(rawId)
            const item = bib.get(rawId)
            const displayText = item ? formatInlineCitation(item, rawId) : `(${rawId})`
            const anchorId = `ref-${slugifyIdForAnchor(rawId)}`

            return {
              type: "link",
              url: `#${anchorId}`,
              data: {
                hProperties: {
                  className: ["inline-citation"],
                  "data-no-popover": true,
                },
              },
              children: [{ type: "text", value: displayText }],
            }
          }

          mdastFindReplace(tree, [[citeRegex, replacement]])

          if (citedIds.size === 0) return

          if (hasReferenceSection(tree, opts.referenceHeadingId, opts.referenceHeading)) return

          const entries = [...citedIds].map((id) => ({ id, item: bib.get(id) }))

          tree.children.push({
            type: "heading",
            depth: 2,
            data: { hProperties: { id: opts.referenceHeadingId } },
            children: [{ type: "text", value: opts.referenceHeading }],
          } as any)

          tree.children.push({
            type: "list",
            ordered: false,
            spread: false,
            children: entries.map(({ id, item }) => {
              const anchorId = `ref-${slugifyIdForAnchor(id)}`
              return {
                type: "listItem",
                data: { hProperties: { id: anchorId, } },
                spread: false,
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value: item ? formatBibliographyEntry(item) : id,
                      },
                    ],
                  },
                ],
              }
            }),
          } as any)

          if (cachedBibLoadError && ctx.argv.verbose) {
            // eslint-disable-next-line no-console
            console.warn(
              `[ObsidianBibliography] Failed to load ${opts.bibliographyFile}: ${cachedBibLoadError}`,
            )
          }
        }
      })

      return plugins
    },
  }
}
