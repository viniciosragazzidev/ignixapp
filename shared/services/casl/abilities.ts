import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from "@casl/ability";

import { z } from "zod";
import { userSubject } from "./subjects/user";
import { permissions } from "./permissions";
import { mainPanelSubject } from "./subjects/main_panel";
import { userSchema } from "@/shared/lib/schemas/user";

const appAbilities = z.union([
  userSubject,
  mainPanelSubject,
  z.tuple([z.literal("manage"), z.literal("all")]),
]);

type AppAbilities = z.infer<typeof appAbilities>;

export type AppAbility = MongoAbility<AppAbilities>;
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;

export function defineAbilityFor(user: userSchema) {
  const builder = new AbilityBuilder(createAppAbility);

  if (typeof permissions[user.role] === "function") {
    permissions[user.role](user, builder);
  } else {
    throw new Error(` Tentando utilizar uma role desconhecida ${user.role}`);
  }

  const ability = builder.build({
    detectSubjectType(subject: any) {
      return subject._typename;
    },
  });

  ability.can = ability.can.bind(ability);
  ability.cannot = ability.cannot.bind(ability);

  return ability;
}
