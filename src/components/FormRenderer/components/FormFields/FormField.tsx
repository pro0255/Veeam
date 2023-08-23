import React from 'react';
import { FormFieldProp } from './types';

export const FormField = ({ children, label, type }: FormFieldProp) => {
  return (
    <>
      <label>{label}</label>
      {children}
    </>
  );
};
