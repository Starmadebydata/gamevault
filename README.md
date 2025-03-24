# GameVault - Online Game Library

GameVault is a static online game library that allows users to play a variety of HTML5 games directly in their browser without downloading or installing.

## Features

- Embedding HTML5 games using iframe technology
- Responsive design for all screen sizes
- Game categorization and tag filtering
- Search functionality to help users find games of interest
- Game detail pages with descriptions, tags, and related game recommendations

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Design**: Apple-inspired styling

## Local Development

### Prerequisites

- A modern web browser

### Running Locally

1. Clone the repository

```bash
git clone https://github.com/yourusername/gamevault.git
cd gamevault
```

2. Start a local server

You can use any static file server. For example, using Python:

```bash
python3 -m http.server 8000
```

3. Open your browser and visit http://localhost:8000

## Project Structure

```
gamevault/
├── index.html              # Main HTML file
├── styles/                 # CSS styles
│   └── main.css           # Main stylesheet
├── js/                    # JavaScript files
│   └── main.js           # Main script
└── 可嵌入游戏列表.md        # Game data file
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE). 