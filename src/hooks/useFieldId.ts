import { useId } from "react";

/**
 * Resolves the id used to tie a <label> to its control: the caller's `id` when
 * given, otherwise a generated one.
 *
 * useId is called unconditionally -- hooks cannot run behind a branch -- so the
 * generated value is simply discarded when `id` is supplied.
 */
export function useFieldId(id?: string): string {
  const generatedId = useId();
  return id ?? generatedId;
}
