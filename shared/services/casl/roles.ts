import { z } from "zod";

export const roleSchema = z.union([
  z.literal("OWNER"),
  z.literal("ADMIN"),
  z.literal("MEMBER"),
  z.literal("BILLING"),
  z.literal("VISITOR"),
]);

export type Role = z.infer<typeof roleSchema>;
