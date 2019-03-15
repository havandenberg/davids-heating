import * as React from 'react';
import styled from 'react-emotion';
import { minHeight, minWidth, space } from 'styled-system';
import { brands, locations } from '../content';
import l from '../styles/layout';
import th, { spacing } from '../styles/theme';
import ty from '../styles/typography';
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
    <ty.Text>
      Owner David Berard will be happy to take your phone call and answer any
      questions. With over 25 years of experience in the h.v.a.c. trade, an
      answer to your problem won’t take long. He has installed hundreds of
      residential and commercial boilers and furnaces and has repaired all types
      of heating and air conditioning equipment including heat pump systems.
      David is on every job site to insure personalized customer service. He is
      fully licensed and insured and can provide documentation and customer
      references upon request.
      <l.Space height={th.spacing.ml} />
      Fill out the form {isMobileOnly() ? 'below' : 'to the right'} or call{' '}
      <HoverAction
        actionType="anchor"
        color={th.colors.blue}
        customStyles={{
          text: { bold: 'true' },
        }}
        hoverColor={th.colors.green}
        linkAction="tel:+15087571545"
        text="(508) 757-1545"
      />{' '}
      for a free estimate today.
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
    <ty.H1 id="brands" mb={spacing.l} mt={spacing.l}>
      Brands
    </ty.H1>
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
