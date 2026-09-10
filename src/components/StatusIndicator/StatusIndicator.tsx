import type { ReactNode } from "react";
import styles from "./StatusIndicator.module.css";

/** The health states a StatusIndicator can report. */
export type Status = "healthy" | "warning" | "critical" | "unknown";

// Status -> presentation lookups, kept at module scope so they are built once
// rather than on every render.
//
// Typing these as Record<Status, ...> is deliberate: adding a member to Status
// turns every incomplete map below into a compile error, so a new status can
// never silently render unstyled or unlabelled.
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

/**
 * Card reporting the health of one subsystem ("Cooling", "Memory", ...).
 *
 * The caller supplies the `icon` so the kit stays free of bundled artwork;
 * colour and wording come from `status` alone.
 */
export function StatusIndicator({ title, status, icon }: StatusIndicatorProps) {
  return (
    // Base class carries the shared card shape; the status class layers the
    // background and text colour over it.
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
