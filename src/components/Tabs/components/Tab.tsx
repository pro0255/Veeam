import React, { Key } from 'react'
import { useTabsContext } from '../Tabs'

type Props = {
  label: string;
  tabId: Key;
};

export const Tab = ({ tabId, label }: Props) => {
  const { moveToTab, selectedTab } = useTabsContext();

  const isActive = selectedTab === tabId;

  const moveToDifferentTab = () => {
    moveToTab(tabId);
  };

  return (
    <button
      className={`w-full p-3 hover:text-blue-600 hover:border-b-2 border-blue-600 ${
        isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''
      }`}
      onClick={moveToDifferentTab}>
      {label}
    </button>
  );
};
