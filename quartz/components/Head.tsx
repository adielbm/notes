import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { googleFontHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
    const description =
      fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)

    const iconPath = joinSegments(baseDir, "static/icon.svg")
    const iconDarkPath = joinSegments(baseDir, "static/icon-dark.svg")
    const iconPng = joinSegments(baseDir, "static/icon.png")

    // const ogImagePath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* {cfg.baseUrl && <meta property="og:image" content={ogImagePath} />} */}
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="675" />
        <link rel="icon" media="(prefers-color-scheme: light)" href={iconPath} />
        <link rel="icon" media="(prefers-color-scheme: dark)" href={iconDarkPath} />
        <link rel="apple-touch-icon" href={iconPng} />
        {/* @ts-ignore: ignore error for next line */}
        <link rel="mask-icon" href={iconPath} color="#000000" />

        <link defer rel="stylesheet" href="/static/tikz.css" />
        <script defer src="/static/tikzjax.js" type="text/javascript" />
        <script defer src="/static/script.js"></script>



        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        {css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
        ))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}

        <meta name="google-site-verification" content="6MLnVE7uk44gkhY9Qch4eVXu3voKlWXAVpeVoMots2k" />

      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
