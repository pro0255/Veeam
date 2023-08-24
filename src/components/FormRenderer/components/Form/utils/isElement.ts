import { FormElements } from '../Form';

export const isCheckbox = (element: FormElements) => {
  return element.type === 'checkbox';
};

export const isRadioInput = (element: FormElements) => {
  return element.type === 'radio';
};
