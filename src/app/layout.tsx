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
  title: 'Syed Qamar Abbas | Full Stack Developer | React & Next.js Developer',
  description: 'Syed Qamar Abbas is a Full Stack JavaScript Developer specializing in React.js, Next.js, Tailwind CSS, and MongoDB. View projects, portfolio, and deployed applications.',
  keywords: 'Syed Qamar Abbas, React Developer, Next.js Developer, JavaScript Developer, Full Stack Developer, Tailwind CSS, MongoDB Developer, Web Developer Portfolio',
  authors: [{ name: 'Syed Qamar Abbas' }],
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
