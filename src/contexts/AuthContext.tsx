import { ReactNode, createContext, useContext, useState } from "react";
import { AuthUser, ContextProps } from "../types/AuthTypes.types";

interface ChildrenProps {
  children: ReactNode;
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<AuthUser | null>({
    email: "carlos@gmail.com",
    name: "carlos henrique",
  });

  return (
    <AuthContext.Provider value={{ currentUser: !!user, user: user }}>
      {children}
    </AuthContext.Provider>
  );
};
