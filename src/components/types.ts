import { FormTitleProps } from './FormRenderer/components/FormTitle';
import { FormFooterProps } from './FormRenderer/components/FormFooter/types';

export enum FormField {
  number = 'NUMBER',
  string = 'TEXT',
  multiLine = 'MULTILINE',
  boolean = 'BOOLEAN',
  date = 'DATE',
  enum = 'ENUM'
}

export type Title = FormTitleProps['title'];
export type Buttons = FormFooterProps['buttons'];

export type FormFieldType = {
  label: string;
  type: FormField;
};

export type FormType = {
  title?: Title;
  items: Array<FormField>;
  footer?: Buttons;
};
