import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from './components/Layout/Header'
import { ThemeProvider } from 'next-themes'
import Footer from './components/Layout/Footer'
import ScrollToTop from './components/ScrollToTop'

const DMSans = DM_Sans({
  variable: '--font-DM-Sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Syed Qamar Abbas | Passionate Full Stack Developer | Next.js Enthusiast',
  description: 'Emerging Full Stack Developer specializing in modern web technologies like React, Next.js, and Tailwind CSS. Focused on building clean, efficient, and user-friendly web solutions.',
  keywords: 'Syed Qamar Abbas, Full Stack Developer, React Developer, Next.js Learner, Web Development Journey, Modern Web Apps, UI/UX Enthusiast',
  authors: [{ name: 'Syed Qamar Abbas' }],
  openGraph: {
    title: 'Syed Qamar Abbas | Portfolio',
    description: 'Modern, high-performance web solutions built with React & Next.js.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Syed Qamar Abbas Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Qamar Abbas | Full Stack Developer',
    description: 'Modern web experiences and high-performance apps.',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${DMSans.variable} antialiased dark:bg-darkmode`}>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
