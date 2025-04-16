import { create } from 'zustand'


interface User {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

