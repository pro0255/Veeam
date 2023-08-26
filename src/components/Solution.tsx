import React from 'react'
import { FormEditor } from './FormEditor/FormEditor'
import { FormRenderer } from './FormRenderer/FormRenderer'
import { FormStorageProvider } from './FormStorage'
import { Tabs, TabType } from './Tabs/Tabs'

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
    <div className="w-full h-screen">
      <FormStorageProvider>
        <Tabs
          tabs={TABS}
          TabsContent={[<FormEditor key={TabEnum.Config} />, <FormRenderer key={TabEnum.Result} />]}
        />
      </FormStorageProvider>
    </div>
  );
};
