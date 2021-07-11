import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLine(props) {
  return (
    <Svg
      width={329}
      height={6}
      viewBox="0 0 329 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3 3h323.5"
        stroke="#000"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgLine;
