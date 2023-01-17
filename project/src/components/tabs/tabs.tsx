import { PropsWithChildren } from 'react';
import { TABS_CONTEXT } from './tabs-context';

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
    <TABS_CONTEXT.Provider
      value={{
        activeTab: value,
        onSwitchTab: switchTab,
        activeTabClassName
      }}
    >
      <ul className={className}>
        {children}
      </ul>
    </TABS_CONTEXT.Provider>
  );
}
