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

/**
 * Labelled single-line input, rendered as a label/input row.
 *
 * Fully controlled: the caller owns `value` and must update it from
 * `onChange`, otherwise the field will appear frozen.
 */
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
  // Falls back to a generated id so <label htmlFor> always points at this
  // input, even when the caller does not supply one.
  const resolvedId = useFieldId(id);
  const [
    isPwdVisible,
    //setPwdVisible
  ] = useState(false);
  // A password field renders as dots; revealing it means swapping the input's
  // type to "text". Only the type changes -- `value` and state are untouched,
  // so the caret position and entered text survive the toggle.
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
      {/* {type === "password" && (
        <button type="button" onClick={() => setPwdVisible((prev) => !prev)}>
          Toggle
        </button>
      )} */}
    </div>
  );
}
