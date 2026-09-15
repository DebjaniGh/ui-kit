import type { ReactNode } from "react";
import {
  Sidebar,
  type SidebarMenuItem,
} from "../../components/Sidebar/Sidebar";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import styles from "./AppLayout.module.css";

interface AppLayoutProps {
  header: {
    productIcon?: ReactNode;
    productName: string;
    actions?: ReactNode;
  };
  sidebar: {
    isOpen: boolean;
    openIcon: ReactNode;
    closeIcon: ReactNode;
    toggleSidebar: () => void;
    menu: SidebarMenuItem[];
  };
  children: ReactNode;
}

export function AppLayout({ header, sidebar, children }: AppLayoutProps) {
  return (
    <div className={styles.appLayout}>
      <AppHeader {...header} />
      <div className={styles.appBody}>
        <Sidebar {...sidebar} />
        <main className={styles.appContent}>{children}</main>
      </div>
    </div>
  );
}
