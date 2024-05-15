import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { hashSync, compareSync } from "bcrypt-ts";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const saltAndHashPassword = (password: string) => {
  return hashSync(password, 10);
};
