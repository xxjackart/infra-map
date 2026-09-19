// Post-build tweaks for the generated static site.
import { writeFile } from 'node:fs/promises';

await writeFile('robots.txt', 'User-agent: *\nAllow: /\n', 'utf8');
console.log('postbuild: robots.txt set to allow indexing');
