import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  /* links: Record<string, string> */
}

export default ((opts?: Options) => {
  const CustomFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <div>
        <hr />
        <a href="https://github.com/adielbm/notes/">GitHub</a>{" • "}
        {"Created with "}
        <a href="https://github.com/jackyzha0/quartz/">Quartz</a>
      </div>
    )
  }

  CustomFooter.css = style
  return CustomFooter
}) satisfies QuartzComponentConstructor
