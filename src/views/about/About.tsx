import useLanguageStore from '../../contexts/language/languageStore';
import languages from '../../methods/languageDictionary';
import styles from './About.module.css';

function About() {
  const { language } = useLanguageStore();
  const t = languages[language] || languages.en;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {t.about.sectionTitle}
          <span className={styles.titleAccent}></span>
        </h2>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.bio}>{t.about.bio}</p>
            <p className={styles.bio}>{t.about.bio2}</p>
            <div className={styles.tags}>
              <span className={styles.tag}>📍 {t.about.basedIn}</span>
              <span className={`${styles.tag} ${styles.tagAccent}`}>✦ {t.about.openToWork}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
