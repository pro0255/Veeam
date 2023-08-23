import React, { createContext, ReactNode, useCallback, useMemo } from 'react';
import { createUseEnsuredContext } from '../../../utils/createUseEnsuredContext';

type FormValue = {
  register: React.RefAttributes<any>['ref'];
};

const FormContext = createContext<FormValue>({} as FormValue);

type Props = {
  children: ReactNode;
};

export const FormProvider = ({ children }: Props) => {
  const register: React.RefAttributes<any>['ref'] = (formFieldReference) => {
    console.log(formFieldReference);
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
