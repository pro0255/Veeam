import React, { forwardRef } from 'react';
import { createFieldId } from '../../../utils/createFieldId';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label }, ref) => {
  return (
    <input
      className="w-5 h-5 border-solid border-2 border-gray-300 rounded hover:bg-gray-200 focus:bg-white focus:ring-0 hover:animate-make-bigger"
      ref={ref}
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
