import React from 'react'
import { TabType } from '../Tabs'
import { Tab } from './Tab'

type Props = {
  tabs: TabType[];
};

export const TabList = ({ tabs }: Props) => {
  return (
    <ul className="flex flex-row shadow-md">
      {tabs.map(({ tabId, label }) => {
        return (
          <li className="w-full" key={tabId}>
            <Tab tabId={tabId} label={label} />
          </li>
        );
      })}
    </ul>
  );
};
