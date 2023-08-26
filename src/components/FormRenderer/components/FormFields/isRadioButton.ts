import { FormFieldEnum } from './fieldTypeToComponent'

export const isRadioButton = (type: FormFieldEnum) => {
  return type === FormFieldEnum.enum;
};
