import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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
  // signOut
  const logout = () => {
    return signOut(auth);
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
    <AuthContext.Provider value={{ currentUser, signUp, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
