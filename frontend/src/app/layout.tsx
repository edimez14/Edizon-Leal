import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./views/Footer";
import Header from "./views/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Background from "./views/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuración avanzada de SEO para Next.js
export const metadata: Metadata = {
  metadataBase: new URL("https://edizon-leal.vercel.app/"),

  title: {
    default: "Edizon Leal | Junior Backend Engineer",
    template: "%s | Edizon Leal",
  },
  description:
    "Portafolio de Edizon Leal, Junior Backend Engineer especializado en Python (Django), Rust (Axum), arquitectura escalable, APIs REST, Docker y sistemas de alto rendimiento.",

  keywords: [
    "Edizon Leal",
    "Backend Developer",
    "Junior Backend Engineer",
    "Desarrollador Backend",
    "Programador Junior",
    "Python",
    "Django",
    "DRF",
    "Rust",
    "Axum",
    "Docker",
    "PostgreSQL",
    "Godot Engine",
    "APIs REST",
    "Arquitectura Escalable",
    "Sistemas Distribuidos",
  ],
  authors: [{ name: "Edizon Leal", url: "https://github.com/edimez14" }],
  creator: "Edizon Leal",

  // Optimización para compartir enlaces en LinkedIn, Slack, Discord, etc.
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    title: "Edizon Leal | Junior Backend Engineer",
    description:
      "Ingeniero Backend enfocado en experimentación de alto rendimiento, arquitecturas distribuidas y desarrollo optimizado de sistemas.",
    siteName: "Edizon Leal - Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edizon Leal - Portafolio de Desarrollo Backend",
      },
    ],
  },

  // Optimización para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Edizon Leal | Junior Backend Engineer",
    description:
      "Ingeniero Backend especializado en Python, Rust y arquitecturas escalables.",
    images: ["/assets/og-image.png"],
  },

  // Directivas para crawlers de motores de búsqueda
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Se cambia de 'en' a 'es' para coincidir con el idioma principal del contenido y mejorar el SEO local
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
