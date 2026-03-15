import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harnish Patel - Creative Frontend Developer & Interaction Designer",
  description: "Premium portfolio website showcasing modern web design, advanced animations, and high-conversion digital experiences. Built with Next.js, Framer Motion, and cutting-edge frontend technologies.",
  keywords: "frontend developer, web designer, portfolio, Next.js, Framer Motion, animations, interaction design, React developer, TypeScript, Tailwind CSS",
  authors: [{ name: "Harnish Patel" }],
  creator: "Harnish Patel",
  publisher: "Harnish Patel",
  openGraph: {
    title: "Harnish Patel - Creative Frontend Developer",
    description: "Cinematic digital experiences with premium motion and immersive layouts. Specializing in premium portfolios, landing pages, and motion systems.",
    type: "website",
    locale: "en_US",
    siteName: "Harnish Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harnish Patel - Creative Frontend Developer",
    description: "Cinematic digital experiences with premium motion and immersive layouts",
    creator: "@harnishpatel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00d9ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preload TubesCursor library for better performance */}
        <link
          rel="preload"
          as="script"
          href="https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Harnish Patel",
              "jobTitle": "Creative Frontend Developer & Interaction Designer",
              "description": "Creative frontend developer specializing in premium portfolio websites, high-conversion landing pages, and motion systems.",
              "url": "https://harnishpatel.dev",
              "email": "hello@harnishpatel.dev",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Delhi",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com",
                "https://linkedin.com",
                "https://dribbble.com"
              ],
              "knowsAbout": [
                "Next.js",
                "React",
                "TypeScript",
                "Framer Motion",
                "Tailwind CSS",
                "Web Design",
                "Interaction Design",
                "Frontend Development"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-black focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
