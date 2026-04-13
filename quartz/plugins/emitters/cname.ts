import { FilePath, FullSlug } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import chalk from "chalk"
import DepGraph from "../../depgraph"

export function extractDomainFromBaseUrl(baseUrl: string) {
  const url = new URL(`https://${baseUrl}`)
  return url.hostname
}

export const CNAME: QuartzEmitterPlugin = () => ({
  name: "CNAME",
  getQuartzComponents() {
    return []
  },
  async getDependencyGraph(_ctx, _content, _resources) {
    return new DepGraph<FilePath>()
  },
  async emit(ctx, _content, _resources): Promise<FilePath[]> {
    if (!ctx.cfg.configuration.baseUrl) {
      console.warn(chalk.yellow("CNAME emitter requires `baseUrl` to be set in your configuration"))
      return []
    }
    const content = extractDomainFromBaseUrl(ctx.cfg.configuration.baseUrl)
    if (!content) {
      return []
    }

    const path = await write({
      ctx,
      content,
      slug: "CNAME" as FullSlug,
      ext: "",
    })
    return [path]
  },
})
