import React from 'react';
import { TwoColumnLayout } from '../layout/TwoColumnLayout';
import { FormEditor } from './FormEditor/FormEditor';
import { FormRenderer } from './FormRenderer/FormRenderer';

export const Solution = () => {
  return (
    <>
      <h1>This is Veeam Solution</h1>
      <TwoColumnLayout left={<FormEditor />} right={<FormRenderer />} />
    </>
  );
};
