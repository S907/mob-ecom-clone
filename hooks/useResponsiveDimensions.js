import { useWindowDimensions } from 'react-native';

const useResponsiveDimensions = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const RPW = (percentage) => {
    return (percentage /  100) * windowWidth;
  };

  const RPH = (percentage) => {
    return (percentage /  100) * windowHeight;
  };

  return { RPW, RPH };
};

export default useResponsiveDimensions;

// call in component const { RPW, RPH } = useResponsiveDimensions();
// width: RPW(80), //  80% of screen width
// height: RPH(40), //  40% of screen height