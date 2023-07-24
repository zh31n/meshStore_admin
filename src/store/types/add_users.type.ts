export interface defaultState {
    users: number[],
}

export interface action {
    type: string,
    payload: number
}

export enum ActionType {
    SET_USERS = 'SET_USERS',
    SET_DEFAULT = 'SET_DEFAULT'
}
