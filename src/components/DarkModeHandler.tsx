import React, { useEffect } from 'react';
import useDarkModeStore from '../contexts/theme/darkModeStore';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeHandler: React.FC = () => {
  const { darkMode, setDarkMode } = useDarkModeStore();

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add('dark-mode');
      return () => {
        document.body.classList.remove('dark-mode');
      };
    }
    if (darkMode === false) {
      document.body.classList.add('light-mode');
      return () => {
        document.body.classList.remove('light-mode');
      };
    }
  }, [darkMode]);

  return (
    <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={30} moonColor='#FFFFFF' sunColor='#002855'/>
  );
};

export default DarkModeHandler;
