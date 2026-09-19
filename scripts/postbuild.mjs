// Post-build tweaks for the generated static site.
import { readFile, writeFile } from 'node:fs/promises';

await writeFile('robots.txt', 'User-agent: *\nAllow: /\n', 'utf8');

const html = await readFile('index.html', 'utf8');
const patched = html
  .replace('<title>LikeC4</title>', '<title>Private AI Infrastructure · architecture map</title>')
  .replace(
    '<meta name="viewport"',
    '<meta name="description" content="Architecture-as-code map of a two-site self-hosted system: one model, many generated views.">\n  <meta name="viewport"'
  );
await writeFile('index.html', patched, 'utf8');
await writeFile('404.html', patched, 'utf8');
console.log('postbuild: robots.txt allow, title/description set');
