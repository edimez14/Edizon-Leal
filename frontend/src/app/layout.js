import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import { Provider } from "@/components/ui/provider"
import './globals.css';
import { HeroUIProvider } from '@heroui/react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// const data = loadData();

export const metadata = {
  title: 'Edizon Leal | Portfolio',
  description: 'I am a computer technology student',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}>
        <Provider>
          <HeroUIProvider>
            {children}
          </HeroUIProvider>
        </Provider>
      </body>
    </html>
  );
}
