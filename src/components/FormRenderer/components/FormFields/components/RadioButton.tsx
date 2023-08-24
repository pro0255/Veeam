import React, { forwardRef } from 'react';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { fullWidthAndHeight } from './style';
import { createRadioButtonId } from '../../../utils/createFieldId';
import { RadioButtonProps } from './types';
import { createRadioButtonName } from '../../Form/utils/createRadioButtonName';

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
        name={createRadioButtonName(setId)}
        style={fullWidthAndHeight}
        value={label}
        type="radio"
      />
    );
  }
);

RadioButton.displayName = 'RadioButton';
