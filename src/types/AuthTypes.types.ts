export interface InitialStateProps {
  currentUser: AuthUser | null;
  loading: boolean;
  error: boolean;
}

export interface AuthUser {
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
