import { create } from 'zustand';
import type { AuthState, User } from '../types/auth';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    let role: 'admin' | 'lawyer' | 'user';
    if (email.includes('admin')) {
      role = 'admin';
    } else if (email.includes('lawyer')) {
      role = 'lawyer';
    } else {
      role = 'user';
    }

    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;