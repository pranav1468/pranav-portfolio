import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
}

const SEO = ({ title, description, path = "" }: SEOProps) => {
  const fullTitle = title.includes("Pranav Baghare") 
    ? title 
    : `${title} — Pranav Baghare`;
  
  const defaultDescription = "AI/ML engineer focused on computer vision and deep learning. Building practical machine learning systems.";
  const metaDescription = description || defaultDescription;
  const baseUrl = "https://pranavbaghare.dev"; // Update with actual domain
  const url = `${baseUrl}${path}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", metaDescription);

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", metaDescription, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", "website", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", metaDescription);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    return () => {
      // Reset to default title on unmount
      document.title = "Pranav Baghare | AI/ML Engineer";
    };
  }, [fullTitle, metaDescription, url]);

  return null;
};

export default SEO;
