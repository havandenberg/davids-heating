import * as R from 'ramda';
import * as React from 'react';
import l from '../styles/layout';
import { spacing } from '../styles/theme';
import ty from '../styles/typography';
import { StyleSet } from '../types/styles';

type ActionType = 'link' | 'anchor' | 'click';

interface Props {
  clickAction?: () => void;
  linkAction?: string;
  actionType: ActionType;
  color: string;
  customStyles?: {
    icon?: StyleSet;
    text?: StyleSet;
    wrapper?: StyleSet;
  };
  hoverColor: string;
  Icon?: React.ComponentType<any>;
  target?: string;
  text?: string;
}

interface State {
  hover: boolean;
}

class HoverAction extends React.Component<Props, State> {
  state = {
    hover: false,
  };

  getActionComponent = () => {
    switch (this.props.actionType) {
      case 'anchor':
        return ty.Anchor;
      case 'link':
        return ty.Link;
      default:
        return l.Space;
    }
  };

  setHover = (hover: boolean) => {
    return () => {
      this.setState({ hover });
    };
  };

  render() {
    const {
      actionType,
      clickAction,
      linkAction,
      color,
      customStyles,
      hoverColor,
      Icon,
      text,
      target,
    } = this.props;
    const { hover } = this.state;
    const activeColor = hover ? hoverColor : color;
    const styles = { icon: {}, text: {}, wrapper: {}, ...customStyles };
    const ActionComponent = this.getActionComponent();
    const href = R.equals(actionType, 'anchor') ? linkAction : undefined;
    const to = R.equals(actionType, 'link') ? linkAction : undefined;
    return (
      <ActionComponent
        href={href}
        onMouseEnter={this.setHover(true)}
        onMouseLeave={this.setHover(false)}
        to={to}
        onClick={clickAction}
        target={target}
        {...styles.wrapper}
      >
        <l.Flex>
          {Icon && <Icon color={activeColor} {...styles.icon} />}
          {Icon && text && <l.Space width={spacing.m} />}
          {text && !R.isEmpty(text) && (
            <ty.Text color={activeColor} {...styles.text}>
              {text}
            </ty.Text>
          )}
        </l.Flex>
      </ActionComponent>
    );
  }
}

export default HoverAction;
