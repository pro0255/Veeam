import { FC, MouseEvent } from 'react'

export type FooterButtonProps = {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export enum ButtonActions {
  Alert = 'Alert',
  Clear = 'Clear'
}

export type LabelButton = Omit<FooterButtonProps, 'onClick'>;
export type ActionButton = {
  buttonType: ButtonActions;
};
export type FooterButtonFC<P extends object = object> = FC<P> & {
  footerId: ButtonActions;
};

export type ButtonRendererProps = LabelButton | ActionButton;

export type FormFooterProps = {
  buttons: Array<ButtonRendererProps>;
};
