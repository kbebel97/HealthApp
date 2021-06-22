export interface plan_request{
  ID : number,
  members : number,
  dental : boolean,
  vision : boolean,
  general : boolean,
  monthly_premium : number,
  copay_dental : number,
  copay_vision : number,
  copay_general : number
}
