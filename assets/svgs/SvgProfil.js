  
import * as React from "react";
import {processColor} from 'react-native';
import Svg, { Path } from "react-native-svg";

function SvgProfil(props) {
  return (
    <Svg width="21" height="24" fill="red"
     viewBox="0 0 21 24" {...props}>
      <Path
         fill="currentColor" 
         
        d="M10.5 12.513c-3.28 0-5.946-2.974-5.946-6.63C4.554 2.418 6.999 0 10.5 0c3.502 0 5.946 2.419 5.946 5.882 0 3.657-2.668 6.63-5.946 6.63zm0 2.487c5.503 0 8.926 2.007 10.27 6.015.048.143.23.457.23.985a2.015 2.015 0 01-2.017 2H2.012A2.01 2.01 0 010 22c0-.554.125-.844.172-.985C1.522 17.005 4.995 15 10.5 15z"
      />
    </Svg>
  );
}

export default SvgProfil;