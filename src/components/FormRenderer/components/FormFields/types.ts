import { ReactNode } from 'react';
import { FormFieldEnum } from './fieldTypeToComponent';

export type FormFieldProp = {
  children: ReactNode;
  label: string;
  type: FormFieldEnum;
};

export type FormFieldsProps = {
  items: Array<Omit<FormFieldProp, 'children'>>;
};
