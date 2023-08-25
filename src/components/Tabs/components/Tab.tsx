import React, { Key } from 'react';
import { useTabsContext } from '../Tabs';

type Props = {
  label: string;
  tabId: Key;
};

export const Tab = ({ tabId, label }: Props) => {
  const { moveToTab } = useTabsContext();

  const moveToDifferentTab = () => {
    console.log(tabId);
    moveToTab(tabId);
  };

  return <button onClick={moveToDifferentTab}>{label}</button>;
};
