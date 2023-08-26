import React, { forwardRef } from 'react';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { createRadioButtonId } from '../../../utils/createFieldId';
import { RadioButtonProps } from './types';
import { createRadioButtonName } from '../../Form/utils/createRadioButtonName';

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, setId }, ref) => {
    return (
      <input
        className="w-5 h-5 border-solid border-2 border-gray-300 rounded-xl hover:bg-gray-200 focus:bg-white focus:ring-2 hover:animate-make-bigger"
        id={`${createRadioButtonId({
          type: FormFieldEnum.enum,
          label,
          setId
        })}-${setId}`}
        ref={ref}
        name={createRadioButtonName(setId)}
        value={label}
        type="radio"
      />
    );
  }
);

RadioButton.displayName = 'RadioButton';
