import fs from 'fs';

const width = 1920;
const height = 1080;
const gridSize = 20;
const cols = width / gridSize;
const rows = height / gridSize;
const grid = new Array(cols * rows).fill(false);

function getIdx(x, y) { return y * cols + x; }
function isFree(x, y) { return x >= 0 && x < cols && y >= 0 && y < rows && !grid[getIdx(x, y)]; }
function mark(x, y) { if (x >= 0 && x < cols && y >= 0 && y < rows) grid[getIdx(x, y)] = true; }

let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <g fill="none" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">`;

const numTracks = 60;

for (let i = 0; i < numTracks; i++) {
    let cx = Math.floor(Math.random() * cols);
    let cy = Math.floor(Math.random() * rows);

    if (!isFree(cx, cy)) continue;

    let pathD = `M ${cx * gridSize} ${cy * gridSize}`;
    mark(cx, cy);

    // Decide length
    const length = 10 + Math.floor(Math.random() * 40);
    let currX = cx;
    let currY = cy;

    // Directions: 0=E, 1=S, 2=W, 3=N, 4=SE, 5=SW, 6=NW, 7=NE
    // We prefer 45 degree movement for that "tech" look (straight or diagonal).

    for (let step = 0; step < length; step++) {
        // Try to move in a direction
        const moves = [
            { dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 },
            { dx: 1, dy: 1 }, { dx: -1, dy: 1 }, { dx: -1, dy: -1 }, { dx: 1, dy: -1 }
        ];

        // Shuffle moves
        moves.sort(() => Math.random() - 0.5);

        let moved = false;
        for (const move of moves) {
            const nx = currX + move.dx;
            const ny = currY + move.dy;

            // Check collision (look ahead strict)
            if (isFree(nx, ny) && isFree(nx + move.dx, ny + move.dy)) {
                currX = nx;
                currY = ny;
                mark(currX, currY);
                pathD += ` L ${currX * gridSize} ${currY * gridSize}`;
                moved = true;
                break;
            }
        }

        if (!moved) break;
    }

    // Draw path
    svgContent += `<path d="${pathD}" />`;

    // Add terminal nodes (circles)
    svgContent += `<circle cx="${currX * gridSize}" cy="${currY * gridSize}" r="4" fill="black" stroke="none" />`;
    // Start node
    svgContent += `<circle cx="${cx * gridSize}" cy="${cy * gridSize}" r="4" fill="black" stroke="none" />`;
}

svgContent += `</g></svg>`;

fs.writeFileSync('public/full-circuit.svg', svgContent);
console.log('Generated public/full-circuit.svg');
