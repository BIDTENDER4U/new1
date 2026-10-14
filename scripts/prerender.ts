import fs from 'fs';
import path from 'path';
import { ROUTES_SEO, RouteMetadata, buildBlogRouteWithFaqSchema, injectFaqSchemaIntoHtml } from '../src/lib/seoData';
import { BLOG_ARTICLES } from '../src/lib/blogArticlesData';
import { STATES_DATA, CITIES_DATA } from '../src/lib/locationData';
import {
  generateSitemapXml,
  generateBlogSitemapXml,
  generateLocationsSitemapXml,
  generateServicesSitemapXml,
  generateSitemapIndexXml,
} from '../lib/sitemap';

const CANONICAL_BASE = 'https://www.bidtender4u.com';

// Build complete routes dictionary including blog articles and locations
const ALL_ROUTES: Record<string, RouteMetadata> = { ...ROUTES_SEO };

for (const article of BLOG_ARTICLES) {
  const articlePath = `/blog/${article.slug}`;
  ALL_ROUTES[articlePath] = buildBlogRouteWithFaqSchema(article);
}

if (ALL_ROUTES['/blog/fssai-licence-mandate-food-canteen-tenders']) {
  ALL_ROUTES['/blog/fssai-license-government-food-tenders-guide'] = {
    ...ALL_ROUTES['/blog/fssai-licence-mandate-food-canteen-tenders'],
    canonical: `${CANONICAL_BASE}/blog/fssai-licence-mandate-food-canteen-tenders`
  };
}

// Add state location hubs
for (const s of STATES_DATA) {
  const locPath = `/locations/${s.id}`;
  ALL_ROUTES[locPath] = {
    path: locPath,
    title: `${s.name} Government Tenders & GeM Consultancy | Bid Tender 4 U`,
    description: `Complete e-procurement bidding consultancy for ${s.name} state tenders (${s.portalName}). EMD exemption, Class-3 DSC, and GeM onboarding for ${s.keyCities.join(', ')}.`,
    keywords: `${s.name.toLowerCase()} tenders, ${s.portalName.toLowerCase()}, gem consultant ${s.name.toLowerCase()}`,
    canonical: `${CANONICAL_BASE}${locPath}`,
    breadcrumbTitle: s.name,
    h1: `${s.name} Government Tender Bidding & GeM Services`,
    lead: s.overview,
    keyPoints: [
      `Official State Portal: ${s.portalName}.`,
      `Annual Tender Volume: ${s.tenderVolume}.`,
      `Key Coverage: ${s.keyCities.join(', ')}.`,
      s.emdExemptionNote,
    ],
    relatedLinks: [
      { label: 'All India Locations Hub', path: '/locations', desc: 'Browse all 28 states and 50+ cities.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Expert bid packaging.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Statutory vendor onboarding.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Direct intake desk.' }
    ],
    pageType: 'service'
  };
}

// Add city location hubs
for (const c of CITIES_DATA) {
  const locPath = `/locations/${c.id}`;
  ALL_ROUTES[locPath] = {
    path: locPath,
    title: `${c.name} Government Tender Bidding Consultancy | Bid Tender 4 U`,
    description: `Professional tender bidding consultancy and GeM portal assistance in ${c.name}, ${c.state}. Support for municipal tenders, railways, PSUs, and defense contracts.`,
    keywords: `${c.name.toLowerCase()} tender consultant, gem registration ${c.name.toLowerCase()}, ${(c.localSeoKeywords || []).join(', ').toLowerCase()}`,
    canonical: `${CANONICAL_BASE}${locPath}`,
    breadcrumbTitle: c.name,
    h1: `${c.name} Tender Bidding Consultancy & GeM Services`,
    lead: `Comprehensive tender bidding advisory, document compliance, and GeM onboarding for government vendors in ${c.name}, ${c.state}.`,
    keyPoints: [
      `Location: ${c.name}, ${c.state} (${c.region} Region).`,
      `Primary Procurement Portal: ${c.portal}.`,
      `Active Tenders Estimate: ${c.activeTendersEstimate}.`,
      `Key Authorities: ${c.keyAuthorities.join(', ')}.`,
      `Top Sectors: ${c.topSectors.join(', ')}.`,
    ],
    relatedLinks: [
      { label: 'All India Locations Hub', path: '/locations', desc: 'Browse all 28 states and 50+ cities.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Expert bid packaging.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Statutory vendor onboarding.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Direct intake desk.' }
    ],
    pageType: 'service'
  };
}

function renderHtml(template: string, routeData: RouteMetadata): string {
  let html = template;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${routeData.title}</title>`);

  // Replace meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta name="description" content=".*?"\s*\/?>/i,
      `<meta name="description" content="${routeData.description}" />`
    );
  }

  // Replace meta keywords
  if (routeData.keywords && html.includes('<meta name="keywords"')) {
    html = html.replace(
      /<meta name="keywords" content=".*?"\s*\/?>/i,
      `<meta name="keywords" content="${routeData.keywords}" />`
    );
  }

  // Replace or inject canonical URL
  const canonicalTag = `<link rel="canonical" href="${routeData.canonical}" />`;
  if (html.includes('<!-- CANONICAL_URL_PLACEHOLDER -->')) {
    html = html.replace('<!-- CANONICAL_URL_PLACEHOLDER -->', canonicalTag);
  } else if (html.includes('<link rel="canonical"')) {
    html = html.replace(
      /<link rel="canonical" href=".*?"\s*\/?>/i,
      canonicalTag
    );
  } else {
    html = html.replace('</head>', `    ${canonicalTag}\n  </head>`);
  }

  // Replace og:title
  if (html.includes('<meta property="og:title"')) {
    html = html.replace(
      /<meta property="og:title" content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${routeData.title}" />`
    );
  }

  // Replace og:description
  if (html.includes('<meta property="og:description"')) {
    html = html.replace(
      /<meta property="og:description" content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${routeData.description}" />`
    );
  }

  // Replace or inject og:url
  const ogUrlTag = `<meta property="og:url" content="${routeData.canonical}" />`;
  if (html.includes('<!-- OG_URL_PLACEHOLDER -->')) {
    html = html.replace('<!-- OG_URL_PLACEHOLDER -->', ogUrlTag);
  } else if (html.includes('<meta property="og:url"')) {
    html = html.replace(
      /<meta property="og:url" content=".*?"\s*\/?>/i,
      ogUrlTag
    );
  } else {
    html = html.replace('</head>', `    ${ogUrlTag}\n  </head>`);
  }

  // Replace twitter:title
  if (html.includes('<meta name="twitter:title"')) {
    html = html.replace(
      /<meta name="twitter:title" content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${routeData.title}" />`
    );
  }

  // Set or replace twitter:url
  const twitterUrlTag = `<meta name="twitter:url" content="${routeData.canonical}" />`;
  if (html.includes('<meta name="twitter:url"')) {
    html = html.replace(
      /<meta name="twitter:url" content=".*?"\s*\/?>/i,
      twitterUrlTag
    );
  } else {
    html = html.replace('</head>', `    ${twitterUrlTag}\n  </head>`);
  }

  // Replace twitter:description
  if (html.includes('<meta name="twitter:description"')) {
    html = html.replace(
      /<meta name="twitter:description" content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${routeData.description}" />`
    );
  }

  // Inject structured FAQPage Schema for articles that have FAQs
  if (routeData.faqSchemaJson) {
    html = injectFaqSchemaIntoHtml(html, routeData.faqSchemaJson);
  }

  return html;
}

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const indexHtmlPath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('[Prerender] Error: dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');
  let generatedCount = 0;

  // 1. Explicitly render and overwrite root homepage: dist/index.html
  const homeHtml = renderHtml(baseTemplate, ALL_ROUTES['/']);
  fs.writeFileSync(indexHtmlPath, homeHtml, 'utf-8');
  generatedCount++;

  for (const [routePath, routeData] of Object.entries(ALL_ROUTES)) {
    if (routePath === '/') continue; // root already rendered above

    const cleanRoute = routePath.replace(/^\/+/, '');
    const pageHtml = renderHtml(baseTemplate, routeData);

    // 1. Write clean URL file: dist/cleanRoute.html
    const filePath = path.resolve(distDir, `${cleanRoute}.html`);
    const fileDir = path.dirname(filePath);
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true });
    }
    fs.writeFileSync(filePath, pageHtml, 'utf-8');

    // 2. Write directory index file: dist/cleanRoute/index.html
    const dirPath = path.resolve(distDir, cleanRoute);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(path.resolve(dirPath, 'index.html'), pageHtml, 'utf-8');

    generatedCount++;
  }

  // Dynamically generate all sitemaps using lib/sitemap.ts and write to public/ and dist/
  const dynamicSitemaps: Record<string, string> = {
    'sitemap.xml': generateSitemapXml(),
    'sitemap-blog.xml': generateBlogSitemapXml(),
    'sitemap-locations.xml': generateLocationsSitemapXml(),
    'sitemap-services.xml': generateServicesSitemapXml(),
    'sitemap-index.xml': generateSitemapIndexXml(),
  };

  const publicDir = path.resolve(process.cwd(), 'public');
  for (const [filename, content] of Object.entries(dynamicSitemaps)) {
    fs.writeFileSync(path.resolve(publicDir, filename), content, 'utf-8');
    fs.writeFileSync(path.resolve(distDir, filename), content, 'utf-8');
  }

  // Ensure robots.txt is present in dist
  const robotsSrc = path.resolve(publicDir, 'robots.txt');
  if (fs.existsSync(robotsSrc)) {
    fs.copyFileSync(robotsSrc, path.resolve(distDir, 'robots.txt'));
  }

  console.log(`[Prerender] Successfully pre-rendered ${generatedCount} static pages into dist/ for static hosting.`);
}

prerender().catch((err) => {
  console.error('[Prerender Error]', err);
  process.exit(1);
});
