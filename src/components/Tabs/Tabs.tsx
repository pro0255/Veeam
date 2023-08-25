import React, { createContext, Key, ReactElement, useCallback, useMemo, useState } from 'react';
import { createUseEnsuredContext } from '../../utils/createUseEnsuredContext';
import { Tab } from './components/Tab';

type TabsValue = {
  moveToTab: (key: Key) => void;
  selectedTab: Key;
};

const TabsContext = createContext<TabsValue>({} as TabsValue);

export type TabType = {
  label: string;
  tabId: Key;
};

type Props = {
  tabs: TabType[];
  TabsContent: ReactElement[];
};

export const Tabs = ({ TabsContent, tabs }: Props) => {
  check({ TabsContent, tabs });

  const [selectedTab, setSelectedTab] = useState<Key>(() => {
    const firstTabContentKey = TabsContent[0].key;
    if (!firstTabContentKey) {
      throw new Error('Any of tabs should exist');
    }
    return firstTabContentKey;
  });

  console.log(selectedTab);

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
      <div>
        <ul>
          {tabs.map(({ tabId, label }) => {
            return (
              <li key={tabId}>
                <Tab tabId={tabId} label={label} />
              </li>
            );
          })}
        </ul>
        <main>{Content}</main>
      </div>
    </TabsContext.Provider>
  );
};

export const useTabsContext = createUseEnsuredContext(TabsContext, 'TabsContext');

const check = (args: Pick<Props, 'tabs' | 'TabsContent'>) => {
  checkLength(args);
  checkSameTabIds(args);
};

const checkLength = ({ TabsContent, tabs }: Pick<Props, 'tabs' | 'TabsContent'>) => {
  if (TabsContent.length !== tabs.length) {
    throw new Error('The length of the tabs and their content is not same!');
  }
};

const checkSameTabIds = ({ TabsContent, tabs }: Pick<Props, 'tabs' | 'TabsContent'>) => {
  const tabIds = tabs.map((tab) => tab.tabId);
  const notAllTabIdsExists = !TabsContent.every((TabContent) => {
    if (TabContent.key === null) {
      throw new Error('Some TabContent is without a id');
    }

    return tabIds.includes(TabContent.key);
  });

  if (notAllTabIdsExists) {
    throw new Error('The keys should be same as for content so for tabs!');
  }
};

const pickCurrentTabContent = (selectedKey: Key, TabsContent: Array<ReactElement>) => {
  for (const TabContent of TabsContent) {
    if (TabContent.key === selectedKey) {
      return TabContent;
    }
  }

  return null;
};
