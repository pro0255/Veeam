import React from 'react';
import { FooterButton } from './FooterButton';
import { useFormContext } from '../../Form/Form';
import { ButtonActions, FooterButtonFC } from '../types';

export const ClearButton: FooterButtonFC = () => {
  const { clear } = useFormContext();

  return <FooterButton label={'Clear'} onClick={clear} />;
};

ClearButton.footerId = ButtonActions.Clear;
