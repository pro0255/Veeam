import { FormElements } from '../Form';
import { split } from '../../../../../utils/split';
import { processCommonElements, processRadioElements } from './rest';
import { isRadioInput } from './isElement';

export const createValueFromElements = (formElements: Array<FormElements>): Record<string, any> => {
  const { firstGroup: radioInputGroup, secondGroup: withoutRadioInputGroup } = split(
    formElements,
    isRadioInput
  );

  const commonElementsValue = processCommonElements(withoutRadioInputGroup);
  const radioElementsValue = processRadioElements(radioInputGroup as HTMLInputElement[]);

  return {
    ...commonElementsValue,
    ...radioElementsValue
  };
};
