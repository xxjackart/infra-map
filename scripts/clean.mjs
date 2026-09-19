// Removes previous build artifacts from the repo root (build output = root).
import { rm } from 'node:fs/promises';

const artifacts = ['assets', 'index.html', '404.html', 'robots.txt', 'favicon.ico', 'likec4-views.js'];
await Promise.all(artifacts.map(p => rm(p, { recursive: true, force: true })));
console.log('cleaned:', artifacts.join(', '));
