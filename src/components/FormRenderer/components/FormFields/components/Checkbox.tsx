import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';

type Props = {
  label: string;
};

export const Checkbox = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.boolean}>
      <input type="checkbox" value={'value'} />
    </FormField>
  );
};
