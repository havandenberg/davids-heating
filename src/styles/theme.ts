import {
  DESKTOP,
  MOBILE,
  SMALL,
  TABLET,
  TABLET_DOWN,
  TABLET_UP,
} from '../utils/screensize';

// Boilerplate theme constants

export const colors = {
  background: '#e9f4ff',
  black: '#242424',
  blue: '#003A57',
  gray: '#4A4A4A',
  green: '#22C770',
  lightBlue: '#009FCD',
  lightGray: '#DEDEDE',
  lightGreen: '#47E5A9',
  medGray: '#818181',
  red: '#F14042',
  white: '#FFFFFF',
};

export const gradients = {
  black: `linear-gradient(to bottom, ${colors.gray}, ${colors.black})`,
  blue: `linear-gradient(to bottom, ${colors.lightBlue}, ${colors.blue})`,
  green: `linear-gradient(to bottom, ${colors.lightGreen}, ${colors.green})`,
};

export const borders = {
  black: `solid 1px ${colors.black}`,
  blackThick: `solid 2px ${colors.black}`,
  blue: `solid 1px ${colors.blue}`,
  blueThick: `solid 2px ${colors.blue}`,
  green: `solid 3px ${colors.green}`,
  radius: 6,
  redThick: `solid 2px ${colors.red}`,
  transparent: `solid 1px transparent`,
  white: `solid 1px ${colors.white}`,
};

export const breakpoints = {
  [DESKTOP]: '@media (min-width: 1000px)',
  [MOBILE]: '@media (max-width: 699px)',
  [SMALL]: '@media (max-width: 320px)',
  [TABLET]: '@media (min-width: 700px) and (max-width: 999px)',
  [TABLET_DOWN]: '@media (max-width: 999px)',
  [TABLET_UP]: '@media (min-width: 700px)',
};

export const fonts = {
  notoBold: 'Noto-Bold, sans-serif',
  notoBoldItalic: 'Noto-BoldItalic, sans-serif',
  notoItalic: 'Noto-Italic, sans-serif',
  notoRegular: 'Noto-Regular, sans-serif',
};

export const fontSizes = {
  h1: ['28px', '28px', '28px'],
  h2: ['20px', '22px', '24px'],
  h3: ['20px', '24px', '24px'],
  helpText: ['12px', '12px', '12px'],
  largeText: ['20px', '20px', '20px'],
  subtitle: ['28px', '28px', '28px'],
  text: ['16px', '16px', '16px'],
  title: ['42px', '42px', '52px'],
};

export const shadows = {
  box: '0 10px 6px -6px #777',
  text: '1px 2px 3px rgba(0,0,0,0.3)',
};

export const spacing = {
  huge: '128px',
  l: '32px',
  m: '16px',
  ml: '24px',
  s: '8px',
  sm: '12px',
  t: '4px',
  xl: '64px',
};

export const transitions = {
  default: 'all 0.3s ease',
};

export const z = {
  high: 5,
  low: 1,
  max: 100,
  mid: 2,
  neg: -1,
  none: 0,
};

// Single variables

export const heights = {
  header: '650px',
  input: '40px',
  navHeight: '32px',
};

export const widths = {
  input: '350px',
  maxContent: '1024px',
  maxPage: '1440px',
};

export const scrollOffset = -30;
export const scrollOptions = {
  duration: 500,
  offset: scrollOffset,
  smooth: true,
};

export default {
  borders,
  breakpoints,
  colors,
  fontSizes,
  fonts,
  gradients,
  heights,
  scrollOptions,
  shadows,
  spacing,
  transitions,
  widths,
  z,
};
