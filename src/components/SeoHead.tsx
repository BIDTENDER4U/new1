import React from 'react';
import { usePageSeo, UsePageSeoOptions } from '../lib/seoManager';

export interface SeoHeadProps extends UsePageSeoOptions {}

/**
 * Headless React component that dynamically synchronizes document title,
 * canonical link, Open Graph metadata, Twitter cards, and Schema.org JSON-LD
 * on client-side route transitions and blog article switching.
 */
export const SeoHead: React.FC<SeoHeadProps> = (props) => {
  usePageSeo(props);
  return null;
};
