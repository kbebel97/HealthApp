import { plan } from "./plan.model";
import { profile } from "./profile.model";

export interface account {
  Id : number,
  plan : plan,
  profile : profile
}
