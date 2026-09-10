// DropdownButton.tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./DropdownButton.module.css";
import { Button } from "../Button/Button";

/** One row in the dropdown menu. `label` doubles as the React key, so
 *  labels within a single `items` array must be unique. */
export interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface DropdownButtonProps {
  label: string;
  icon?: ReactNode;
  items: DropdownItem[];
  variant?: "primary" | "secondary";
}

/**
 * Button that opens a menu of actions beneath itself.
 *
 * Open state is owned here rather than exposed as a prop -- callers only
 * describe the menu contents via `items` and react through each item's onClick.
 */
export function DropdownButton({
  label,
  icon,
  items,
  variant = "primary",
}: DropdownButtonProps) {
  // state
  const [isOpen, setIsOpen] = useState(false);
  // Wraps both the trigger and the menu, so "inside" below covers either one.
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the menu when the user clicks anywhere outside it.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    // "mousedown" rather than "click": it fires before the menu item's own
    // click handler, and before any focus shift, which keeps the ordering
    // predictable. Listening on document is what lets us see clicks that
    // never reach this component's subtree.
    document.addEventListener("mousedown", handleClickOutside);
    // Detach on unmount, or the listener would outlive the component.
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // Empty deps: the handler only touches a ref and a setState function,
    // both stable, so it never needs rebinding.
  }, []);

  // JSX
  return (
    <div className={styles.dropdownContainer} ref={containerRef}>
      <Button
        label={label}
        icon={icon}
        variant={variant}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {/* Unmounted while closed rather than hidden with CSS, so menu items
          stay out of the tab order and the accessibility tree. */}
      {isOpen && (
        <ul className={styles.menu}>
          {items.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className={styles.menuItem}
                // Close after acting, so every item dismisses the menu
                // without each caller having to do it.
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
