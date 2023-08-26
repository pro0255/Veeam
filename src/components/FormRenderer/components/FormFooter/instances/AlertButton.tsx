import React from 'react'
import { useFormContext } from '../../Form/Form'
import { ButtonActions, FooterButtonFC } from '../types'
import { FooterButton } from './FooterButton'

export const AlertButton: FooterButtonFC = () => {
  const { getValues } = useFormContext();

  const alertWithValue = () => {
    const values = getValues();
    alert(JSON.stringify(values));
  };

  return <FooterButton label={'Apply'} onClick={alertWithValue} />;
};

AlertButton.footerId = ButtonActions.Alert;
