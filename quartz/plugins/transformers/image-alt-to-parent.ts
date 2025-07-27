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
                                const imgAlt = node.properties.alt as string | undefined

                                // Add width style from alt
                                if (imgAlt) {
                                    node.properties.style = `${node.properties.style || ""} width: ${imgAlt}px;`.trim()
                                }

                                // Parse the image src
                                let displayDomain = ""
                                let href = imgSrc
                                try {
                                    const url = new URL(imgSrc)
                                    displayDomain = url.hostname

                                    if (url.hostname === "upload.wikimedia.org") {
                                        const filename = path.basename(url.pathname)
                                        href = `https://commons.wikimedia.org/wiki/File:${filename}`
                                        displayDomain = "commons.wikimedia.org"
                                    }
                                } catch {
                                    return // Skip malformed URL
                                }

                                // Build the new description div
                                const descNode: Element = {
                                    type: "element",
                                    tagName: "div",
                                    properties: { className: ["img-desc"] },
                                    children: [
                                        {
                                            type: "text",
                                            value: `${imgTitle || ""} (source: `,
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

                                // Insert the description after the image
                                if (typeof index === "number") {
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
