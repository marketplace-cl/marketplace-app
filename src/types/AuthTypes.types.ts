export interface ContextProps {
  currentUser: boolean;
  user: AuthUser | null;
}

export interface AuthUser {
  name: string;
  email: string;
}
