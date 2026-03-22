import languages from '../../methods/languageDictionary';
import useLanguageStore from '../../contexts/language/languageStore';
import { useState } from 'react';
import DarkModeHandler from '../DarkModeHandler';
import LanguageDetector from '../LanguageHandler';
import { downloadResume } from '../../methods/methods';
import styles from './navbar.module.css';

function Navbar() {
    const { language } = useLanguageStore();
    const currentLanguage = languages[language] || languages.en;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <h1 className={styles.navbarBrand}>Manuel
                <span className={styles.accentColor}> Web Dev</span>
            </h1>

            {/* Desktop menu */}
            <ul className={`${styles.navbarMenu} ${isOpen ? styles.show : ''}`}>
                <li><a href="#" className={styles.navLink}>{currentLanguage.nav.home}</a></li>
                <li><a href="#about" className={styles.navLink}>{currentLanguage.nav.about}</a></li>
                <li><a href="#experience" className={styles.navLink}>{currentLanguage.nav.experience}</a></li>
                <li><a href="#projects" className={styles.navLink}>{currentLanguage.nav.projects}</a></li>
                <li><a href="#contact" className={styles.navLink}>{currentLanguage.nav.contact}</a></li>
            </ul>

            {/* Desktop controls */}
            <div className={styles.optionsContainer}>
                <LanguageDetector />
                <DarkModeHandler />
                <button
                    className={styles.resumeBtn}
                    onClick={() => downloadResume(language)}
                >
                    {currentLanguage.firstView.resume}
                </button>
            </div>

            {/* Mobile brand + controls */}
            <h1 className={styles.navbarBrandMobile}>Manuel
                <span className={styles.accentColor}> Web Dev</span>
            </h1>
            <div className={styles.navbarMobileContainer}>
                <DarkModeHandler />
                <div className={styles.btnBorderToggler}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${styles.navbarToggler} ${isOpen ? styles.close : ''}`}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <ul className={styles.mobileMenu}>
                    <li><a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>{currentLanguage.nav.home}</a></li>
                    <li><a href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>{currentLanguage.nav.about}</a></li>
                    <li><a href="#experience" className={styles.navLink} onClick={() => setIsOpen(false)}>{currentLanguage.nav.experience}</a></li>
                    <li><a href="#projects" className={styles.navLink} onClick={() => setIsOpen(false)}>{currentLanguage.nav.projects}</a></li>
                    <li><a href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>{currentLanguage.nav.contact}</a></li>
                    <li className={styles.mobileMenuDivider}></li>
                    <li className={styles.mobileMenuActions}>
                        <LanguageDetector />
                        <button
                            className={styles.resumeBtn}
                            onClick={() => { downloadResume(language); setIsOpen(false); }}
                        >
                            {currentLanguage.firstView.resume}
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
