import { z } from "zod";

export const mainPanelTypeName = z.literal("MainPanel");

export const mainPanelSubject = z.tuple([z.literal("read"), mainPanelTypeName]);

export type MainPanelTypeName = z.infer<typeof mainPanelTypeName>;
export type MainPanelSubject = z.infer<typeof mainPanelSubject>;
