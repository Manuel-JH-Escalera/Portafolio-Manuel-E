interface LanguageDictionary {
  [key: string]: {
    title: string;
    content: string;
    nav: {
      home: string;
      about: string;
      projects: string;
      contact: string;
    };
    firstView: {
      topTitle: string;
      bottomTitle: string;
      resume: string;
    };
  };
}

const languages: LanguageDictionary = {
  en: {
    title: 'Welcome to our website',
    content: 'This is the content of our website in English.',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Proyects',
      contact: 'Contact',
    },
    firstView: {
      topTitle: 'Hello, Welcome to my portfolio!',
      bottomTitle: 'Full Stack Developer',
      resume: 'My resume',
    },
  },
  es: {
    title: 'Bienvenido a nuestro sitio web',
    content: 'Este es el contenido de nuestro sitio web en español.',
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    firstView: {
      topTitle: '¡Hola, Bienvenido a mi portafolio!',
      bottomTitle: 'Desarrollador Full Stack',
      resume: 'Mi curriculum',
    },
  },
};

export default languages;
