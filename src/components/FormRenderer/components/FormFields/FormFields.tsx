import React from 'react';
import { FormFieldsProps } from './types';
import { fieldTypeToComponent } from './fieldTypeToComponent';

export const FormFields = ({ items }: FormFieldsProps) => {
  console.log(items);
  return (
    <>
      {items.map(({ label, type }) => {
        const FieldComponent = fieldTypeToComponent[type];
        return <FieldComponent key={label} label={label} />;
      })}
    </>
  );
};
