import styled from 'react-emotion';
import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  background,
  BackgroundProps,
  border,
  bottom,
  color,
  flex,
  flexBasis,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  justifySelf,
  JustifySelfProps,
  left,
  maxHeight,
  maxWidth,
  MaxWidthProps,
  minHeight,
  minWidth,
  overflow,
  position,
  PositionProps,
  right,
  space,
  SpaceProps,
  top,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';
import { Breakpoint } from '../types/styles';
import th, { spacing } from './theme';
import { scrollStyles } from './utils';

interface FlexDivProps {
  alignBottom?: boolean;
  alignTop?: boolean;
  columnOnMobile?: boolean;
  columnRevOnMobile?: boolean;
  grow?: number;
  inline?: boolean;
  itemClassName?: string;
  margins?: string;
  pointer?: boolean;
  spaceBetween?: boolean;
  isWrap?: boolean;
}

// Flex is the basis for other layout components

export const Flex = styled('div')<
  AlignItemsProps &
    AlignSelfProps &
    BackgroundProps &
    HeightProps &
    JustifyContentProps &
    JustifySelfProps &
    PositionProps &
    FlexDirectionProps &
    FlexProps &
    FlexDivProps &
    MaxWidthProps &
    SpaceProps &
    WidthProps &
    ZIndexProps
>(
  {
    alignItems: 'center',
  },
  alignItems,
  alignSelf,
  background,
  border,
  flex,
  flexDirection,
  height,
  justifyContent,
  justifySelf,
  maxWidth,
  minWidth,
  position,
  space,
  width,
  zIndex,
  ({
    alignBottom,
    alignTop,
    columnOnMobile,
    columnRevOnMobile,
    grow,
    inline,
    itemClassName = '',
    margins = '0',
    pointer,
    spaceBetween,
    isWrap,
  }: FlexDivProps) => {
    const marginKey = `& .${itemClassName} + .${itemClassName}`;
    return {
      alignItems: alignTop ? 'flex-start' : alignBottom ? 'flex-end' : 'center',
      cursor: pointer ? 'pointer' : undefined,
      display: inline ? 'inline-flex' : 'flex',
      flexGrow: grow,
      flexWrap: isWrap ? 'wrap' : undefined,
      justifyContent: spaceBetween ? 'space-between' : undefined,
      [marginKey]: {
        marginLeft: margins !== '0' ? margins : undefined,
      },
      [th.breakpoints.mobile]:
        columnOnMobile || columnRevOnMobile
          ? { flexDirection: columnRevOnMobile ? 'column-reverse' : 'column' }
          : {},
    };
  },
);

// Boilerplate layout components

export const Break = styled('br')(
  {
    display: 'none',
    flexBasis: '100%',
    height: '0',
    overflow: 'hidden',
    width: '0',
  },
  ({ breakpoint = 'all' }: { breakpoint?: Breakpoint }) =>
    breakpoint === 'all'
      ? {
          display: 'block',
        }
      : {
          [th.breakpoints[breakpoint]]: {
            display: 'block',
          },
        },
  height,
  width,
);

export const Caption = styled('div')({
  color: th.colors.black,
  fontSize: '1rem',
});

export const FlexCentered = styled(Flex)({
  justifyContent: 'center',
});

export const FlexColumn = styled(Flex)({
  flexDirection: 'column',
});

export const Img = styled('img')(height, space, width);

export const Space = styled('div')(
  alignItems,
  alignSelf,
  background,
  border,
  bottom,
  flex,
  flexBasis,
  height,
  justifyContent,
  justifySelf,
  left,
  maxHeight,
  minHeight,
  minWidth,
  position,
  right,
  space,
  top,
  width,
  zIndex,
);

export const GalleryWrapper = styled(Space)({
  display: 'block',
  minHeight: '1px',
  overflow: 'auto',
  width: '100%',
});

export const Scroll = styled(Space)(
  ({ showScrollBar = true }: { showScrollBar: boolean }) => ({
    ...scrollStyles(showScrollBar),
  }),
  overflow,
);

export const ScrollFlex = styled(Flex)(
  ({ showScrollBar = true }: { showScrollBar: boolean }) => ({
    ...scrollStyles(showScrollBar),
  }),
  overflow,
);

export const Section = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '90%',
  },
  space,
);

export const Page = styled(Space)({
  background: th.colors.background,
  border: th.borders.green,
  margin: '0 auto',
  padding: `${spacing.xl} ${spacing.l}`,
  position: 'relative',
  width: '95%',
  [th.breakpoints.mobile]: {
    padding: `${spacing.ml} ${spacing.m}`,
    width: '100%',
  },
});

export const BorderLine = styled('div')(
  {
    background: th.gradients.black,
    height: th.spacing.s,
    margin: '0 auto',
    width: '100%',
  },
  background,
  height,
  space,
  width,
);

export const Line = styled('div')(
  {
    borderBottom: th.borders.black,
    color: th.colors.black,
    margin: '0 auto',
    width: th.spacing.l,
  },
  border,
  color,
  height,
  space,
  width,
);

export const SecondaryColor = styled('span')({
  color: th.colors.green,
});

// Project specific layout components

// ...

export default {
  BorderLine,
  Break,
  Caption,
  Flex,
  FlexCentered,
  FlexColumn,
  GalleryWrapper,
  Img,
  Line,
  Page,
  Scroll,
  ScrollFlex,
  SecondaryColor,
  Section,
  Space,
};
