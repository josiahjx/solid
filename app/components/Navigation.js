'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="gradient-bg text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        <Link href="/">  <div className="flex items-center space-x-4">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks-icon lucide-blocks"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/></svg>
            <span className="font-bold text-xl">SolidBlockForensics</span>
          </div></Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="hover:text-blue-200 transition">Services</Link>
            <Link href="/faq" className="hover:text-blue-200 transition">FAQ</Link>
            <Link href="/about" className="hover:text-blue-200 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>
      
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {!mobileMenuOpen ?<i className="fas fa-bars text-2xl"></i> : <i className="fas fa-times text-2xl"></i> }
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 transition-all duration-300 ease-in-out">
            <a href="/services" className="block py-2 hover:text-blue-200 transition">Services</a>
            <a href="/faq" className="block py-2 hover:text-blue-200 transition">FAQ</a>
            <a href="/about" className="block py-2 hover:text-blue-200 transition">About</a>
            <a href="/contact" className="block py-2 hover:text-blue-200 transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
} 