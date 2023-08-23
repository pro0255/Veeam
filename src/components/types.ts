export enum FormFieldType {
  number = 'NUMBER',
  string = 'TEXT',
  multiLine = 'MULTILINE',
  boolean = 'BOOLEAN',
  date = 'DATE',
  enum = 'ENUM'
}

type FormTitle = string;
type FormButton = {
  label: string;
};
type FormField = {
  label: string;
  type: FormFieldType;
};

export type FormType = {
  title?: FormTitle;
  items: Array<FormField>;
  footer?: Array<FormButton>;
};
