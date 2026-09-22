import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  path, 
  ogImage = '/fa1.png', 
  schema 
}) => {
  // TODO: Replace this with the actual production domain once provided by the user.
  const domain = ''; 
  const url = domain ? `${domain}${path === '/' ? '' : path}` : '';

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMeta = (nameOrProperty, value, content) => {
      let element;
      if (nameOrProperty === 'name') {
        element = document.querySelector(`meta[name="${value}"]`);
      } else {
        element = document.querySelector(`meta[property="${value}"]`);
      }
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameOrProperty, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    // 2. Meta Description
    updateMeta('name', 'description', description);

    // 3. Open Graph
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:type', 'website');
    updateMeta('property', 'og:site_name', 'Fusion Asiana');
    
    if (url) {
      updateMeta('property', 'og:url', url);
    }
    
    // Convert relative image path to absolute if domain exists
    const ogImageUrl = (ogImage.startsWith('http') || !domain) ? ogImage : `${domain}${ogImage}`;
    if (domain) {
      updateMeta('property', 'og:image', ogImageUrl);
      updateMeta('name', 'twitter:image', ogImageUrl);
    }

    // 4. Twitter
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);

    // 5. Canonical
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }

    // 6. JSON-LD Schema
    let schemaScript = document.querySelector('#seo-schema');
    if (schema && domain) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('id', 'seo-schema');
        document.head.appendChild(schemaScript);
      }
      
      const schemaData = {
        "@context": "https://schema.org",
        ...schema,
        url: schema.url || url,
        image: schema.image || ogImageUrl
      };
      
      schemaScript.textContent = JSON.stringify(schemaData);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Remove page-specific schema on unmount to prevent stale data
      const currentSchema = document.querySelector('#seo-schema');
      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, [title, description, path, ogImage, schema, domain, url]);

  return null;
};

export default SEO;
