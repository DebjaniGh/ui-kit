import { NavLink, Outlet } from "react-router-dom";
import styles from "./RoutingTab.module.css";

export interface RoutingTabItem {
  label: string;
  path: string;
}

interface RoutingTabsProps {
  tabs: RoutingTabItem[];
}

/** URL-driven tabs */
export function RoutingTabs({ tabs }: RoutingTabsProps) {
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
