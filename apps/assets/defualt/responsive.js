import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const WINDOW__WIDTH = 390;
const WINDOW__HEIGHT = 844;

export const widthPercentage = width => {
  const percentage = (width / WINDOW__WIDTH) * 100;

  return responsiveWidth(percentage);
};
export const heightPercentage = height => {
  const percentage = (height / WINDOW__HEIGHT) * 100;

  return responsiveHeight(percentage);
};
export const fontPercentage = size => {
  const percentage = size * 0.125;

  return responsiveFontSize(percentage);
};
