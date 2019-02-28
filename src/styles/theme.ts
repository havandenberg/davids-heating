import {
  DESKTOP,
  MOBILE,
  SMALL,
  TABLET,
  TABLET_DOWN,
  TABLET_UP,
} from '../utils/screensize';
import { isMobile } from '../utils/screensize';

// Boilerplate theme constants

const colors = {
  background: '#F2F3F4',
  black: '#242424',
  darkBlue: '#406BAC',
  gold: '#D4AF37',
  gray: '#4A4A4A',
  green: '#4BB543',
  lightGray: '#DEDEDE',
  lightRed: '#F46767',
  medGray: '#818181',
  red: '#F14042',
  white: '#FFFFFF',
};

const gradients = {
  black: `linear-gradient(to bottom, ${colors.gray}, ${colors.black})`,
  red: `linear-gradient(to bottom, ${colors.lightRed}, ${colors.red})`,
};

const borders = {
  black: `solid 1px ${colors.black}`,
  blackThick: `solid 2px ${colors.black}`,
  radius: 6,
  red: `solid 1px ${colors.red}`,
  redThick: `solid 2px ${colors.red}`,
  transparent: `solid 1px transparent`,
  white: `solid 1px ${colors.white}`,
};

const breakpoints = {
  [DESKTOP]: '@media (min-width: 1000px)',
  [MOBILE]: '@media (max-width: 699px)',
  [SMALL]: '@media (max-width: 320px)',
  [TABLET]: '@media (min-width: 700px) and (max-width: 999px)',
  [TABLET_DOWN]: '@media (max-width: 999px)',
  [TABLET_UP]: '@media (min-width: 700px)',
};

const fonts = {
  fontFamily: 'Font-Family, sans-serif',
};

const fontSizes = {
  h1: ['28px', '28px', '28px'],
  h2: ['20px', '24px', '24px'],
  h3: ['20px', '24px', '24px'],
  helpText: ['10px', '12px', '12px'],
  largeText: ['16px', '20px', '20px'],
  subtitle: ['20px', '28px', '28px'],
  text: ['16px', '16px', '16px'],
  title: ['32px', '42px', '52px'],
};

const shadows = {
  box: '0 10px 6px -6px #777',
  text: '1px 2px 3px rgba(0,0,0,0.3)',
};

const spacing = {
  huge: '128px',
  l: '32px',
  m: '16px',
  ml: '24px',
  s: '8px',
  sm: '12px',
  t: '4px',
  xl: '64px',
};

const transitions = {
  default: 'all 0.3s ease',
};

const z = {
  high: 5,
  low: 1,
  max: 100,
  mid: 2,
  neg: -1,
  none: 0,
};

// Single variables

const heights = {
  header: '650px',
  input: '45px',
  navHeight: '32px',
};

const widths = {
  input: '350px',
  maxContent: '1024px',
  maxPage: '1400px',
};

const scrollOffset = isMobile() ? -100 : -60;
const scrollOptions = {
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
