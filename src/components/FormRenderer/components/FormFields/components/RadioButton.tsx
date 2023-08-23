import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { fullWidthAndHeight } from './style';

type Props = {
  label: string;
};

export const RadioButton = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.enum}>
      <input style={fullWidthAndHeight} type="radio" />
    </FormField>
  );
};
