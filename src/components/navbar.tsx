import '../App.css'
import languages from '../methods/languageDictionary'
import useLanguageStore from '../contexts/language/languageStore';
import { useState } from 'react';
import DarkModeHandler from './darkModeHandler';
import LanguageDetector from './LanguageHandler';
import useDarkModeStore from '../contexts/theme/darkModeStore';

function Navbar() {

    const { language } = useLanguageStore();
    const { darkMode } = useDarkModeStore();

    const currentLanguage = languages[language] || languages.en;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={darkMode ? "dark-mode" : "light-mode"}>
            <h1 className="navbar-brand">Manuel Web Developer</h1>
            <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggler">
                ☰
            </button>
            <ul className={`navbar-menu ${isOpen ? 'show' : ''}`}>
                <li><a href="#" className="nav-link">{currentLanguage.nav.about}</a></li>
                <li><a href="#" className="nav-link">{currentLanguage.nav.proyects}</a></li>
                <li><a href="#" className="nav-link">{currentLanguage.nav.contact}</a></li>
            </ul>
            <div className='d-flex align-content-center justify-content-center'>
                <DarkModeHandler />
            </div>
            <div className='d-flex align-content-center justify-content-center'>
                <LanguageDetector />
            </div>
        </nav>
    );

}

export default Navbar
