export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "William Santana",
      url: "https://williamsantana.dev",
      image: "https://williamsantana.dev/og-image.png",
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
      url: "https://williamsantana.dev",
      publisher: {
        "@type": "Person",
        name: "William Santana",
      },
    },
    {
      "@type": "WebPage",
      name: "William Santana Portfolio",
      url: "https://williamsantana.dev",
      description:
        "Portfolio showcasing modern web applications built with React, Next.js and TypeScript.",
    },
  ],
};
