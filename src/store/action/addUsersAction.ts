import {Dispatch} from "redux";
import {action, ActionType} from "../types/add_users.type";

export const setAddUsers = (id: number) => {
    return async (dispatch: Dispatch<action>) => {
        dispatch({type: ActionType.SET_USERS, payload: id})
    }
}

export const setAddUsersDefault = () => {
    return async (dispatch: Dispatch<action>) => {
        dispatch({type: ActionType.SET_DEFAULT, payload: 0})
    }
}