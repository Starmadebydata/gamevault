import { games } from '../../data/games';
import Navbar from '../../components/Navbar';
import GameGrid from '../../components/GameGrid';
import Footer from '../../components/Footer';

export default function NewGames() {
  // In a real application, games could be sorted by release date
  // Here we simply display all games
  const newGames = [...games];
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">New Games</h1>
        <GameGrid games={newGames} />
      </div>
      <Footer />
    </main>
  );
} 