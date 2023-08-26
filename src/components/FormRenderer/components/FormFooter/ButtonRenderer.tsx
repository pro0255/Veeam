import React, { ReactNode } from 'react';
import { ActionButton, ButtonActions, FormFooterProps, LabelButton } from './types';
import { FooterButton } from './instances/FooterButton';
import { AlertButton } from './instances/AlertButton';
import { ClearButton } from './instances/ClearButton';
import { NOT_IMPLEMENTED } from '../../../../utils/NOT_IMPLEMENTED';

type Props = {
  button: FormFooterProps['buttons'][number];
};

const isTypeButton = (button: Props['button']): button is ActionButton => 'buttonType' in button;
const isLabelButton = (button: Props['button']): button is LabelButton => 'label' in button;

export const buttonRendererKey = (button: Props['button']) => {
  if (isTypeButton(button)) {
    return `buttonType-${button.buttonType}`;
  }

  if (isLabelButton(button)) {
    return `label-${button.label}`;
  }
};

const buttonActionToReactNode: Record<ButtonActions, ReactNode> = {
  [ButtonActions.Alert]: <AlertButton />,
  [ButtonActions.Clear]: <ClearButton />
};

export const ButtonRenderer = ({ button }: Props) => {
  if (isTypeButton(button)) {
    return <>{buttonActionToReactNode[button.buttonType]}</>;
  }

  if (isLabelButton(button)) {
    return <FooterButton label={button.label} onClick={NOT_IMPLEMENTED} />;
  }

  return null;
};
