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
                        {currentLanguage.nav.projects}
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.navLink}>
                        {currentLanguage.nav.contact}
                    </a>
                </li>
            </ul>
            <div className={styles.optionsContainer}>
                <div className={`mx-1`}>
                    <LanguageDetector />
                </div>
                <div className={`${styles.btnBorder} mx-1`}>
                    <DarkModeHandler />
                </div>
            </div>
            <h1 className={styles.navbarBrandMobile}>Manuel 
                <span className={styles.accentColor}> Web Dev</span>
            </h1>
            <div className={styles.navbarMobileContainer}>
                <div className={`${styles.btnBorder} mx-1`}>
                    <DarkModeHandler />
                </div>
                <div className={`${styles.btnBorderToggler} mx-1 `}>
                    <button onClick={() => setIsOpen(!isOpen)} className={`${styles.navbarToggler} ${isOpen ? styles.close : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;