import { createContext } from 'react';

/* const LanguageContext = createContext({estado: {}, acciones: {}}); */

interface LanguageContextType {
    estado: {
        language: string; // Cambia el tipo según corresponda
    };
    acciones: {
        setLanguage: (language: string) => void;
    };
}

const LanguageContext = createContext<LanguageContextType>({
    estado: {
        language: '',
    },
    acciones: {
        setLanguage: () => { },
    },
});

export default LanguageContext;