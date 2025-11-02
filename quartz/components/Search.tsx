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

export default ((userOpts?: Partial<SearchOptions>) => {
  const Search: QuartzComponent = ({ fileData, displayClass, cfg }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    const searchPlaceholder = i18n(cfg.locale).components.search.searchBarPlaceholder
    const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
    const baseDir = pathToRoot(fileData.slug!)

    return (
      <div class={classNames(displayClass, "page-title")}>
        <a class="site-link" href={baseDir}>{title}</a>

        <div class="search">
          <input
            autocomplete="off"
            id="search-bar"
            name="search"
            type="search"
            aria-label={searchPlaceholder}
            placeholder={searchPlaceholder}
          />
          <div id="search-container">
            <div id="search-space">
              <div id="search-layout" data-preview={opts.enablePreview}></div>
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
  Search.afterDOMLoaded = script
  Search.css = style + "\n" + darkmodeStyles

  return Search
}) satisfies QuartzComponentConstructor