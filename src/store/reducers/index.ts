import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { userChangeReducer } from "./usersChangeReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  change: userChangeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
