export interface ChangeAction {
  type: string;
  payload: any;
}

export enum Actions {
  SET_CHANGE = "SET_CHANGE",
  SET_DEFAULT = "SET_DEFAULT",
}

export interface defaultState {
  changin: boolean;
  user: any;
}
