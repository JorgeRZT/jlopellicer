import type { Lang } from '../i18n';

export interface App {
  name: string;
  description: Record<Lang, string>;
  url: string;
  tags?: string[];
  status?: Record<Lang, string>;
}

export const apps: App[] = [
  {
    name: 'Mi primera app',
    description: { es: 'Descripción breve de lo que hace la app.', en: 'Short description of what the app does.' },
    url: 'https://example.com',
    tags: ['Web'],
    status: { es: 'Activa', en: 'Live' },
  },
];
