import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  // signUp
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  // signIn
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signOut
  const logout = () => {
    return signOut(auth);
  };
  // resetPassword
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // update userEmail
  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };
  // update userPassword
  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signUp,
        login,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
