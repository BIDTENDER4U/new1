import { ROUTES_SEO, CANONICAL_BASE } from '../src/lib/seoData';
import { BLOG_ARTICLES } from '../src/lib/blogArticlesData';
import { STATES_DATA, CITIES_DATA } from '../src/lib/locationData';

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
 * Crawls and aggregates all available app routes (core services, blog slugs, and location hubs),
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

// Aliases for compatibility
export const generateSitemap = generateSitemapXml;
export default generateSitemapXml;
