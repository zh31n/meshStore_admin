import { Dispatch } from "redux";
import { Actions, ChangeAction } from "../types/usersChange.type";

export const setUsersChange = (user: object) => {
  return async (dispatch: Dispatch<ChangeAction>) => {
    dispatch({
      type: Actions.SET_CHANGE,
      payload: user,
    });
  };
};

export const setUsersChangeDefault = () => {
  return async (dispatch: Dispatch<ChangeAction>) => {
    dispatch({
      type: Actions.SET_DEFAULT,
      payload: {},
    });
  };
};
