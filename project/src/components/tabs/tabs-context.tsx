import React from 'react';

export interface TabsContextType {
  activeTab: string;
  switchTab: (id: string) => void;
  activeTabClassName: string;
}

export const TabsContextDefaultValue: TabsContextType = {
  activeTab: '',
  switchTab: () => {throw new Error();}, // потому что пустые функции запретили в eslint'e
  activeTabClassName: '',
};

export const TabsContext = React.createContext<TabsContextType>(TabsContextDefaultValue);
