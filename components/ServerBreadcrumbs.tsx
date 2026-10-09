// components/ServerBreadcrumbs.tsx
interface BreadcrumbsProps {
  pathname: string;
  siteUrl?: string;
}

export default function ServerBreadcrumbs({
  pathname,
  siteUrl = "https://www.torchproxies.com",
}: BreadcrumbsProps) {
  // Strip trailing slashes and split path into segments
  const cleanPath = pathname.replace(/\/$/, "");
  const pathSegments = cleanPath.split("/").filter((segment) => segment !== "");

  // Build breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const url = `${siteUrl}/${pathSegments.slice(0, index + 1).join("/")}/`;

    // Format label: "how-to-use" -> "How To Use"
    const name = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return { name, url };
  });

  // Always include Home as the first item
  const allItems = [{ name: "Home", url: `${siteUrl}/` }, ...breadcrumbItems];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
