import { UserAction, UserActionEnum, defaultState } from "../types/user.type";


const localToken = localStorage.getItem('token');

const defaultState: defaultState = {
  token: typeof(localToken) === "string" ? localToken : '',
  role: 1,
  reg: !localToken ? false : true,
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
