import '../../App.css';
import languages from '../../methods/languageDictionary';
import useLanguageStore from '../../contexts/language/languageStore';
import { useState } from 'react';
import DarkModeHandler from '../DarkModeHandler';
import LanguageDetector from '../LanguageHandler';
import useDarkModeStore from '../../contexts/theme/darkModeStore';
import styles from './navbar.module.css';

function Navbar() {
    const { language } = useLanguageStore();
    const { darkMode } = useDarkModeStore();

    const currentLanguage = languages[language] || languages.en;

    const [isOpen, setIsOpen] = useState(false);

    const navClasses = darkMode ? `${styles.darkMode} ${styles.nav}` : `${styles.lightMode} ${styles.nav}`;
    
    return (
        <nav className={navClasses}>
            <h1 className={styles.navbarBrand}>Manuel 
                <span className={styles.accentColor}> Web Dev</span>
            </h1>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.navbarToggler}>
                ☰
            </button>
            <ul className={`${styles.navbarMenu} ${isOpen ? styles.show : ''}`}>
                <li>
                    <a href="#" className={styles.navLink}>
                        {currentLanguage.nav.home}
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.navLink}>
                        {currentLanguage.nav.about}
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.navLink}>
                        {currentLanguage.nav.proyects}
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.navLink}>
                        {currentLanguage.nav.contact}
                    </a>
                </li>
            </ul>
            <div className={styles.flexCenter}>
                <DarkModeHandler />
            </div>
            <div className={styles.flexCenter}>
                <LanguageDetector />
            </div>
        </nav>
    );
}

export default Navbar;