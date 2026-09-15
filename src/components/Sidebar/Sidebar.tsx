import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export interface SidebarMenuItem {
  label: string;
  icon: ReactNode;
  path: string;
}

export interface SidebarProps {
  isOpen: boolean;
  openIcon: ReactNode;
  closeIcon: ReactNode;
  toggleSidebar: () => void;
  menu: SidebarMenuItem[];
}

export function Sidebar({
  isOpen,
  openIcon,
  closeIcon,
  toggleSidebar,
  menu,
}: SidebarProps) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? "" : styles.collapsed}`}>
      <ul className={styles.sidebarMenu}>
        {menu.map((item) => (
          <li className={styles.menuItem} key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${styles.menuLink} ${isActive ? styles.active : ""}`
              }
            >
              <span className={styles.menuIcon}>{item.icon}</span>
              {isOpen && <span className={styles.menuLabel}>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={toggleSidebar}
        className={styles.sidebarBtn}
      >
        {isOpen ? openIcon : closeIcon}
      </button>
    </div>
  );
}
