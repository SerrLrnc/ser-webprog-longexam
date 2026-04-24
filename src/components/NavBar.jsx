// components/NavBar.jsx
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import { useState } from 'react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200',
    isActive
      ? 'border-nu-blue bg-nu-blue text-white'
      : 'border-transparent text-gray-700 hover:border-nu-gold hover:bg-nu-gold hover:text-nu-blue',
  ].join(' ');

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-nu-gold/30 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 transition hover:opacity-80">
          <img 
            src={logo} 
            alt="BulldogEx Shop Logo" 
            className="h-10 w-10 rounded-full border-2 border-nu-gold bg-white object-contain shadow-sm" 
          />
          <div>
            <p className="text-xl font-bold text-nu-blue tracking-tight">BulldogEx Shop</p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-nu-gold">
              National University
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
          <div className="mx-2 h-6 w-px bg-gray-300" />
          {authLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col gap-1.5 rounded-full border-2 border-nu-blue bg-white p-2 transition hover:bg-nu-gold md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-5 bg-nu-blue transition ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-5 bg-nu-blue transition ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-nu-blue transition ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t-2 border-nu-gold/30 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-full border-2 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.24em] transition ${
                    isActive
                      ? 'border-nu-blue bg-nu-blue text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-nu-gold hover:bg-nu-gold hover:text-nu-blue'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="my-2 h-px bg-gray-300" />
            {authLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full border-2 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.24em] transition ${
                    isActive
                      ? 'border-nu-blue bg-nu-blue text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-nu-gold hover:bg-nu-gold hover:text-nu-blue'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;