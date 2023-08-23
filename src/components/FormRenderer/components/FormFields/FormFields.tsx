import React from 'react';
import { FormFieldsProps } from './types';
import { fieldTypeToComponent } from './fieldTypeToComponent';
import { LabelWrapper } from './LabelWrapper';
import { useFormContext } from '../Form';
import { isRadioButton } from './isRadioButton';
import { RadioButton } from './components/RadioButton';
import { FieldRenderer } from './FieldRenderer';

export const FormFields = ({ items }: FormFieldsProps) => {
  let radioSet = 0;
  let renderingRadio = false;

  return (
    <>
      {items.map(({ label, type }) => {
        // Logic which wraps buttons into "fieldSet"
        if (isRadioButton(type)) {
          renderingRadio = true;
        }
        if (renderingRadio && !isRadioButton(type)) {
          renderingRadio = false;
          radioSet++;
        }

        return (
          <LabelWrapper key={label} label={label} type={type}>
            <FieldRenderer type={type} label={label} setId={radioSet} />
          </LabelWrapper>
        );
      })}
    </>
  );
};
