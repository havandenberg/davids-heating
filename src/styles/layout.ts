import styled from 'react-emotion';
import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  background,
  BackgroundProps,
  borderColor,
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
import th from './theme';
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

const Flex = styled('div')<
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
  alignItems,
  {
    alignItems: 'center',
  },
  alignSelf,
  background,
  borderColor,
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

const Break = styled('br')(
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

const Caption = styled('div')({
  color: th.colors.black,
  fontSize: '1rem',
});

const FlexCentered = styled(Flex)({
  justifyContent: 'center',
});

const FlexColumn = styled(Flex)({
  flexDirection: 'column',
});

const Img = styled('img')(height, space, width);

const Space = styled('div')(
  alignItems,
  alignSelf,
  background,
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

const GalleryWrapper = styled(Space)({
  display: 'block',
  minHeight: '1px',
  overflow: 'auto',
  width: '100%',
});

const Scroll = styled(Space)(
  ({ showScrollBar = true }: { showScrollBar: boolean }) => ({
    ...scrollStyles(showScrollBar),
  }),
  overflow,
);

const ScrollFlex = styled(Flex)(
  ({ showScrollBar = true }: { showScrollBar: boolean }) => ({
    ...scrollStyles(showScrollBar),
  }),
  overflow,
);

const Section = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '90%',
  },
  space,
);

const Page = styled(Space)({
  background: th.colors.background,
  margin: '0 auto',
  maxWidth: th.widths.maxContent,
  position: 'relative',
  width: '90%',
  [th.breakpoints.mobile]: {
    width: '100%',
  },
});

const Red = styled('span')({
  color: th.colors.red,
});

const BorderLine = styled('div')(
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

const Line = styled('div')(
  {
    borderBottom: th.borders.black,
    color: th.colors.black,
    margin: '0 auto',
    width: th.spacing.l,
  },
  borderColor,
  color,
  height,
  space,
  width,
);

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
  Red,
  Scroll,
  ScrollFlex,
  Section,
  Space,
};
