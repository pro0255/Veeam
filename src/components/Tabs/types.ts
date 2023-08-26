import { Key, ReactElement } from 'react'
import { TabType } from './Tabs'

export type TabsProps = {
  tabs: TabType[];
  TabsContent: ReactElement[];
  defaultSelectedTab?: Key;
};
