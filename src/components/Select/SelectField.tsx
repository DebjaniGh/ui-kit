import { type ChangeEvent } from "react";
import { useFieldId } from "../../hooks/useFieldId";
import styles from "./SelectField.module.css";

interface SelectFieldProps {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
}

export function SelectField({
  label,
  value,
  options,
  onChange,
  id,
}: SelectFieldProps) {
  // state
  const resolvedId = useFieldId(id);

  // JSX
  return (
    <div className={styles.selectField}>
      <label htmlFor={resolvedId} className={styles.selectLabel}>
        {label}
      </label>
      <select
        id={resolvedId}
        value={value}
        onChange={onChange}
        className={styles.selectBox}
      >
        <option value="" disabled hidden>
          Select an option...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
