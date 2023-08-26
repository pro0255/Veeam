import React, { ReactNode } from 'react';
import { LabelWrapper } from './LabelWrapper';
import { FormFieldEnum } from './fieldTypeToComponent';

type Props = {
  children: ReactNode[];
  label: string;
};

export const FieldSet = ({ children, label }: Props) => {
  return (
    // I am using a type string. It's not a correct approach but for my case is better than extra type
    <LabelWrapper label={label} type={FormFieldEnum.string}>
      <fieldset className="p-2 px-8">{children}</fieldset>
    </LabelWrapper>
  );
};
