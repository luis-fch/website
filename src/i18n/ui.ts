export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLanguage = "en";

export const ui = {
  // file|component.element.identifier...
  en: {
    'nav.a.home.label': 'Home',
    'nav.a.home.aria': 'Home page',
    'nav.a.blog.label': 'Blog',
    'nav.a.blog.aria': 'Blog page',
    'nav.a.projects.label': 'Projects',
    'nav.a.projects.aria': 'Projects page',
    'index.head.title': 'Home | Luis Fonseca',
    'index.h1.greeting': 'Hello there! 👋🏼',
    'index.p.description': "I'm Luis Fonseca, a computer science student at the ",
    'index.p.university': 'University of Costa Rica.',
    'blog.head.title': 'Blog | Luis Fonseca',
    'blog.h1.recent': 'Recent blog posts',
  },
  es: {
    'nav.a.home.label': 'Inicio',
    'nav.a.home.aria': 'Página de inicio',
    'nav.a.blog.label': 'Blog',
    'nav.a.blog.aria': 'Página del blog',
    'nav.a.projects.label': 'Proyectos',
    'nav.a.projects.aria': 'Página de proyectos',
    'index.head.title': 'Inicio | Luis Fonseca',
    'index.h1.greeting': '¡Hola! 👋🏼',
    'index.p.description': 'Soy Luis Fonseca, estudiante de ciencias de la computación en la ',
    'index.p.university': 'Universidad de Costa Rica.',
    'blog.head.title': 'Blog | Luis Fonseca',
    'blog.h1.recent': 'Blogs recientes',
  },
} as const;