import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';

type Props = {
  label: string;
};

export const DatePicker = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.date}>
      <input type="date" />
    </FormField>
  );
};
