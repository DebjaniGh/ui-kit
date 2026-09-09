import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  footer?: ReactNode;
  children: ReactNode;
}
export function Card({ title, footer, children }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardContent}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}
