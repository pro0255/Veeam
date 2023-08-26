import { FormFieldEnum } from '../../../FormRenderer/components/FormFields/fieldTypeToComponent'
import { Fields, FormType } from '../../../types'

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

export const VALUE_ALL_FIELDS_FORM: FormType = {
  title: 'All fields form',
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
  items: [
    ...createAllFields(),
    {
      label: 'test2',
      type: FormFieldEnum.enum
    }
  ]
};
