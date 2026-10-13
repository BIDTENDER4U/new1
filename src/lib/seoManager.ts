import { useEffect } from 'react';
import { ROUTES_SEO, RouteMetadata, CANONICAL_BASE } from './seoData';
import { BLOG_ARTICLES } from './blogArticlesData';
import { STATES_DATA, CITIES_DATA } from './locationData';
import { BlogPostItem } from '../types/index';

/**
 * Normalizes input page ID or path into a canonical RouteMetadata object,
 * seamlessly resolving standard static routes, aliases, and dynamic blog articles.
 */
export function resolvePageMetadata(
  pageIdOrPath?: string,
  blogSlug?: string,
  articleParam?: BlogPostItem | null
): RouteMetadata {
  // 1. If an active blog article is directly passed or identified
  let article: BlogPostItem | undefined = articleParam || undefined;

  if (!article && blogSlug) {
    const cleanSlug = blogSlug.replace(/^#?blog-?/, '').trim().toLowerCase();
    article = BLOG_ARTICLES.find(
      (a) => a.slug.toLowerCase() === cleanSlug
    );
  }

  // Check if pageIdOrPath itself points to a blog article: e.g. 'blog/slug' or '/blog/slug'
  if (!article && pageIdOrPath && pageIdOrPath.includes('blog/')) {
    const parts = pageIdOrPath.split('blog/');
    const slugFromPath = parts[1]?.replace(/^\/+|\/+$/g, '').toLowerCase();
    if (slugFromPath) {
      article = BLOG_ARTICLES.find(
        (a) => a.slug.toLowerCase() === slugFromPath
      );
    }
  }

  if (article) {
    const articleCanonical = `${CANONICAL_BASE}/blog/${article.slug}`;
    const keywordsStr = [
      article.category,
      'tender bidding',
      'gem consultancy',
      'government procurement',
      ...(article.keywords || []),
    ].join(', ');

    return {
      path: `/blog/${article.slug}`,
      title: `${article.title} | Bid Tender 4 U Analysis`,
      description: article.metaDescription || article.subtitle,
      keywords: keywordsStr,
      canonical: articleCanonical,
      breadcrumbTitle: article.title,
      h1: article.title,
      lead: article.subtitle,
      keyPoints: article.keyTakeaways || [],
      relatedLinks: [
        { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Comprehensive bid preparation.' },
        { label: 'GeM Registration', path: '/gem-registration', desc: 'Statutory vendor onboarding.' },
        { label: 'Government Procurement Blog', path: '/blog', desc: 'Browse all articles.' },
        { label: 'Contact Us', path: '/contact-us', desc: 'Direct intake desk.' },
      ],
      pageType: 'article',
    };
  }

  // 1b. If a specific state or city location landing page is requested
  const locMatch = (pageIdOrPath || '').toLowerCase();
  const locationParam = blogSlug || (locMatch.includes('locations/') ? locMatch.split('locations/')[1]?.replace(/^\/+|\/+$/g, '') : undefined);
  if (locationParam) {
    const cleanLoc = locationParam.toLowerCase();
    const stateItem = STATES_DATA.find((s) => s.id === cleanLoc);
    if (stateItem) {
      const stateTitle = `${stateItem.name} Government Tenders & GeM Consultancy | Bid Tender 4 U`;
      const stateDesc = `Tender bidding consultancy in ${stateItem.name} (${stateItem.portalName}). MSME EMD Exemption under GFR 170, GeM OEM Authorization codes, Class-3 DSC & portal onboarding.`;
      return {
        path: `/locations/${stateItem.id}`,
        title: stateTitle,
        description: stateDesc,
        ogTitle: `${stateItem.name} Tenders: GeM OEM & MSME EMD Exemption`,
        ogDescription: `Win ${stateItem.name} tenders (${stateItem.portalName}). Claim 100% MSME EMD Exemption under GFR 170, secure GeM OEM Authorization codes & Class-3 DSC in 30 mins.`,
        keywords: `${stateItem.name.toLowerCase()} tenders, ${stateItem.portalName.toLowerCase()}, gem oem authorization ${stateItem.name.toLowerCase()}, msme emd exemption ${stateItem.name.toLowerCase()}, gem consultant ${stateItem.name.toLowerCase()}, e-procurement ${stateItem.name.toLowerCase()}`,
        canonical: `${CANONICAL_BASE}/locations/${stateItem.id}`,
        breadcrumbTitle: stateItem.name,
        h1: `${stateItem.name} Government Tender Bidding & GeM Services`,
        lead: stateItem.overview,
        keyPoints: [
          `Official State Portal: ${stateItem.portalName}.`,
          `Annual Tender Volume: ${stateItem.tenderVolume}.`,
          `Key Coverage: ${stateItem.keyCities.join(', ')}.`,
          `Major Departments: ${stateItem.majorDepartments.join(', ')}.`,
          stateItem.emdExemptionNote,
        ],
        relatedLinks: [
          { label: 'All India Locations Hub', path: '/locations', desc: 'Browse all 28 states and 50+ cities.' },
          { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Expert bid packaging & technical folder audit.' },
          { label: 'GeM Registration', path: '/gem-registration', desc: 'Primary seller, OEM & reseller onboarding.' },
          { label: 'Contact Us', path: '/contact-us', desc: 'Direct intake desk in Ahmedabad.' },
        ],
        pageType: 'service',
      };
    }

    const cityItem = CITIES_DATA.find((c) => c.id === cleanLoc);
    if (cityItem) {
      const cityTitle = `${cityItem.name} Tender Bidding & GeM Consultancy | Bid Tender 4 U`;
      const cityDesc = `Tender bidding consultancy in ${cityItem.name}, ${cityItem.state}. Claim 100% MSME EMD Exemption, GeM OEM Authorization codes, Class-3 DSC & reverse auction support.`;
      return {
        path: `/locations/${cityItem.id}`,
        title: cityTitle,
        description: cityDesc,
        ogTitle: `${cityItem.name} Tenders: GeM OEM & MSME EMD Exemption`,
        ogDescription: `Consultancy for ${cityItem.name} government tenders. Fast-track GeM OEM Authorization codes, 100% MSME EMD Exemption under GFR 170 & Class-3 DSC tokens.`,
        keywords: `${cityItem.name.toLowerCase()} tender consultant, gem oem authorization ${cityItem.name.toLowerCase()}, msme emd exemption ${cityItem.name.toLowerCase()}, gem registration ${cityItem.name.toLowerCase()}, ${(cityItem.localSeoKeywords || []).join(', ').toLowerCase()}`,
        canonical: `${CANONICAL_BASE}/locations/${cityItem.id}`,
        breadcrumbTitle: cityItem.name,
        h1: `${cityItem.name} Tender Bidding Consultancy & GeM Services`,
        lead: `Comprehensive tender bidding advisory, document compliance, and GeM onboarding for government vendors in ${cityItem.name}, ${cityItem.state}.`,
        keyPoints: [
          `Location: ${cityItem.name}, ${cityItem.state} (${cityItem.region} Region).`,
          `Primary Procurement Portal: ${cityItem.portal}.`,
          `Active Tenders Estimate: ${cityItem.activeTendersEstimate}.`,
          `Key Authorities: ${cityItem.keyAuthorities.join(', ')}.`,
          `Top Sectors: ${cityItem.topSectors.join(', ')}.`,
        ],
        relatedLinks: [
          { label: 'All India Locations Hub', path: '/locations', desc: 'Browse all 28 states and 50+ cities.' },
          { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Expert bid packaging & technical folder audit.' },
          { label: 'GeM Registration', path: '/gem-registration', desc: 'Primary seller, OEM & reseller onboarding.' },
          { label: 'Contact Us', path: '/contact-us', desc: 'Submit tender document for preliminary audit.' },
        ],
        pageType: 'service',
      };
    }
  }

  // 2. Normalize standard route keys
  const rawKey = (pageIdOrPath || '').trim().toLowerCase().replace(/^\/+|\/+$/g, '');

  let pathKey = '/' + rawKey;
  if (!rawKey || rawKey === 'home') {
    pathKey = '/';
  } else if (rawKey === 'services' || rawKey === 'gem-tender-consultancy') {
    pathKey = '/tender-bidding-consultancy';
  } else if (rawKey === 'gem-documents') {
    pathKey = '/gem-registration';
  } else if (rawKey === 'contact') {
    pathKey = '/contact-us';
  } else if (rawKey === 'about') {
    pathKey = '/about-us';
  } else if (rawKey === 'payment' || rawKey === 'pay') {
    pathKey = '/payment-details';
  } else if (rawKey === 'msme-startup-tenders') {
    pathKey = '/msme-startup-tenders';
  } else if (rawKey === 'iso-dsc-certifications') {
    pathKey = '/iso-dsc-certifications';
  }

  // Return matching route metadata or default to homepage
  return ROUTES_SEO[pathKey] || ROUTES_SEO['/'];
}

/**
 * Safely creates or updates a meta tag in document.head.
 */
function setOrCreateMeta(
  attrName: 'name' | 'property',
  attrValue: string,
  content: string
): void {
  if (typeof document === 'undefined') return;

  const selector = `meta[${attrName}="${attrValue}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Safely creates or updates the link[rel="canonical"] tag in document.head.
 */
function setOrCreateCanonical(canonicalUrl: string): void {
  if (typeof document === 'undefined') return;

  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', canonicalUrl);
}

/**
 * Injects or updates dynamic Schema.org JSON-LD structured data for Googlebot.
 */
function updateJsonLd(routeData: RouteMetadata, article?: BlogPostItem | null): void {
  if (typeof document === 'undefined') return;

  const scriptId = 'bidtender4u-dynamic-seo-jsonld';
  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = scriptId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  if (article) {
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.metaDescription || article.subtitle,
      url: routeData.canonical,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': routeData.canonical,
      },
      author: {
        '@type': 'Person',
        name: article.author,
        jobTitle: article.authorRole,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Bid Tender 4 U',
        url: CANONICAL_BASE,
        logo: {
          '@type': 'ImageObject',
          url: `${CANONICAL_BASE}/bid-tender-mark.svg`,
        },
      },
      datePublished: article.date,
      articleSection: article.category,
      keywords: article.keywords.join(', '),
      inLanguage: 'en-IN',
    });
  } else if (routeData.pageType === 'service') {
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: routeData.h1,
      description: routeData.description,
      url: routeData.canonical,
      provider: {
        '@type': 'Organization',
        name: 'Bid Tender 4 U',
        url: CANONICAL_BASE,
        telephone: '+91-9726407267',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ahmedabad',
          addressRegion: 'Gujarat',
          postalCode: '382440',
          addressCountry: 'IN',
        },
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
    });
  } else {
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: routeData.title,
      description: routeData.description,
      url: routeData.canonical,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Bid Tender 4 U',
        url: CANONICAL_BASE,
      },
      inLanguage: 'en-IN',
    });
  }
}

/**
 * Synchronously writes all SEO, Canonical, Open Graph, and Twitter tags into DOM head.
 */
export function applySeoToDocument(
  routeData: RouteMetadata,
  article?: BlogPostItem | null
): void {
  if (typeof document === 'undefined') return;

  // 1. Page Title
  document.title = routeData.title;

  // 2. Meta Description & Keywords
  setOrCreateMeta('name', 'description', routeData.description);
  if (routeData.keywords) {
    setOrCreateMeta('name', 'keywords', routeData.keywords);
  }

  // 3. Robots directive (always allow index & follow for public content)
  setOrCreateMeta(
    'name',
    'robots',
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  );

  // 4. Canonical URL (Strict HTTPS without query strings or hashes)
  setOrCreateCanonical(routeData.canonical);

  // 5. Open Graph Meta Tags (Optimized for Social CTR & Messaging Previews)
  const effectiveOgTitle = routeData.ogTitle || routeData.title;
  const effectiveOgDesc = routeData.ogDescription || routeData.description;

  setOrCreateMeta('property', 'og:title', effectiveOgTitle);
  setOrCreateMeta('property', 'og:description', effectiveOgDesc);
  setOrCreateMeta('property', 'og:url', routeData.canonical);
  setOrCreateMeta('property', 'og:type', routeData.pageType || 'website');
  setOrCreateMeta('property', 'og:site_name', 'Bid Tender 4 U');
  setOrCreateMeta('property', 'og:locale', 'en_IN');
  setOrCreateMeta('property', 'og:image', `${CANONICAL_BASE}/bid-tender-mark.svg`);
  setOrCreateMeta('property', 'og:image:alt', `${effectiveOgTitle} - Bid Tender 4 U`);

  if (article) {
    setOrCreateMeta('property', 'article:published_time', article.date);
    setOrCreateMeta('property', 'article:author', article.author);
    setOrCreateMeta('property', 'article:section', article.category);
  }

  // 6. Twitter Cards (Optimized for Feed Impressions & High CTR)
  setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
  setOrCreateMeta('name', 'twitter:title', effectiveOgTitle);
  setOrCreateMeta('name', 'twitter:description', effectiveOgDesc);
  setOrCreateMeta('name', 'twitter:url', routeData.canonical);
  setOrCreateMeta('name', 'twitter:image', `${CANONICAL_BASE}/bid-tender-mark.svg`);
  setOrCreateMeta('name', 'twitter:image:alt', `${effectiveOgTitle} - Bid Tender 4 U`);

  // 7. Schema.org JSON-LD
  updateJsonLd(routeData, article);
}

export interface UsePageSeoOptions {
  page?: string;
  articleSlug?: string;
  article?: BlogPostItem | null;
  customTitle?: string;
  customDescription?: string;
  customCanonical?: string;
}

/**
 * React hook to dynamically manage canonical, Open Graph, and Twitter tags
 * for client-side routing transitions.
 */
export function usePageSeo({
  page,
  articleSlug,
  article,
  customTitle,
  customDescription,
  customCanonical,
}: UsePageSeoOptions): RouteMetadata {
  const meta = resolvePageMetadata(page, articleSlug, article);

  // Apply customizations if provided
  const effectiveMeta: RouteMetadata = {
    ...meta,
    title: customTitle || meta.title,
    description: customDescription || meta.description,
    canonical: customCanonical || meta.canonical,
  };

  useEffect(() => {
    applySeoToDocument(effectiveMeta, article);
  }, [
    effectiveMeta.canonical,
    effectiveMeta.title,
    effectiveMeta.description,
    page,
    articleSlug,
    article?.slug,
  ]);

  return effectiveMeta;
}
