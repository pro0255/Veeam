import React, { forwardRef } from 'react';
import { createFieldId } from '../../../utils/createFieldId';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { DatePickerProps } from './types';

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({ label }, ref) => {
  return (
    <input
      id={createFieldId({
        type: FormFieldEnum.date,
        label
      })}
      name={label}
      ref={ref}
      type="date"
    />
  );
});

DatePicker.displayName = 'DatePicker';
