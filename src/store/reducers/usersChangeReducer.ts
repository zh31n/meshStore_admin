import { Actions, ChangeAction, defaultState } from "../types/usersChange.type";

const defaultState = {
  changin: false,
  user: {},
};

export function userChangeReducer(
  state = defaultState,
  action: ChangeAction
): defaultState {
  switch (action.type) {
    case Actions.SET_CHANGE:
      return { changin: true, user: action.payload };
    case Actions.SET_DEFAULT:
      return { changin: false, user: {} };
    default:
      return state;
  }
}
