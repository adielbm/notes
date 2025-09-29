import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Filters: QuartzComponent = () => {
  return (
    <div>
      <svg style="position:fixed; left:0; top:0; width:0; height:0" aria-hidden="true">
        <defs>
          <filter id="invert-luminance" color-interpolation-filters="linearRGB">
            <feComponentTransfer>
              <feFuncR type="gamma" amplitude="1" exponent="0.5" offset="0.0" />
              <feFuncG type="gamma" amplitude="1" exponent="0.5" offset="0.0" />
              <feFuncB type="gamma" amplitude="1" exponent="0.5" offset="0.0" />
              <feFuncA type="gamma" amplitude="1" exponent="1" offset="0.0" />
            </feComponentTransfer>
            <feColorMatrix type="matrix" values="
                1.000 -1.000 -1.000 0.000 1.000
               -1.000 1.000 -1.000 0.000 1.000
               -1.000 -1.000 1.000 0.000 1.000
                0.000 0.000 0.000 1.000 0.000
            "/>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default (() => Filters) satisfies QuartzComponentConstructor
