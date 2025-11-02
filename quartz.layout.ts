import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Empty(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.Filters(), Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.Search({
      enablePreview: false
    }), 
    Component.DesktopOnly(Component.Explorer())
  ],
  right: [
    Component.TableOfContents(),
    Component.DesktopOnly(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Filters(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.Content(),
  ],
  left: [Component.Search(), Component.DesktopOnly(Component.Explorer())],
  right: [],
}
