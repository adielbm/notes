import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { htmlToJsx } from "../../util/jsx"
import { stripSlashes, simplifySlug } from "../../util/path"
import path from "path"

const IndexContent: QuartzComponent = ({ fileData, tree, allFiles }: QuartzComponentProps) => {
    const content = htmlToJsx(fileData.filePath!, tree)
    const classes: string[] = fileData.frontmatter?.cssclasses ?? []
    const classString = ["popover-hint", ...classes].join(" ")
    
    // Get all top-level folders
    const topLevelFolders = allFiles
        .map((file) => {
            const fileSlug = stripSlashes(simplifySlug(file.slug!))
            const parts = fileSlug.split(path.posix.sep)
            // Return the first part if it's a nested file (has more than one part)
            return parts.length > 1 ? parts[0] : null
        })
        .filter((folder): folder is string => folder !== null && folder !== "")
        .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
        .sort() // Sort alphabetically

    return (
        <>
            <article class={classString}>
                {content}
            </article>
            <div class="page-listing">
                <div class="pagelist">
                    {topLevelFolders.map((folder) => (
                        <a href={`./${folder}/`} class="internal pagelist--folder">
                            {folder.replace(/-/g, " ")}
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default (() => IndexContent) satisfies QuartzComponentConstructor
