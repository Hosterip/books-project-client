import {IUser} from "./IUser";

export interface IBook {
  id: string,
  title: string,
  description: string,
  average: string,
  coverName: string,
  author: IUser
}
