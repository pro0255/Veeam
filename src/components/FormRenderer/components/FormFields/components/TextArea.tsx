import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';

type Props = {
  label: string;
};

export const TextArea = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.multiLine}>
      <textarea />
    </FormField>
  );
};
