'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/images/games/home-icon.svg" 
              alt="GameVault Logo" 
              width={40} 
              height={40} 
              className="rounded"
            />
            <span className="text-xl font-bold">GameVault</span>
          </Link>
          
          <div className="w-full max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-3 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/categories" className="hover:text-blue-400 transition">Categories</Link>
            <Link href="/popular" className="hover:text-blue-400 transition">Popular</Link>
            <Link href="/new" className="hover:text-blue-400 transition">New Games</Link>
          </div>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-blue-400 transition">Home</Link>
            <Link href="/categories" className="block py-2 hover:text-blue-400 transition">Categories</Link>
            <Link href="/popular" className="block py-2 hover:text-blue-400 transition">Popular</Link>
            <Link href="/new" className="block py-2 hover:text-blue-400 transition">New Games</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 