import {Dispatch} from "redux";


export const SET_CURRENT_USER_GROUP = 'SET_CURRENT_USER_GROUP';
export const SET_CURRENT_NETWORK = 'SET_CURRENT_NETWORK';

type initialStateT = {
    currentGroupName: any
    currentNetwork: any
}

const defaultState: initialStateT = {
    currentGroupName: 0,
    currentNetwork: 0
}


function AddCurrentUsersGroup(state = defaultState, action: any):initialStateT {
    switch (action.type) {
        case SET_CURRENT_NETWORK:
            return {...state, currentNetwork: action.payload}
        case SET_CURRENT_USER_GROUP :
            return {...state, currentGroupName: action.payload}
        default:
            return state;
    }
}


export const setCurrentNetwork = (networkID: number) => {
    return (dispatch: Dispatch) => {
        dispatch({type: SET_CURRENT_NETWORK, payload: networkID})
    }
}
export const setCurrentUserGroup = (groupName: any) => {
    return (dispatch: Dispatch) => {
        dispatch({type: SET_CURRENT_USER_GROUP, payload: groupName})
    }
}

export default AddCurrentUsersGroup;