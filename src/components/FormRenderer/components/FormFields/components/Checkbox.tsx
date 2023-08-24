import React, { forwardRef } from 'react';
import { fullWidthAndHeight } from './style';
import { createFieldId } from '../../../utils/createFieldId';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label }, ref) => {
  return (
    <input
      ref={ref}
      style={fullWidthAndHeight}
      type="checkbox"
      name={label}
      id={createFieldId({
        type: FormFieldEnum.boolean,
        label
      })}
    />
  );
});

Checkbox.displayName = 'Checkbox';
