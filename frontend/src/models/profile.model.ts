import { address } from "./address.model";

export interface profile{
  Id: number,
  firstName: string,
  lastName: string,
  DoB: string,
  Occupation: string,
  maritalStatus: string,
  phoneNumber: number,
  address: address
}
