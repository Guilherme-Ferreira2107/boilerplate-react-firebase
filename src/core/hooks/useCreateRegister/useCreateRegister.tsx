import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

import { firebaseConfig } from "../../../configs/firebase-config";
import { CollectionNameEnum, InfoMessageSuccessEnum } from "../../enums";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useCreateRegister = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const configToast = { position: toast.POSITION.TOP_RIGHT };

  const registerUser = async (
    email: string,
    password: string,
    name: string,
    userType: string
  ) => {
    const auth = getAuth();
    const params = {
      email,
      name,
      userType,
    };
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        const usersRef = collection(db, CollectionNameEnum.USERS);
        await setDoc(doc(usersRef, response.user.uid), params)
          .then(() => {
            toast.success(InfoMessageSuccessEnum.USER_CREATED, configToast);
            navigate("/login");
          })
          .catch((err) => toast.success(err));
      })
      .catch((error) => toast.success(error))
      .finally(() => setIsLoading(false));
  };

  return {
    registerUser,
    isLoading,
  };
};

export { useCreateRegister };
