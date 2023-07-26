import { Dispatch } from "redux";
import { action, ActionType } from "../types/add_users.type";

export const setAddUsers = (arr: number[]) => {
  return async (dispatch: Dispatch<action>) => {
    dispatch({ type: ActionType.SET_USERS, payload: arr });
  };
};

export const setAddUsersDefault = () => {
  return async (dispatch: Dispatch<action>) => {
    dispatch({ type: ActionType.SET_DEFAULT, payload: [] });
  };
};
