import { NavLink, Outlet } from "react-router-dom";
import styles from "./Tab.module.css";

export interface TabItem {
  label: string;
  path: string;
}

interface TabsProps {
  tabs: TabItem[];
}

/** URL-driven tabs */
export function Tabs({ tabs }: TabsProps) {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `${styles.tab} ${isActive ? styles.active : ""}`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <div className={styles.tabContent}>
        <Outlet />
      </div>
    </div>
  );
}
