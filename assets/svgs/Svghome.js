import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgHome(props) {
  return (
    <Svg width={22} height={24} 
    color="#B5BDD9" viewBox="0 0 22 24" {...props}>
      <Path
        fill="currentColor"
        d="M8.89.858a3.026 3.026 0 014.22 0l7.681 7.446A4 4 0 0122 11.167v12.05a.784.784 0 01-.786.783H14.83c-.435 0-.829-.35-.829-.783V16H7.999v7.217a.784.784 0 01-.786.783H.786A.784.784 0 010 23.217v-12.05a4 4 0 011.209-2.863L8.889.858z"
      />
    </Svg>
  )
}

export default SvgHome