import * as Scroll from 'react-scroll';
import th from '../styles/theme';

export const scrollToId = (id: string, customOptions?: object) =>
  Scroll.scroller.scrollTo(id, {
    ...th.scrollOptions,
    ...customOptions,
  });
