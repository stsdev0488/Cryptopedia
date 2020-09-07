import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const inputRange = [0, 0.5, 1];
const outputRange = [1, 0.3, 1];
const config = {
  toValue: 1,
  useNativeDriver: true,
};

export const useSpinnerState = () => {
  const animation = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  const sizes = [
    animation[0].interpolate({
      inputRange,
      outputRange,
    }),
    animation[1].interpolate({
      inputRange,
      outputRange,
    }),
    animation[2].interpolate({
      inputRange,
      outputRange,
    }),
  ];

  const loops = [
    Animated.loop(Animated.timing(animation[0], config)),
    Animated.loop(
      Animated.timing(animation[1], {
        ...config,
        delay: 100,
      })
    ),
    Animated.loop(
      Animated.timing(animation[2], {
        ...config,
        delay: 300,
      })
    ),
  ];

  useEffect(() => {
    loops.forEach((loop) => loop.start());

    return () => loops.forEach((loop) => loop.stop());
  }, []);

  return { sizes };
};
