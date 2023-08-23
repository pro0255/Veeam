import React from 'react';
import { FormFieldProp } from './types';

export const FormField = ({ children, label, type }: FormFieldProp) => {
  return (
    <>
      <label
        style={{
          width: '100%',
          marginRight: '20px',
          fontSize: '30px'
        }}>
        {label}
      </label>
      {children}
    </>
  );
};
