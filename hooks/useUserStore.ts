import { create } from 'zustand';

interface UserState {
  role: 'manager' | 'trainer' | 'runner' | null;
  setRole: (role: 'manager' | 'trainer' | 'runner') => void;
}

export const useUserStore = create<UserState>((set) => ({
  role: null, // Valor inicial
  setRole: (role) => set({ role: role }), // Función para cambiar el rol
}));