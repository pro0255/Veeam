import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';

type Props = {
  label: string;
};

export const RadioButton = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.enum}>
      <input type="radio" />
    </FormField>
  );
};
