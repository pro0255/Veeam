import { FormFieldEnum } from '../../../FormRenderer/components/FormFields/fieldTypeToComponent'
import { ButtonActions } from '../../../FormRenderer/components/FormFooter/types'
import { FormType } from '../../../types'

export const MORE_RADIO_BUTTONS_FORM: FormType = {
  title: 'More radio buttons form',
  footer: [
    {
      label: 'Save'
    },
    {
      label: 'Clear'
    },
    {
      buttonType: ButtonActions.Alert
    },
    {
      buttonType: ButtonActions.Clear
    }
  ],
  items: [
    {
      label: 'First name',
      type: FormFieldEnum.string
    },
    {
      label: 'Last name',
      type: FormFieldEnum.string
    },
    {
      label: 'Description',
      type: FormFieldEnum.multiLine
    },
    {
      label: 'Are you happy?',
      type: FormFieldEnum.boolean
    },
    {
      label: 'Monday',
      type: FormFieldEnum.enum
    },
    {
      label: 'Tuesday',
      type: FormFieldEnum.enum
    },
    {
      label: 'Wednesday',
      type: FormFieldEnum.enum
    },
    {
      label: 'Thursday',
      type: FormFieldEnum.enum
    },
    {
      label: 'Friday',
      type: FormFieldEnum.enum
    },
    {
      label: 'Saturday',
      type: FormFieldEnum.enum
    },
    {
      label: 'Sunday',
      type: FormFieldEnum.enum
    },
    {
      label: 'Age',
      type: FormFieldEnum.number
    },
    {
      label: 'Today is..',
      type: FormFieldEnum.date
    },
    {
      label: 'Beer',
      type: FormFieldEnum.enum
    },
    {
      label: 'Wine',
      type: FormFieldEnum.enum
    },
    {
      label: 'Watter',
      type: FormFieldEnum.enum
    }
  ]
};
