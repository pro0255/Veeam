import React from 'react'
import { ButtonRenderer, buttonRendererKey } from './ButtonRenderer'
import { FormFooterProps } from './types'

export const FormFooter = ({ buttons }: FormFooterProps) => {
  return (
    <footer className="p-10 w-full flex flex-row border-t-2 border-gray-200 justify-end items-center">
      {buttons.map((button) => {
        return <ButtonRenderer button={button} key={buttonRendererKey(button)} />;
      })}
    </footer>
  );
};
