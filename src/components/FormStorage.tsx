import React, { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { FormType } from './types';
import { createUseEnsuredContext } from '../utils/createUseEnsuredContext';

type FormStorageState = {
  save: (formString: string) => void;
  clear: () => void;
  form: FormType | null;
};

const FormStorage = createContext<FormStorageState>({} as FormStorageState);

type Props = {
  children: ReactNode;
};

export const FormStorageProvider = ({ children }: Props) => {
  const [form, setForm] = useState<null | FormType>(null);

  const save = useCallback((formString: string) => {
    const form = JSON.parse(formString) as FormType;
    setForm(form);
  }, []);

  const clear = useCallback(() => {
    setForm(null);
  }, []);

  const value: FormStorageState = useMemo(() => {
    return {
      save,
      clear,
      form
    };
  }, [clear, form, save]);

  return <FormStorage.Provider value={value}>{children}</FormStorage.Provider>;
};

export const useFormStorageContext = createUseEnsuredContext(FormStorage, 'FormStorage');
