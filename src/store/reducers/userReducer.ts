import { UserAction, UserActionEnum, defaultState } from "../types/user.type";

const defaultState: defaultState = {
  token: "",
  role: 1,
  reg: false,
};

export function userReducer(
  state = defaultState,
  action: UserAction
): defaultState {
  switch (action.type) {
    case UserActionEnum.SET_DATA:
      return {
        token: action.payload.token,
        role: action.payload.role,
        reg: true,
      };
    default:
      return state;
  }
}
