import React, { forwardRef } from 'react';
import { fullWidthAndHeight } from './style';
import { createFieldId } from '../../../utils/createFieldId';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { TextAreaProps } from './types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label }, ref) => {
  return (
    <textarea
      id={createFieldId({
        type: FormFieldEnum.multiLine,
        label
      })}
      ref={ref}
      style={fullWidthAndHeight}
    />
  );
});

TextArea.displayName = 'TextArea';
