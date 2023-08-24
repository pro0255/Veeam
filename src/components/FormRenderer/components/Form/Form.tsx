import React, { createContext, ReactNode, useRef } from 'react';
import { createUseEnsuredContext } from '../../../../utils/createUseEnsuredContext';
import { clearElements } from './utils/clearElements';
import { createValueFromElements } from './utils/createValueFromElements';

type FormValue<TData extends object = object> = {
  register: React.RefAttributes<any>['ref'];
  clear: () => void;
  getValues: () => TData;
};

const FormContext = createContext<FormValue>({} as FormValue);

type Props = {
  children: ReactNode;
};

export type FormElements = HTMLInputElement | HTMLTextAreaElement;

export const FormProvider = ({ children }: Props) => {
  const formFields = useRef<Array<FormElements>>([]);

  const register: React.RefAttributes<any>['ref'] = (formFieldReference: FormElements) => {
    formFields.current.push(formFieldReference);
  };

  const clear = () => {
    clearElements(formFields.current);
  };

  const getValues = () => {
    return createValueFromElements(formFields.current);
  };

  return (
    <FormContext.Provider
      value={{
        register,
        clear,
        getValues
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = createUseEnsuredContext(FormContext, 'FormContext');
