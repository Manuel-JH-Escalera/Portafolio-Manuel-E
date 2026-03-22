interface LanguageDictionary {
  [key: string]: {
    title: string;
    content: string;
    nav: {
      home: string;
      about: string;
      experience: string;
      projects: string;
      contact: string;
    };
    firstView: {
      topTitle: string;
      bottomTitle: string;
      resume: string;
    };
    about: {
      sectionTitle: string;
      bio: string;
      bio2: string;
      basedIn: string;
      openToWork: string;
    };
    experience: {
      sectionTitle: string;
      present: string;
    };
    skills: {
      sectionTitle: string;
      frontend: string;
      backend: string;
      dataCloud: string;
    };
    projects: {
      sectionTitle: string;
      viewCode: string;
      viewLive: string;
    };
    contact: {
      sectionTitle: string;
      subtitle: string;
      emailLabel: string;
    };
  };
}

const languages: LanguageDictionary = {
  en: {
    title: 'Manuel Escalera — Frontend Developer',
    content: 'Portfolio of Manuel Escalera, Frontend Developer based in Santiago, Chile.',
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    firstView: {
      topTitle: 'Hi, I\'m Manuel',
      bottomTitle: 'Full Stack Developer',
      resume: 'My resume',
    },
    about: {
      sectionTitle: 'About Me',
      bio: 'Full Stack developer with over 3 years of experience deeply rooted in the JavaScript ecosystem — React, Next.js, TypeScript, and Node.js across the entire stack. I build dynamic, scalable web applications from the frontend all the way to the backend, and my focus and passion lie in crafting exceptional user interfaces.',
      bio2: 'Currently working at VTI Universidad de Chile, developing critical systems for the national university admission process (PAES) that impact thousands of users annually. Fluent in English — C2 Proficient.',
      basedIn: 'Santiago, Chile',
      openToWork: 'Open to work',
    },
    experience: {
      sectionTitle: 'Experience',
      present: 'Present',
    },
    skills: {
      sectionTitle: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      dataCloud: 'Data & Cloud',
    },
    projects: {
      sectionTitle: 'Projects',
      viewCode: 'Code',
      viewLive: 'Live',
    },
    contact: {
      sectionTitle: 'Contact',
      subtitle: 'Have a project in mind or just want to say hi? I\'d love to hear from you.',
      emailLabel: 'Send me an email',
    },
  },
  es: {
    title: 'Manuel Escalera — Desarrollador Frontend',
    content: 'Portafolio de Manuel Escalera, Desarrollador Frontend con base en Santiago, Chile.',
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    firstView: {
      topTitle: 'Hola, soy Manuel',
      bottomTitle: 'Desarrollador Full Stack',
      resume: 'Mi curriculum',
    },
    about: {
      sectionTitle: 'Sobre mí',
      bio: 'Desarrollador Full Stack con más de 3 años de experiencia sólidamente arraigada en el ecosistema JavaScript — React, Next.js, TypeScript y Node.js a lo largo de todo el stack. Construyo aplicaciones web dinámicas y escalables de punta a punta, con especial foco y pasión en crear interfaces de usuario excepcionales.',
      bio2: 'Actualmente trabajo en VTI Universidad de Chile, desarrollando sistemas críticos para el proceso de admisión universitaria nacional (PAES) que impactan a miles de usuarios anualmente. Inglés C2 Proficient.',
      basedIn: 'Santiago, Chile',
      openToWork: 'Disponible para trabajar',
    },
    experience: {
      sectionTitle: 'Experiencia',
      present: 'Presente',
    },
    skills: {
      sectionTitle: 'Habilidades',
      frontend: 'Frontend',
      backend: 'Backend',
      dataCloud: 'Datos & Cloud',
    },
    projects: {
      sectionTitle: 'Proyectos',
      viewCode: 'Código',
      viewLive: 'Ver',
    },
    contact: {
      sectionTitle: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente o simplemente quieres saludar? Me encantaría escucharte.',
      emailLabel: 'Envíame un correo',
    },
  },
};

export default languages;
