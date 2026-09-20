import styles from "./InfoField.module.css";

interface InfoFieldProps {
  label: string;
  value: string;
}

export function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
