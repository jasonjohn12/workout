import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw Error("AuthContext must be used inside AuthContextProvider");
  return context;
};
