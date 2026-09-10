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

/**
 * Labelled dropdown, laid out as the same label/control row as TextField so
 * the two line up when stacked in a form.
 *
 * Controlled like TextField: pass "" as `value` to show the placeholder option.
 */
export function SelectField({
  label,
  value,
  options,
  onChange,
  id,
}: SelectFieldProps) {
  // state
  // Generated id when none is given, so the label stays associated.
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
        {/* Placeholder row: `disabled` stops it being re-selected once the
            user picks a real option, `hidden` keeps it out of the open list. */}
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
