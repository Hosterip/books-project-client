import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {IUserState} from "./user.reducer";

export const selectUser = (state: AppState) => state.user;

export const selectUserActiveUser = createSelector(
  selectUser,
  (state: IUserState) => state.user
)
