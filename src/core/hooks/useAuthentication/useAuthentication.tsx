import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function useAuthentication() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, toggleLoading] = useState(true);

  const checAuthentication = useCallback(() => {
    const checkRoutesPublics = ["/", "/login", "/cadastro", "/recuperar-senha"];
    onAuthStateChanged(auth, (user) => {
      if (
        !user?.uid &&
        !checkRoutesPublics.includes(window.location.pathname)
      ) {
        navigate("/login");
      } else {
        navigate("/dashboard");
      }
      setIsAuth(Boolean(user?.uid));
      toggleLoading(false);
    });
  }, [auth, navigate]);

  useEffect(() => checAuthentication(), [checAuthentication]);

  return { isAuth, isLoading };
}

export { useAuthentication };
