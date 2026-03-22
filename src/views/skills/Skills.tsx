import useLanguageStore from '../../contexts/language/languageStore';
import languages from '../../methods/languageDictionary';
import styles from './Skills.module.css';

type Skill = { name: string; core?: boolean };

const frontendSkills: Skill[] = [
  { name: 'React', core: true },
  { name: 'Next.js', core: true },
  { name: 'TypeScript', core: true },
  { name: 'JavaScript', core: true },
  { name: 'Angular' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'Tailwind' },
  { name: 'MUI' },
  { name: 'Bootstrap' },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', core: true },
  { name: 'Express.js', core: true },
  { name: 'Go' },
  { name: 'Python' },
  { name: 'REST APIs' },
];

const dataCloudSkills: Skill[] = [
  { name: 'PostgreSQL' },
  { name: 'MySQL' },
  { name: 'Redis' },
  { name: 'Sequelize' },
  { name: 'AWS' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'GitLab' },
  { name: 'Jest' },
  { name: 'Mocha' },
];

function Skills() {
  const { language } = useLanguageStore();
  const t = languages[language] || languages.en;

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {t.skills.sectionTitle}
          <span className={styles.titleAccent}></span>
        </h2>
        <div className={styles.grid}>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>{t.skills.frontend}</h3>
            <ul className={styles.skillList}>
              {frontendSkills.map((skill) => (
                <li key={skill.name} className={`${styles.skillItem} ${skill.core ? styles.skillCore : ''}`}>{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>{t.skills.backend}</h3>
            <ul className={styles.skillList}>
              {backendSkills.map((skill) => (
                <li key={skill.name} className={`${styles.skillItem} ${skill.core ? styles.skillCore : ''}`}>{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>{t.skills.dataCloud}</h3>
            <ul className={styles.skillList}>
              {dataCloudSkills.map((skill) => (
                <li key={skill.name} className={styles.skillItem}>{skill.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
