import React, { useEffect } from 'react';
import useLanguageStore from '../contexts/language/languageStore';
import styles from './LanguageHandler.module.css';

const LanguageDetector: React.FC = () => {
  const { language, setLanguage } = useLanguageStore();

  useEffect(() => {
    setLanguage(navigator.language.includes('es') ? 'es' : 'en');
  }, []);

  return (
    <div className={styles.switcher}>
      <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? styles.active : styles.btn}
      >
        EN
      </button>
      <span className={styles.divider}>|</span>
      <button
        onClick={() => setLanguage('es')}
        className={language === 'es' ? styles.active : styles.btn}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageDetector;
