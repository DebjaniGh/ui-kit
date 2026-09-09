import type { ReactNode } from "react";
import styles from "./StatusIndicator.module.css";

export type Status = "healthy" | "warning" | "critical" | "unknown";

const statusStyles: Record<Status, string> = {
  healthy: styles.healthy,
  warning: styles.warning,
  critical: styles.critical,
  unknown: styles.unknown,
};

const statusLabels: Record<Status, string> = {
  healthy: "Healthy",
  warning: "Warning",
  critical: "Critical",
  unknown: "Unknown",
};

interface StatusIndicatorProps {
  title: string;
  status: Status;
  icon: ReactNode;
}

export function StatusIndicator({ title, status, icon }: StatusIndicatorProps) {
  return (
    <div className={`${styles.statusCard} ${statusStyles[status]}`}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.statusContainer}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.statusVal}>{statusLabels[status]}</div>
      </div>
    </div>
  );
}
