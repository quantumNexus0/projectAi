export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'lawyer' | 'user';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData extends LoginFormData {
  name: string;
  confirmPassword: string;
  role: 'lawyer' | 'user';
}