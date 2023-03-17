import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { toast } from "react-toastify";
import { UserContext } from "../../contexts";
import { IContextUIState } from "../../interfaces";
import { firebaseConfig } from "../../../configs/firebase-config";
import { CollectionNameEnum } from "../../enums";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext) as IContextUIState;

  const [isLoading, setIsLoading] = useState(false);
  const configToast = { position: toast.POSITION.TOP_RIGHT };

  const authLogin = async (inputEmail: string, inputPass: string) => {
    const auth = getAuth();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, inputEmail, inputPass)
      .then(async (response) => {
        console.info(response);
        if (response.user.email) {
          const docRef = doc(db, CollectionNameEnum.USERS, response.user.uid);
          const docSnap = await getDoc(docRef);
          const data = docSnap.data();
          setUser({
            email: data?.email,
            name: data?.name,
            userType: data?.userType,
          });
        }
        navigate("/dashboard");
      })
      .catch((error) => toast.error(error.message, configToast));
  };

  return {
    authLogin,
    isLoading,
  };
};

export { useLogin };
