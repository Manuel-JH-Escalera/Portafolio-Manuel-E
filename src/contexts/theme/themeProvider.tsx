import { useState } from 'react';
import ThemeContext from './themeContext';

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState();

  const ThemeValue = {
    estado: { theme },
    acciones: { setTheme },
  };

  return (
    <ThemeContext.Provider value={ThemeValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;