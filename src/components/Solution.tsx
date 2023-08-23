import React from 'react';
import { TwoColumnLayout } from '../layout/TwoColumnLayout';
import { FormEditor } from './FormEditor/FormEditor';
import { FormRenderer } from './FormRenderer/FormRenderer';
import { FormStorageProvider } from './FormStorage';

const VEEAM_LINK = 'https://www.veeam.com/cz';

export const Solution = () => {
  return (
    <>
      <h1>
        <a target={'_blank'} rel={'noopener noreferrer'} href={VEEAM_LINK}>
          Veeam Solution
        </a>
      </h1>
      <FormStorageProvider>
        <TwoColumnLayout left={<FormEditor />} right={<FormRenderer />} />
      </FormStorageProvider>
    </>
  );
};
