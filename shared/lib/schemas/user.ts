import { AppRole } from "@prisma/client";

export type userSchema = {
  id: string;
  _typename?: "User";
  role: AppRole;
};
