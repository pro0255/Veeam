import React from 'react';
import { FormFieldsProps } from './types';
import { LabelWrapper } from './LabelWrapper';
import { isRadioButton } from './isRadioButton';
import { FieldRenderer } from './FieldRenderer';

export const FormFields = ({ items }: FormFieldsProps) => {
  let radioSet = 0;
  let renderingRadio = false;

  return (
    <div className="flex w-full overflow-y-scroll justify-center">
      <ul className="p-10 flex flex-col w-full max-w-[60%]">
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
            <li key={label} className="mt-5">
              <LabelWrapper key={label} label={label} type={type}>
                <FieldRenderer type={type} label={label} setId={radioSet} />
              </LabelWrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
