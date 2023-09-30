interface LanguageDictionary {
    [key: string]: {
        title: string;
        content: string;
        nav: {
            about: string;
            proyects: string;
            contact: string;
        };
    };
}

const languages: LanguageDictionary = {
    en: {
        title: "Welcome to our website",
        content: "This is the content of our website in English.",
        nav: {
            about: "About",
            proyects: "Proyects",
            contact: "Contact"
        }
    },
    es: {
        title: "Bienvenido a nuestro sitio web",
        content: "Este es el contenido de nuestro sitio web en español.",
        nav: {
            about: "Sobre mí",
            proyects: "Proyectos",
            contact: "Contacto"
        },
    },
    /* fr: {
        title: "Bienvenue sur notre site web",
        content: "Ceci est le contenu de notre site web en français.",
    }, */
    // Agrega más lenguajes según necesites
};

export default languages;