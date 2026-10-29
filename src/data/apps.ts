import type { Lang } from '../i18n';

type L10n = Record<Lang, string>;

export interface App {
  slug: string;
  name: string;
  /** GitHub "owner/repo". */
  repo: string;
  description: L10n;
  features: Record<Lang, string[]>;
  tags?: string[];
  platform?: L10n;
  note?: L10n;
  /** Path under /public. Without it, a letter tile is shown. */
  icon?: string;
  /** Screenshots under /public, with a localized caption. */
  screenshots?: { src: string; alt: L10n }[];
  /** Hosted instance, if the app is a web service. */
  live?: string;
  /** Show a download button built from the latest GitHub release. */
  download?: boolean;
}

export const apps: App[] = [
  {
    slug: 'aem-conest',
    name: 'AEM Conest',
    repo: 'JorgeRZT/aem-conest',
    icon: '/apps/aem-conest.svg',
    description: {
      es: 'App de macOS para limpiar y analizar logs del CDN de AEM as a Cloud Service: arrastra los archivos y consulta un dashboard con filtros.',
      en: 'macOS app to clean and analyze AEM as a Cloud Service CDN logs: drag & drop files and explore a dashboard with filters.',
    },
    features: {
      es: [
        'Filtra el ruido (bots, estáticos, rutas internas) y cuenta peticiones de contenido por día, dominio o rango de fechas.',
        'Arrastra uno o varios archivos (.csv, .log, .txt) y obtén resultados sin tocar el terminal.',
        'Pensada para archivos de varios gigas.',
      ],
      en: [
        'Filters out noise (bots, static assets, internal paths) and counts content requests by day, domain or date range.',
        'Drop one or more files (.csv, .log, .txt) and get results without touching the terminal.',
        'Built for files of several gigabytes.',
      ],
    },
    tags: ['macOS', 'Swift', 'AEM'],
    platform: { es: 'macOS 14 o superior', en: 'macOS 14 or later' },
    note: {
      es: 'Herramienta independiente y no oficial, no es un producto de Adobe. La app no está firmada por Apple: macOS mostrará un aviso la primera vez que la abras. Las cifras son aproximaciones, no una métrica oficial.',
      en: 'Independent, unofficial tool; not an Adobe product. The app is not signed by Apple, so macOS will warn you the first time you open it. Figures are approximations, not an official metric.',
    },
    download: true,
    screenshots: [
      { src: '/apps/aem-conest/dashboard-summary.png', alt: { es: 'Dashboard: resumen de peticiones', en: 'Dashboard: requests summary' } },
      { src: '/apps/aem-conest/dashboard-domains.png', alt: { es: 'Dashboard: peticiones por dominio', en: 'Dashboard: requests by domain' } },
      { src: '/apps/aem-conest/dashboard-date-range.png', alt: { es: 'Dashboard: filtro por rango de fechas', en: 'Dashboard: date range filter' } },
      { src: '/apps/aem-conest/dashboard-day-domain-heatmap.png', alt: { es: 'Dashboard: mapa de calor por día y dominio', en: 'Dashboard: day and domain heatmap' } },
    ],
  },
  {
    slug: 'stagehand',
    name: 'Stagehand',
    repo: 'JorgeRZT/Stagehand',
    icon: '/apps/stagehand.png',
    description: {
      es: 'Gestor de entornos locales de Adobe Experience Manager: organiza tus instancias Author y Publish en workspaces y créalas, configúralas, arráncalas, páralas y consulta sus logs desde una sola app.',
      en: 'Local environment manager for Adobe Experience Manager: organize your Author and Publish instances in workspaces and create, configure, start, stop and read the logs of each one from a single app.',
    },
    features: {
      es: [
        'Workspaces para agrupar entornos, por ejemplo uno por cliente o proyecto, cada uno con su Author y su Publish.',
        'Asistente para crear entornos y ajustes por entorno: carpeta y JAR, puerto, runmodes, opciones de JVM (p. ej. depuración remota) y comandos personalizados.',
        'Estado en vivo de cada instancia (parada, arrancando, en marcha, parando) con botones de arrancar, parar, abrir en el navegador y abrir carpeta.',
        'Visor de logs en tiempo real (error.log, stdout.log, request.log…) con búsqueda y filtros por nivel.',
      ],
      en: [
        'Workspaces to group environments, for example one per client or project, each with its own Author and Publish.',
        'Wizard to create environments and per-environment settings: folder and JAR, port, runmodes, JVM options (e.g. remote debug) and custom commands.',
        'Live status for every instance (stopped, starting, running, stopping) with start, stop, open in browser and open folder buttons.',
        'Real-time log viewer (error.log, stdout.log, request.log…) with text search and level filters.',
      ],
    },
    tags: ['macOS', 'Rust', 'Tauri', 'AEM'],
    platform: { es: 'macOS (Apple Silicon); Linux y Windows sin probar', en: 'macOS (Apple Silicon); Linux and Windows untested' },
    note: {
      es: 'Herramienta independiente y no oficial, no es un producto de Adobe. La app no está firmada ni notarizada: en el primer arranque, clic derecho y «Abrir».',
      en: 'Independent, unofficial tool; not an Adobe product. The app is not signed or notarized: on first launch, right-click and choose Open.',
    },
    download: true,
    screenshots: [
      { src: '/apps/stagehand/running-author-logs.png', alt: { es: 'Instancia Author en marcha con su error.log en vivo', en: 'Running Author instance with its live error.log' } },
      { src: '/apps/stagehand/workspace-environments.png', alt: { es: 'Workspace con entornos Author y Publish', en: 'Workspace with Author and Publish environments' } },
      { src: '/apps/stagehand/new-environment-wizard.png', alt: { es: 'Asistente de nuevo entorno', en: 'New environment wizard' } },
      { src: '/apps/stagehand/log-file-picker.png', alt: { es: 'Selector de archivo de log', en: 'Log file picker' } },
    ],
  },
  {
    slug: 'my-custom-api',
    name: 'My Custom API',
    repo: 'JorgeRZT/my-custom-api',
    live: 'https://mycustomapi.online',
    description: {
      es: 'Crea tus propias URLs de API públicas en segundos y decide qué devuelven: cuerpo, código, cabeceras y latencia.',
      en: 'Create your own public API URLs in seconds and decide what they return: body, status, headers and latency.',
    },
    features: {
      es: [
        'Cualquier código 200–599, formatos JSON, texto, HTML, XML o CSV, cabeceras propias y latencia artificial.',
        'Espacio privado por cuenta con acceso mediante Google y claves de API opcionales por endpoint.',
        'Pensada para LLMs: incluye /llms.txt y una especificación OpenAPI 3.1.',
        'Funciona sobre Cloudflare Workers y KV, sin dependencias en ejecución.',
      ],
      en: [
        'Any status 200–599, JSON, text, HTML, XML or CSV, custom headers and artificial latency.',
        'Private space per account with Google sign-in and optional API keys per endpoint.',
        'Built for LLMs: ships /llms.txt and an OpenAPI 3.1 spec.',
        'Runs on Cloudflare Workers and KV, with no runtime dependencies.',
      ],
    },
    tags: ['Cloudflare Workers', 'TypeScript'],
    platform: { es: 'Web', en: 'Web' },
  },
  {
    slug: 'wotlk-questline',
    name: 'WotLK QuestLine',
    repo: 'JorgeRZT/wotlk-questline',
    description: {
      es: 'Addon de World of Warcraft 3.3.5a que te dice qué misiones hacer a continuación para subir de nivel lo más rápido posible.',
      en: 'World of Warcraft 3.3.5a addon that tells you which quests to do next to level as fast as possible.',
    },
    features: {
      es: [
        'Plan de misiones por nivel (cinco niveles por delante) según tu clase, facción, nivel, XP y posición.',
        'Ordena por XP por segundo, teniendo en cuenta el desplazamiento y las cadenas de misiones.',
        'Flecha de dirección y marcadores numerados en el mapa del mundo.',
        '4.553 misiones de nivel 1 a 80 de la base de datos de TrinityCore.',
      ],
      en: [
        'Per-level quest plan (five levels ahead) from your class, faction, level, XP and position.',
        'Ranks quests by XP per second, accounting for travel time and quest chains.',
        'Direction arrow and numbered markers on the world map.',
        '4,553 quests for levels 1–80 from the TrinityCore database.',
      ],
    },
    tags: ['WoW addon', 'Lua'],
    platform: { es: 'WoW 3.3.5a (WotLK)', en: 'WoW 3.3.5a (WotLK)' },
    note: {
      es: 'La interfaz dentro del juego está en español.',
      en: 'The in-game interface is in Spanish.',
    },
    download: true,
  },
];

export interface Download { url: string; name: string; version: string }
const cache = new Map<string, Promise<Download | null>>();

/** Latest GitHub release asset, resolved at build time so the button never goes stale. */
export function latestDownload(app: App): Promise<Download | null> {
  if (!app.download) return Promise.resolve(null);
  if (!cache.has(app.repo)) {
    cache.set(
      app.repo,
      (async () => {
        try {
          const headers: Record<string, string> = { 'User-Agent': 'jlopellicer-site', Accept: 'application/vnd.github+json' };
          if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
          const res = await fetch(`https://api.github.com/repos/${app.repo}/releases/latest`, { headers, signal: AbortSignal.timeout(8000) });
          if (!res.ok) return null;
          const rel = (await res.json()) as { tag_name: string; assets: { name: string; browser_download_url: string }[] };
          const asset = rel.assets?.[0];
          return asset ? { url: asset.browser_download_url, name: asset.name, version: rel.tag_name } : null;
        } catch {
          return null;
        }
      })(),
    );
  }
  return cache.get(app.repo)!;
}
