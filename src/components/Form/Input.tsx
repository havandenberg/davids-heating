import styled from 'react-emotion';
import { flex, space, textAlign, width } from 'styled-system';
import th from '../../styles/theme';
import { scrollStyles } from '../../styles/utils';

export type InputType = 'text' | 'password' | 'select' | 'textarea' | 'file';

const inputStyles = {
  ':hover': {
    opacity: 1,
  },
  ':placeholder': {
    color: th.colors.black,
    fontFamily: th.fonts.notoRegular,
    fontSize: th.fontSizes.text,
  },
  background: th.colors.lightGray,
  border: th.borders.black,
  borderRadius: th.borders.radius,
  boxShadow: th.shadows.box,
  color: th.colors.black,
  flex: 1,
  fontFamily: th.fonts.notoRegular,
  fontSize: th.fontSizes.text,
  height: th.heights.input,
  opacity: 0.8,
  padding: th.spacing.s,
  transition: th.transitions.default,
  width: th.widths.input,
  [th.breakpoints.mobile]: {
    padding: th.spacing.t,
    width: '100%',
  },
};

const withError = ({ error }: { error?: boolean }) => ({
  border: error ? th.borders.redThick : th.borders.blackThick,
});

const withCustomStyles = ({
  customStyles,
}: {
  customStyles?: React.CSSProperties;
}) => ({ ...customStyles });

export const SelectInput = styled('select')(
  {
    ...inputStyles,
    ...scrollStyles,
    overflowX: 'visible',
  },
  flex,
  space,
  textAlign,
  withError,
  width,
  withCustomStyles,
);

export const TextInput = styled('input')(
  {
    ...inputStyles,
    ...scrollStyles,
    overflowX: 'visible',
  },
  flex,
  space,
  textAlign,
  withError,
  width,
  withCustomStyles,
);

export const TextArea = styled('textarea')(
  {
    ...inputStyles,
    ...scrollStyles,
    overflowX: 'visible',
    resize: 'none',
  },
  flex,
  space,
  textAlign,
  withError,
  width,
  withCustomStyles,
);
