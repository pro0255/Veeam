import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { fullWidthAndHeight } from './style';

type Props = {
  label: string;
};

export const TextArea = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.multiLine}>
      <textarea style={fullWidthAndHeight} />
    </FormField>
  );
};
