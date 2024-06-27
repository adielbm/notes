import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import path from "path"

import style from "../styles/listPage.scss"
import { PageList } from "../PageList"
import { stripSlashes, simplifySlug, resolveRelative } from "../../util/path"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { i18n } from "../../i18n"

interface FolderContentOptions {
  /**
   * Whether to display number of folders
   */
  showFolderCount: boolean
}

const defaultOptions: FolderContentOptions = {
  showFolderCount: true,
}

export default ((opts?: Partial<FolderContentOptions>) => {
  const options: FolderContentOptions = { ...defaultOptions, ...opts }

  const FolderContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props
    const folderSlug = stripSlashes(simplifySlug(fileData.slug!))
    const allPagesInFolder = allFiles.filter((file) => {
      const fileSlug = stripSlashes(simplifySlug(file.slug!))
      const prefixed = fileSlug.startsWith(folderSlug) && fileSlug !== folderSlug
      const folderParts = folderSlug.split(path.posix.sep)
      const fileParts = fileSlug.split(path.posix.sep)
      const isDirectChild = fileParts.length === folderParts.length + 1
      return prefixed && isDirectChild
    })

    // all (non-empty) subfolders (not files) in the current folder
    const allSubFoldersInFolder = allFiles.filter((file) => {
      const fileSlug = stripSlashes(simplifySlug(file.slug!))
      const prefixed = fileSlug.startsWith(folderSlug) && fileSlug !== folderSlug
      const folderParts = folderSlug.split(path.posix.sep)
      const fileParts = fileSlug.split(path.posix.sep)
      const isDirectChild = fileParts.length === folderParts.length + 1
      return prefixed && !isDirectChild
    }).map(path => {
      const segments = path.slug?.split('/');
      return segments?.slice(0, -1).join('/');
    }).filter( // remove duplicates
      (value, index, self) => self.indexOf(value) === index
    ).filter( // remove empty strings or such equal to the folderSlug
      (value) => value !== "" && value !== folderSlug
    ).map( // add `/` at the end of the folder name
      (value) => value + '/'
    )

    // print the slug of the current folder to the console
    // if (fileData.slug === "Calculus/index") {
    //   console.log("\n folderSlug: ", folderSlug)
    //   allSubFoldersInFolder.map((folder) => {
    //     console.log('\n', folder)
    //   })
    // }

    const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
    const classes = [...cssClasses].join(" ")
    const listProps = {
      ...props,
      allFiles: allPagesInFolder,
    }

    const content =
      (tree as Root).children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, tree)

    return (
      <div class={classes}>
        <article>{content}</article>
        <div class="page-listing">
          {options.showFolderCount && (
            <p>
              {i18n(cfg.locale).pages.folderContent.itemsUnderFolder({
                count: allPagesInFolder.length,
              })}
            </p>
          )}
          <div class="pagelist">
            {allSubFoldersInFolder.map((folder) => {
              return folder && (
                <a href={`../${folder}`} class="internal pagelist--folder">
                  {folder.slice(folderSlug.length).replace(/-/g, " ").replace(/\//g, "")}
                </a>
              )
            }
            )}
            <PageList {...listProps} />
          </div>
        </div>
      </div>
    )
  }

  FolderContent.css = style + PageList.css
  return FolderContent
}) satisfies QuartzComponentConstructor
