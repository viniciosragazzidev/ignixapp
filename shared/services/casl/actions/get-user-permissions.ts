import { AppRole, User } from "@prisma/client";
import { defineAbilityFor } from "../abilities";
import { userSchema } from "@/shared/lib/schemas/user";

export const getUserPermissions = (userId: string, role: AppRole) => {
  const authUser: userSchema = {
    id: userId,
    role: role,
  };

  const ability = defineAbilityFor(authUser);

  return ability;
};
