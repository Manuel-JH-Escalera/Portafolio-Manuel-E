import React, { useEffect } from 'react';
import useLanguage from '../contexts/language/languageUse';

const LanguageDetector: React.FC = () => {

  const { estado: { language }, acciones: { setLanguage } } = useLanguage();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    // Verificar si el navegador soporta la propiedad 'navigator.language'.
    if (navigator.language.includes('es')) {
      setLanguage('es');
    } else if (navigator.language.includes('en')) {
      // Si la propiedad 'navigator.language' no está disponible, establecer un valor predeterminado.
      setLanguage('en');
    } else {
      setLanguage('en')
    }
  }, []);

  return (
    <select name="languageSelector" value={language} onChange={handleChangeLanguage}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageDetector;