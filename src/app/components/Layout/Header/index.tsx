'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { NavLinkType } from '@/app/types/navlink'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import { getDataPath } from '@/app/utils/paths'

const Header: React.FC = () => {
  const [navlink, setNavlink] = useState<NavLinkType[]>([])
  const { theme, setTheme } = useTheme()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  //   fetchData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setNavlink(data.NavLinkData)
      } catch (error) {
        console.error('Error fetching service', error)
      }
    }
    fetchData()
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  return (
    <header
      className={`fixed top-0 py-1 z-50 w-full transition-all duration-300 ${
        sticky 
          ? 'shadow-xl backdrop-blur-lg bg-white/80 dark:bg-darklight/80 border-b border-black/5 dark:border-white/5' 
          : 'bg-transparent'
      }`}>
      <div
        className={`container flex items-center justify-between gap-10 duration-300 ${
          sticky ? 'py-3' : 'py-5'
        }`}>
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className='hidden xl:block flex-grow ml-6'>
          <ul className='flex items-center justify-center gap-8'>
            {navlink.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-3 md:gap-5'>
          {/* Desktop Actions */}
          <div className='hidden xl:flex items-center gap-6'>


            <Link
              href='/#contact'
              className='btn-primary px-6 py-2.5 rounded-xl text-base shadow-lg shadow-primary/20 !text-black'>
              Hire Me
            </Link>
          </div>





          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='xl:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-secondary dark:bg-white/5 hover:bg-primary/10 transition-all active:scale-95'
            aria-label='Toggle mobile menu'>
            <span className={`block w-6 h-0.5 bg-darkblue dark:bg-white transition-all transform ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-darkblue dark:bg-white transition-all ${navbarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-darkblue dark:bg-white transition-all transform ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
      )}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white dark:bg-darklight shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 flex flex-col`}>
        
        {/* Header inside drawer */}
        <div className='flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5'>
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary dark:bg-white/5 text-darkblue dark:text-white"
            aria-label='Close mobile menu'>
            <Icon icon="lucide:x" width={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className='flex-grow overflow-y-auto p-6'>
          <div className="space-y-2">
            {navlink.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setNavbarOpen(false)}
                className="transform transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <MobileHeaderLink item={item} />
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-10 border-t border-black/5 dark:border-white/5 space-y-6">

            
            <Link
              href='/#contact'
              className='flex items-center justify-center w-full py-4 bg-primary text-black rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all'
              onClick={() => setNavbarOpen(false)}>
              Start a Project
            </Link>
          </div>
        </nav>

        {/* Footer inside drawer */}
        <div className="p-8 bg-secondary/50 dark:bg-white/5 text-center">
            <p className="text-xs text-lightgrey">© 2024 Syed Qamar Abbas. All rights reserved.</p>
        </div>
      </div>
    </header>
  )
}

export default Header
