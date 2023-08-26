import React, { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { createUseEnsuredContext } from '../utils/createUseEnsuredContext'
import { FormType } from './types'

type FormStorageValue = {
  save: (formString: string) => void;
  clear: () => void;
  form: FormType | null;
};

const FormStorageContext = createContext<FormStorageValue>({} as FormStorageValue);

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

  const value: FormStorageValue = useMemo(() => {
    return {
      save,
      clear,
      form
    };
  }, [clear, form, save]);

  return <FormStorageContext.Provider value={value}>{children}</FormStorageContext.Provider>;
};

export const useFormStorageContext = createUseEnsuredContext(FormStorageContext, 'FormStorage');
