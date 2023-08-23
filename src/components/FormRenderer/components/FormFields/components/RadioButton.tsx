import React, { forwardRef } from 'react';
import { LabelWrapper } from '../LabelWrapper';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { fullWidthAndHeight } from './style';
import { createFieldId, createRadioButtonId } from '../../../utils/createFieldId';
import { RadioButtonProps } from './types';

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, setId }, ref) => {
    return (
      <input
        id={`${createRadioButtonId({
          type: FormFieldEnum.enum,
          label,
          setId
        })}-${setId}`}
        ref={ref}
        name={String(setId)}
        style={fullWidthAndHeight}
        type="radio"
      />
    );
  }
);

RadioButton.displayName = 'RadioButton';
