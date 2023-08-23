import React from 'react';
import { useFormStorageContext } from '../FormStorage';
import { EmptyForm } from './components/EmptyForm';
import { FormTitle } from './components/FormTitle';
import { FormFooter } from './components/FormFooter/FormFooter';
import { FormFields } from './components/FormFields/FormFields';
import { FormProvider } from './components/Form';

export const FormRenderer = () => {
  const formStorage = useFormStorageContext();
  const form = formStorage.form;

  const areEmptyItems = form?.items.length === 0;

  if (form === null || areEmptyItems) {
    return <EmptyForm />;
  }

  const { items, footer, title } = form;

  return (
    <FormProvider>
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
    </FormProvider>
  );
};
