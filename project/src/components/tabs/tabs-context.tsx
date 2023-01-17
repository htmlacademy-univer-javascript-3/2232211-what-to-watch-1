import React from 'react';

export interface TabsContextType {
  activeTab: string;
  onSwitchTab: (id: string) => void;
  activeTabClassName: string;
}

export const TABS_CONTEXT_DEFAULT_VALUE: TabsContextType = {
  activeTab: '',
  onSwitchTab: () => {throw new Error();}, // потому что пустые функции запретили в eslint'e
  activeTabClassName: '',
};

export const TABS_CONTEXT = React.createContext<TabsContextType>(TABS_CONTEXT_DEFAULT_VALUE);
