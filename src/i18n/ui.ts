export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLanguage = "en";

export const ui = {
  // file|component.element.identifier...
  en: {
    // navbar
    'nav.a.home.label': 'Home',
    'nav.a.home.aria': 'Home page',
    'nav.a.blog.label': 'Blog',
    'nav.a.blog.aria': 'Blog page',
    'nav.a.projects.label': 'Projects',
    'nav.a.projects.aria': 'Projects page',
    // index.astro
    'index.head.title': 'Home | Luis Fonseca',
    'index.h1.greeting': 'Hello there! 👋🏼',
    'index.p.description': "I'm Luis Fonseca, a computer science student at the ",
    'index.p.university': 'University of Costa Rica.',
    // blog.astro
    'blog.head.title': 'Blog | Luis Fonseca',
    'blog.h1.recent': 'Recent blog posts',
    // 404.astro
    '404.head.title': '404 Page Not Found | Luis Fonseca',
    '404.h1.title': '404 Page Not Found',
    '404.p.description': "If you are seeing this, you probably tried to access a page that doesn't exist.",
    // projects.astro
    'projects.head.title': 'Projects | Luis Fonseca',
    'projects.h1.recent': 'Recent projects',
  },
  es: {
    // navbar
    'nav.a.home.label': 'Inicio',
    'nav.a.home.aria': 'Página de inicio',
    'nav.a.blog.label': 'Blog',
    'nav.a.blog.aria': 'Página del blog',
    'nav.a.projects.label': 'Proyectos',
    'nav.a.projects.aria': 'Página de proyectos',
    // index.astro
    'index.head.title': 'Inicio | Luis Fonseca',
    'index.h1.greeting': '¡Hola! 👋🏼',
    'index.p.description': 'Soy Luis Fonseca, estudiante de ciencias de la computación en la ',
    'index.p.university': 'Universidad de Costa Rica.',
    // blog.astro
    'blog.head.title': 'Blog | Luis Fonseca',
    'blog.h1.recent': 'Blogs recientes',
    // 404.astro
    '404.head.title': '404 Página No Encontrada | Luis Fonseca',
    '404.h1.title': '404 Página No Encontrada',
    '404.p.description': 'Si estás viendo esto, probablemente intentaste acceder a una página que no existe.',
    // projects.astro
    'projects.head.title': 'Proyectos | Luis Fonseca',
    'projects.h1.recent': 'Proyectos recientes',
  },
} as const;