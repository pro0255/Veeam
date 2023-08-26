import { split } from '../../../../../utils/split'
import { FormElements } from '../Form'
import { isCheckbox, isRadioInput } from './isElement'

export const clearElements = (formElements: Array<FormElements>) => {
  const { firstGroup: radioInputGroup, secondGroup: withoutRadioInputGroup } = split(
    formElements,
    isRadioInput
  );

  const { firstGroup: checkboxesGroup, secondGroup: commonElements } = split(
    withoutRadioInputGroup,
    isCheckbox
  );

  commonElements.forEach((element) => {
    element.value = '';
  });

  (radioInputGroup as Array<HTMLInputElement>).forEach((radioButton) => {
    radioButton.checked = false;
  });

  (checkboxesGroup as Array<HTMLInputElement>).forEach((checkbox) => {
    checkbox.checked = false;
  });
};
