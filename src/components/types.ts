import { FormTitleProps } from './FormRenderer/components/FormTitle';
import { FormFooterProps } from './FormRenderer/components/FormFooter/types';
import { FormFieldsProps } from './FormRenderer/components/FormFields/types';

export type Title = FormTitleProps['title'];
export type Buttons = FormFooterProps['buttons'];
export type Fields = FormFieldsProps['items'];

export type FormType = {
  title?: Title;
  items: Fields;
  footer?: Buttons;
};
