import React, { PropsWithChildren } from 'react';
import { TABS_CONTEXT } from './tabs-context';

type TabProps = PropsWithChildren<{
  /**
   * Tab identifier
   */
  id: string;
  className?: string;
}>

export default function Tab({id, className, children}: TabProps) {
  return (
    <TABS_CONTEXT.Consumer>
      {(context) => (
        <li
          className={`${className} ${context.activeTab === id && context.activeTabClassName}`}
          onClick={() => context.onSwitchTab(id)}
        >
          {children}
        </li>)}
    </TABS_CONTEXT.Consumer>
  );
}
