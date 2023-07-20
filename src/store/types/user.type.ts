export interface UserAction {
  type: string;
  payload: {
    token: string;
    role: number;
  };
}

export interface defaultState {
  token: string;
  role: number;
  reg: boolean;
}

export enum UserActionEnum {
  SET_DATA = "SET_DATA",
}
