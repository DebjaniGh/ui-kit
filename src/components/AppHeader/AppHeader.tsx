// AppHeader.tsx
import type { ReactNode } from "react";
import styles from "./AppHeader.module.css";

interface AppHeaderProps {
  productIcon?: ReactNode;
  productName: string;
  actions?: ReactNode;
}

export function AppHeader({
  productIcon,
  productName,
  actions,
}: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        {productIcon && (
          <span className={styles.productIcon}>{productIcon}</span>
        )}
        <span className={styles.productName}>{productName}</span>
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}
