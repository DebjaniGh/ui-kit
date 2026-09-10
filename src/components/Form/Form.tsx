import type { FormEvent, ReactNode } from "react";

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

/**
 * Thin wrapper over <form> that calls preventDefault() before handing the
 * event on, so consumers never have to remember it and the browser never
 * does a full-page navigation on submit.
 *
 * Using a real <form> (rather than a click handler on the button) is what
 * gives us Enter-to-submit and native validation for free.
 */
export function Form({ onSubmit, children }: FormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}
    >
      {children}
    </form>
  );
}
