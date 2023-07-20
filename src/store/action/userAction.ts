import { Dispatch } from "redux";
import { UserAction, UserActionEnum } from "../types/user.type";

interface data {
  token: string;
  role: number;
}

export const setUsers = ({ token, role }: data) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionEnum.SET_DATA,
      payload: {
        token,
        role,
      },
    });
  };
};
