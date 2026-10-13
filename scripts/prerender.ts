import fs from 'fs';
import path from 'path';
import { ROUTES_SEO, RouteMetadata } from '../src/lib/seoData';
import { BLOG_ARTICLES } from '../src/lib/blogArticlesData';
import { STATES_DATA, CITIES_DATA } from '../src/lib/locationData';

const CANONICAL_BASE = 'https://www.bidtender4u.com';

// Build complete routes dictionary including blog articles and locations
const ALL_ROUTES: Record<string, RouteMetadata> = { ...ROUTES_SEO };

for (const article of BLOG_ARTICLES) {
  const articlePath = `/blog/${article.slug}`;
  ALL_ROUTES[articlePath] = {
    path: articlePath,
    title: `${article.title} | Bid Tender 4 U`,
    description: article.metaDescription || article.subtitle,
    keywords: `${article.category.toLowerCase()}, tender, bidding, government procurement, ${(article.keywords || []).join(', ').toLowerCase()}`,
    canonical: `${CANONICAL_BASE}${articlePath}`,
    breadcrumbTitle: article.title,
    h1: article.title,
    lead: article.subtitle,
    keyPoints: article.keyTakeaways || [],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Expert bid preparation.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Statutory GeM compliance.' },
      { label: 'Government Procurement Blog', path: '/blog', desc: 'Browse all articles.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Direct intake desk.' }
    ],
    pageType: 'article'
  };
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

  // Replace canonical URL
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(
      /<link rel="canonical" href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${routeData.canonical}" />`
    );
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

  // Replace og:url
  if (html.includes('<meta property="og:url"')) {
    html = html.replace(
      /<meta property="og:url" content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${routeData.canonical}" />`
    );
  }

  // Replace twitter:title
  if (html.includes('<meta name="twitter:title"')) {
    html = html.replace(
      /<meta name="twitter:title" content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${routeData.title}" />`
    );
  }

  // Replace twitter:description
  if (html.includes('<meta name="twitter:description"')) {
    html = html.replace(
      /<meta name="twitter:description" content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${routeData.description}" />`
    );
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

  for (const [routePath, routeData] of Object.entries(ALL_ROUTES)) {
    if (routePath === '/') continue; // root is already index.html

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

  // Ensure all sitemap XML files and robots.txt are copied to dist
  const sitemapFiles = [
    'sitemap-index.xml',
    'sitemap-services.xml',
    'sitemap-blog.xml',
    'sitemap-locations.xml',
    'sitemap.xml',
    'robots.txt',
  ];

  for (const file of sitemapFiles) {
    const srcPath = path.resolve(process.cwd(), 'public', file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.resolve(distDir, file));
    }
  }

  console.log(`[Prerender] Successfully pre-rendered ${generatedCount} static pages into dist/ for static hosting.`);
}

prerender().catch((err) => {
  console.error('[Prerender Error]', err);
  process.exit(1);
});
