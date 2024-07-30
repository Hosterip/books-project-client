import {createAction, createActionGroup, emptyProps, props} from "@ngrx/store";
import {IUser} from "../../interfaces/IUser";


const createUser = createAction(
  '[Auth Page] Create User',
  props<{ user: IUser }>()
)
const removeUser = createAction('[Auth Page] Create User')

export const userActions = createActionGroup({
  source: "user",
  events: {
    'Create User': props<{ user: IUser }>(),
    'Remove User': emptyProps(),
  }
})
