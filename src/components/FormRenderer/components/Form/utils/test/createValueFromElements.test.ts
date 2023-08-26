import { FormElements } from '../../Form'
import { createRadioButtonName } from '../createRadioButtonName'
import { createValueFromElements } from '../createValueFromElements'

const MOCKED_INPUT: HTMLInputElement = {
  name: 'input',
  value: 'input',
  type: 'text'
} as HTMLInputElement;

const MOCKED_TEXTAREA: HTMLTextAreaElement = {
  name: 'textarea',
  value: 'textarea'
} as HTMLTextAreaElement;

const MOCKED_RADIO_1_SET_1: HTMLInputElement = {
  name: createRadioButtonName(1),
  value: 'radio_1',
  checked: true,
  type: 'radio'
} as HTMLInputElement;

const MOCKED_RADIO_2_SET_1: HTMLInputElement = {
  name: createRadioButtonName(1),
  value: 'radio_2',
  checked: false,
  type: 'radio'
} as HTMLInputElement;

const MOCKED_RADIO_3_SET_1: HTMLInputElement = {
  name: createRadioButtonName(1),
  value: 'radio_3',
  checked: false,
  type: 'radio'
} as HTMLInputElement;

const MOCKED_CHECKBOX: HTMLInputElement = {
  name: 'checkbox',
  type: 'checkbox',
  value: 'off',
  checked: true
} as HTMLInputElement;

const MOCKED_RADIO_1_SET_2: HTMLInputElement = {
  name: createRadioButtonName(2),
  value: 'radio_2',
  checked: false,
  type: 'radio'
} as HTMLInputElement;

const MOCKED_RADIO_2_SET_2: HTMLInputElement = {
  name: createRadioButtonName(2),
  value: 'radio_3',
  checked: false,
  type: 'radio'
} as HTMLInputElement;

const MOCKED_ELEMENTS: Array<FormElements> = [
  MOCKED_INPUT,
  MOCKED_TEXTAREA,
  MOCKED_RADIO_1_SET_1,
  MOCKED_RADIO_2_SET_1,
  MOCKED_RADIO_3_SET_1,
  MOCKED_CHECKBOX,
  MOCKED_RADIO_1_SET_2,
  MOCKED_RADIO_2_SET_2
];

describe('createValueFromElements', () => {
  it('when have 1 input, 1 textarea, 3 radiobuttons (first set), 1 checkbox and another 2 radiobttons (second set), then return result with 5 values', () => {
    const expected = {
      input: 'input',
      textarea: 'textarea',
      '1': 'radio_1',
      checkbox: 'off'
    };
    const values = createValueFromElements(MOCKED_ELEMENTS);

    expect(values).toEqual(expected);
  });
});

export { };

