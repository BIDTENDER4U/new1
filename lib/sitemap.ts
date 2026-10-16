import { ROUTES_SEO, CANONICAL_BASE } from '../src/lib/seoData';
import { BLOG_ARTICLES } from '../src/lib/blogArticlesData';
import { STATES_DATA, CITIES_DATA, ALL_INDIA_SUMMARY } from '../src/lib/locationData';
import { 
  TENDER_KEYWORDS_DATA, 
  getTendersByKeywordsList, 
  type TenderKeywordItem 
} from '../src/components/TendersByKeywords';
import { CORE_SERVICES, PORTALS_DATA, CATEGORIES_DATA } from '../src/lib/constants';

export type { TenderKeywordItem };

export interface SitemapUrlEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface SitemapGenerateOptions {
  baseUrl?: string;
  defaultLastmod?: string;
  includeCore?: boolean;
  includeServices?: boolean;
  includeBlog?: boolean;
  includeLocations?: boolean;
  includeKeywords?: boolean;
  excludeNonIndexable?: boolean;
  environment?: string;
  filterPredicate?: (entry: SitemapUrlEntry) => boolean;
}

export const DEFAULT_BASE_URL = CANONICAL_BASE || 'https://www.bidtender4u.com';

/**
 * Returns the current date in standard ISO YYYY-MM-DD format.
 */
export function getDefaultLastmod(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Normalizes a route path and combines it with the base URL into a correct absolute URL.
 * Ensures strict HTTPS, no double slashes, and proper self-referencing canonical format.
 */
export function buildAbsoluteUrl(path: string, baseUrl: string = DEFAULT_BASE_URL): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return `${cleanBase}/`;
  }
  return `${cleanBase}${cleanPath.replace(/\/+$/, '')}`;
}

/**
 * Determines whether a route is valid, public, and eligible for search engine indexing.
 * Filters out internal APIs, dev routes, non-canonical aliases, private admin pages,
 * and parameterized query routes to ensure only indexable URLs enter the sitemap.
 */
export function isRouteIndexable(path: string): boolean {
  if (!path) return false;

  const normalized = path.trim().toLowerCase().replace(/\/+$/, '');

  // Exclude internal API, Vite dev, and asset paths
  if (
    normalized.startsWith('/api') ||
    normalized.startsWith('/@') ||
    normalized.startsWith('/src') ||
    normalized.startsWith('/admin') ||
    normalized.startsWith('/_')
  ) {
    return false;
  }

  // Exclude query parameters, fragments, or modal trigger paths
  if (normalized.includes('?') || normalized.includes('#')) {
    return false;
  }

  // Exclude non-canonical legacy aliases that have 301 redirects to canonical targets
  // (e.g., /about and /contact canonicalize to /about-us and /contact-us)
  const nonCanonicalAliases = ['/about', '/contact', '/pay', '/payment', '/services/tender-bidding'];
  if (nonCanonicalAliases.includes(normalized)) {
    return false;
  }

  return true;
}

/**
 * Crawls and returns core public service pages and authoritative static routes.
 * Non-canonical aliases are excluded to ensure 100% self-referencing canonical indexability.
 */
export function getCorePublicRoutes(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): SitemapUrlEntry[] {
  const dateStr = lastmod || getDefaultLastmod();

  const coreRouteDefs: Array<{ path: string; changefreq: SitemapUrlEntry['changefreq']; priority: number }> = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/tender-bidding-consultancy', changefreq: 'daily', priority: 0.95 },
    { path: '/gem-registration', changefreq: 'weekly', priority: 0.95 },
    { path: '/gem-product-listing', changefreq: 'weekly', priority: 0.95 },
    { path: '/oem-services', changefreq: 'weekly', priority: 0.95 },
    { path: '/free-tender-summary', changefreq: 'daily', priority: 0.95 },
    { path: '/gem-tender-consultancy', changefreq: 'weekly', priority: 0.95 },
    { path: '/gem-documents', changefreq: 'weekly', priority: 0.90 },
    { path: '/services', changefreq: 'weekly', priority: 0.90 },
    { path: '/msme-startup-tenders', changefreq: 'weekly', priority: 0.90 },
    { path: '/iso-dsc-certifications', changefreq: 'weekly', priority: 0.90 },
    { path: '/certifications', changefreq: 'weekly', priority: 0.90 },
    { path: '/categories', changefreq: 'weekly', priority: 0.85 },
    { path: '/portals', changefreq: 'weekly', priority: 0.85 },
    { path: '/locations', changefreq: 'daily', priority: 0.95 },
    { path: '/stories', changefreq: 'weekly', priority: 0.80 },
    { path: '/insights', changefreq: 'daily', priority: 0.90 },
    { path: '/faqs', changefreq: 'monthly', priority: 0.80 },
    { path: '/blog', changefreq: 'daily', priority: 0.95 },
    { path: '/sitemap', changefreq: 'daily', priority: 0.80 },
    { path: '/payment-details', changefreq: 'weekly', priority: 0.85 },
    { path: '/about-us', changefreq: 'monthly', priority: 0.90 },
    { path: '/contact-us', changefreq: 'monthly', priority: 0.90 },
  ];

  return coreRouteDefs
    .filter((def) => isRouteIndexable(def.path))
    .map((def) => ({
      loc: buildAbsoluteUrl(def.path, baseUrl),
      lastmod: dateStr,
      changefreq: def.changefreq,
      priority: def.priority,
    }));
}

/**
 * Dynamically crawls all published regulatory and procurement blog articles,
 * mapping each unique article slug to its absolute canonical URL.
 */
export function getBlogRoutes(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): SitemapUrlEntry[] {
  const dateStr = lastmod || getDefaultLastmod();

  return BLOG_ARTICLES
    .filter((article) => Boolean(article.slug) && isRouteIndexable(`/blog/${article.slug}`))
    .map((article) => ({
      loc: buildAbsoluteUrl(`/blog/${article.slug}`, baseUrl),
      lastmod: dateStr,
      changefreq: 'weekly',
      priority: 0.85,
    }));
}

/**
 * Dynamically crawls all state and city location landing hub pages,
 * generating compliant absolute URLs for pan-India municipal and state portals.
 */
export function getLocationRoutes(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): SitemapUrlEntry[] {
  const dateStr = lastmod || getDefaultLastmod();
  const entries: SitemapUrlEntry[] = [];

  // Crawl all 28 state procurement hubs
  for (const state of STATES_DATA) {
    if (state.id && isRouteIndexable(`/locations/${state.id}`)) {
      entries.push({
        loc: buildAbsoluteUrl(`/locations/${state.id}`, baseUrl),
        lastmod: dateStr,
        changefreq: 'weekly',
        priority: 0.85,
      });
    }
  }

  // Crawl all key municipal city hubs
  for (const city of CITIES_DATA) {
    if (city.id && isRouteIndexable(`/locations/${city.id}`)) {
      entries.push({
        loc: buildAbsoluteUrl(`/locations/${city.id}`, baseUrl),
        lastmod: dateStr,
        changefreq: 'weekly',
        priority: 0.85,
      });
    }
  }

  return entries;
}

/**
 * Programmatically iterates through all tender keywords defined in the TendersByKeywords component
 * (sourced from TENDER_KEYWORDS_DATA) to generate dedicated XML sitemap entries, mapping each keyword
 * to a unique '/tenders-by-keywords/[keyword]' route.
 *
 * @param baseUrl Base website domain (defaults to DEFAULT_BASE_URL).
 * @param lastmod Standard ISO lastmod date (defaults to current date).
 * @param options Optional configuration including priority, changefreq, and filter predicate.
 * @returns Array of SitemapUrlEntry objects mapped to each unique '/tenders-by-keywords/[keyword]' route.
 */
export function generateTendersByKeywordsSitemapEntries(
  baseUrl: string = DEFAULT_BASE_URL,
  lastmod?: string,
  options?: {
    defaultPriority?: number;
    defaultChangefreq?: SitemapUrlEntry['changefreq'];
    includeHub?: boolean;
    filterPredicate?: (kw: TenderKeywordItem) => boolean;
  }
): SitemapUrlEntry[] {
  const dateStr = lastmod || getDefaultLastmod();
  const priority = options?.defaultPriority ?? 0.85;
  const changefreq = options?.defaultChangefreq ?? 'weekly';
  const entries: SitemapUrlEntry[] = [];
  const seenPaths = new Set<string>();

  // Include primary hub if explicitly requested
  if (options?.includeHub === true) {
    const hubPath = '/tenders-by-keywords';
    if (isRouteIndexable(hubPath)) {
      seenPaths.add(hubPath);
      entries.push({
        loc: buildAbsoluteUrl(hubPath, baseUrl),
        lastmod: dateStr,
        changefreq: 'daily',
        priority: 0.90,
      });
    }
  }

  // Fetch the full list of keywords directly from the TendersByKeywords component structure
  const keywordsList = typeof getTendersByKeywordsList === 'function'
    ? getTendersByKeywordsList()
    : TENDER_KEYWORDS_DATA;

  // Programmatically iterate through all tender keywords defined in TendersByKeywords
  for (const keyword of keywordsList) {
    if (options?.filterPredicate && !options.filterPredicate(keyword)) {
      continue;
    }

    const keywordSlug = keyword.id.trim().toLowerCase();
    const routePath = `/tenders-by-keywords/${keywordSlug}`;

    if (!seenPaths.has(routePath) && isRouteIndexable(routePath)) {
      seenPaths.add(routePath);
      entries.push({
        loc: buildAbsoluteUrl(routePath, baseUrl),
        lastmod: dateStr,
        changefreq,
        priority,
      });
    }
  }

  return entries;
}

// Aliases for flexible integration and naming conventions
export const getTendersByKeywordsSitemapEntries = generateTendersByKeywordsSitemapEntries;
export const mapTendersByKeywordsToSitemapEntries = generateTendersByKeywordsSitemapEntries;
export const generateTenderKeywordsSitemapEntries = generateTendersByKeywordsSitemapEntries;
export const generateKeywordSitemapEntries = generateTendersByKeywordsSitemapEntries;
export const getTenderKeywordRoutes = generateTendersByKeywordsSitemapEntries;
export const createTendersByKeywordsSitemapEntries = generateTendersByKeywordsSitemapEntries;
export const generateKeywordRoutes = generateTendersByKeywordsSitemapEntries;
export const mapKeywordsToSitemapEntries = generateTendersByKeywordsSitemapEntries;
export const getTendersByKeywordsEntries = generateTendersByKeywordsSitemapEntries;
export const generateTenderKeywordsSitemap = generateTendersByKeywordsSitemapEntries;

/**
 * Programmatically generates the full XML sitemap markup mapping each tender keyword
 * defined in the TendersByKeywords component to its unique '/tenders-by-keywords/[keyword]' route.
 */
export function generateTendersByKeywordsXml(
  baseUrl: string = DEFAULT_BASE_URL,
  lastmod?: string,
  options?: Parameters<typeof generateTendersByKeywordsSitemapEntries>[2]
): string {
  const entries = generateTendersByKeywordsSitemapEntries(baseUrl, lastmod, options);
  return formatUrlsetXml(entries);
}

/**
 * Crawls and returns all tender keyword directory routes and specific trade slugs.
 */
export function getKeywordRoutes(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): SitemapUrlEntry[] {
  return generateTendersByKeywordsSitemapEntries(baseUrl, lastmod, { includeHub: true });
}

/**
 * Navigation tender service keywords catalog containing all service labels,
 * target paths, change frequencies, and relative SEO priorities as exposed
 * in the site header and mobile navigation menus.
 */
export const NAVIGATION_TENDER_SERVICE_KEYWORDS: Array<{
  keyword: string;
  path: string;
  priority: number;
  changefreq: SitemapUrlEntry['changefreq'];
  category?: string;
}> = [
  { keyword: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', priority: 0.95, changefreq: 'daily' },
  { keyword: 'GeM Registration Services', path: '/gem-registration', priority: 0.95, changefreq: 'weekly' },
  { keyword: 'GeM Product Listing & Catalog Management', path: '/gem-product-listing', priority: 0.95, changefreq: 'weekly' },
  { keyword: 'OEM Services & Brand Approval', path: '/oem-services', priority: 0.95, changefreq: 'weekly' },
  { keyword: 'GeM Tender Consultancy', path: '/gem-tender-consultancy', priority: 0.95, changefreq: 'weekly' },
  { keyword: 'GeM Registration Documents Checklist', path: '/gem-documents', priority: 0.90, changefreq: 'weekly' },
  { keyword: 'MSME & Startup Tenders Assistance', path: '/msme-startup-tenders', priority: 0.90, changefreq: 'weekly' },
  { keyword: 'ISO & DSC Certifications', path: '/iso-dsc-certifications', priority: 0.90, changefreq: 'weekly' },
  { keyword: 'Free Tender Summary & Document Audit', path: '/free-tender-summary', priority: 0.95, changefreq: 'daily' },
  { keyword: '12 Public Procurement Categories Directory', path: '/categories', priority: 0.85, changefreq: 'weekly' },
  { keyword: 'E-Procurement Portals Directory', path: '/portals', priority: 0.85, changefreq: 'weekly' },
  { keyword: 'Tenders by Keywords & Trades Hub', path: '/tenders-by-keywords', priority: 0.90, changefreq: 'daily' },
];

/**
 * Dynamically injects all tender service keywords listed in the navigation
 * (including primary practice areas, statutory services, and all 328+ trade keyword slugs)
 * into the XML sitemap generation process, ensuring each keyword has an associated absolute URL path.
 *
 * @param existingEntries Optional existing array of SitemapUrlEntry or SitemapGenerateOptions.
 * @param baseUrl Base website domain (defaults to DEFAULT_BASE_URL).
 * @param lastmod Standard ISO lastmod date (defaults to current date).
 * @returns Array of SitemapUrlEntry objects with absolute URL paths.
 */
export function injectNavigationTenderServiceKeywords(
  existingEntries?: SitemapUrlEntry[] | SitemapGenerateOptions,
  baseUrl: string = DEFAULT_BASE_URL,
  lastmod?: string
): SitemapUrlEntry[] {
  let entriesList: SitemapUrlEntry[] = [];
  let effectiveBaseUrl = baseUrl;
  let effectiveLastmod = lastmod || getDefaultLastmod();
  let filterPredicate: ((entry: SitemapUrlEntry) => boolean) | undefined;

  if (Array.isArray(existingEntries)) {
    entriesList = existingEntries;
  } else if (existingEntries && typeof existingEntries === 'object') {
    if (existingEntries.baseUrl) effectiveBaseUrl = existingEntries.baseUrl;
    if (existingEntries.defaultLastmod) effectiveLastmod = existingEntries.defaultLastmod;
    filterPredicate = existingEntries.filterPredicate;
  }

  const seenUrls = new Set<string>(entriesList.map((e) => e.loc));

  const addKeywordEntry = (path: string, priority: number = 0.85, changefreq: SitemapUrlEntry['changefreq'] = 'weekly') => {
    if (!isRouteIndexable(path)) return;
    const absoluteUrl = buildAbsoluteUrl(path, effectiveBaseUrl);
    if (!seenUrls.has(absoluteUrl)) {
      const entry: SitemapUrlEntry = {
        loc: absoluteUrl,
        lastmod: effectiveLastmod,
        changefreq,
        priority,
      };
      if (!filterPredicate || filterPredicate(entry)) {
        seenUrls.add(absoluteUrl);
        entriesList.push(entry);
      }
    }
  };

  // 1. Inject all core tender service keywords listed in navigation
  for (const item of NAVIGATION_TENDER_SERVICE_KEYWORDS) {
    addKeywordEntry(item.path, item.priority, item.changefreq);
  }

  // 2. Inject all tender trade service keywords accessible via navigation keyword directory
  for (const kw of TENDER_KEYWORDS_DATA) {
    const keywordPath = `/tenders-by-keywords/${kw.id}`;
    addKeywordEntry(keywordPath, 0.85, 'weekly');
  }

  return entriesList;
}

// Aliases for flexible integration and naming conventions
export const injectTenderServiceKeywords = injectNavigationTenderServiceKeywords;
export const getNavigationTenderServiceKeywords = (baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): SitemapUrlEntry[] =>
  injectNavigationTenderServiceKeywords([], baseUrl, lastmod);

/**
 * Crawls and aggregates all available app routes (core services, blog slugs, location hubs, and tender keywords),
 * deduplicating entries and ensuring strict indexability filtering.
 */
export function crawlAllAppRoutes(options: SitemapGenerateOptions = {}): SitemapUrlEntry[] {
  const baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  const lastmod = options.defaultLastmod || getDefaultLastmod();

  const entries: SitemapUrlEntry[] = [];
  const seenUrls = new Set<string>();

  const addEntries = (items: SitemapUrlEntry[]) => {
    for (const item of items) {
      if (!seenUrls.has(item.loc)) {
        if (options.filterPredicate && !options.filterPredicate(item)) {
          continue;
        }
        seenUrls.add(item.loc);
        entries.push(item);
      }
    }
  };

  // 1. Core and service routes
  if (options.includeCore !== false) {
    addEntries(getCorePublicRoutes(baseUrl, lastmod));
  }

  // 2. Dynamic blog article slugs
  if (options.includeBlog !== false) {
    addEntries(getBlogRoutes(baseUrl, lastmod));
  }

  // 3. Dynamic state & city location hubs
  if (options.includeLocations !== false) {
    addEntries(getLocationRoutes(baseUrl, lastmod));
  }

  // 4. Dynamic tender keywords & trade sectors fetched from TendersByKeywords component structure
  if (options.includeKeywords !== false) {
    addEntries(generateTendersByKeywordsSitemapEntries(baseUrl, lastmod, { includeHub: true }));
  }

  // 5. Dynamically inject all tender service keywords listed in the navigation
  if (options.includeKeywords !== false || options.includeServices !== false) {
    injectNavigationTenderServiceKeywords(entries, baseUrl, lastmod);
  }

  // 4. Discover any dynamically registered routes from ROUTES_SEO that are indexable
  if (ROUTES_SEO) {
    for (const [routePath, meta] of Object.entries(ROUTES_SEO)) {
      if (meta && isRouteIndexable(routePath)) {
        const absoluteUrl = meta.canonical || buildAbsoluteUrl(routePath, baseUrl);
        if (!seenUrls.has(absoluteUrl)) {
          const entry: SitemapUrlEntry = {
            loc: absoluteUrl,
            lastmod,
            changefreq: 'weekly',
            priority: 0.80,
          };
          if (!options.filterPredicate || options.filterPredicate(entry)) {
            seenUrls.add(absoluteUrl);
            entries.push(entry);
          }
        }
      }
    }
  }

  return entries;
}

export const getAllPublicRoutes = crawlAllAppRoutes;

/**
 * Formats an array of SitemapUrlEntry records into compliant XML sitemap format
 * conforming to the official Sitemaps XML protocol (https://www.sitemaps.org/schemas/sitemap/0.9).
 */
export function formatUrlsetXml(entries: SitemapUrlEntry[]): string {
  const urlNodes = entries
    .map((entry) => {
      const parts: string[] = [`    <loc>${entry.loc}</loc>`];
      if (entry.lastmod) {
        parts.push(`    <lastmod>${entry.lastmod}</lastmod>`);
      }
      if (entry.changefreq) {
        parts.push(`    <changefreq>${entry.changefreq}</changefreq>`);
      }
      if (typeof entry.priority === 'number') {
        parts.push(`    <priority>${entry.priority.toFixed(2)}</priority>`);
      }
      return `  <url>\n${parts.join('\n')}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;
}

/**
 * Dynamically crawls all available app routes, including blog slugs and location pages,
 * to generate a compliant XML sitemap.
 */
export function generateSitemapXml(options: SitemapGenerateOptions = {}): string {
  const allRoutes = crawlAllAppRoutes(options);
  return formatUrlsetXml(allRoutes);
}

/**
 * Generates blog-only XML sitemap for targeted search engine crawler submission.
 */
export function generateBlogSitemapXml(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): string {
  const blogRoutes = getBlogRoutes(baseUrl, lastmod);
  return formatUrlsetXml(blogRoutes);
}

/**
 * Generates locations-only XML sitemap covering all state and city hubs.
 */
export function generateLocationsSitemapXml(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): string {
  const locationRoutes = [
    {
      loc: buildAbsoluteUrl('/locations', baseUrl),
      lastmod: lastmod || getDefaultLastmod(),
      changefreq: 'daily' as const,
      priority: 0.95,
    },
    ...getLocationRoutes(baseUrl, lastmod),
  ];
  return formatUrlsetXml(locationRoutes);
}

/**
 * Generates services-only XML sitemap covering core procurement practice areas.
 */
export function generateServicesSitemapXml(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): string {
  const coreRoutes = getCorePublicRoutes(baseUrl, lastmod);
  return formatUrlsetXml(coreRoutes);
}

/**
 * Generates keywords-only XML sitemap covering all trade sectors and product keywords.
 */
export function generateKeywordsSitemapXml(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): string {
  const keywordRoutes = getKeywordRoutes(baseUrl, lastmod);
  return formatUrlsetXml(keywordRoutes);
}

/**
 * Generates XML sitemap specifically covering all navigation tender service keywords.
 */
export function generateNavigationKeywordsSitemapXml(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): string {
  const keywordRoutes = injectNavigationTenderServiceKeywords([], baseUrl, lastmod);
  return formatUrlsetXml(keywordRoutes);
}

/**
 * Generates parent Sitemap Index XML file referencing modular sub-sitemaps.
 */
export function generateSitemapIndexXml(baseUrl: string = DEFAULT_BASE_URL, lastmod?: string): string {
  const dateStr = lastmod || getDefaultLastmod();

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-services.xml</loc>
    <lastmod>${dateStr}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-blog.xml</loc>
    <lastmod>${dateStr}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-locations.xml</loc>
    <lastmod>${dateStr}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-keywords.xml</loc>
    <lastmod>${dateStr}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${dateStr}</lastmod>
  </sitemap>
</sitemapindex>
`;
}

/**
 * Returns HTTP response headers for serving XML sitemaps.
 * Sets X-Robots-Tag to 'noindex, follow' so that search engines (e.g. Googlebot)
 * process and crawl all URLs within the sitemap while excluding the raw XML document
 * itself from search engine snippet indexation.
 */
export function getSitemapHeaders(options: { noindex?: boolean; cacheSeconds?: number } = {}): Record<string, string> {
  const shouldNoindex = options.noindex !== false; // Default true for sitemap XML document
  const cacheSeconds = options.cacheSeconds ?? 3600;

  return {
    'Content-Type': 'application/xml; charset=utf-8',
    'X-Robots-Tag': shouldNoindex ? 'noindex, follow' : 'all',
    'Cache-Control': `public, max-age=${cacheSeconds}, must-revalidate`,
  };
}

/**
 * Structured sitemap directory node for visual and programmatic exploration
 * of tender industry keywords, regional hubs, statutory services, and portals.
 */
export interface SitemapDirectoryNode {
  id: string;
  title: string;
  loc: string;
  path: string;
  category: 'Keyword' | 'Regional Hub' | 'Service' | 'Portal' | 'Article' | 'Page';
  subcategory?: string;
  description: string;
  priority: number;
  changefreq: SitemapUrlEntry['changefreq'];
  tags: string[];
}

/**
 * Compiles and returns all comprehensive directory nodes, aggregating:
 * - 328 Tender Industry Trade Keywords (with category, letter & portals)
 * - 79+ Regional Hubs (All-India, 28 States, and 50+ Cities)
 * - Core statutory tender services & GeM practice areas
 * - E-procurement portals & procurement categories
 * - Regulatory blog guides
 */
export function getAllSitemapDirectoryNodes(
  baseUrl: string = DEFAULT_BASE_URL,
  lastmod?: string
): SitemapDirectoryNode[] {
  const nodes: SitemapDirectoryNode[] = [];
  const seenLocs = new Set<string>();

  const addNode = (node: SitemapDirectoryNode) => {
    if (!seenLocs.has(node.loc) && isRouteIndexable(node.path)) {
      seenLocs.add(node.loc);
      nodes.push(node);
    }
  };

  // 1. Core Services & Navigation Keywords
  for (const srv of NAVIGATION_TENDER_SERVICE_KEYWORDS) {
    addNode({
      id: `srv-${srv.path.replace(/^\//, '')}`,
      title: srv.keyword,
      loc: buildAbsoluteUrl(srv.path, baseUrl),
      path: srv.path,
      category: 'Service',
      subcategory: 'Core Practice Areas',
      description: `Comprehensive procurement & consultancy assistance for ${srv.keyword}.`,
      priority: srv.priority,
      changefreq: srv.changefreq,
      tags: [srv.keyword, 'tender consultancy', 'bidding', 'gem'],
    });
  }

  // 2. 328 Tender Industry Keywords & Trade Sectors fetched from TendersByKeywords component structure
  const keywordsList = typeof getTendersByKeywordsList === 'function'
    ? getTendersByKeywordsList()
    : TENDER_KEYWORDS_DATA;

  for (const kw of keywordsList) {
    const kwPath = `/tenders-by-keywords/${kw.id}`;
    addNode({
      id: `kw-${kw.id}`,
      title: kw.name,
      loc: buildAbsoluteUrl(kwPath, baseUrl),
      path: kwPath,
      category: 'Keyword',
      subcategory: kw.category,
      description: kw.description,
      priority: 0.85,
      changefreq: 'weekly',
      tags: [kw.shortName, kw.category, kw.letter, ...kw.keywords, ...kw.typicalPortals],
    });
  }

  // 3. Regional Hubs: National All-India Hub
  addNode({
    id: 'loc-all-india',
    title: 'All India & Central Government Tenders Hub',
    loc: buildAbsoluteUrl('/locations', baseUrl),
    path: '/locations',
    category: 'Regional Hub',
    subcategory: 'National Hub',
    description: ALL_INDIA_SUMMARY.tagline || 'Pan-India Central Government procurement across GeM, CPPP, IREPS, and Defence.',
    priority: 0.95,
    changefreq: 'daily',
    tags: ['All India', 'Central Tenders', 'GeM', 'CPPP', 'IREPS', 'National'],
  });

  // 4. Regional Hubs: 28 States & UTs
  for (const state of STATES_DATA) {
    const statePath = `/locations/${state.id}`;
    addNode({
      id: `state-${state.id}`,
      title: `${state.name} State Government Tenders`,
      loc: buildAbsoluteUrl(statePath, baseUrl),
      path: statePath,
      category: 'Regional Hub',
      subcategory: `${state.region} Region`,
      description: `${state.portalName} consultancy across ${state.keyCities.slice(0, 3).join(', ')}. Volume: ${state.tenderVolume}.`,
      priority: 0.85,
      changefreq: 'daily',
      tags: [state.name, state.portalName, state.region, ...state.keyCities, ...state.majorDepartments],
    });
  }

  // 5. Regional Hubs: 50+ Key Indian Cities
  for (const city of CITIES_DATA) {
    const cityPath = `/locations/${city.id}`;
    addNode({
      id: `city-${city.id}`,
      title: `${city.name} (${city.state}) Municipal Tenders`,
      loc: buildAbsoluteUrl(cityPath, baseUrl),
      path: cityPath,
      category: 'Regional Hub',
      subcategory: city.state,
      description: `${city.portal} municipal guidance for ${city.name}, ${city.state}. Key sectors: ${city.topSectors.slice(0, 2).join(', ')}.`,
      priority: 0.80,
      changefreq: 'daily',
      tags: [city.name, city.state, city.region, city.portal, ...city.topSectors, ...city.keyAuthorities],
    });
  }

  // 6. Central & State Portals
  for (const p of PORTALS_DATA) {
    const portalSlug = p.shortCode.toLowerCase().replace(/[^a-z0-9]/g, '-');
    addNode({
      id: `portal-${portalSlug}`,
      title: `${p.name} (${p.shortCode}) e-Tender Portal`,
      loc: buildAbsoluteUrl('/portals', baseUrl),
      path: '/portals',
      category: 'Portal',
      subcategory: p.region,
      description: `${p.description} Required: ${p.dscRequirement}.`,
      priority: 0.80,
      changefreq: 'weekly',
      tags: [p.name, p.shortCode, p.region, p.dscRequirement],
    });
  }

  // 7. Long-Form Blog Articles
  for (const art of BLOG_ARTICLES) {
    const artPath = `/blog/${art.slug}`;
    addNode({
      id: `art-${art.slug}`,
      title: art.title,
      loc: buildAbsoluteUrl(artPath, baseUrl),
      path: artPath,
      category: 'Article',
      subcategory: art.category,
      description: `${art.subtitle} (${art.readTime} · ${art.author})`,
      priority: 0.90,
      changefreq: 'weekly',
      tags: [art.title, art.category, art.author],
    });
  }

  // 8. Core Static Pages
  const staticPages = [
    { title: 'Home Page - Bid Tender 4 U', path: '/', priority: 1.0, changefreq: 'daily' as const, desc: 'All India tender bidding consultancy & GeM registration overview.' },
    { title: 'About Us & Company Credentials', path: '/about-us', priority: 0.90, changefreq: 'monthly' as const, desc: 'Isanpur Ahmedabad headquarters, track record, and registration info.' },
    { title: 'Contact Us & Intake Desk', path: '/contact-us', priority: 0.90, changefreq: 'monthly' as const, desc: 'Upload tender NIT documents for preliminary audit.' },
    { title: 'Tender FAQs & EMD Regulations', path: '/faqs', priority: 0.80, changefreq: 'monthly' as const, desc: 'GFR 2017 Rule 170 EMD exemption, DSC installation & bid securing queries.' },
    { title: 'Client Success Stories', path: '/stories', priority: 0.80, changefreq: 'weekly' as const, desc: 'Case studies of won tenders on GeM, nProcure, and CPPP.' },
    { title: 'Expert Insights & Procurement Feed', path: '/insights', priority: 0.90, changefreq: 'daily' as const, desc: 'Regulatory circulars, GFR analysis and legal updates.' },
    { title: 'Payment Details & ICICI UPI', path: '/payment-details', priority: 0.85, changefreq: 'weekly' as const, desc: 'Official UPI singhbaldev70368-2@okicici & QR code.' },
  ];

  for (const page of staticPages) {
    addNode({
      id: `page-${page.path.replace(/^\//, '') || 'home'}`,
      title: page.title,
      loc: buildAbsoluteUrl(page.path, baseUrl),
      path: page.path,
      category: 'Page',
      subcategory: 'Static Navigation',
      description: page.desc,
      priority: page.priority,
      changefreq: page.changefreq,
      tags: ['navigation', page.title],
    });
  }

  return nodes;
}

/**
 * Real-time filter and search function for the sitemap directory view.
 * Allows users to quickly filter the extensive list of tender industry keywords and regional hubs.
 *
 * @param query Search query string (case-insensitive search across title, tags, description, path)
 * @param options Filter options including category selection and base domain
 * @returns Filtered array of SitemapDirectoryNode items matching search criteria
 */
export function searchSitemapDirectory(
  query: string = '',
  options: {
    category?: 'all' | 'Keyword' | 'Regional Hub' | 'Service' | 'Portal' | 'Article' | 'Page';
    baseUrl?: string;
    lastmod?: string;
  } = {}
): SitemapDirectoryNode[] {
  const allNodes = getAllSitemapDirectoryNodes(options.baseUrl, options.lastmod);
  const q = query.trim().toLowerCase();
  const selectedCat = options.category && options.category !== 'all' ? options.category : null;

  return allNodes.filter((node) => {
    // Category match
    if (selectedCat && node.category !== selectedCat) {
      return false;
    }

    // Text search match
    if (!q) return true;

    return (
      node.title.toLowerCase().includes(q) ||
      node.description.toLowerCase().includes(q) ||
      (node.subcategory && node.subcategory.toLowerCase().includes(q)) ||
      node.path.toLowerCase().includes(q) ||
      node.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });
}

/**
 * Generates an interactive, responsive HTML Sitemap Directory View
 * complete with a functional, real-time search bar, category filtering buttons,
 * and direct links to each absolute URL.
 */
export function generateSitemapDirectoryHtml(
  options: {
    initialQuery?: string;
    initialCategory?: string;
    baseUrl?: string;
    lastmod?: string;
  } = {}
): string {
  const baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  const nodes = getAllSitemapDirectoryNodes(baseUrl, options.lastmod);

  const keywordsCount = nodes.filter((n) => n.category === 'Keyword').length;
  const hubsCount = nodes.filter((n) => n.category === 'Regional Hub').length;
  const servicesCount = nodes.filter((n) => n.category === 'Service').length;
  const portalsCount = nodes.filter((n) => n.category === 'Portal').length;
  const articlesCount = nodes.filter((n) => n.category === 'Article').length;

  const cardsHtml = nodes
    .map((node) => {
      const tagsAttr = encodeURIComponent(node.tags.join(' '));
      const subcat = node.subcategory ? `<span class="badge subcat">${escapeHtml(node.subcategory)}</span>` : '';
      return `
      <div class="sitemap-card" 
           data-category="${node.category}" 
           data-title="${escapeHtml(node.title.toLowerCase())}" 
           data-desc="${escapeHtml(node.description.toLowerCase())}" 
           data-subcat="${escapeHtml((node.subcategory || '').toLowerCase())}"
           data-tags="${tagsAttr}">
        <div class="card-header">
          <span class="badge cat-${node.category.toLowerCase().replace(/[^a-z]/g, '')}">${node.category}</span>
          ${subcat}
          <span class="priority-pill">${node.priority.toFixed(2)}</span>
        </div>
        <h3 class="card-title">${escapeHtml(node.title)}</h3>
        <p class="card-desc">${escapeHtml(node.description)}</p>
        <div class="card-footer">
          <a href="${node.loc}" class="card-link" target="_blank" rel="noopener">
            ${escapeHtml(node.loc)}
            <svg class="icon-link" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
          </a>
        </div>
      </div>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap Directory & Search Hub | Bid Tender 4 U</title>
  <meta name="description" content="Explore and filter the complete index of 328+ tender industry trade keywords, 79+ regional hubs, statutory GeM services, and central e-procurement portals.">
  <link rel="canonical" href="${baseUrl}/sitemap">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    body { background: #f8fafc; color: #0f172a; line-height: 1.5; padding: 0; }
    header { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 2.5rem 1rem 1.5rem; text-align: center; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
    .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: #fef3c7; color: #92400e; border: 1px solid #fde68a; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.75rem; letter-spacing: 0.05em; }
    h1 { font-size: 2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
    p.lead { color: #475569; font-size: 0.95rem; max-width: 800px; margin: 0 auto 1.5rem; }
    
    /* Search & Filter Toolbar */
    .toolbar-container { position: sticky; top: 0; z-index: 40; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); border-bottom: 1px solid #e2e8f0; padding: 1rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .search-wrapper { position: relative; max-width: 800px; margin: 0 auto 0.75rem; }
    .search-input { width: 100%; padding: 0.85rem 2.8rem 0.85rem 2.8rem; font-size: 0.95rem; border: 2px solid #cbd5e1; border-radius: 0.75rem; outline: none; transition: all 0.2s; background: #ffffff; color: #0f172a; font-weight: 500; }
    .search-input:focus { border-color: #f59e0b; box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.15); }
    .search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #94a3b8; width: 18px; height: 18px; }
    .clear-btn { position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: #f1f5f9; border: none; border-radius: 9999px; width: 26px; height: 26px; display: none; align-items: center; justify-content: center; cursor: pointer; color: #64748b; font-size: 1rem; font-weight: 700; }
    .clear-btn:hover { background: #e2e8f0; color: #0f172a; }

    /* Category Buttons */
    .filter-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; align-items: center; }
    .filter-btn { background: #f1f5f9; border: 1px solid #e2e8f0; color: #334155; padding: 0.4rem 0.85rem; border-radius: 0.5rem; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.15s; display: inline-flex; align-items: center; gap: 0.35rem; }
    .filter-btn:hover { background: #e2e8f0; }
    .filter-btn.active { background: #1e3a8a; color: #ffffff; border-color: #1e3a8a; }
    .filter-count { font-size: 0.7rem; padding: 0.1rem 0.4rem; border-radius: 0.25rem; background: rgba(0,0,0,0.08); font-family: monospace; }
    .filter-btn.active .filter-count { background: rgba(255,255,255,0.25); color: #ffffff; }

    /* Results Bar */
    .results-bar { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0 1rem; font-size: 0.85rem; color: #64748b; font-weight: 600; }
    .highlight-match { background: #fef08a; padding: 0.1rem 0.2rem; border-radius: 0.2rem; color: #854d0e; }

    /* Grid */
    .sitemap-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; margin-bottom: 3rem; }
    .sitemap-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.85rem; padding: 1.25rem; display: flex; flex-col; justify-content: space-between; gap: 0.75rem; transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s; }
    .sitemap-card:hover { border-color: #f59e0b; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); transform: translateY(-2px); }
    .card-header { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; }
    .badge { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; padding: 0.2rem 0.5rem; border-radius: 9999px; letter-spacing: 0.05em; }
    .badge.cat-keyword { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
    .badge.cat-regionalhub { background: #e0f2fe; color: #075985; border: 1px solid #bae6fd; }
    .badge.cat-service { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
    .badge.cat-portal { background: #f3e8ff; color: #6b21a8; border: 1px solid #e9d5ff; }
    .badge.cat-article { background: #ffe4e6; color: #9f1239; border: 1px solid #fecdd3; }
    .badge.cat-page { background: #f1f5f9; color: #334155; border: 1px solid #e2e8f0; }
    .badge.subcat { background: #f8fafc; color: #64748b; border: 1px solid #e2e8f0; }
    .priority-pill { font-size: 0.7rem; font-family: monospace; font-weight: 700; color: #94a3b8; }
    .card-title { font-size: 1rem; font-weight: 800; color: #0f172a; line-height: 1.3; }
    .card-desc { font-size: 0.8rem; color: #475569; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .card-footer { padding-top: 0.75rem; border-top: 1px solid #f1f5f9; }
    .card-link { font-size: 0.75rem; color: #1e3a8a; text-decoration: none; font-weight: 700; word-break: break-all; display: inline-flex; align-items: center; gap: 0.25rem; }
    .card-link:hover { text-decoration: underline; color: #d97706; }
    .icon-link { shrink: 0; stroke-width: 2.5; }

    /* Empty state */
    .empty-state { grid-column: 1 / -1; background: #ffffff; border: 1px dashed #cbd5e1; border-radius: 1rem; padding: 3rem 1rem; text-align: center; display: none; }
    .empty-state h3 { font-size: 1.1rem; font-weight: 800; color: #1e293b; margin-bottom: 0.5rem; }
    .empty-state p { font-size: 0.85rem; color: #64748b; }

    /* Footer */
    footer { text-align: center; padding: 2rem 1rem; color: #64748b; font-size: 0.8rem; border-top: 1px solid #e2e8f0; background: #ffffff; }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <div class="hero-badge">Dynamic XML Sitemap & Deep-Crawl Directory</div>
      <h1>Sitemap Directory & Trade Filter Hub</h1>
      <p class="lead">Quickly filter across our extensive catalog of 328+ tender industry trade keywords, 79+ regional hubs (All-India, 28 States, 50+ Cities), statutory GeM consultancy services, and e-procurement portals.</p>
    </div>
  </header>

  <div class="toolbar-container">
    <div class="container">
      <div class="search-wrapper">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input 
          type="text" 
          id="sitemap-search-input" 
          class="search-input" 
          placeholder="Filter keywords, state hubs, cities, or portals (e.g. Road Construction, Medical Equipment, Gujarat, Solar EPC, Mumbai)..."
          autocomplete="off"
          spellcheck="false"
        />
        <button id="clear-search-btn" class="clear-btn" title="Clear search">×</button>
      </div>

      <div class="filter-pills">
        <button class="filter-btn active" data-category="all">
          <span>All Nodes</span>
          <span class="filter-count">${nodes.length}</span>
        </button>
        <button class="filter-btn" data-category="Keyword">
          <span>Tender Industry Keywords</span>
          <span class="filter-count">${keywordsCount}</span>
        </button>
        <button class="filter-btn" data-category="Regional Hub">
          <span>Regional Hubs</span>
          <span class="filter-count">${hubsCount}</span>
        </button>
        <button class="filter-btn" data-category="Service">
          <span>Core Services</span>
          <span class="filter-count">${servicesCount}</span>
        </button>
        <button class="filter-btn" data-category="Portal">
          <span>Portals</span>
          <span class="filter-count">${portalsCount}</span>
        </button>
        <button class="filter-btn" data-category="Article">
          <span>Regulatory Articles</span>
          <span class="filter-count">${articlesCount}</span>
        </button>
      </div>
    </div>
  </div>

  <main class="container">
    <div class="results-bar">
      <div>
        Showing <strong id="visible-count">${nodes.length}</strong> of <strong id="total-count">${nodes.length}</strong> indexable URLs
      </div>
      <div>
        XML Feed: <a href="${baseUrl}/sitemap.xml" style="color: #b45309; text-decoration: none; font-weight: 700;">/sitemap.xml</a>
      </div>
    </div>

    <div class="sitemap-grid" id="sitemap-cards-container">
      ${cardsHtml}

      <div class="empty-state" id="empty-state-notice">
        <h3>No matching sitemap nodes found</h3>
        <p>No tender industry keyword, regional hub, or portal matched your search query. Try typing another trade or clearing filters.</p>
      </div>
    </div>
  </main>

  <footer>
    <div class="container">
      <strong>Bid Tender 4 U</strong> · Professional Tender Bidding Consultancy & GeM 4.0 Vendor Onboarding Desk · Ahmedabad, Gujarat.
    </div>
  </footer>

  <script>
    (function() {
      const searchInput = document.getElementById('sitemap-search-input');
      const clearBtn = document.getElementById('clear-search-btn');
      const filterBtns = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.sitemap-card');
      const visibleCountEl = document.getElementById('visible-count');
      const emptyStateEl = document.getElementById('empty-state-notice');

      let currentCategory = 'all';
      let currentQuery = '';

      function filterCards() {
        const query = currentQuery.trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          const title = card.getAttribute('data-title') || '';
          const desc = card.getAttribute('data-desc') || '';
          const subcat = card.getAttribute('data-subcat') || '';
          let tags = '';
          try {
            tags = decodeURIComponent(card.getAttribute('data-tags') || '').toLowerCase();
          } catch(e) {
            tags = (card.getAttribute('data-tags') || '').toLowerCase();
          }

          const matchesCat = (currentCategory === 'all' || cardCat === currentCategory);
          const matchesQuery = !query || 
            title.includes(query) || 
            desc.includes(query) || 
            subcat.includes(query) || 
            tags.includes(query);

          if (matchesCat && matchesQuery) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        visibleCountEl.textContent = visibleCount;
        if (visibleCount === 0) {
          emptyStateEl.style.display = 'block';
        } else {
          emptyStateEl.style.display = 'none';
        }
      }

      searchInput.addEventListener('input', function(e) {
        currentQuery = e.target.value;
        clearBtn.style.display = currentQuery ? 'flex' : 'none';
        filterCards();
      });

      clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        currentQuery = '';
        clearBtn.style.display = 'none';
        searchInput.focus();
        filterCards();
      });

      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          currentCategory = this.getAttribute('data-category');
          filterCards();
        });
      });
    })();
  </script>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Aliases for compatibility
export const generateSitemap = generateSitemapXml;
export default generateSitemapXml;

