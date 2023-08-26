import React from 'react'
import { createFieldId } from '../../utils/createFieldId'
import { FormFieldEnum } from './fieldTypeToComponent'
import { FormFieldProp } from './types'

const AboveLabel = ({ label, type, children }: FormFieldProp) => {
  return (
    <div className="w-full">
      <label
        className="block text-gray-400 text-sm mb-2 mt-2"
        htmlFor={createFieldId({
          label,
          type
        })}>
        {label}
      </label>
      {children}
    </div>
  );
};

const RightLabel = ({ label, type, children }: FormFieldProp) => {
  return (
    <div className="flex flex-row items-center">
      {children}
      <label
        className="ml-2 block text-gray-400 text-sm mb-2 mt-2"
        htmlFor={createFieldId({
          label,
          type
        })}>
        {label}
      </label>
    </div>
  );
};

const typeToLabel = {
  [FormFieldEnum.boolean]: RightLabel,
  [FormFieldEnum.string]: AboveLabel,
  [FormFieldEnum.enum]: RightLabel,
  [FormFieldEnum.multiLine]: AboveLabel,
  [FormFieldEnum.date]: AboveLabel,
  [FormFieldEnum.number]: AboveLabel
};

export const LabelWrapper = ({ children, label, type }: FormFieldProp) => {
  const Label = typeToLabel[type];
  return (
    <React.Fragment>
      <Label label={label} type={type}>
        {children}
      </Label>
    </React.Fragment>
  );
};
