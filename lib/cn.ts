import clsx, { type ClassValue } from "clsx";

/** Tiny class-name composer (clsx wrapper) used across UI primitives. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
