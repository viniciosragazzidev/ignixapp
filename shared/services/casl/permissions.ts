import { AbilityBuilder } from "@casl/ability";

import { AppAbility } from "./abilities";

import { Role } from "./roles";
import { User } from "@prisma/client";
import { userSchema } from "@/shared/lib/schemas/user";

type UserPermissions = (
  user: userSchema,
  builder: AbilityBuilder<AppAbility>
) => void;

export const permissions: Record<Role, UserPermissions> = {
  OWNER(user, { can, cannot }) {
    can("manage", "all");
  },
  ADMIN(user, { can, cannot }) {
    can("create", "User");
    can("update", "User");
    can("delete", "User");
    can("read", "User");
  },
  BILLING(user, { can, cannot }) {},
  MEMBER(user, { can, cannot }) {},
  VISITOR(user, { can, cannot }) {},
};
