import { useState, type ChangeEvent } from "react";
import { useFieldId } from "../../hooks/useFieldId";
import styles from "./TextField.module.css";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean; // default to false
  id?: string;
  type?: "text" | "password"; // default to "text"
}

export function TextField({
  label,
  value,
  onChange,
  placeholder = "Enter text here ...",
  disabled = false,
  id,
  type = "text",
}: TextFieldProps) {
  // state
  const resolvedId = useFieldId(id);
  const [isPwdVisible, setPwdVisible] = useState(false);
  // if user has toggled on visibility for pwd field,
  // then we need to show it as "text";
  // type "password" means dotted field
  const inputType = type === "password" && isPwdVisible ? "text" : type;

  //JSX
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={resolvedId}>
        {label}
      </label>
      <input
        className={styles.input}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={resolvedId}
        disabled={disabled}
      />
      {type === "password" && (
        <button type="button" onClick={() => setPwdVisible((prev) => !prev)}>
          Toggle
        </button>
      )}
    </div>
  );
}
