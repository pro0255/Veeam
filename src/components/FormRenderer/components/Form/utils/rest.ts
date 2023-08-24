import { FormElements } from '../Form';

export const processCommonElements = (elements: FormElements[]) => {
  const values: Record<string, string> = {};

  elements.forEach((element) => {
    const { name, value } = element;
    values[name] = value;
  });

  return values;
};

const createGroups = (radioButtons: HTMLInputElement[]): Record<string, HTMLInputElement[]> => {
  const regex = /__\d__/;
  const groups: Record<number, HTMLInputElement[]> = {};

  radioButtons.forEach((radioButton) => {
    const match = radioButton.name.match(regex);

    if (match !== null) {
      const setIdString = match[0].replaceAll('_', '');

      const setId = Number(setIdString);

      if (!groups[setId]) {
        groups[setId] = [];
      }

      groups[setId].push(radioButton);
    }
  });

  return groups;
};

const processGroups = (
  groupToRadioButtons: Record<string, HTMLInputElement[]>
): Record<number, string> => {
  const setToValue: Record<string, string> = {};

  Object.entries(groupToRadioButtons).forEach(([setId, radioButtons]) => {
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        setToValue[setId] = radioButton.value;
        break;
      }
    }
  });

  console.log(setToValue);

  return setToValue;
};

export const processRadioElements = (radioButtons: HTMLInputElement[]) => {
  const groups = createGroups(radioButtons);
  return processGroups(groups);
};
