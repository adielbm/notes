// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import darkmodeScript from "./scripts/darkmode.inline"
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import styles from "./styles/darkmode.scss"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div style="display: flex ; align-items: center; justify-content: space-between; margin-right: 2vw;">
      <a class={classNames(displayClass, "page-title")} href={baseDir}>{title}</a>
      <div class="dm-gh">
        <div class={classNames(displayClass, "darkmode")}>
          <input class="toggle" id="darkmode-toggle" type="checkbox" tabIndex={-1} />
          <label id="toggle-label-light" for="darkmode-toggle" tabIndex={-1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
          </label>
        </div>
      </div>
      <script src="/static/script.js"></script>
    </div>
  )
}

PageTitle.beforeDOMLoaded = darkmodeScript
PageTitle.css = styles

export default (() => PageTitle) satisfies QuartzComponentConstructor
