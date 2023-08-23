import { Checkbox } from './components/Checkbox';
import { RadioButton } from './components/RadioButton';
import { DatePicker } from './components/DatePicker';
import { TextArea } from './components/TextArea';
import { Input } from './components/Input';
import { NumberInput } from './components/NumberInput';

export enum FormFieldEnum {
  number = 'numeric',
  string = 'string',
  multiLine = 'multi-line',
  boolean = 'boolean',
  date = 'date',
  enum = 'enum'
}

export const fieldTypeToComponent = {
  [FormFieldEnum.boolean]: Checkbox,
  [FormFieldEnum.enum]: RadioButton,
  [FormFieldEnum.date]: DatePicker,
  [FormFieldEnum.multiLine]: TextArea,
  [FormFieldEnum.string]: Input,
  [FormFieldEnum.number]: NumberInput
};
