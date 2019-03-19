import * as React from 'react';
import styled from 'react-emotion';
import { scrollToId } from 'src/utils/scroll';
import l from '../styles/layout';
import th, { spacing } from '../styles/theme';
import t from '../styles/typography';

interface Item {
  name: string;
  id: string;
}

const navItems = [
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Reviews', id: 'reviews' },
  { name: 'Contact', id: 'contact' },
];

const NavText = styled(t.H2)({
  ':hover': {
    color: th.colors.green,
  },
  color: th.colors.white,
  cursor: 'pointer',
  textAlign: 'center',
  transition: th.transitions.default,
  width: '25%',
  [th.breakpoints.small]: {
    fontSize: th.fontSizes.text,
  },
});

const Nav = () => (
  <l.Flex spaceBetween width="100%">
    {navItems.map((item: Item) => (
      <NavText
        key={item.name}
        text={item.name}
        onClick={() => scrollToId(item.id)}
        p={[spacing.s, spacing.l, spacing.l]}>
        {item.name}
      </NavText>
    ))}
  </l.Flex>
);

export default Nav;
