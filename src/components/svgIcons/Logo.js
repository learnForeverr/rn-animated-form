import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Logo(props) {
  return (
    <Svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15 0l3.368 10.365h10.898l-8.817 6.405 3.368 10.365L15 20.73l-8.817 6.405L9.551 16.77.734 10.365h10.898L15 0z"
        fill="#C4C4C4"
        fillOpacity={0.6}
      />
    </Svg>
  );
}

export default Logo;
