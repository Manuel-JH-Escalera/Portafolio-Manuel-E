import { create } from 'zustand';

type DarkModeState = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

// Initializes from the html class set by the inline FOUC-prevention script,
// so Zustand has the correct value before any component renders.
const getInitialDarkMode = () =>
  typeof document !== 'undefined'
    ? document.documentElement.classList.contains('dark-mode')
    : false;

const useDarkModeStore = create<DarkModeState>()((set) => ({
  darkMode: getInitialDarkMode(),
  setDarkMode: (darkMode) => set({ darkMode }),
}));

export default useDarkModeStore;
