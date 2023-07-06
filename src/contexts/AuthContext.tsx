import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthUser, ContextProps } from "../types/AuthTypes.types";
import storageService from "../services/storage.service";

interface ChildrenProps {
  children: ReactNode;
}
const USER_KEY = "@Users";

const AuthContext = createContext<ContextProps>({} as ContextProps);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<AuthUser | null>({
    email: "carlos@gmail.com",
    name: "Carlos Henrique",
  });
  const [initialLoading, setInitialLoading] = useState(true);

  async function getUsearFromStorage() {
    const user = await storageService.getItem(USER_KEY);

    setUser(user);
    setInitialLoading(false);
  }

  useEffect(() => {
    getUsearFromStorage;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: !!user, user, initialLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
