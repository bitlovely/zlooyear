export type HeroSlide = {
  number: string;
  headline: string;
  subheadline: string;
  image: string;
  imageAlt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    number: "01",
    headline:
      "Modern corporate sites, SaaS platforms, and high-performance web applications.",
    subheadline:
      "designed, engineered, and optimized for the way your business operates.",
    image: "/hero/slide-01.jpg",
    imageAlt:
      "Laptop and phone showing a high-performance business dashboard",
  },
  {
    number: "02",
    headline:
      "Practical AI integration — assistants, automation, knowledge systems, and internal tools",
    subheadline: "that connect to your existing products and workflows.",
    image: "/hero/slide-02.jpg",
    imageAlt: "Desktop workstation showing an AI assistant and workflow tools",
  },
  {
    number: "03",
    headline:
      "Full-stack development, API design, cloud architecture, and technical consulting",
    subheadline: "for teams building, scaling, or modernizing software.",
    image: "/hero/slide-03.jpg",
    imageAlt:
      "Monitor showing code and a system architecture diagram in a server environment",
  },
];
