import { useState, type ReactNode } from "react";
import styles from "../RoutingTab/RoutingTab.module.css";

export interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

interface TabProps {
  tabs: TabItem[];
}

export function Tabs({ tabs }: TabProps) {
  // state
  const [activeKey, setActiveKey] = useState(tabs[0].key);
  const activeTab = tabs.find((tab) => tab.key === activeKey);

  // JSX
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.key}
            className={`${styles.plainTab} ${tab.key === activeKey ? styles.active : ""}`}
            onClick={() => setActiveKey(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{activeTab?.content}</div>
    </div>
  );
}
