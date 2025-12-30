import * as v from "valibot";

export const PropsSchema = v.object({
  userRole: v.picklist(["shopper", "curator"], "You must provide a valid user role, when calling `AtlasProviders`"),
  platform: v.picklist(["ios", "android", "macos", "windows", "web", "native"], "You must provide a valid platform, when calling `AtlasProviders`"),
});
export type PropsSchema = v.InferInput<typeof PropsSchema>;
