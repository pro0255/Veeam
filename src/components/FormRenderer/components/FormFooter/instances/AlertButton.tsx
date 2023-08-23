import React from 'react';
import { FooterButton } from './FooterButton';
import { useFormContext } from '../../Form';
import { ButtonActions, FooterButtonFC } from '../types';

export const AlertButton: FooterButtonFC = () => {
  const value = useFormContext();

  const alertWithValue = () => {
    console.log('alert');
  };

  return <FooterButton label={'Apply'} onClick={alertWithValue} />;
};

AlertButton.footerId = ButtonActions.Alert;
