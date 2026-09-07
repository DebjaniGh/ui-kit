import type { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export function Button({
  label,
  icon,
  iconPosition = "start",
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${variant === "primary" ? styles.primary : styles.secondary}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && iconPosition === "start" && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {label}
      {icon && iconPosition === "end" && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
}
