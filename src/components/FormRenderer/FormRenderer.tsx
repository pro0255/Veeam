import React from 'react';
import { useFormStorageContext } from '../FormStorage';
import { EmptyForm } from './components/EmptyForm';
import { FormTitle } from './components/FormTitle';
import { FormFooter } from './components/FormFooter/FormFooter';
import { FormFields } from './components/FormFields/FormFields';

export const FormRenderer = () => {
  const formStorage = useFormStorageContext();
  const form = formStorage.form;

  const areEmptyItems = form?.items.length === 0;

  if (form === null || areEmptyItems) {
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
      {title && <FormTitle title={title} />}
      <div
        style={{
          display: 'grid',
          wordWrap: 'break-word',
          gridTemplateColumns: '20% 90%',
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
