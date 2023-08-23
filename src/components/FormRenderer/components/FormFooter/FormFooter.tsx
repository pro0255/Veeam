import React from 'react';
import { FormFooterProps } from './types';
import { FooterButton } from './FooterButton';

export const FormFooter = ({ buttons }: FormFooterProps) => {
  return (
    <footer
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
      {buttons.map((button) => {
        // While the label might resemble an unsafe key, it should be acceptable for user experience (having buttons with identical labels is incorrect)
        return <FooterButton key={button.label} label={button.label} />;
      })}
    </footer>
  );
};
