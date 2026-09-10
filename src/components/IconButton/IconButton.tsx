import type { ReactNode, MouseEvent } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps {
  icon: ReactNode;
  ariaLabel: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export function IconButton({
  icon,
  ariaLabel,
  onClick,
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={styles.button}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  );
}
