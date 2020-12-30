import * as React from 'react';
import styled from 'react-emotion';
import { isMobileOnly, isTabletUp } from 'src/utils/screensize';
import EmailImg from '../assets/images/email';
import LogoImg from '../assets/images/logo.svg';
import l from '../styles/layout';
import th from '../styles/theme';
import ty from '../styles/typography';
import HoverAction from './HoverAction';
import Nav from './Nav';

const HeaderWrapper = styled(l.Space)({
  backgroundImage: `radial-gradient(circle at 50% 0, ${th.colors.lightBlue}, ${th.colors.blue})`,
  padding: `${th.spacing.l} ${th.spacing.xl} 0`,
  [th.breakpoints.tablet]: {
    padding: `${th.spacing.m} ${th.spacing.ml} 0`,
  },
  [th.breakpoints.mobile]: {
    padding: `${th.spacing.m} 0`,
  },
});

const Header = () => (
  <HeaderWrapper>
    <l.Flex alignTop={isTabletUp()} columnOnMobile spaceBetween>
      <l.Space mx={[th.spacing.sm, 0, 0]}>
        <l.Flex justifyContent={isMobileOnly() ? 'center' : 'flex-start'}>
          <ty.Title color={th.colors.white}>DAVID'S</ty.Title>
          <l.Space width={th.spacing.ml} />
          <l.Img height={th.spacing.xl} src={LogoImg} />
        </l.Flex>
        <ty.Subtitle center={isMobileOnly()} color={th.colors.green}>
          Heating & Air Conditioning
        </ty.Subtitle>
      </l.Space>
      <l.Space height={[th.spacing.sm, 0, 0]} />
      <HoverAction
        actionType="anchor"
        color={th.colors.white}
        customStyles={{
          icon: { height: th.spacing.ml },
          text: { bold: 'true', large: 'true' },
          wrapper: { p: th.spacing.sm },
        }}
        hoverColor={th.colors.green}
        linkAction="mailto:davidsheatandac@gmail.com"
        text="Contact Now"
        Icon={EmailImg}
      />
    </l.Flex>
    <l.Space height={[th.spacing.sm, 0, 0]} />
    <l.FlexCentered mx="auto" width={['100%', '70%', '70%']}>
      <Nav />
    </l.FlexCentered>
  </HeaderWrapper>
);

export default Header;
