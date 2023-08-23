import React from 'react';
import { useFormStorageContext } from '../FormStorage';

export const FormRenderer = () => {
  const formStorage = useFormStorageContext();

  return <div>{JSON.stringify(formStorage.form)}</div>;
};
