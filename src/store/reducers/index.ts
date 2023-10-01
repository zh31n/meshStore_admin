import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {userChangeReducer} from "./usersChangeReducer";
import {addUsersReducer} from "./addUsersReducer";
import addCurrentUsersGroup from "./addCurrentUsersGroup.ts";

export const rootReducer = combineReducers({
    user: userReducer,
    change: userChangeReducer,
    addUsers: addUsersReducer,
    addCurrentKey: addCurrentUsersGroup,
});

export type RootState = ReturnType<typeof rootReducer>;
