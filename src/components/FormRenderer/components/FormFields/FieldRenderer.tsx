import React from 'react'
import { useFormContext } from '../Form/Form'
import { Checkbox } from './components/Checkbox'
import { DatePicker } from './components/DatePicker'
import { Input } from './components/Input'
import { NumberInput } from './components/NumberInput'
import { RadioButton } from './components/RadioButton'
import { TextArea } from './components/TextArea'
import {
  CheckboxProps,
  DatePickerProps,
  InputProps,
  NumberInputProps,
  RadioButtonProps,
  TextAreaProps,
} from './components/types'
import { FormFieldEnum } from './fieldTypeToComponent'

type Props = CheckboxProps &
  InputProps &
  NumberInputProps &
  DatePickerProps &
  TextAreaProps &
  RadioButtonProps & {
    type: FormFieldEnum;
  };

export const FieldRenderer = ({ label, type, setId }: Props) => {
  const { register } = useFormContext();

  switch (type) {
    case FormFieldEnum.boolean: {
      return <Checkbox label={label} ref={register} />;
    }
    case FormFieldEnum.string: {
      return <Input label={label} ref={register} />;
    }
    case FormFieldEnum.enum: {
      return <RadioButton setId={setId} label={label} ref={register} />;
    }
    case FormFieldEnum.multiLine: {
      return <TextArea label={label} ref={register} />;
    }
    case FormFieldEnum.date: {
      return <DatePicker label={label} ref={register} />;
    }
    case FormFieldEnum.number: {
      return <NumberInput label={label} ref={register} />;
    }
  }

  return null;
};
