import { Fighter } from "@/types/Fighter";

export type AppNavigatorParamList = {
  Onboarding: undefined;
  Fighters: undefined;
  FighterDetails: { fighter: Fighter };
  Filters: undefined;
};
