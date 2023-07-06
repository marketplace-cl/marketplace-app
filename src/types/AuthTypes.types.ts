export interface ContextProps {
  currentUser: boolean;
  user: AuthUser | null;
  initialLoading: boolean;
}

export interface AuthUser {
  name: string;
  email: string;
}
