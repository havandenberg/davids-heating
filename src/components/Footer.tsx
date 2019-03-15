import * as React from 'react';
import styled from 'react-emotion';
import EmailImg from '../assets/images/email';
import LogoImg from '../assets/images/logo.svg';
import PhoneImg from '../assets/images/phone';
import l from '../styles/layout';
import th from '../styles/theme';
import ty from '../styles/typography';
import { isMobileOnly, isSmall, isTabletUp } from '../utils/screensize';
import HoverAction from './HoverAction';

const FooterWrapper = styled(l.Flex)({
  backgroundImage: `radial-gradient(circle at 50% 0, ${th.colors.lightBlue}, ${
    th.colors.blue
  })`,
  padding: `${th.spacing.l} ${th.spacing.xl}`,
  [th.breakpoints.tablet]: {
    padding: `${th.spacing.m} ${th.spacing.ml}`,
  },
  [th.breakpoints.mobile]: {
    padding: `${th.spacing.m} ${th.spacing.ml}`,
  },
});

const Footer = () => (
  <FooterWrapper columnOnMobile spaceBetween>
    <l.FlexColumn alignTop={isTabletUp()}>
      <ty.H1 bold color={th.colors.green} id="contact" mb={th.spacing.ml}>
        Contact Us:
      </ty.H1>
      <HoverAction
        actionType="anchor"
        color={th.colors.white}
        customStyles={{
          icon: { height: th.spacing.ml },
          text: { large: isSmall() ? '' : 'true' },
        }}
        hoverColor={th.colors.green}
        linkAction="tel:+15087571545"
        text="(508)-757-1545"
        Icon={PhoneImg}
      />
      <l.Space height={th.spacing.sm} />
      <HoverAction
        actionType="anchor"
        color={th.colors.white}
        customStyles={{
          icon: { height: th.spacing.l },
          text: { large: isSmall() ? '' : 'true' },
        }}
        hoverColor={th.colors.green}
        linkAction="mailto:davidsheatandac@gmail.com"
        text="davidsheatandac@gmail.com"
        Icon={EmailImg}
      />
      <l.Space height={th.spacing.sm} />
      <ty.Text color={th.colors.white} large={!isSmall()}>
        4 Gleason Way
        <l.Break />
        Leicester, MA 01524
      </ty.Text>
    </l.FlexColumn>
    <l.FlexColumn alignBottom={isTabletUp()} mt={[th.spacing.ml, 0, 0]}>
      <l.FlexCentered
        alignBottom={isTabletUp()}
        width={['100%', 'auto', 'auto']}>
        <ty.Title color={th.colors.white}>DAVID'S</ty.Title>
        <l.Space width={th.spacing.ml} />
        <l.Img height={th.spacing.xl} src={LogoImg} />
      </l.FlexCentered>
      <ty.Subtitle
        textAlign={isMobileOnly() ? 'center' : 'right'}
        color={th.colors.green}>
        Heat & AC
      </ty.Subtitle>
      <l.Space height={th.spacing.l} />
      <ty.Text
        color={th.colors.white}
        textAlign={isMobileOnly() ? 'center' : 'right'}>
        Copyright © {new Date().getFullYear()} David’s Heat & AC
      </ty.Text>
      <l.Space height={th.spacing.sm} />
      <ty.Text
        color={th.colors.white}
        textAlign={isMobileOnly() ? 'center' : 'right'}>
        Developed by Halsey Vandenberg
      </ty.Text>
    </l.FlexColumn>
  </FooterWrapper>
);

export default Footer;
