'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${encodeURIComponent(game.title)}`} className="game-card">
      <div className="aspect-square relative">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority={false}
        />
        <div className="game-title">
          <h3>{game.title}</h3>
        </div>
      </div>
    </Link>
  );
} 