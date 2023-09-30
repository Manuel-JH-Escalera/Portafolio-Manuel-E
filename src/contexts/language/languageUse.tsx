import { useContext } from 'react';
import LanguageContext from './languageContext';

function useLanguage() {
  return useContext(LanguageContext);
}

export default useLanguage;