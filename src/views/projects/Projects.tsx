import useLanguageStore from '../../contexts/language/languageStore';
import languages from '../../methods/languageDictionary';
import styles from './Projects.module.css';

const featuredProject = {
  title: 'imprimetuscartas.cl',
  badge: { en: 'Featured · Founder', es: 'Destacado · Fundador' },
  description: {
    en: 'Print-on-demand platform for custom playing cards that I built and operate solo, from the first commit to the shipped deck. Customers design each card in the browser, pay, and receive a printed, laminated and die-cut deck with an optional box. I own product, code, infrastructure, the print workshop, logistics and support.',
    es: 'Plataforma de impresión bajo demanda de cartas personalizadas que construí y opero solo, del primer commit al mazo entregado. El cliente diseña cada carta en el navegador, paga y recibe un mazo impreso, laminado y cortado, con caja opcional. Me hago cargo de producto, código, infraestructura, taller, logística y atención.',
  },
  stats: [
    { value: '537', label: { en: 'paid orders', es: 'pedidos pagados' } },
    { value: '$15.5M', label: { en: 'CLP in sales (~USD 16k)', es: 'CLP vendidos' } },
    { value: '139k', label: { en: 'cards printed', es: 'cartas impresas' } },
    { value: '28x', label: { en: 'monthly sales growth, Apr → Oct', es: 'crecimiento mensual, abr → oct' } },
    { value: '8 wk', label: { en: 'from first commit to first sale', es: 'del primer commit a la primera venta' } },
    { value: '1', label: { en: 'person, alongside a full-time job', es: 'persona, en paralelo a un empleo' } },
  ],
  systems: {
    en: [
      'In-browser card editor on Konva with text, shapes and stickers, rasterized lossless at 300 DPI; mobile tap-to-place editor',
      'Volume pricing, promised delivery date with Chilean holidays and quantiles, three service tiers with surcharge',
      'Webpay Plus and MercadoPago side by side with shared post-payment logic; refunds, invoices with SII data',
      'Python imposition worker: registration marks for a Silhouette plotter, rectpack mixed layouts, duplex offsets, box geometry and .studio3 cut files',
      'Ops panel: delivery calendar, staff role, QR labels, Shipit and Paket shipping with webhook tracking',
      '62k images / 86 GB on private S3 buckets with presigned URLs; Cloudflare Worker with HMAC serving edge-cached WebP thumbnails',
      'Hetzner + Coolify with separate staging and production, Sentry, self-hosted analytics, server-side conversions to GA4 and Meta',
      'UX and accessibility audit for low-literacy and older users: plain-language copy, 44 px touch targets, visible focus, large-text support, errors next to each field',
      'Internal costing tool: imports the tax purchase ledger, computes contribution margin, break-even and cost per sheet, and feeds the price table',
    ],
    es: [
      'Editor de cartas en el navegador sobre Konva con texto, formas y stickers, rasterizado sin pérdida a 300 DPI; editor móvil de tocar para colocar',
      'Precios por volumen, fecha de entrega prometida con feriados chilenos y cuantiles, tres niveles de servicio con recargo',
      'Webpay Plus y MercadoPago conviviendo con lógica post-pago compartida; reembolsos y facturas con datos SII',
      'Worker de imposición en Python: marcas de registro para plotter Silhouette, layouts mixtos con rectpack, offsets de dúplex, geometría de cajas y archivos de corte .studio3',
      'Panel de operación: calendario de entregas, rol empleado, etiquetas QR, despacho por Shipit y Paket con tracking por webhook',
      '62 mil imágenes / 86 GB en buckets S3 privados con URLs prefirmadas; Cloudflare Worker con HMAC sirviendo miniaturas WebP en edge',
      'Hetzner + Coolify con staging y producción separados, Sentry, analítica self-hosted, conversiones server-side a GA4 y Meta',
      'Auditoría de UX y accesibilidad para personas con baja alfabetización digital y adultos mayores: lenguaje llano, zonas de toque de 44 px, foco visible, letra grande, errores junto a cada campo',
      'Herramienta interna de costeo: importa el registro de compras del SII, calcula margen de contribución, punto de equilibrio y costo por hoja, y alimenta la tabla de precios',
    ],
  },
  ai: {
    en: [
      "WhatsApp support agent on Claude: signed Meta webhook, DB queue, tool-use loop that quotes with the same code as the web, human handoff and an inbox to take over or return threads. Rule: the bot never invents a price or a date, enforced with evasion tests on its tools and prompt",
      "Computer-vision QA: a phone photo of printed cards is matched against the order's designs with SIFT + CLAHE, a single FLANN index and RANSAC homographies to find missing or failed cards. No OCR, no external API",
      "AI image generator: Claude Haiku enriches and pre-screens the prompt, Flux 1.1 Pro renders via fal.ai, transactional credits that only charge on success, escalating anti-abuse and credit packs sold through MercadoPago",
    ],
    es: [
      'Agente de atención por WhatsApp sobre Claude: webhook firmado de Meta, cola en base de datos, loop de tool-use que cotiza con el mismo código que la web, derivación a humano y bandeja para tomar o devolver conversaciones. Regla: el bot nunca inventa un precio ni un plazo, verificada con tests de evasión sobre sus tools y su prompt',
      'Control de calidad por visión: una foto de celular de las cartas impresas se compara con los diseños del pedido con SIFT + CLAHE, un índice FLANN único y homografías RANSAC para detectar cartas faltantes o falladas. Sin OCR ni API externa',
      'Generador de imágenes con IA: Claude Haiku enriquece y filtra el prompt, Flux 1.1 Pro genera vía fal.ai, créditos transaccionales que solo se cobran si la imagen existe, anti-abuso escalonado y paquetes vendidos por MercadoPago',
    ],
  },
  tags: ['TanStack Start', 'React 19', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Python', 'Flask', 'Claude API', 'OpenCV', 'Webpay', 'MercadoPago', 'WhatsApp Cloud API', 'Backblaze B2', 'Cloudflare Workers', 'Coolify'],
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
          <div className={styles.featuredStats}>
            {featuredProject.stats.map((stat) => (
              <div key={stat.value + stat.label.en} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label[lang]}</span>
              </div>
            ))}
          </div>
          <div className={styles.featuredLeft}>
            <span className={styles.featuredBadge}>{featuredProject.badge[lang]}</span>
            <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
            <p className={styles.featuredDescription}>{featuredProject.description[lang]}</p>
            <h4 className={styles.featuredGroupTitle}>{t.projects.aiInProduction}</h4>
            <ul className={styles.featuredHighlights}>
              {featuredProject.ai[lang].map((item, i) => (
                <li key={i} className={styles.featuredHighlightItem}>{item}</li>
              ))}
            </ul>
            <div className={styles.cardLinks}>
              <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`${t.projects.viewLive} — ${featuredProject.title}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                {t.projects.viewLive}
              </a>
              <span className={styles.dataNote}>{t.projects.dataAsOf}</span>
            </div>
          </div>
          <div className={styles.featuredRight}>
            <h4 className={styles.featuredGroupTitle}>{t.projects.systems}</h4>
            <ul className={styles.featuredHighlights}>
              {featuredProject.systems[lang].map((item, i) => (
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
