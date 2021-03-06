import * as React from 'react';
import styled from 'react-emotion';
import th from '../../styles/theme';
import { CheckboxRadioInputType, Scale } from '../../types/styles';

const getColor = (
  disabled: boolean | undefined,
  hover: boolean,
  type: CheckboxRadioInputType | undefined,
) => {
  if (type === 'checkbox') {
    return 'inherit';
  }
  if (disabled) {
    return th.colors.lightGray;
  }
  return hover ? th.colors.black : th.colors.gray;
};

const CheckboxRadioInputContainer = styled('div')(
  {
    alignItems: 'center',
    background: th.colors.lightGray,
    border: `solid 2px ${th.colors.gray}`,
    borderRadius: th.borders.radius,
    display: 'inline-flex',
    position: 'relative',
    transition: th.transitions.default,
  },
  ({
    disabled,
    scale,
    type,
  }: {
    disabled: boolean | undefined;
    scale: Scale;
    type: CheckboxRadioInputType;
  }) => ({
    '& .checkmark-radio': {
      background: getColor(disabled, false, type),
      borderColor: getColor(disabled, false, undefined),
    },
    '& .checkmark-radio-outer': {
      borderColor: getColor(disabled, false, undefined),
    },
    ':hover': {
      '& .checkmark-radio': {
        background: getColor(disabled, true, type),
        borderColor: getColor(disabled, true, undefined),
      },
      '& .checkmark-radio-outer': {
        borderColor: getColor(disabled, true, undefined),
      },
      borderColor: getColor(disabled, true, undefined),
    },
    borderColor: getColor(disabled, false, undefined),
    borderRadius: type === 'radio' ? '50%' : 4,
    height: scale === 'big' ? 35 : 23,
    width: scale === 'big' ? 35 : 23,
  }),
);

const Input = styled('input')({
  ':disabled': {
    cursor: 'auto',
  },
  cursor: 'pointer',
  height: '100%',
  left: 0,
  margin: 0,
  opacity: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
});

const CheckmarkRadioContainer = styled('div')(
  {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    top: 0,
  },
  ({ type }: { type: CheckboxRadioInputType }) => ({
    borderRadius: type === 'radio' ? '50%' : 'inherit',
  }),
);

const Checkmark = styled('div')(
  {
    borderBottom: `solid 3px ${th.colors.gray}`,
    borderRight: `solid 3px ${th.colors.gray}`,
    transform: 'scaleX(0.85) translateY(-15%) translateX(-5%) rotate(45deg)',
    transition: th.transitions.default,
    verticalAlign: 'middle',
  },
  ({ scale }: { scale: Scale }) => ({
    borderWidth: scale === 'big' ? 3 : 2,
    height: scale === 'big' ? th.spacing.ml : 10,
    width: scale === 'big' ? 12 : 6,
  }),
);

const RadioCenter = styled('div')({
  background: th.colors.gray,
  borderRadius: '50%',
  height: 13,
  transition: th.transitions.default,
  verticalAlign: 'middle',
  width: 13,
});

interface CheckboxRadioInnerProps {
  checked: boolean;
  type: CheckboxRadioInputType;
  size: Scale;
}

const CheckmarkRadioInner = (props: CheckboxRadioInnerProps) => (
  <CheckmarkRadioContainer type={props.type}>
    {props.checked &&
      (props.type === 'checkbox' ? (
        <Checkmark className="checkmark-radio" scale={props.size} />
      ) : (
        <RadioCenter className="checkmark-radio" />
      ))}
  </CheckmarkRadioContainer>
);

interface CheckboxRadioInputProps {
  checked: boolean;
  disabled?: boolean;
  type: CheckboxRadioInputType;
  size: Scale;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxRadioInput = (props: CheckboxRadioInputProps) => (
  <CheckboxRadioInputContainer
    className="checkmark-radio-outer"
    disabled={props.disabled}
    scale={props.size}
    type={props.type}>
    <CheckmarkRadioInner
      size={props.size}
      checked={props.checked}
      type={props.type}
    />
    <Input
      type={props.type}
      disabled={props.disabled}
      onChange={props.onChange}
    />
  </CheckboxRadioInputContainer>
);

const getWithLabelBorderColor = (
  checked?: boolean,
  disabled?: boolean,
  hover?: boolean,
  inner?: boolean,
) => {
  if (disabled) {
    return th.colors.lightGray;
  }
  if (hover) {
    if (inner) {
      return th.colors.black;
    }
    return th.colors.lightGray;
  }
  if (inner) {
    return th.colors.gray;
  }
  return checked ? th.colors.gray : th.colors.lightGray;
};

const CheckboxRadioInputWithLabelContainer = styled('div')(
  {
    alignItems: 'center',
    background: 'transparent',
    borderRadius: th.borders.radius,
    display: 'inline-flex',
    position: 'relative',
    transition: th.transitions.default,
  },
  ({
    checked,
    disabled,
    showBorder,
    type,
  }: {
    checked: boolean;
    disabled: boolean | undefined;
    showBorder?: boolean;
    type: CheckboxRadioInputType;
  }) => ({
    '& .checkmark-radio': {
      background: getColor(disabled, false, type),
      borderColor: getColor(disabled, false, undefined),
    },
    '& .checkmark-radio-outer': {
      borderColor: getWithLabelBorderColor(checked, disabled, false, true),
      borderRadius: type === 'radio' ? '50%' : 4,
    },
    ':hover': {
      '& .checkmark-radio': {
        background: getColor(disabled, true, type),
        borderColor: getWithLabelBorderColor(checked, disabled, true, true),
      },
      '& .checkmark-radio-outer': {
        borderColor: getWithLabelBorderColor(checked, disabled, true, true),
      },
      borderColor: getWithLabelBorderColor(checked, disabled, true),
    },
    border: showBorder ? `solid 2px ${th.colors.gray}` : 0,
    borderColor: getWithLabelBorderColor(checked, disabled),
    color: disabled ? th.colors.gray : th.colors.black,
    padding: showBorder ? th.spacing.m : 0,
  }),
);

const CheckboxRadioInputWithLabelInnerContainer = styled('div')(
  {
    alignItems: 'center',
    background: th.colors.lightGray,
    borderRadius: th.borders.radius,
    borderStyle: 'solid',
    borderWidth: 2,
    display: 'inline-flex',
    position: 'relative',
    transition: th.transitions.default,
  },
  ({ scale = 'big' }: { scale?: Scale }) => ({
    height: scale === 'big' ? 35 : 23,
    width: scale === 'big' ? 35 : 23,
  }),
);

const CheckboxRadioInputText = styled('div')(
  {
    transition: th.transitions.default,
  },
  ({ scale }: { scale?: Scale }) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: scale === 'small' ? th.fontSizes.text : undefined,
    marginLeft: scale === 'big' ? th.spacing.m : th.spacing.t,
  }),
);

interface CheckboxRadioInputWithLabelProps {
  checked: boolean;
  disabled?: boolean;
  name?: string;
  showBorder?: boolean;
  text: string;
  type: CheckboxRadioInputType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  scale?: Scale;
}

export const CheckboxRadioInputWithLabel = ({
  checked,
  disabled,
  showBorder,
  type,
  name,
  text,
  onChange,
  scale = 'big',
}: CheckboxRadioInputWithLabelProps) => (
  <CheckboxRadioInputWithLabelContainer
    checked={checked}
    disabled={disabled}
    showBorder={showBorder}
    type={type}>
    <CheckboxRadioInputWithLabelInnerContainer
      className="checkmark-radio-outer"
      scale={scale}>
      <CheckmarkRadioInner size={scale} checked={checked} type={type} />
    </CheckboxRadioInputWithLabelInnerContainer>
    <CheckboxRadioInputText scale={scale}>{text}</CheckboxRadioInputText>
    <Input
      disabled={disabled}
      name={name}
      type={type}
      checked={checked}
      onChange={onChange}
    />
  </CheckboxRadioInputWithLabelContainer>
);
