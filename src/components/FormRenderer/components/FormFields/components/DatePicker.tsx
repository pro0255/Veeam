import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { fullWidthAndHeight } from './style';

type Props = {
  label: string;
};

export const DatePicker = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.date}>
      <input style={fullWidthAndHeight} type="date" />
    </FormField>
  );
};
