import React from 'react';
import { useFormStorageContext } from '../FormStorage';
import { EmptyForm } from './components/EmptyForm';
import { FormTitle } from './components/FormTitle';
import { FormFooter } from './components/FormFooter/FormFooter';

export const FormRenderer = () => {
  const formStorage = useFormStorageContext();
  const form = formStorage.form;

  if (form === null) {
    return <EmptyForm />;
  }

  const { items, footer, title } = form;

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: 'solid 1px white',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      {title && <FormTitle title={title} />}

      {footer && <FormFooter buttons={footer} />}
    </form>
  );
};
