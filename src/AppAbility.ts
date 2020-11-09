import { Ability, AbilityClass } from "@casl/ability";

type Actions = "create" | "read" | "update" | "delete";
type Subjects = "Article" | "User" | "Book";

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;
