import '../App.css'
import LanguageDetector from './LanguageHandler'
import languages from '../methods/languageDictionary'
import useLanguage from '../contexts/language/languageUse';

function Navbar() {

    const { estado: { language } } = useLanguage();

    const currentLanguage = languages[language] || languages.en;

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark" id='Navbar'>
                <div className="container-fluid">
                    <a className="navbar-brand mb-0 h1" href="#">Manuel Web Developer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">{currentLanguage.nav.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{currentLanguage.nav.proyects}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{currentLanguage.nav.contact}</a>
                            </li>
                        </ul>
                    </div>
                    <LanguageDetector />
                </div>
            </nav>
        </>
    )
}

export default Navbar
