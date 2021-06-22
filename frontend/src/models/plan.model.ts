import { dependent } from "./dependent.model";

export interface plan {
  Id : number,
  isDental: boolean,
  isVision: boolean,
  isMedical: boolean,
  dentalTier : number,
  visionTier : number,
  medicalTier : number,
  dependents : dependent[],
  monthlyPremium : number,
  medicalCopay: number,
  visionCopay: number,
  dentalCopay: number
}
