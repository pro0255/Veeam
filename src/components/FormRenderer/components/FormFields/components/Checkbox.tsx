import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { fullWidthAndHeight } from './style';

type Props = {
  label: string;
};

export const Checkbox = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.boolean}>
      <input style={fullWidthAndHeight} type="checkbox" value={'value'} />
    </FormField>
  );
};
