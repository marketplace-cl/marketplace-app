export interface ContextProps {
  currentUser: boolean;
  user: AuthUser | null;
  initialLoading: boolean;
}

export interface AuthUser {
  name: string;
  email: string;
}

export interface LoggedUser {
  data: Data;
  accessToken: string;
}

interface Data {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
