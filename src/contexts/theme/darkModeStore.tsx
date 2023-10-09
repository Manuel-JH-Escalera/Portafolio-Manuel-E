// themeStore.ts
import { create } from 'zustand';

type DarkModeState = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

const useDarkModeStore = create<DarkModeState>((set) => ({
  darkMode: false,
  setDarkMode: (darkMode) => set({ darkMode }),
}));

export default useDarkModeStore;
