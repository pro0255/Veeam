import React, { createContext, ReactNode, useCallback, useMemo, useRef } from 'react';
import { createUseEnsuredContext } from '../../../utils/createUseEnsuredContext';

type FormValue = {
  register: React.RefAttributes<any>['ref'];
};

const FormContext = createContext<FormValue>({} as FormValue);

type Props = {
  children: ReactNode;
};

export const FormProvider = ({ children }: Props) => {
  const formFields = useRef<Array<HTMLElement>>([]);

  const register: React.RefAttributes<any>['ref'] = (formFieldReference) => {
    formFields.current.push(formFieldReference);
  };

  return (
    <FormContext.Provider
      value={{
        register
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = createUseEnsuredContext(FormContext, 'FormContext');
