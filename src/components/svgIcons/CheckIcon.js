import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CheckIcon(props) {
  return (
    <Svg
      width={127}
      height={89}
      viewBox="0 0 127 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 46.54L43.437 76.81a5 5 0 006.891-.172L116.465 10.5"
        stroke="#000"
        strokeWidth={20}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default CheckIcon;
