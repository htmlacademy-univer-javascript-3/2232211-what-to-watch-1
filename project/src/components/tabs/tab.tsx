import React, { PropsWithChildren } from 'react';
import { TabsContext } from './tabs-context';

type TabProps = PropsWithChildren<{
  /**
   * Tab identifier
   */
  id: string;
  className?: string;
}>

export default function Tab({id, className, children}: TabProps) {
  return (
    <TabsContext.Consumer>
      {(context) => (
        <li
          className={`${className} ${context.activeTab === id && context.activeTabClassName}`}
          onClick={() => context.switchTab(id)}
        >
          {children}
        </li>)}
    </TabsContext.Consumer>
  );
}
