import { ReactNode, createContext, useContext, useState } from "react";

interface ChildrenProps {
  children: ReactNode;
}
interface ContextProps {
  currentUser: boolean;
}
const AuthContext = createContext<ContextProps>({} as ContextProps);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ currentUser: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
