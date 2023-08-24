import { FormTitle } from './components/FormTitle';
import { FormFields } from './components/FormFields/FormFields';
import { FormFooter } from './components/FormFooter/FormFooter';
import React, { FormEvent } from 'react';
import { FormType } from '../types';
import { useFormContext } from './components/Form/Form';

type Props = FormType;

export const FormView = ({ items, footer, title }: Props) => {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: 'solid 1px white',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
      {title && (
        <div
          style={{
            width: '100%',
            border: 'solid 1px white',
            marginBottom: '20px'
          }}>
          <FormTitle title={title} />
        </div>
      )}
      <div
        style={{
          display: 'grid',
          wordWrap: 'break-word',
          gridTemplateColumns: '30% 70%',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'start',
          width: '90%'
        }}>
        <FormFields items={items} />
      </div>
      {footer && <FormFooter buttons={footer} />}
    </form>
  );
};
