import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  const isNonRootFolderIndex = slug.endsWith("/index") && slug !== "index"

  let title = fileData.frontmatter?.title
  if (isNonRootFolderIndex) {
    const parts = slug.split("/")
    title = (parts.at(-2) ?? "").replace(/-/g, " ")
  }

  if (title && title !== "Welcome") {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
