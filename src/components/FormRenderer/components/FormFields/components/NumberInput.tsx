import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';

type Props = {
  label: string;
};

export const NumberInput = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.number}>
      <input type={'number'} />
    </FormField>
  );
};
