import { StatusOs } from "@/shared/@enums/enums";

export type OrderTypeTable = {
  id: string;
  customer: CustomerType;
  items: ItemType[];
  status: StatusOs;
  createdAt: string;
  updatedAt: string;
  value: number;
  actions?: string;
};

export type OrderType = {
  id: string;
  customer: CustomerType;
  items: ItemType[];
  status: StatusOs;
  value: number;
  createdAt: string;
  updatedAt: string;
};

export type CustomerType = {
  id: string;
  name: string;
  surname?: string;
  contact: string;
  document: string;
  email?: string;
  address: string;
  city: string;
  state?: string;
  zipCode: string;
  country?: string;
  createdAt: string;
  updatedAt: string;
};

export type ItemType = {
  id: string;
  name: string;
  brand: string;
  model: string;
  nSerie?: string;
  category?: string;
  quantity: number;
  problem_description: string;
  repair_description?: string;
  repair_value?: number;
  status: StatusOs;
  createdAt: string;
  updatedAt: string;
};
