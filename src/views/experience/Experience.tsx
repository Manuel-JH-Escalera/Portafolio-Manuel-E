import useLanguageStore from '../../contexts/language/languageStore';
import languages from '../../methods/languageDictionary';
import styles from './Experience.module.css';

const experienceData = [
  {
    id: 0,
    company: 'imprimetuscartas.cl',
    role: {
      en: 'Founder & Product Engineer',
      es: 'Fundador & Product Engineer',
    },
    period: {
      en: 'February 2026 – Present',
      es: 'Febrero 2026 – Presente',
    },
    location: 'Santiago, Chile',
    bullets: {
      en: [
        'Built and operate solo a print-on-demand platform for custom playing cards: 537 orders, ~USD 16k in sales and 139,000 cards printed in the first 7 months, growing 28x month over month between April and October.',
        'Designed the whole system: in-browser card editor, volume pricing, two payment gateways (Webpay and MercadoPago), Python imposition worker for a cutting plotter, ops panel with courier integrations and electronic invoicing.',
        'Shipped three AI systems to production: a WhatsApp support agent on Claude with tool use and human handoff, a computer-vision QA system (SIFT + RANSAC) for printed decks, and a two-model AI image generator with credits and moderation.',
        '968 commits across 8 repos with Claude Code as a pair programmer, with staging/production environments, 146 test files and living documentation, while holding a full-time job.',
        'Ran a full UX and accessibility audit for low-literacy and older users (plain language, 44 px touch targets, visible focus, large-text support) and built the costing tool (income statement, break-even, cost per sheet) that drives pricing.',
      ],
      es: [
        'Construí y opero solo una plataforma de impresión bajo demanda de cartas personalizadas: 537 pedidos, $15,5 M CLP vendidos y 139 mil cartas impresas en los primeros 7 meses, con un crecimiento de 28 veces en ventas mensuales entre abril y octubre.',
        'Diseñé el sistema completo: editor de cartas en el navegador, precios por volumen, dos pasarelas de pago (Webpay y MercadoPago), worker de imposición en Python para plotter de corte, panel de operación con couriers integrados y facturación electrónica.',
        'Puse tres sistemas de IA en producción: un agente de atención por WhatsApp sobre Claude con tool use y derivación a humano, control de calidad por visión computacional (SIFT + RANSAC) para mazos impresos, y un generador de imágenes de dos modelos con créditos y moderación.',
        '968 commits en 8 repos con Claude Code como par de programación, con ambientes de staging y producción, 146 archivos de test y documentación viva, en paralelo a un empleo a jornada completa.',
        'Hice una auditoría completa de UX y accesibilidad pensada en personas con baja alfabetización digital y adultos mayores (lenguaje llano, zonas de toque de 44 px, foco visible, soporte de letra grande) y construí la herramienta de costeo (estado de resultados, punto de equilibrio, costo por hoja) con la que se fijan los precios.',
      ],
    },
    tags: ['TanStack Start', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'Claude API', 'OpenCV'],
  },
  {
    id: 1,
    company: 'VTI Universidad de Chile',
    role: {
      en: 'Full Stack Developer — Frontend Focused',
      es: 'Desarrollador Full Stack — Enfoque Frontend',
    },
    period: {
      en: 'March 2024 – Present',
      es: 'Marzo 2024 – Presente',
    },
    location: 'Santiago, Chile',
    bullets: {
      en: [
        'Led frontend development for a cross-functional team, driving architecture and implementation of user-facing features for university admission systems.',
        'Developed and maintained critical institutional applications for the national university admission process (PAES), impacting thousands of users annually.',
        'Implemented responsive frontend solutions using Next.js and React to ensure seamless user experience across all devices.',
        'Collaborated in the design and development of internal systems, enhancing operational efficiency for institution staff.',
      ],
      es: [
        'Lideré el desarrollo frontend de un equipo multifuncional, dirigiendo la arquitectura e implementación de funcionalidades de cara al usuario en sistemas de admisión universitaria.',
        'Desarrollé y mantuve aplicaciones institucionales críticas para el proceso de admisión universitaria nacional (PAES), impactando a miles de usuarios anualmente.',
        'Implementé soluciones frontend responsivas con Next.js y React para garantizar una experiencia de usuario fluida en todos los dispositivos.',
        'Colaboré en el diseño y desarrollo de sistemas internos, mejorando la eficiencia operativa del personal de la institución.',
      ],
    },
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript'],
  },
  {
    id: 2,
    company: 'ALChile',
    role: {
      en: 'Full Stack Developer',
      es: 'Desarrollador Full Stack',
    },
    period: {
      en: 'July 2022 – March 2024',
      es: 'Julio 2022 – Marzo 2024',
    },
    location: 'Santiago, Chile',
    bullets: {
      en: [
        'Designed and delivered scalable web applications using React.js and Angular with TypeScript, creating high-performance platforms.',
        'Developed and consumed RESTful APIs with Node.js and Express.js, integrating with PostgreSQL and NoSQL databases.',
        'Managed cloud infrastructure on AWS, overseeing deployment, monitoring and maintenance to ensure high availability.',
      ],
      es: [
        'Diseñé y desarrollé aplicaciones web escalables con React.js y Angular con TypeScript, creando plataformas de alto rendimiento.',
        'Desarrollé y consumí APIs RESTful con Node.js y Express.js, integrando con bases de datos PostgreSQL y NoSQL.',
        'Gestioné infraestructura cloud en AWS, supervisando despliegue, monitoreo y mantenimiento para garantizar alta disponibilidad.',
      ],
    },
    tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'AWS'],
  },
];

function Experience() {
  const { language } = useLanguageStore();
  const t = languages[language] || languages.en;
  const lang = language as 'en' | 'es';

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {t.experience.sectionTitle}
          <span className={styles.titleAccent}></span>
        </h2>
        <div className={styles.timeline}>
          {experienceData.map((job, index) => (
            <div key={job.id} className={styles.item}>
              <div className={styles.dot}></div>
              {index < experienceData.length - 1 && <div className={styles.line}></div>}
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.company}>{job.company}</h3>
                    <p className={styles.role}>{job.role[lang] ?? job.role.en}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{job.period[lang] ?? job.period.en}</span>
                    <span className={styles.location}>📍 {job.location}</span>
                  </div>
                </div>
                <ul className={styles.bullets}>
                  {(job.bullets[lang] ?? job.bullets.en).map((bullet, i) => (
                    <li key={i} className={styles.bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {job.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
