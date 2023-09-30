import { create } from 'zustand';

type LanguageState = {
  language: string;
  setLanguage: (language: string) => void;
};

const useLanguageStore = create<LanguageState>((set) => ({
  language: '',
  setLanguage: (language) => set({ language }),
}));

export default useLanguageStore;