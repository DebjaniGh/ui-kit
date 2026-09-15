import type { ReactNode } from "react";
import { Sidebar, type SidebarProps } from "../../components/Sidebar/Sidebar";
import {
  AppHeader,
  type AppHeaderProps,
} from "../../components/AppHeader/AppHeader";
import styles from "./AppLayout.module.css";

interface AppLayoutProps {
  header: AppHeaderProps;
  sidebar: SidebarProps;
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
