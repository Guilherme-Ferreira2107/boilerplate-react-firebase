import { useState, useContext, useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import { UserContext } from "../../contexts";
import { IContextUIState } from "../../interfaces";

const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext) as IContextUIState;

  const [isLoading, setIsLoading] = useState(false);

  const logout = useCallback(() => {
    const configToast = { position: toast.POSITION.TOP_RIGHT };
    const auth = getAuth();
    setIsLoading(true);

    signOut(auth)
      .then((res) => {
        console.log("logout: ", res);
        setUser({
          email: "",
          name: "",
          userType: "",
        });
        navigate("/login");
      })
      .catch((error) => toast.error(error.message, configToast));
  }, [navigate, setUser]);

  return {
    logout,
    isLoading,
  };
};

export { useLogout };
