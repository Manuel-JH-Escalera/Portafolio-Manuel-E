import React, { useEffect } from 'react';
import useDarkModeStore from '../contexts/theme/darkModeStore';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeHandler: React.FC = () => {

  const { darkMode, setDarkMode } = useDarkModeStore();

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    // Verificar si el navegador soporta el modo oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <DarkModeSwitch
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
    />
  );
};

export default DarkModeHandler;