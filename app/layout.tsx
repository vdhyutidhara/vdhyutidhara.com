import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Nav from "@/components/Nav/Nav";

const BASE_URL = "https://vdhyutidhara.com";

const ogg = localFont({
  src: "../public/fonts/Ogg-Roman.otf",
  variable: "--font-ogg",
  weight: "100 400",
  display: "swap",
});

const apercuMono = localFont({
  src: "../public/fonts/ApercuMono.ttf",
  variable: "--font-apercu-mono",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vinay Kumar Gupta — Inclusive Software Engineer",
    template: "%s — Vinay Kumar Gupta",
  },
  description:
    "Portfolio of Vinay Kumar Gupta, Inclusive Software Engineer from Bangalore, India. Dedicated to developing software that is universally accessible, ensuring that no user is left behind regardless of their abilities.",
  keywords: [
    "Vinay Gupta",
    "Vinay Kumar Gupta",
    "Inclusive Software Engineer",
    "Front End Engineer",
    "Front End Developer",
    "Accessibility",
    "Bangalore",
    "India",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "vdhyutidhara",
  ],
  authors: [{ name: "Vinay Kumar Gupta", url: BASE_URL }],
  creator: "Vinay Kumar Gupta",
  publisher: "Vinay Kumar Gupta",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Vinay Kumar Gupta — Inclusive Software Engineer",
    description:
      "Portfolio of Vinay Kumar Gupta, Inclusive Software Engineer from Bangalore, India.",
    url: BASE_URL,
    siteName: "Vinay Kumar Gupta",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og`,
        width: 1200,
        height: 630,
        alt: "Vinay Kumar Gupta — Front End Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Kumar Gupta — Inclusive Software Engineer",
    description:
      "Portfolio of Vinay Kumar Gupta, Inclusive Software Engineer from Bangalore, India.",
    images: [`${BASE_URL}/og`],
    creator: "@vdhyutidhara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinay Kumar Gupta",
  alternateName: ["Vinay Gupta", "vdhyutidhara"],
  url: BASE_URL,
  jobTitle: "Inclusive Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Open to opportunities",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/vdhyutidhara",
    "https://www.linkedin.com/in/vdhyutidhara",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "CSS",
    "Front End Engineering",
    "Web Development",
    "UI Engineering",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vinay Kumar Gupta",
  alternateName: "vdhyutidhara.com",
  url: BASE_URL,
  description:
    "Portfolio of Vinay Kumar Gupta, Front End Engineer from Gurgaon, India.",
  author: {
    "@type": "Person",
    name: "Vinay Kumar Gupta",
  },
  inLanguage: "en-IN",
};

const antiFlash = `(function(){
  try {
    var t = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = t;
  } catch(e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script dangerouslySetInnerHTML={{ __html: antiFlash }} />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <link rel="me" href="https://github.com/vdhyutidhara" />
        <link rel="me" href="https://www.linkedin.com/in/vdhyutidhara" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${ogg.variable} ${apercuMono.variable}`}>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
