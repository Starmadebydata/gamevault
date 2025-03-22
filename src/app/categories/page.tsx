'use client';

import { useState, useEffect } from 'react';
import { games } from '../../data/games';
import Navbar from '../../components/Navbar';
import GameGrid from '../../components/GameGrid';
import Footer from '../../components/Footer';

export default function Categories() {
  const [categories, setCategories] = useState<{[key: string]: number}>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    // Extract categories from game tags
    const categoriesMap: {[key: string]: number} = {};
    
    games.forEach(game => {
      const tags = game.tags.split(',');
      tags.forEach(tag => {
        const trimmedTag = tag.trim();
        if (trimmedTag) {
          categoriesMap[trimmedTag] = (categoriesMap[trimmedTag] || 0) + 1;
        }
      });
    });
    
    setCategories(categoriesMap);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = games.filter(game => 
        game.tags.split(',').some(tag => tag.trim() === selectedCategory)
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  }, [selectedCategory]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">Game Categories</h1>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              className={`px-4 py-2 rounded-full ${
                selectedCategory === null 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            
            {Object.entries(categories)
              .sort((a, b) => b[1] - a[1])
              .map(([category, count]) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category 
                      ? 'bg-accent text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({count})
                </button>
              ))}
          </div>
        </div>
        
        <GameGrid games={filteredGames} />
      </div>
      <Footer />
    </main>
  );
} 