import { IUser } from "./user-interface";

export interface IAuthContext {
  isAuthenticated: () => Promise<boolean>;
}

export interface IAuthState {
  user: IUser;
}
export interface IContextUIState {
  user: IUser;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  logoff: () => void;
  toggleLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
