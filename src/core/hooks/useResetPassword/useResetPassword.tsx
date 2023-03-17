import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { InfoMessageSuccessEnum } from "../../enums";

const useResetPassword = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = useCallback(
    (email: string) => {
      const configToast = { position: toast.POSITION.TOP_RIGHT };
      const auth = getAuth();

      if (email !== "") {
        setIsLoading(false);
        sendPasswordResetEmail(auth, email)
          .then((res) => {
            toast.success(InfoMessageSuccessEnum.RESET_PASSWORD, configToast);
            navigate("/login");
          })
          .catch((error) => toast.error(error.message, configToast))
          .finally(() => setIsLoading(false));
      }
    },
    [navigate]
  );

  return {
    resetPassword,
    isLoading,
  };
};

export { useResetPassword };
