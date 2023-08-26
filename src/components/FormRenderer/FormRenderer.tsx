import React from 'react'
import { useFormStorageContext } from '../FormStorage'
import { EmptyForm } from './components/EmptyForm'
import { FormProvider } from './components/Form/Form'
import { FormView } from './FormView'

export const FormRenderer = () => {
  const formStorage = useFormStorageContext();
  const form = formStorage.form;

  const areEmptyItems = form?.items.length === 0;

  if (form === null || areEmptyItems) {
    return <EmptyForm />;
  }

  return (
    <FormProvider>
      <FormView {...form} />
    </FormProvider>
  );
};
