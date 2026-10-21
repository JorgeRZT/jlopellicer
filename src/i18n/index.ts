export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    nav: { home: 'Inicio', apps: 'Apps', blog: 'Blog' },
    switchTo: 'English',
    siteTitle: 'Jorge López Pellicer — Solutions Consultant | Adobe Experience Cloud',
    siteDescription:
      'Jorge López Pellicer. Solutions Consultant en Adobe, antes arquitecto de Adobe Experience Manager.',
    hero: { contact: 'Email', linkedin: 'LinkedIn' },
    chat: {
      hello: 'Hola, soy',
      hint: 'Pulsa en la caja y elige qué quieres saber.',
      placeholder: 'Pregúntame algo…',
      menuLabel: 'Elige una pregunta',
      prompts: {
        about: 'Cuéntame sobre ti',
        experience: '¿Dónde has trabajado?',
        education: '¿Qué has estudiado?',
        certs: '¿Qué certificaciones tienes?',
        languages: '¿Qué idiomas hablas?',
        skills: '¿En qué eres bueno?',
        apps: '¿Qué apps has hecho?',
        blog: '¿Escribes algo?',
        contact: '¿Cómo te contacto?',
      },
      allApps: 'Ver todas las apps →',
      allPosts: 'Ir al blog →',
      noPosts: 'Todavía no he publicado nada.',
    },
    sections: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      education: 'Formación',
      certs: 'Certificaciones y premios',
      languages: 'Idiomas',
      skills: 'Aptitudes',
    },
    apps: { eyebrow: 'Apps', title: 'Lo que estoy construyendo', lead: 'Pequeñas herramientas y proyectos propios.', back: '← Volver a Apps', features: 'Qué hace', screenshots: 'Capturas', download: 'Descargar', repo: 'Ver en GitHub', open: 'Abrir app', platform: 'Plataforma', latest: 'Última versión' },
    blog: { eyebrow: 'Blog', title: 'Notas y artículos', empty: 'Aún no hay artículos. Pronto.', back: '← Volver al blog' },
    notFound: { title: 'Página no encontrada', home: 'Volver al inicio' },
    footer: 'Todos los derechos reservados',
    dateLocale: 'es-ES',
  },
  en: {
    nav: { home: 'Home', apps: 'Apps', blog: 'Blog' },
    switchTo: 'Español',
    siteTitle: 'Jorge López Pellicer — Solutions Consultant | Adobe Experience Cloud',
    siteDescription:
      'Jorge López Pellicer. Solutions Consultant at Adobe, previously an Adobe Experience Manager architect.',
    hero: { contact: 'Email', linkedin: 'LinkedIn' },
    chat: {
      hello: "Hi, I'm",
      hint: 'Click the box and pick what you want to know.',
      placeholder: 'Ask me something…',
      menuLabel: 'Pick a question',
      prompts: {
        about: 'Tell me about yourself',
        experience: 'Where have you worked?',
        education: 'What did you study?',
        certs: 'Which certifications do you have?',
        languages: 'Which languages do you speak?',
        skills: 'What are you good at?',
        apps: 'What apps have you built?',
        blog: 'Do you write anything?',
        contact: 'How can I reach you?',
      },
      allApps: 'See all apps →',
      allPosts: 'Go to the blog →',
      noPosts: "I haven't published anything yet.",
    },
    sections: {
      about: 'About me',
      experience: 'Experience',
      education: 'Education',
      certs: 'Certifications & awards',
      languages: 'Languages',
      skills: 'Skills',
    },
    apps: { eyebrow: 'Apps', title: 'What I am building', lead: 'Small tools and side projects.', back: '← Back to Apps', features: 'What it does', screenshots: 'Screenshots', download: 'Download', repo: 'View on GitHub', open: 'Open app', platform: 'Platform', latest: 'Latest version' },
    blog: { eyebrow: 'Blog', title: 'Notes & articles', empty: 'No articles yet. Coming soon.', back: '← Back to blog' },
    notFound: { title: 'Page not found', home: 'Back to home' },
    footer: 'All rights reserved',
    dateLocale: 'en-GB',
  },
} as const;

/** Localized path: path('en', 'apps') -> /en/apps/ ; path('es') -> / */
export function path(lang: Lang, page = ''): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${prefix}/${page ? page.replace(/^\/|\/$/g, '') + '/' : ''}`;
}

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
