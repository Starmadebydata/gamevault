'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { games } from '../../data/games';
import Navbar from '../../components/Navbar';
import GameGrid from '../../components/GameGrid';
import Footer from '../../components/Footer';

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState(games);

  useEffect(() => {
    if (query) {
      const filteredGames = games.filter(game => {
        const lowerQuery = query.toLowerCase();
        return (
          game.title.toLowerCase().includes(lowerQuery) ||
          game.description.toLowerCase().includes(lowerQuery) ||
          game.tags.toLowerCase().includes(lowerQuery)
        );
      });
      setSearchResults(filteredGames);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {query ? `Search results for "${query}"` : 'Search Games'}
        </h1>
        
        {searchResults.length > 0 ? (
          <GameGrid games={searchResults} />
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">
              {query ? `No games found matching "${query}"` : 'Please enter a search term'}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
} 