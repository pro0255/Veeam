import { FormFieldsProps } from './FormRenderer/components/FormFields/types'
import { FormFooterProps } from './FormRenderer/components/FormFooter/types'
import { FormTitleProps } from './FormRenderer/components/FormTitle'

export type Title = FormTitleProps['title'];
export type Buttons = FormFooterProps['buttons'];
export type Fields = FormFieldsProps['items'];

export type FormType = {
  title?: Title;
  items: Fields;
  footer?: Buttons;
};
