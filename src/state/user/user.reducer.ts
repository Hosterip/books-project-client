import {createReducer, on} from "@ngrx/store";
import {userActions} from "./user.actions";
import {IUser} from "../../shared/interfaces/IUser";

export interface IUserState {
  user: IUser | null
}

export const userState: IUserState = {
  user: null
}

export const userReducer = createReducer(
  userState,
  on(userActions.createUser, (state, {user}): IUserState => ({user})),
  on(userActions.removeUser, _ => ({user: null}))
)
