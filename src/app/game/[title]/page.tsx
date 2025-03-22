'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { games, Game } from '../../../data/games';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function GamePage() {
  const params = useParams();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (params.title) {
      const title = decodeURIComponent(params.title as string);
      const foundGame = games.find(g => g.title === title);
      if (foundGame) {
        setGame(foundGame);
        document.title = `${foundGame.title} - GameVault`;
      }
    }
  }, [params]);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex-grow flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the game you requested.</p>
            <Link href="/" className="bg-accent text-white px-6 py-2 rounded-lg">
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
        
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
          <div className="aspect-video relative">
            <iframe
              src={game.embed}
              title={game.title}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Game Description</h2>
            <p className="text-gray-700 mb-6">{game.description}</p>
            
            <h2 className="text-2xl font-bold mb-4">Controls</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p>Use mouse and keyboard to control the game. Specific controls may vary depending on the game.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {game.tags.split(',').map((tag) => (
                <span 
                  key={tag} 
                  className="bg-secondary text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Related Games</h2>
            <div className="space-y-4">
              {games
                .filter(g => g.title !== game.title)
                .filter(g => g.tags.split(',').some(tag => game.tags.includes(tag)))
                .slice(0, 3)
                .map(relatedGame => (
                  <Link 
                    href={`/game/${encodeURIComponent(relatedGame.title)}`} 
                    key={relatedGame.title}
                    className="flex items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    <div className="w-16 h-16 relative mr-4">
                      <Image 
                        src={relatedGame.image} 
                        alt={relatedGame.title} 
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{relatedGame.title}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 