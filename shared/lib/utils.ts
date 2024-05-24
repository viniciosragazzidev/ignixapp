import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { hashSync, compareSync } from "bcrypt-ts";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const saltAndHashPassword = (password: string) => {
  return hashSync(password, 10);
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

export function formatDate(inputDate: string): string {
  // Divide a string de entrada em ano, mês e dia
  const [year, month, day] = inputDate.split("-");

  // Retorna a data no formato desejado
  return `${day}.${month}.${year}`;
}

export function formatCurrency(value: number): string {
  // Usa a API de Internationalization para formatar o número como moeda brasileira
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
