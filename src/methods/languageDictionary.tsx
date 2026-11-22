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
      bio3: string;
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
      ai: string;
      dataCloud: string;
    };
    projects: {
      sectionTitle: string;
      viewCode: string;
      viewLive: string;
      systems: string;
      aiInProduction: string;
      dataAsOf: string;
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
    title: 'Manuel Escalera — Product Engineer',
    content:
      'Product Engineer (Full Stack + Applied AI) based in Santiago, Chile. Founder of imprimetuscartas.cl: 500+ orders and 139k cards printed in 7 months, built and operated solo.',
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    firstView: {
      topTitle: "Hi, I'm Manuel",
      bottomTitle: 'Product Engineer · Full Stack + Applied AI',
      resume: 'My resume',
    },
    about: {
      sectionTitle: 'About Me',
      bio: 'I build complete products, from the idea to a paying customer. In 2026 I launched imprimetuscartas.cl, a print-on-demand platform for custom playing cards that already has over 500 orders and 139,000 cards printed, and I run it solo: product, code, infrastructure, logistics and support.',
      bio2: 'Along the way I shipped a WhatsApp support agent powered by Claude, a computer-vision quality-control system and an AI image generator, all in production with real customers. I work with AI as a pair programmer every day and I care about owning the whole thing: frontend, backend, data and the decisions in between.',
      bio3: '4+ years as a developer, currently at VTI Universidad de Chile on systems for the national university admission process (PAES). Fluent in English, C2.',
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
      ai: 'AI & Agents',
      dataCloud: 'Data & Cloud',
    },
    projects: {
      sectionTitle: 'Projects',
      viewCode: 'Code',
      viewLive: 'Live',
      systems: 'What I built',
      aiInProduction: 'AI in production',
      dataAsOf: 'Production data as of November 2026',
    },
    contact: {
      sectionTitle: 'Contact',
      subtitle: "Have a project in mind or just want to say hi? I'd love to hear from you.",
      emailLabel: 'Send me an email',
    },
  },
  es: {
    title: 'Manuel Escalera — Product Engineer',
    content:
      'Product Engineer (Full Stack + IA aplicada) con base en Santiago, Chile. Fundador de imprimetuscartas.cl: más de 500 pedidos y 139 mil cartas impresas en 7 meses, construido y operado solo.',
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    firstView: {
      topTitle: 'Hola, soy Manuel',
      bottomTitle: 'Product Engineer · Full Stack + IA aplicada',
      resume: 'Mi curriculum',
    },
    about: {
      sectionTitle: 'Sobre mí',
      bio: 'Construyo productos completos, de la idea al cliente pagando. En 2026 lancé imprimetuscartas.cl, una plataforma de impresión bajo demanda de cartas personalizadas que ya supera los 500 pedidos y las 139 mil cartas impresas, y la opero solo: producto, código, infraestructura, logística y atención.',
      bio2: 'En el camino puse en producción un agente de atención por WhatsApp con Claude, un sistema de control de calidad por visión computacional y un generador de imágenes con IA, todos con clientes reales. Trabajo con IA como par de programación todos los días y me importa hacerme cargo del producto entero: frontend, backend, datos y las decisiones que hay entre medio.',
      bio3: 'Más de 4 años como desarrollador, actualmente en VTI Universidad de Chile en sistemas del proceso de admisión universitaria (PAES). Inglés C2.',
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
      ai: 'IA & Agentes',
      dataCloud: 'Datos & Cloud',
    },
    projects: {
      sectionTitle: 'Proyectos',
      viewCode: 'Código',
      viewLive: 'Ver',
      systems: 'Qué construí',
      aiInProduction: 'IA en producción',
      dataAsOf: 'Datos de producción a noviembre de 2026',
    },
    contact: {
      sectionTitle: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente o simplemente quieres saludar? Me encantaría escucharte.',
      emailLabel: 'Envíame un correo',
    },
  },
};

export default languages;
