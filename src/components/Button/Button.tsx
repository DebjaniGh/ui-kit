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

/**
 * The library's base button. Every other clickable control (DropdownButton,
 * the login templates) builds on this rather than styling its own <button>.
 *
 * `type` defaults to "button" rather than the HTML default of "submit", so
 * dropping a Button inside a Form never submits it by accident.
 */
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
      {/* Icons are decorative here: the label already names the action, so
          aria-hidden keeps screen readers from announcing it twice. */}
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
