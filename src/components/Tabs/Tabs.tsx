import React, { createContext, Key, useCallback, useMemo, useState } from 'react';
import { createUseEnsuredContext } from '../../utils/createUseEnsuredContext';
import { Tab } from './components/Tab';
import { TabsProps } from './types';
import { check, pickCurrentTabContent } from './utils';

type TabsValue = {
  moveToTab: (key: Key) => void;
  selectedTab: Key;
};

const TabsContext = createContext<TabsValue>({} as TabsValue);

export type TabType = {
  label: string;
  tabId: Key;
};

export const Tabs = ({ TabsContent, tabs, defaultSelectedTab }: TabsProps) => {
  check({ TabsContent, tabs });

  const [selectedTab, setSelectedTab] = useState<Key>(() => {
    if (defaultSelectedTab) {
      return defaultSelectedTab;
    }

    const firstTabId = tabs[0].tabId;
    if (!firstTabId) {
      throw new Error('Any of tabs should exist');
    }
    return firstTabId;
  });

  const moveToDifferentTab = useCallback((key: Key) => {
    setSelectedTab(key);
  }, []);

  const value: TabsValue = useMemo(() => {
    return {
      moveToTab: moveToDifferentTab,
      selectedTab
    };
  }, [moveToDifferentTab, selectedTab]);

  const Content = pickCurrentTabContent(selectedTab, TabsContent);

  return (
    <TabsContext.Provider value={value}>
      <ul className="flex flex-row shadow-md">
        {tabs.map(({ tabId, label }) => {
          return (
            <li className="w-full" key={tabId}>
              <Tab tabId={tabId} label={label} />
            </li>
          );
        })}
      </ul>
      <div className="w-full flex justify-center">{Content}</div>
    </TabsContext.Provider>
  );
};

export const useTabsContext = createUseEnsuredContext(TabsContext, 'TabsContext');
