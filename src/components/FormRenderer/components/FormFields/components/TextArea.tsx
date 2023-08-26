import React, { forwardRef } from 'react'
import { createFieldId } from '../../../utils/createFieldId'
import { FormFieldEnum } from '../fieldTypeToComponent'
import { TextAreaProps } from './types'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label }, ref) => {
  return (
    <textarea
      className="w-full p-4 border-solid border-2 border-gray-300 rounded hover:bg-gray-200 focus:bg-white rounded min-h-[120px] resize-none focus:ring-0 hover:animate-make-bigger"
      id={createFieldId({
        type: FormFieldEnum.multiLine,
        label
      })}
      ref={ref}
      name={label}
    />
  );
});

TextArea.displayName = 'TextArea';
