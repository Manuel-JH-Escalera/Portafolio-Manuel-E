import useLanguageStore from '../../contexts/language/languageStore';
import languages from '../../methods/languageDictionary';
import styles from './Projects.module.css';

const featuredProject = {
  title: 'imprimetuscartas.cl',
  badge: { en: 'Featured Project', es: 'Proyecto Destacado' },
  description: {
    en: 'Full-stack print-on-demand platform for custom cards, built and deployed end-to-end. Users upload their images and design their cards through a visual drag & drop editor. Once paid, a print-ready PDF is automatically generated for the admin to print, cut, and ship to the customer.',
    es: 'Plataforma chilena de impresión de cartas personalizadas bajo pedido, construida y desplegada de punta a punta. Los usuarios suben sus imágenes y diseñan sus cartas en un editor visual con drag & drop. Al confirmar el pago, se genera automáticamente un PDF listo para que el administrador imprima, corte y envíe al cliente.',
  },
  highlights: {
    en: [
      'Visual drag & drop card editor with per-card crop (DnD Kit)',
      'Anonymous sessions — no registration required to start',
      'MercadoPago Checkout Pro with webhook payment confirmation',
      'Automated print-ready PDF generation for admin (Flask + ReportLab)',
      'Private cloud storage with Backblaze B2 + presigned URLs',
      'Transactional email with Resend',
      'Self-hosted on Hetzner VPS via Coolify + Cloudflare DNS',
    ],
    es: [
      'Editor visual con drag & drop y recorte por carta (DnD Kit)',
      'Sesiones anónimas — sin registro para comenzar',
      'MercadoPago Checkout Pro con confirmación de pago por webhook',
      'Generación automática de PDF listo para imprimir por el administrador (Flask + ReportLab)',
      'Almacenamiento privado Backblaze B2 con presigned URLs',
      'Email transaccional con Resend',
      'Self-hosted en VPS Hetzner vía Coolify + DNS Cloudflare',
    ],
  },
  tags: ['Next.js 15', 'Express.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Flask', 'TanStack Query', 'Zustand', 'Tailwind', 'Better Auth', 'MercadoPago', 'Backblaze B2'],
  liveUrl: 'https://imprimetuscartas.cl',
};

type Project = {
  id: number;
  title: string;
  description: { en: string; es: string };
  tags: string[];
  repos: { label: string; url: string }[];
  liveUrl?: string;
};

const regularProjects: Project[] = [
  {
    id: 1,
    title: 'Negocify',
    description: {
      en: 'Full-stack neighborhood store management app. Handles inventory, sales and reporting through a React frontend and a Node.js REST API.',
      es: 'Aplicación full-stack de administración de almacenes de barrio. Gestiona inventario, ventas y reportes con frontend en React y una API REST en Node.js.',
    },
    tags: ['React', 'Node.js', 'Express', 'Sequelize', 'MUI', 'TanStack Query', 'Zustand'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/Manuel-JH-Escalera/negocify-front' },
      { label: 'Backend', url: 'https://github.com/Manuel-JH-Escalera/negocify-back' },
    ],
  },
  {
    id: 2,
    title: 'Scraper de Portales de Trabajo',
    description: {
      en: 'Node.js scraper built with Puppeteer that aggregates the latest job listings from multiple Chilean job portals into a single feed.',
      es: 'Scraper en Node.js con Puppeteer que recopila las últimas ofertas publicadas en múltiples portales de empleo chilenos en un solo lugar.',
    },
    tags: ['Node.js', 'Puppeteer', 'JavaScript'],
    repos: [
      { label: 'GitHub', url: 'https://github.com/Manuel-JH-Escalera/scraper-portales-trabajo' },
    ],
  },
  {
    id: 3,
    title: 'Portfolio Web',
    description: {
      en: 'Personal portfolio built with Astro, React and Three.js. Features a 3D voxel art model, bilingual support and dark/light mode.',
      es: 'Portafolio personal construido con Astro, React y Three.js. Incluye un modelo 3D de voxel art, soporte bilingüe y modo oscuro/claro.',
    },
    tags: ['Astro', 'React', 'Three.js', 'TypeScript'],
    repos: [
      { label: 'GitHub', url: 'https://github.com/Manuel-JH-Escalera/Portafolio-Manuel-E' },
    ],
    liveUrl: 'https://manuelescalera.dev',
  },
];

function Projects() {
  const { language } = useLanguageStore();
  const t = languages[language] || languages.en;
  const lang: 'en' | 'es' = language === 'es' ? 'es' : 'en';

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {t.projects.sectionTitle}
          <span className={styles.titleAccent}></span>
        </h2>

        {/* Featured project */}
        <div className={styles.featuredCard}>
          <div className={styles.featuredLeft}>
            <span className={styles.featuredBadge}>{featuredProject.badge[lang]}</span>
            <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
            <p className={styles.featuredDescription}>{featuredProject.description[lang]}</p>
            <div className={styles.cardLinks}>
              <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`${t.projects.viewLive} — ${featuredProject.title}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                {t.projects.viewLive}
              </a>
            </div>
          </div>
          <div className={styles.featuredRight}>
            <ul className={styles.featuredHighlights}>
              {featuredProject.highlights[lang].map((item, i) => (
                <li key={i} className={styles.featuredHighlightItem}>{item}</li>
              ))}
            </ul>
            <div className={styles.cardTags}>
              {featuredProject.tags.map((tag) => (
                <span key={tag} className={styles.cardTag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Regular projects grid */}
        <div className={styles.grid}>
          {regularProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>
                  {project.description[lang] ?? project.description.en}
                </p>
                {project.tags.length > 0 && (
                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.cardLinks}>
                {project.repos.map((repo) => (
                  <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    {repo.label}
                  </a>
                ))}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`${t.projects.viewLive} — ${project.title}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    {t.projects.viewLive}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
