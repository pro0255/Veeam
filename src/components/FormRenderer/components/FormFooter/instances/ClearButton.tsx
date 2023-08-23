import React from 'react';
import { FooterButton } from './FooterButton';
import { useFormContext } from '../../Form';
import { ButtonActions, FooterButtonFC } from '../types';

export const ClearButton: FooterButtonFC = () => {
  const value = useFormContext();

  const clearValues = () => {
    console.log('Clearing');
  };

  return <FooterButton label={'Clear'} onClick={clearValues} />;
};

ClearButton.footerId = ButtonActions.Clear;
