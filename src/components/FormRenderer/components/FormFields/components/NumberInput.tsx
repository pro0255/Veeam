import React from 'react';
import { FormField } from '../FormField';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { fullWidthAndHeight } from './style';

type Props = {
  label: string;
};

export const NumberInput = ({ label }: Props) => {
  return (
    <FormField label={label} type={FormFieldEnum.number}>
      <input style={fullWidthAndHeight} type={'number'} />
    </FormField>
  );
};
