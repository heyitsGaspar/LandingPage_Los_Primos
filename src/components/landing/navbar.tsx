'use cliente'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar () {
  const [scrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-white/30 backdrop-blur-lg  shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center justify-between px-6 p-4 max-w-7xl mx-auto  text-tittle'>
        <div className='flex items-center gap-2'>
          <Image
            src='/assets/logo.webp'
            alt='TheCousins'
            width={30}
            height={30}
            className='rounded-full'
          ></Image>

          <span className='text-3xl fon-poppins font-extrabold tracking-wide'> Los Primos</span>
        </div>

        {/* Desktop menu */}
        <ul className='hidden md:flex gap-6 font-semibold'>
          {['Home', 'Menú', 'Sobre Nosotros'].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                className='hover:text-yellow-400 transition-colors duration-300'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className='md:hidden' onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile dropdown */}
      {isOpen && (
        <ul className='md:hidden bg-black/70 backdrop-blur-md text-white p-4 space-y-3 text-center'>
          {['Home', 'Menú', 'Sobre nosotros'].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                onClick={() => setIsOpen(false)}
                className='block py-2 hover:text-yellow-400 transition-colors duration-300'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
