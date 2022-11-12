import { PropsWithChildren } from 'react';
import { TabsContext } from './tabs-context';

type TabsProps = PropsWithChildren<{
  /**
   * Active tab identifier
   */
  value: string;
  onValueChange: (value: string) => void;
  className: string;
  activeTabClassName: string;
}>

export default function Tabs({children, value, onValueChange, className, activeTabClassName}: TabsProps) {
  const switchTab = (id: string) => {
    if (id !== value) {
      onValueChange(id);
    }
  };

  return (
    <TabsContext.Provider
      value={{
        activeTab: value,
        switchTab,
        activeTabClassName
      }}
    >
      <ul className={className}>
        {children}
      </ul>
    </TabsContext.Provider>
  );
}
