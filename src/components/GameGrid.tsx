'use client';

import GameCard from './GameCard';
import type { Game } from '../data/games';

interface GameGridProps {
  games: Game[];
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.title} game={game} />
      ))}
    </div>
  );
} 