import { RadioButtonProps } from '../components/FormFields/components/types'
import { FormFieldEnum } from '../components/FormFields/fieldTypeToComponent'

type Args = {
  label: string;
  type: FormFieldEnum;
};
export const createFieldId = ({ type, label }: Args) => {
  return `${label}-${type}`;
};

export const createRadioButtonId = ({ setId, ...args }: Args & Pick<RadioButtonProps, 'setId'>) => {
  return `${createFieldId(args)}-${setId}`;
};
