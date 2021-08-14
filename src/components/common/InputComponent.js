import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../../constant/colors';
import InputLine from '../svgIcons/SvgLine';

const InputComponent = ({value, setValue, label, ...props}) => {
  const lineAnim = useSharedValue(0);
  const textAnim = useSharedValue(0);

  const animate = () => {
    lineAnim.value = 1;
    textAnim.value = 1;
  };

  const endAnimate = () => {
    lineAnim.value = 0;
    if (value === '') {
      textAnim.value = 0;
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: withTiming(interpolate(textAnim.value, [0, 1], [22, 0]), {
        duration: 400,
      }),
      left: withTiming(interpolate(textAnim.value, [0, 1], [0, -5]), {
        duration: 400,
      }),
      transform: [
        {
          scale: withTiming(interpolate(textAnim.value, [0, 1], [1, 0.8]), {
            duration: 400,
          }),
        },
      ],
      zIndex: -2,
    };
  });
  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        lineAnim.value,
        [0, 1],
        [colors['dark'].white, colors['dark'].activeBorderColor],
      ),
    };
  });

  return (
    <View style={{width: 170, height: 50}}>
      <View style={{position: 'absolute', top: 10, zIndex: 2}}>
        <TextInput
          value={value}
          onFocus={animate}
          onEndEditing={endAnimate}
          onChangeText={text => setValue(text)}
          {...props}
          style={{
            width: 170,
            height: 50,
          }}
        />
      </View>
      <Animated.View style={animatedStyle}>
        <Animated.Text style={textAnimatedStyle}>{label}</Animated.Text>
      </Animated.View>
      <View style={{position: 'absolute', bottom: 0}}>
        <InputLine lineAnim={lineAnim} />
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
