import React from 'react';
import { FormEditor } from './FormEditor/FormEditor';
import { FormRenderer } from './FormRenderer/FormRenderer';
import { FormStorageProvider } from './FormStorage';
import { TabType, Tabs } from './Tabs/Tabs';

export enum TabEnum {
  Config = 'Config',
  Result = 'Result'
}

const TABS: TabType[] = [
  {
    label: 'Config',
    tabId: TabEnum.Config
  },
  {
    label: 'Result',
    tabId: TabEnum.Result
  }
];

export const Solution = () => {
  return (
    <FormStorageProvider>
      <Tabs
        tabs={TABS}
        TabsContent={[<FormEditor key={TabEnum.Config} />, <FormRenderer key={TabEnum.Result} />]}
      />
    </FormStorageProvider>
  );
};
