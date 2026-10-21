// Contenido de la home, en ambos idiomas. Edita aquí.
import type { Lang } from '../i18n';

export const contact = {
  name: 'Jorge López Pellicer',
  email: 'lopezpellicerjorge@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jorge-lopez-pellicer/',
  github: '',
};

interface Role { period: string; role: string; company: string; location?: string; text?: string }

interface Content {
  role: string;
  tagline: string;
  about: string[];
  experience: Role[];
  education: { period: string; title: string; place: string }[];
  certs: string[];
  languages: { name: string; level: string }[];
  skills: string[];
}

export const content: Record<Lang, Content> = {
  es: {
    role: 'Solutions Consultant · Presales @ Adobe',
    tagline: 'Trabajo en Adobe Experience Cloud. Antes, arquitecto de Adobe Experience Manager.',
    about: [
      'Soy Solutions Consultant en Adobe, donde trabajo en preventa sobre Adobe Experience Cloud: entender qué necesita cada cliente y traducirlo en soluciones y demos de producto.',
      'Vengo del lado técnico. Durante más de siete años trabajé con Adobe Experience Manager como desarrollador, arquitecto y responsable técnico de práctica, en proyectos nacionales e internacionales.',
      'Me interesa especialmente cómo se planifica, crea y entrega contenido a escala (Content Supply Chain) y construir cosas pequeñas por mi cuenta; algunas están en la sección de Apps.',
    ],
    experience: [
      { period: 'Mar 2026 — Actualidad', role: 'Solutions Consultant | Presales', company: 'Adobe', location: 'Madrid', text: 'Preventa especializada en Adobe Experience Cloud: diseño de soluciones a medida y demostraciones de producto junto a los equipos comerciales.' },
      { period: 'Feb 2023 — Mar 2026', role: 'AEM Practice Lead (Technical) · AEM Architect', company: 'VML The Cocktail', location: 'Madrid', text: 'Estrategia técnica y gobierno de arquitectura de la práctica AEM; mentoring de ingenieros senior, estándares de entrega y apoyo a preventa y diseño de soluciones.' },
      { period: 'Feb 2021 — Feb 2023', role: 'AEM Architect · AEM Tech Lead', company: 'VASS', location: 'España' },
      { period: 'Jun 2019 — Feb 2021', role: 'AEM Developer · Adobe Certified Expert', company: 'Capgemini', location: 'Bélgica', text: 'Proyectos internacionales en cliente y en oficina; primera línea de un servicio de soporte multicliente para proyectos AEM.' },
      { period: 'Sep 2017 — Jun 2019', role: 'Junior Consultant → Consultant · AEM Developer', company: 'Capgemini', location: 'Murcia', text: 'Desarrollo de componentes y servicios en AEM 6.1–6.5, con Adobe Analytics, Target y Sling/JCR.' },
      { period: 'Mar 2017 — Jun 2017', role: 'Prácticas', company: 'AlanciS', location: 'Murcia' },
    ],
    education: [
      { period: '2017 — 2019', title: 'Desarrollo de Aplicaciones Web', place: 'IES Carlos III, Cartagena' },
      { period: '2015 — 2017', title: 'Desarrollo de Aplicaciones Multiplataforma', place: 'IES Alquerías' },
      { period: '', title: 'Bachillerato Científico-Tecnológico', place: 'IES Juan Carlos I' },
    ],
    certs: [
      'Adobe Certified Master — AEM Sites Architect',
      'Adobe Certified Expert — AEM (2018)',
      'Cambridge C1 Advanced (CAE)',
      '1.º puesto, Olimpiadas Informáticas de Murcia 2011',
      '2.º puesto, Olimpiadas Informáticas de la Región de Murcia 2012',
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Profesional completo' },
      { name: 'Francés', level: 'Elemental' },
    ],
    skills: ['Adobe Experience Cloud', 'Adobe Experience Manager', 'Content Supply Chain', 'Demostración de productos', 'RFP', 'Arquitectura de soluciones', 'Liderazgo técnico'],
  },
  en: {
    role: 'Solutions Consultant · Presales @ Adobe',
    tagline: 'I work on Adobe Experience Cloud. Previously an Adobe Experience Manager architect.',
    about: [
      'I am a Solutions Consultant at Adobe, working in presales on Adobe Experience Cloud: understanding what each customer needs and turning it into solutions and product demos.',
      'I come from the technical side. For over seven years I worked with Adobe Experience Manager as a developer, architect and practice technical lead, on projects in Spain and abroad.',
      'I am particularly interested in how content is planned, created and delivered at scale (Content Supply Chain), and in building small things on my own; some of them live in the Apps section.',
    ],
    experience: [
      { period: 'Mar 2026 — Present', role: 'Solutions Consultant | Presales', company: 'Adobe', location: 'Madrid', text: 'Presales specialist for Adobe Experience Cloud: tailored solution design and product demonstrations alongside sales teams.' },
      { period: 'Feb 2023 — Mar 2026', role: 'AEM Practice Lead (Technical) · AEM Architect', company: 'VML The Cocktail', location: 'Madrid', text: 'Led technical strategy and architecture governance of the AEM practice; mentored senior engineers, shaped delivery standards and supported presales and solution design.' },
      { period: 'Feb 2021 — Feb 2023', role: 'AEM Architect · AEM Tech Lead', company: 'VASS', location: 'Spain' },
      { period: 'Jun 2019 — Feb 2021', role: 'AEM Developer · Adobe Certified Expert', company: 'Capgemini', location: 'Belgium', text: 'International client projects on site and in office; first line of a multi-client support team for AEM projects.' },
      { period: 'Sep 2017 — Jun 2019', role: 'Junior Consultant → Consultant · AEM Developer', company: 'Capgemini', location: 'Murcia', text: 'Built components and services on AEM 6.1–6.5, with Adobe Analytics, Target and Sling/JCR.' },
      { period: 'Mar 2017 — Jun 2017', role: 'Intern', company: 'AlanciS', location: 'Murcia' },
    ],
    education: [
      { period: '2017 — 2019', title: 'Web Application Development (Higher VET)', place: 'IES Carlos III, Cartagena' },
      { period: '2015 — 2017', title: 'Cross-platform Application Development (Higher VET)', place: 'IES Alquerías' },
      { period: '', title: 'Science & Technology Baccalaureate', place: 'IES Juan Carlos I' },
    ],
    certs: [
      'Adobe Certified Master — AEM Sites Architect',
      'Adobe Certified Expert — AEM (2018)',
      'Cambridge C1 Advanced (CAE)',
      '1st place, Murcia Informatics Olympiad 2011',
      '2nd place, Murcia Region Informatics Olympiad 2012',
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Full professional' },
      { name: 'French', level: 'Elementary' },
    ],
    skills: ['Adobe Experience Cloud', 'Adobe Experience Manager', 'Content Supply Chain', 'Product demonstration', 'RFP', 'Solution architecture', 'Technical leadership'],
  },
};
