// Load games from JSON file
async function loadGames() {
    try {
        const response = await fetch('../可嵌入游戏列表.md');
        const data = await response.text();
        const games = JSON.parse(data);
        displayGames(games);
    } catch (error) {
        console.error('Failed to load games:', error);
        displayError();
    }
}

// Display game cards
function displayGames(games) {
    const gameGrid = document.querySelector('.game-grid');
    gameGrid.innerHTML = games.map(game => `
        <div class="game-card" onclick="openGame('${game.embed}', '${game.title}')">
            <img src="${game.image}" alt="${game.title}" onerror="this.src='https://placehold.co/600x400/1a1a2e/FFFFFF?text=${encodeURIComponent(game.title)}'">
            <div class="game-card-content">
                <h3>${game.title}</h3>
                <p>${game.description.length > 100 ? game.description.substring(0, 100) + '...' : game.description}</p>
                <div class="tags">
                    ${game.tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Open game in fullscreen
function openGame(embedUrl, title) {
    const gameWindow = window.open('', '_blank');
    gameWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title} - GameVault</title>
            <style>
                body, html { 
                    margin: 0; 
                    padding: 0; 
                    width: 100%; 
                    height: 100%; 
                    overflow: hidden;
                }
                iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
                .game-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0,0,0,0.8);
                    color: white;
                    padding: 10px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 1000;
                }
                .game-header button {
                    background: #007AFF;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .game-header button:hover {
                    background: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="game-header">
                <h1>${title}</h1>
                <button onclick="window.close()">Close Game</button>
            </div>
            <iframe src="${embedUrl}" allowfullscreen></iframe>
        </body>
        </html>
    `);
}

// Display error message
function displayError() {
    const gameGrid = document.querySelector('.game-grid');
    gameGrid.innerHTML = `
        <div class="error-message">
            <h2>Loading Failed</h2>
            <p>Unable to load games. Please try again later.</p>
        </div>
    `;
}

// Handle search functionality
function handleSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        searchGames(searchTerm);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.toLowerCase();
            searchGames(searchTerm);
        }
    });
}

// Search games
async function searchGames(searchTerm) {
    try {
        const response = await fetch('../可嵌入游戏列表.md');
        const data = await response.text();
        const games = JSON.parse(data);
        
        const filteredGames = games.filter(game => 
            game.title.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm) ||
            game.tags.toLowerCase().includes(searchTerm)
        );

        if (filteredGames.length === 0) {
            const gameGrid = document.querySelector('.game-grid');
            gameGrid.innerHTML = `
                <div class="error-message">
                    <h2>No Results</h2>
                    <p>No games found matching "${searchTerm}"</p>
                </div>
            `;
        } else {
            displayGames(filteredGames);
        }
    } catch (error) {
        console.error('Search failed:', error);
        displayError();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadGames();
    handleSearch();
}); 