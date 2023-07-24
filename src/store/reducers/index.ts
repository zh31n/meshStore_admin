import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {userChangeReducer} from "./usersChangeReducer";
import {addUsersReducer} from "./addUsersReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    change: userChangeReducer,
    addUsers: addUsersReducer
});

export type RootState = ReturnType<typeof rootReducer>;
