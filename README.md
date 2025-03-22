# GameVault - Online Game Aggregation Platform

GameVault is an online game aggregation platform built with Next.js and Tailwind CSS, offering a variety of HTML5 games that users can play directly in their browser without downloading or installing.

## Features

- Embedding HTML5 games using iframe technology
- Responsive design for all screen sizes
- Game categorization and tag filtering
- Search functionality to help users find games of interest
- Game detail pages with descriptions, tags, and related game recommendations
- Custom SVG icons for all games with consistent styling

## Technology Stack

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **Programming Language**: TypeScript
- **State Management**: React Hooks
- **Routing**: Next.js App Router

## Local Development

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn or pnpm

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/yourusername/gamevault.git
cd gamevault
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit http://localhost:3000

## Building and Deployment

1. Build the application

```bash
npm run build
# or
yarn build
# or
pnpm build
```

2. Start the production server

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
gamevault/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── game/[title]/    # Game detail page
│   │   ├── categories/      # Game categories page
│   │   ├── search/          # Search results page
│   │   ├── popular/         # Popular games page
│   │   ├── new/             # New games page
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── GameCard.tsx     # Game card component
│   │   ├── GameGrid.tsx     # Game grid component
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   └── Footer.tsx       # Footer component
│   ├── data/                # Data files
│   │   └── games.ts         # Game data
│   └── styles/              # Style files
│       └── globals.css      # Global styles
├── public/                  # Static assets
│   ├── images/              # Image assets
│   │   └── games/           # Game SVG icons
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## SVG Icons

The platform uses custom SVG icons for all games to maintain visual consistency. Each game has its own SVG icon with:

- Consistent color schemes with gradient backgrounds
- Game-specific imagery and elements
- English text labels with uniform styling
- Responsive design that works well at different sizes

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE). 