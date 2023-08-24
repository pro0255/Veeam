import React, { forwardRef } from 'react';
import { fullWidthAndHeight } from './style';
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
      style={fullWidthAndHeight}
      type="date"
    />
  );
});

DatePicker.displayName = 'DatePicker';
