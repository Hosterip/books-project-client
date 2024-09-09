import {IUser} from "./IUser";
import {IGenre} from "./IGenre";

export interface IBook {
  id: string,
  title: string,
  ReferentialName: string,
  description: string,
  average: string,
  coverName: string,
  averageRating: number,
  ratings: number,
  author: IUser,
  genres: IGenre[]
}
