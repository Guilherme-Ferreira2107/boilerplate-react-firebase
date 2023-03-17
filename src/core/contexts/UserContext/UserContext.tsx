import { useEffect, createContext, PropsWithChildren, useState } from "react";
import { removeAllLocalItens } from "../../helpers";

import { IUser, IContextUIState } from "../../interfaces";

const UserContext = createContext<IContextUIState | null>(null);

function UserProvider(props: PropsWithChildren<unknown>): JSX.Element {
  const { children } = props;
  const [loading, toggleLoading] = useState(false);
  const [user, setUser] = useState<IUser>({
    email: "",
    name: "",
    userType: "",
  });

  useEffect(() => {
    const userAuth = localStorage.getItem("userAuth");

    if (userAuth) {
      const userAuthParse = JSON.parse(userAuth);
      setUser(userAuthParse);
    }
  }, []);

  function logoff() {
    setUser({
      email: "",
      name: "",
      userType: "",
    });
    removeAllLocalItens();
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setUser,
        logoff,
        toggleLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
