import { useState } from 'react';
import LanguageContext from './languageContext';

interface LanguageProviderProps {
  children: React.ReactNode;
}

function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<string>('');

  const languageValue = {
    estado: { language },
    acciones: { setLanguage },
  };

  return (
    <LanguageContext.Provider value={languageValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;