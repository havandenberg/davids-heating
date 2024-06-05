import * as React from 'react';
import styled from 'react-emotion';
import { minHeight, minWidth, space } from 'styled-system';
import { brands, locations } from '../content';
import l from '../styles/layout';
import th, { spacing } from '../styles/theme';
import ty from '../styles/typography';
import { ASSETS_PATH } from '../utils/constants';
import { isMobile, isMobileOnly } from '../utils/screensize';
import { scrollToId } from '../utils/scroll';
import { ButtonPrimary } from './Form/Button';
import HoverAction from './HoverAction';

const Bullet = styled(l.Space)(
  {
    background: th.colors.blue,
    borderRadius: '50%',
  },
  minHeight,
  minWidth,
  space,
);

const Services = () => (
  <div>
    <ty.H1 id="services" mb={spacing.l}>
      Services
    </ty.H1>
    <l.Flex alignTop columnOnMobile spaceBetween>
      <l.Img height={400} src={`${ASSETS_PATH}/group.jpg`} />
      <l.Space height={th.spacing.ml} width={th.spacing.xl} />
      <l.Space>
        <ty.Text mb={th.spacing.ml}>
          Owner David Berard has almost 30 years experience installing oil and
          gas furnaces and specializes in Mitsubishi heat pump systems.
        </ty.Text>
        <ty.Text>
          Residential and commercial / licensed and insured. Est. 2001.
        </ty.Text>
        <l.Space height={th.spacing.l} />
        <l.FlexColumn>
          <ty.Text bold>H.V.A.C.</ty.Text>
          <ty.Text bold>CENTRAL AIR CONDITIONING</ty.Text>
          <l.Space height={th.spacing.ml} />
          <ty.Text bold>BBB A+ rating</ty.Text>
          <l.Space height={th.spacing.ml} />
          <ty.Text bold>*Service calls returned within 24 hours*</ty.Text>
          <l.Space height={th.spacing.ml} />
          <ty.Text bold>Mass Save rebates available</ty.Text>
          <ty.Text bold>Up to $10,000</ty.Text>
          <l.Space height={th.spacing.ml} />
          <ty.Text bold>New construction</ty.Text>
          <l.Space height={th.spacing.ml} />
          <ty.Text>*Not accepting credit cards*</ty.Text>
        </l.FlexColumn>
      </l.Space>
    </l.Flex>
    <l.Space height={th.spacing.xl} />
    {isMobileOnly() && (
      <l.FlexCentered mb={th.spacing.l}>
        <ButtonPrimary onClick={() => scrollToId('estimate')}>
          Free Estimate
        </ButtonPrimary>
      </l.FlexCentered>
    )}
    <l.FlexColumn>
      <ty.Text bold large mb={th.spacing.ml}>
        WHY US?
      </ty.Text>
      <ty.Text>
        We're a small company with a low overhead. We offer a competitive price
        and personalized service from start to finish on every job.
      </ty.Text>
    </l.FlexColumn>
    <l.Space height={th.spacing.xl} />
    <ty.Text mb={th.spacing.l}>
      Fill out the form {isMobileOnly() ? 'below' : 'to the right'} or{' '}
      <HoverAction
        actionType="anchor"
        color={th.colors.blue}
        customStyles={{
          text: { bold: 'true' },
        }}
        hoverColor={th.colors.green}
        linkAction="mailto:davidsheatandac@gmail.com"
        text="email us"
      />{' '}
      for a free estimate today.
    </ty.Text>
    <ty.Text mb={th.spacing.l}>
      All estimates done on Saturdays 8:00am - 12:00pm. Please request a time in
      the description.
    </ty.Text>
    <ty.Text>We will get back to you as soon as possible.</ty.Text>
    <ty.H2 mb={spacing.l} mt={spacing.xl}>
      Serving the Greater Worcester Area
    </ty.H2>
    <l.FlexCentered isWrap mx="auto" width={['100%', '80%', '80%']}>
      {locations.map((location: string, index: number) => {
        const showBullet = isMobile()
          ? index % 2 < 1
          : index < locations.length - 1;
        return (
          <l.Flex key={location} mb={th.spacing.ml}>
            <ty.Text large>{location}</ty.Text>
            {showBullet ? (
              <Bullet
                height={th.spacing.s}
                mx={th.spacing.m}
                width={th.spacing.s}
              />
            ) : (
              <l.Space width={th.spacing.ml} />
            )}
          </l.Flex>
        );
      })}
    </l.FlexCentered>
    <ty.H2 id="brands" mb={spacing.l} mt={spacing.l}>
      Brands
    </ty.H2>
    <l.Flex isWrap>
      {brands.map((brand: string, index: number) => (
        <React.Fragment key={`brand-${index}`}>
          <l.Img height={48} mb={th.spacing.l} src={brand} />
          {index < brands.length - 1 && <l.Space width={th.spacing.l} />}
        </React.Fragment>
      ))}
    </l.Flex>
  </div>
);

export default Services;
