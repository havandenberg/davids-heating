import th from './theme';

export const scrollStyles = (showScrollBar: boolean) => ({
  '::-webkit-scrollbar': {
    height: showScrollBar ? 18 : 0,
    width: showScrollBar ? 18 : 0,
  },
  '::-webkit-scrollbar-button': {
    display: 'none',
    height: 0,
    width: 0,
  },
  '::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    '-webkit-border-radius': 20,
    '-webkit-box-shadow':
      'inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05)',
    backgroundClip: 'padding-box',
    backgroundColor: th.colors.black,
    border: showScrollBar ? '6px solid rgba(0, 0, 0, 0)' : 0,
    height: showScrollBar ? th.spacing.t : 0,
  },
  overflow: 'scroll',
});
