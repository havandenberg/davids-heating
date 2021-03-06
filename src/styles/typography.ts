import styled from 'react-emotion';
import { Link as RouterLink } from 'react-router-dom';
import {
  alignSelf,
  color as colorFunc,
  display,
  flex,
  fontSize as fontSizeFunc,
  height,
  justifySelf,
  maxWidth,
  space,
  textAlign,
  width,
} from 'styled-system';
import { StyleValue } from '../types/styles';
import th, { transitions } from './theme';
import { scrollStyles } from './utils';

// Basic typography components

export const textOptions = [
  alignSelf,
  ({ bold }: { bold?: boolean }) => ({
    fontWeight: bold ? 'bold' : undefined,
  }),
  ({ center }: { center?: boolean }) => ({
    textAlign: center ? 'center' : undefined,
  }),
  colorFunc,
  display,
  flex,
  fontSizeFunc,
  height,
  justifySelf,
  ({ italic }: { italic?: boolean }) => ({
    fontStyle: italic ? 'italic' : undefined,
  }),
  ({ nowrap }: { nowrap?: boolean }) => ({
    whiteSpace: nowrap ? 'nowrap' : undefined,
  }),
  { ...scrollStyles, overflow: 'visible' },
  ({ overflowX }: { overflowX?: boolean }) => ({
    maxWidth: overflowX ? th.widths.input : undefined,
    overflowX: overflowX ? 'auto' : 'visible',
  }),
  maxWidth,
  textAlign,
  ({ shadow }: { shadow?: boolean }) => ({
    textShadow: shadow ? th.shadows.text : undefined,
  }),
  space,
  width,
  {
    transition: transitions.default,
  },
];

export const Title = styled('div')(
  {
    color: th.colors.black,
    fontFamily: th.fonts.notoBold,
    fontSize: th.fontSizes.title[2],
    textShadow: th.shadows.text,
    [th.breakpoints.tablet]: {
      fontSize: th.fontSizes.title[1],
    },
    [th.breakpoints.mobile]: {
      fontSize: th.fontSizes.title[0],
    },
  },
  ...textOptions,
);

export const Subtitle = styled('div')(
  {
    color: th.colors.black,
    fontFamily: th.fonts.notoBold,
    fontSize: th.fontSizes.subtitle[2],
    [th.breakpoints.tablet]: {
      fontSize: th.fontSizes.subtitle[1],
    },
    [th.breakpoints.mobile]: {
      fontSize: th.fontSizes.subtitle[0],
    },
  },
  ...textOptions,
);

export const H1 = styled('h1')(
  {
    color: th.colors.blue,
    fontFamily: th.fonts.notoBold,
    margin: 0,
    padding: 0,
    textShadow: th.shadows.text,
  },
  ({ fontSize }: { fontSize: { [key: string]: StyleValue } }) =>
    !fontSize && {
      fontSize: th.fontSizes.h1[2],
      [th.breakpoints.tablet]: {
        fontSize: th.fontSizes.h1[1],
      },
      [th.breakpoints.mobile]: {
        fontSize: th.fontSizes.h1[0],
      },
    },
  ...textOptions,
);

export const H2 = styled('h2')(
  {
    color: th.colors.blue,
    fontFamily: th.fonts.notoRegular,
    margin: 0,
    padding: 0,
  },
  ({ fontSize }: { fontSize: { [key: string]: StyleValue } }) =>
    !fontSize && {
      fontSize: th.fontSizes.h2[2],
      [th.breakpoints.tablet]: {
        fontSize: th.fontSizes.h2[1],
      },
      [th.breakpoints.mobile]: {
        fontSize: th.fontSizes.h2[0],
      },
    },
  ...textOptions,
);

export const H3 = styled('h3')(
  {
    color: th.colors.blue,
    fontFamily: th.fonts.notoRegular,
    margin: 0,
    padding: 0,
  },
  ({ fontSize }: { fontSize: { [key: string]: StyleValue } }) =>
    !fontSize && {
      fontSize: th.fontSizes.h3[2],
      [th.breakpoints.tablet]: {
        fontSize: th.fontSizes.h3[1],
      },
      [th.breakpoints.mobile]: {
        fontSize: th.fontSizes.h3[0],
      },
    },
  ...textOptions,
);

export const Text = styled('div')(
  {
    color: th.colors.blue,
    fontFamily: th.fonts.notoRegular,
    letterSpacing: 1,
    lineHeight: 1.4,
  },
  ({
    large,
    fontSize,
  }: {
    large?: boolean;
    fontSize: { [key: string]: StyleValue };
  }) =>
    !fontSize && {
      fontSize: large ? th.fontSizes.largeText[2] : th.fontSizes.text[2],
      [th.breakpoints.tablet]: {
        fontSize: large ? th.fontSizes.largeText[1] : th.fontSizes.text[1],
      },
      [th.breakpoints.mobile]: {
        fontSize: large ? th.fontSizes.largeText[0] : th.fontSizes.text[0],
      },
    },
  ...textOptions,
);

export const Anchor = styled('a')(
  {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: th.fonts.notoRegular,
    transition: th.transitions.default,
  },
  ({ color, hoverColor }: { color: string; hoverColor: string }) => ({
    ':hover': {
      color: hoverColor,
    },
    ':link': {
      color,
    },
    ':visited': {
      color,
    },
  }),
  ({
    large,
    fontSize,
  }: {
    large?: boolean;
    fontSize: { [key: string]: StyleValue };
  }) =>
    !fontSize && {
      fontSize: large ? th.fontSizes.largeText[2] : th.fontSizes.text[2],
      [th.breakpoints.tablet]: {
        fontSize: large ? th.fontSizes.largeText[1] : th.fontSizes.text[1],
      },
      [th.breakpoints.mobile]: {
        fontSize: large ? th.fontSizes.largeText[0] : th.fontSizes.text[0],
      },
    },
  ...textOptions,
);

export const Link = styled(RouterLink)(
  ({ border, color }: { border: string; color: string }) => ({
    ':hover': {
      borderBottom: border,
    },
    ':link': {
      color,
    },
    ':visited': {
      color,
    },
    borderBottom: th.borders.transparent,
    transition: th.transitions.default,
  }),
  ({
    large,
    fontSize,
  }: {
    large?: boolean;
    fontSize: { [key: string]: StyleValue };
  }) =>
    !fontSize && {
      fontSize: large ? th.fontSizes.largeText[2] : th.fontSizes.text[2],
      [th.breakpoints.tablet]: {
        fontSize: large ? th.fontSizes.largeText[1] : th.fontSizes.text[1],
      },
      [th.breakpoints.mobile]: {
        fontSize: large ? th.fontSizes.largeText[0] : th.fontSizes.text[0],
      },
    },
  ...textOptions,
);

type HoverStyle = 'opacity' | 'underline' | 'none';

export const TextButton = styled(Text)(
  ({
    border,
    color = th.colors.blue,
    hoverStyle,
    onClick,
  }: {
    border: string;
    color: string;
    hoverStyle: HoverStyle;
    onClick?: () => void;
  }) => ({
    ':hover': {
      borderBottom: hoverStyle === 'underline' ? border : undefined,
      opacity: hoverStyle === 'opacity' ? 1 : undefined,
    },
    borderBottom:
      hoverStyle === 'underline' ? th.borders.transparent : undefined,
    color,
    cursor: 'pointer',
    opacity: hoverStyle === 'opacity' && onClick ? 0.5 : undefined,
    transition: th.transitions.default,
  }),
  ({
    large,
    fontSize,
  }: {
    large?: boolean;
    fontSize: { [key: string]: StyleValue };
  }) =>
    !fontSize && {
      fontSize: large ? th.fontSizes.largeText[2] : th.fontSizes.text[2],
      [th.breakpoints.tablet]: {
        fontSize: large ? th.fontSizes.largeText[1] : th.fontSizes.text[1],
      },
      [th.breakpoints.mobile]: {
        fontSize: large ? th.fontSizes.largeText[0] : th.fontSizes.text[0],
      },
    },
  ...textOptions,
);

export const helpColor = ({ valid }: { valid?: boolean }) => ({
  color: valid ? th.colors.green : th.colors.gray,
  transition: th.transitions.default,
});

export const HelpText = styled(Text)(
  {
    fontSize: th.fontSizes.helpText[2],
    [th.breakpoints.tablet]: {
      fontSize: th.fontSizes.helpText[1],
    },
    [th.breakpoints.mobile]: {
      fontSize: th.fontSizes.helpText[0],
    },
  },
  helpColor,
);

export const HelpSpan = styled('span')(helpColor);

export default {
  Anchor,
  H1,
  H2,
  H3,
  HelpSpan,
  HelpText,
  Link,
  Subtitle,
  Text,
  TextButton,
  Title,
};
