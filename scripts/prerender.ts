import fs from 'fs';
import path from 'path';
import { ROUTES_SEO, RouteMetadata } from '../src/lib/seoData';
import { BLOG_ARTICLES } from '../src/lib/blogArticlesData';

const CANONICAL_BASE = 'https://www.bidtender4u.com';

// Build complete routes dictionary including blog articles
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

  // Ensure sitemap.xml and robots.txt are copied to dist
  const publicSitemap = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  const publicRobots = path.resolve(process.cwd(), 'public', 'robots.txt');

  if (fs.existsSync(publicSitemap)) {
    fs.copyFileSync(publicSitemap, path.resolve(distDir, 'sitemap.xml'));
  }
  if (fs.existsSync(publicRobots)) {
    fs.copyFileSync(publicRobots, path.resolve(distDir, 'robots.txt'));
  }

  console.log(`[Prerender] Successfully pre-rendered ${generatedCount} static pages into dist/ for static hosting.`);
}

prerender().catch((err) => {
  console.error('[Prerender Error]', err);
  process.exit(1);
});
