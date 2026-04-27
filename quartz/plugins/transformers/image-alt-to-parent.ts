import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Root as HtmlRoot, Element, Text } from "hast"
import path from "path"

export interface Options {}

export const ImageAltToParent: QuartzTransformerPlugin<Partial<Options> | undefined> = (
    userOpts,
) => {
    return {
        name: "ImageAltToParent",
        htmlPlugins() {
            return [
                () => {
                    return (tree: HtmlRoot, _file) => {
                        visit(tree, "element", (node: Element, index, parent) => {
                            if (
                                node.tagName === "img" &&
                                node.properties?.src &&
                                parent &&
                                parent.type === "element"
                            ) {
                                const imgSrc = node.properties.src as string
                                const imgTitle = node.properties.title as string | undefined
                                const imgWidth = node.properties.width as string | number | undefined
                                const titleText = imgTitle?.trim() || ""

                                // Add width style from the parsed width property
                                if (imgWidth !== undefined && imgWidth !== "auto") {
                                    node.properties.style = `${node.properties.style || ""} width: ${imgWidth}px;`.trim()
                                }

                                // Parse the image src
                                let displayDomain = ""
                                let href = imgSrc
                                let isExternal = false
                                try {
                                    const url = new URL(imgSrc)
                                    displayDomain = url.hostname
                                    isExternal = true

                                    if (url.hostname === "upload.wikimedia.org") {
                                        const pathnameParts = url.pathname.split("/").filter(Boolean)
                                        const thumbIndex = pathnameParts.indexOf("thumb")

                                        // Thumbnail URLs encode the original filename before the size-prefixed segment.
                                        // Example: .../thumb/.../File.jpg/1280px-File.jpg -> File.jpg
                                        const rawFilename =
                                            thumbIndex !== -1 && pathnameParts.length > thumbIndex + 3
                                                ? pathnameParts[thumbIndex + 3]
                                                : path.basename(url.pathname)

                                        let filename = rawFilename
                                        try {
                                            filename = decodeURIComponent(rawFilename)
                                        } catch {
                                            // Keep raw filename when decoding fails.
                                        }

                                        href = `https://commons.wikimedia.org/wiki/File:${filename}`
                                        displayDomain = "commons.wikimedia.org"
                                    }
                                } catch {
                                    // Local image path, not an absolute URL
                                }

                                // Build the new description div
                                let descNode: Element | undefined
                                if (isExternal) {
                                    descNode = {
                                        type: "element",
                                        tagName: "div",
                                        properties: { className: ["img-desc"] },
                                        children: [
                                            {
                                                type: "text",
                                                value: `${titleText} (source: `,
                                            },
                                            {
                                                type: "element",
                                                tagName: "a",
                                                properties: {
                                                    href,
                                                },
                                                children: [
                                                    {
                                                        type: "text",
                                                        value: displayDomain,
                                                    },
                                                ],
                                            },
                                            {
                                                type: "text",
                                                value: ")",
                                            },
                                        ],
                                    }
                                } else if (titleText) {
                                    descNode = {
                                        type: "element",
                                        tagName: "div",
                                        properties: { className: ["img-desc"] },
                                        children: [{ type: "text", value: titleText }],
                                    }
                                }

                                // Insert the description after the image
                                if (descNode && typeof index === "number") {
                                    parent.children.splice(index + 1, 0, descNode)
                                }
                            }
                        })
                    }
                },
            ]
        },
    }
}
