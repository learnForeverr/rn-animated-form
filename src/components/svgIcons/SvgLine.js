import * as React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constant/colors';

const AnimatedPath = Animated.createAnimatedComponent(Path);

function InputLine({lineAnim, ...props}) {
  const useAnimatedProp = useAnimatedProps(() => {
    return {
      d: 'M1 1h166',
      stroke: colors['dark'].activeBorderColor,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeDasharray: 168,
      strokeDashoffset: withTiming(
        interpolate(lineAnim.value, [0, 1], [168, 0], Extrapolate.CLAMP),
        {duration: 400},
      ),
    };
  });

  return (
    <Svg
      width={168}
      height={2}
      viewBox="0 0 168 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M1 1h166" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      <AnimatedPath animatedProps={useAnimatedProp} />
    </Svg>
  );
}

export default InputLine;
