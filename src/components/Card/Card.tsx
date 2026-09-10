import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  footer?: ReactNode;
  children: ReactNode;
}
/**
 * Titled container for a section of page content.
 *
 * `footer` is a ReactNode rather than a string so callers can pass a link or
 * button ("View All") instead of plain text; when omitted the footer row is
 * not rendered at all, avoiding an empty bordered strip.
 */
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
