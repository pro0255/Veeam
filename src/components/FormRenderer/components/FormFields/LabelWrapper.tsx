import React from 'react';
import { FormFieldProp } from './types';
import { createFieldId } from '../../utils/createFieldId';

export const LabelWrapper = ({ children, label, type }: FormFieldProp) => {
  return (
    <React.Fragment>
      <label
        htmlFor={createFieldId({
          label,
          type
        })}
        style={{
          width: '100%',
          marginRight: '20px',
          fontSize: '30px'
        }}>
        {label}
      </label>
      {children}
    </React.Fragment>
  );
};
