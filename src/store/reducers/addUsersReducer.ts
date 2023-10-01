import {ActionType, defaultState, action} from "../types/add_users.type";

const defaultState: defaultState = {
    users: [],
};

export function addUsersReducer(
    state = defaultState,
    action: action
): defaultState {
    switch (action.type) {
        case ActionType.SET_USERS:
            return {users: action.payload};
        case ActionType.SET_DEFAULT:
            return {users: []};
        default:
            return state;
    }
}
