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
      <l.Img height={300} src={`${ASSETS_PATH}/group.jpg`} />
      <l.Space height={th.spacing.ml} width={th.spacing.xl} />
      <l.Space>
        <ty.Text mb={th.spacing.ml}>
          Owner David Berard has almost 30 years experience installing oil and
          gas furnaces and specializes in Mitsubishi heat pump systems.
        </ty.Text>
        <ty.Text>Residential and commercial / licensed and insured.</ty.Text>
        <l.Space height={th.spacing.ml} />
        <l.FlexColumn>
          <ty.Text bold>H.V.A.C.</ty.Text>
          <ty.Text bold>CENTRAL AIR CONDITIONING</ty.Text>
          <l.Space height={th.spacing.ml} />
          <ty.Text>Installed:</ty.Text>                          
          <ty.Text>* UNDER $10,000</ty.Text>
          <ty.Text>* Rudd equipment</ty.Text>
          <ty.Text>* 13 seer</ty.Text>
          <ty.Text>* Up to 1,500 sq ft</ty.Text>
          <ty.Text>* Electrical work extra</ty.Text>
        </l.FlexColumn>
      </l.Space>
    </l.Flex>
    <l.Space height={th.spacing.l} />
    <ty.Text>
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
      for a free estimate today. We will get back to you as soon as possible.
    </ty.Text>
    <l.Space height={th.spacing.l} />
    {isMobileOnly() && (
      <l.FlexCentered mb={th.spacing.l}>
        <ButtonPrimary onClick={() => scrollToId('estimate')}>
          Free Estimate
        </ButtonPrimary>
      </l.FlexCentered>
    )}
    <l.Flex ml={[0, th.spacing.ml, th.spacing.xl]}>
      <Bullet
        minHeight={th.spacing.sm}
        mr={th.spacing.m}
        minWidth={th.spacing.sm}
      />
      <ty.Text large>Mass Save certified contractor</ty.Text>
    </l.Flex>
    <l.Space height={th.spacing.ml} />
    <l.Flex ml={[0, th.spacing.ml, th.spacing.xl]}>
      <Bullet
        minHeight={th.spacing.sm}
        mr={th.spacing.m}
        minWidth={th.spacing.sm}
      />
      <ty.Text large>Zero interest heat loans for seven years</ty.Text>
    </l.Flex>
    <l.Space height={th.spacing.ml} />
    <l.Flex ml={[0, th.spacing.ml, th.spacing.xl]}>
      <Bullet
        minHeight={th.spacing.sm}
        mr={th.spacing.m}
        minWidth={th.spacing.sm}
      />
      <ty.Text large>New construction</ty.Text>
    </l.Flex>
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
