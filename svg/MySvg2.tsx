import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const MySvgComponent2 = (props: SvgProps) => (
  <Svg
    viewBox="0 0 60 60"
    width={34}
    height={34}
    {...props}
  >
    <Path fill={'black'}
      d="M0 0v60h60V0H0zm51 32H32v19h-4V32H9v-4h19V9h4v19h19v4z" />
  </Svg>
)
