import React, { ReactElement, useMemo } from 'react';
import { FieldRenderer } from './FieldRenderer';
import { FieldSet } from './FieldSet';
import { isRadioButton } from './isRadioButton';
import { LabelWrapper } from './LabelWrapper';
import { FormFieldsProps } from './types';

const isLastRadioElement = (
  type: FormFieldsProps['items'][number]['type'],
  currentLoopIndex: number,
  items: FormFieldsProps['items']
) => {
  return isRadioButton(type) && currentLoopIndex === items.length - 1;
};

const pushFieldSet = (target: ReactElement[], fieldSet: ReactElement[], fieldSetLabel: string) => {
  target.push(
    <li key={fieldSetLabel} className="mt-5">
      <FieldSet label={fieldSetLabel}>{fieldSet}</FieldSet>
    </li>
  );
};

const pushFormElement = (
  target: ReactElement[],
  { label, type }: FormFieldsProps['items'][number],
  setId: number
) => {
  target.push(
    <li key={label} className="mt-5">
      <LabelWrapper label={label} type={type}>
        <FieldRenderer type={type} label={label} setId={setId} />
      </LabelWrapper>
    </li>
  );
};

const createFormElements = (items: FormFieldsProps['items']): ReactElement[] => {
  const elements: ReactElement[] = [];

  // Logic which covers the "enum" topic. I want to have these elements wrapped in fieldset and give it a particular label. The correct approach would be edited a JSON into better structure.
  let radioSetId = 0;
  let isRenderingRadio = false;
  // For now, it's "radioElements". Can be edited into "fieldSetElements".
  let radioElements: ReactElement[] = [];

  items.forEach(({ label, type }, index) => {
    const radioSetLabel = `Radio set ${radioSetId}`;

    // Logic which wraps buttons into "fieldSet"
    if (isRadioButton(type)) {
      isRenderingRadio = true;
    }

    // Because last element could be radio without that logic would not be last radioButton fieldSet renderer properly
    if (isLastRadioElement(type, index, items)) {
      pushFieldSet(elements, radioElements, radioSetLabel);
    }

    const differentThenRadioAfterRadio = isRenderingRadio && !isRadioButton(type);

    if (differentThenRadioAfterRadio) {
      // Pushes "radioElements" as fieldSet into form elements
      isRenderingRadio = false;
      pushFieldSet(elements, radioElements, radioSetLabel);
      radioElements = [];
      radioSetId++;
    }

    if (isRenderingRadio) {
      // The target (first argument) differs. The form element is pushed into "fieldSet array".
      pushFormElement(radioElements, { label, type }, radioSetId);
    } else {
      pushFormElement(elements, { label, type }, radioSetId);
    }
  });

  return elements;
};

export const FormFields = ({ items }: FormFieldsProps) => {
  const itemsToRender = useMemo(() => createFormElements(items), [items]);

  return (
    <div className="flex w-full overflow-y-scroll justify-center">
      <ul className="p-10 flex flex-col w-full max-w-[60%]">{itemsToRender}</ul>
    </div>
  );
};
