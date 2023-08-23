import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { fullWidthAndHeight } from './style';

type Props = {
  label: string;
};

export const Input = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.string}>
      <input style={fullWidthAndHeight} type={'text'} />
    </FormField>
  );
};
