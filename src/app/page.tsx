import { games } from '../data/games';
import Navbar from '../components/Navbar';
import GameGrid from '../components/GameGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">Popular Games</h1>
        <GameGrid games={games} />
      </div>
      <Footer />
    </main>
  );
} 