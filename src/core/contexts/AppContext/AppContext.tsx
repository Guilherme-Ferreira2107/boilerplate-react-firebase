import { createContext, useContext } from "react";
import { IAuthContext } from "../../interfaces";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth deve ser usado em um provider");

  return context;
}
