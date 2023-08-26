import React from 'react'
import { useFormContext } from '../../Form/Form'
import { ButtonActions, FooterButtonFC } from '../types'
import { FooterButton } from './FooterButton'

export const ClearButton: FooterButtonFC = () => {
  const { clear } = useFormContext();

  return <FooterButton className={'bg-red-600 hover:bg-red-700'} label={'Clear'} onClick={clear} />;
};

ClearButton.footerId = ButtonActions.Clear;
