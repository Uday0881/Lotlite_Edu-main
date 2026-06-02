import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url, image, type = 'website' }) {
  const siteName = 'Lotlite School of Real Estate';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Lotlite combines operator-grade training with real capital and market access to build the next generation of PropTech leaders.';
  const metaDescription = description || defaultDescription;
  const defaultKeywords = 'PropTech, Real Estate Education, BBA, BCA, MBA, Data Science, Pune, Lotlite';
  const metaKeywords = keywords || defaultKeywords;
  const siteUrl = url || 'https://lotlite.in';
  const defaultImage = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop';
  const metaImage = image || defaultImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
}
