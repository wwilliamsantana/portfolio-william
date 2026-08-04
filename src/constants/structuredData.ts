export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "William Santana",
      url: "https://portfolio-william-nu.vercel.app",
      image: "https://portfolio-william-nu.vercel.app/og-image.png",
      jobTitle: "Frontend Engineer",
      description:
        "Frontend Engineer specialized in React, Next.js and TypeScript.",
      sameAs: [
        "https://github.com/wwilliamsantana",
        "https://linkedin.com/in/wwilliamsantana",
      ],
    },
    {
      "@type": "WebSite",
      name: "William Santana",
      url: "https://portfolio-william-nu.vercel.app",
      publisher: {
        "@type": "Person",
        name: "William Santana",
      },
    },
    {
      "@type": "WebPage",
      name: "William Santana Portfolio",
      url: "https://portfolio-william-nu.vercel.app",
      description:
        "Portfolio showcasing modern web applications built with React, Next.js and TypeScript.",
    },
  ],
};
