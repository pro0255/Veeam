import { Fields, FormType } from '../../types';
import { FormFieldEnum } from '../../FormRenderer/components/FormFields/fieldTypeToComponent';

// Functions which helps to create all types of fields
const createAllFields = () => {
  return Object.values(FormFieldEnum).map((fieldValue) => {
    const value: Fields[number] = {
      type: fieldValue as FormFieldEnum,
      label: fieldValue
    };
    return value;
  });
};

export const DEFAULT_EDITOR_VALUE: FormType = {
  title: 'This is example form',
  footer: [
    {
      label: 'OK'
    },
    {
      label: 'Cancel'
    },
    {
      label: 'Apply'
    }
  ],
  items: createAllFields()
};
