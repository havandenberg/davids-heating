import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { space, width } from 'styled-system';
import th from '../../styles/theme';

export const getButtonProps: (background: string, gradient: string) => any = (
  background,
  gradient,
) => ({
  ':before': {
    backgroundImage: gradient,
    borderRadius: 'inherit',
    content: '""',
    display: 'block',
    height: '100%',
    left: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    transition: th.transitions.default,
    width: '100%',
    zIndex: th.z.neg,
  },
  ':hover': {
    ':before': {
      opacity: 1,
    },
  },
  ':last-child': {
    marginRight: 0,
  },
  alignItems: 'center',
  background,
  borderRadius: th.borders.radius,
  boxShadow: th.shadows.box,
  color: th.colors.white,
  cursor: 'pointer',
  display: 'flex',
  fontSize: th.fontSizes.largeText,
  fontWeight: 500,
  justifyContent: 'center',
  padding: th.spacing.m,
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  zIndex: 1,
  [th.breakpoints.mobile]: {
    padding: th.spacing.sm,
  },
});

export const ButtonPrimary = styled('button')(
  ({ background = th.colors.red, gradient = th.gradients.red }) => ({
    ...getButtonProps(background, gradient),
  }),
  space,
  width,
);

export const LinkPrimary = styled(Link)(
  getButtonProps(th.colors.red, th.gradients.red),
  space,
  width,
);

export const ButtonSecondary = styled('button')(
  getButtonProps(th.colors.black, th.gradients.black),
  space,
  width,
);

export const LinkSecondary = styled(Link)(
  getButtonProps(th.colors.black, th.gradients.black),
  space,
  width,
);

export const ButtonTertiary = styled('div')({
  ':hover': {
    borderBottom: th.borders.red,
  },
  borderBottom: th.borders.transparent,
  color: th.colors.red,
  cursor: 'pointer',
  fontSize: th.fontSizes.largeText,
  transition: th.transitions.default,
});
