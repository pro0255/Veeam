import { Key, ReactElement } from 'react'
import { TabsProps } from './types'

export const check = (args: Pick<TabsProps, 'tabs' | 'TabsContent'>) => {
  checkLength(args);
  checkSameTabIds(args);
};

const checkLength = ({ TabsContent, tabs }: Pick<TabsProps, 'tabs' | 'TabsContent'>) => {
  if (TabsContent.length !== tabs.length) {
    throw new Error('The length of the tabs and their content is not same!');
  }
};

const checkSameTabIds = ({ TabsContent, tabs }: Pick<TabsProps, 'tabs' | 'TabsContent'>) => {
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

export const pickCurrentTabContent = (selectedKey: Key, TabsContent: Array<ReactElement>) => {
  for (const TabContent of TabsContent) {
    if (TabContent.key === selectedKey) {
      return TabContent;
    }
  }

  return null;
};
