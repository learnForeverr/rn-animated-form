import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function InputLine(props) {
  return (
    <Svg
      width={168}
      height={2}
      viewBox="0 0 168 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M1 1h166" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

export default InputLine;
