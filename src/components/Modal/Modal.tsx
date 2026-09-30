import type { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
}

/**
 * Minimal modal primitive: overlay + centered dialog, no built-in buttons.
 * Callers compose their own Button(s) as children, so this stays reusable
 * for confirmations, forms, or plain messages alike.
 *
 * No onClose/overlay-click-to-dismiss here on purpose -- the first consumer
 * (unsaved-changes guard) must force an explicit Apply/Cancel choice, so an
 * accidental outside click must not silently dismiss it.
 */
export function Modal({ isOpen, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <h2 id="modal-title" className={styles.title}>
          {title}
        </h2>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
