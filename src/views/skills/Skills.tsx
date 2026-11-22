import useLanguageStore from '../../contexts/language/languageStore';
import languages from '../../methods/languageDictionary';
import styles from './Skills.module.css';

type Skill = { name: string; core?: boolean };

const frontendSkills: Skill[] = [
  { name: 'React', core: true },
  { name: 'TypeScript', core: true },
  { name: 'TanStack Start / Router / Query', core: true },
  { name: 'Next.js', core: true },
  { name: 'Tailwind' },
  { name: 'Shadcn / Radix' },
  { name: 'Konva (canvas)' },
  { name: 'Zustand' },
  { name: 'Astro' },
  { name: 'Angular' },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', core: true },
  { name: 'Express.js', core: true },
  { name: 'Python', core: true },
  { name: 'Prisma' },
  { name: 'Flask' },
  { name: 'Better Auth / OAuth' },
  { name: 'Webhooks & payments' },
  { name: 'REST APIs' },
  { name: 'Go' },
];

const aiSkills: Skill[] = [
  { name: 'Claude API & tool use', core: true },
  { name: 'Agents in production', core: true },
  { name: 'Claude Code', core: true },
  { name: 'Prompt design & caching' },
  { name: 'Image generation (Flux / fal.ai)' },
  { name: 'Computer vision (OpenCV)' },
  { name: 'Content moderation' },
  { name: 'MCP' },
];

const dataCloudSkills: Skill[] = [
  { name: 'PostgreSQL' },
  { name: 'Redis' },
  { name: 'S3 / Backblaze B2' },
  { name: 'Cloudflare Workers' },
  { name: 'Docker / Coolify' },
  { name: 'Hetzner / AWS' },
  { name: 'Sentry / Umami' },
  { name: 'Git / GitHub' },
  { name: 'Vitest / Jest / pytest' },
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
            <h3 className={styles.groupTitle}>{t.skills.ai}</h3>
            <ul className={styles.skillList}>
              {aiSkills.map((skill) => (
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
