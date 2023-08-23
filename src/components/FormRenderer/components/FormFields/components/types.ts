type BaseProps = {
  label: string;
};

export type CheckboxProps = BaseProps;
export type InputProps = BaseProps;
export type NumberInputProps = BaseProps;
export type DatePickerProps = BaseProps;
export type TextAreaProps = BaseProps;
export type RadioButtonProps = BaseProps & {
  setId: number;
};
