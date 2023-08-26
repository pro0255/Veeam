import React, { ReactElement } from 'react'
import { FieldRenderer } from './FieldRenderer'
import { FieldSet } from './FieldSet'
import { isRadioButton } from './isRadioButton'
import { LabelWrapper } from './LabelWrapper'
import { FormFieldsProps } from './types'

const createFormElements = (items: FormFieldsProps['items']): ReactElement[] => {
  const elements: ReactElement[] = [];

  let radioSet = 0;
  let renderingRadio = false;
  let radioElements: ReactElement[] = [];

  items.forEach(({ label, type }, index) => {
    const radioSetLabel = `Radio set ${radioSet}`;
    // Logic which wraps buttons into "fieldSet"
    if (isRadioButton(type)) {
      renderingRadio = true;
    }

    if (isRadioButton(type) && index === items.length - 1) {
      elements.push(
        <li key={radioSetLabel} className="mt-5">
          <FieldSet label={radioSetLabel}>{radioElements}</FieldSet>
        </li>
      );
    }

    if (renderingRadio && !isRadioButton(type)) {
      renderingRadio = false;
      elements.push(
        <li key={radioSetLabel} className="mt-5">
          <FieldSet label={radioSetLabel}>{radioElements}</FieldSet>
        </li>
      );
      radioElements = [];
      radioSet++;
    }

    if (renderingRadio) {
      radioElements.push(
        <li key={label} className="mt-5">
          <LabelWrapper label={label} type={type}>
            <FieldRenderer type={type} label={label} setId={radioSet} />
          </LabelWrapper>
        </li>
      );
    } else {
      elements.push(
        <li key={label} className="mt-5">
          <LabelWrapper key={label} label={label} type={type}>
            <FieldRenderer type={type} label={label} setId={radioSet} />
          </LabelWrapper>
        </li>
      );
    }
  });

  return elements;
};

export const FormFields = ({ items }: FormFieldsProps) => {
  return (
    <div className="flex w-full overflow-y-scroll justify-center">
      <ul className="p-10 flex flex-col w-full max-w-[60%]">{createFormElements(items)}</ul>
    </div>
  );
};
