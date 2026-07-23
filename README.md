# Private AI Infrastructure — Interactive 3D Map

Interactive 3D visualization of a two-site self-hosted infrastructure, built as a single HTML file with [Three.js](https://threejs.org/) (no build step).

**Live demo:** https://xxjackart.github.io/infra-map/

![type](https://img.shields.io/badge/type-static%20site-blue) ![build](https://img.shields.io/badge/build-none-brightgreen) ![deps](https://img.shields.io/badge/deps-CDN%20only-brightgreen)

## Features

- 26 nodes / 40 edges, data-driven (`NODES` / `LINKS` arrays — edit to evolve the map)
- 4 toggleable connection layers: network (mesh VPN / L3), data flow (ETL / RAG), monitoring, DNS
- Click a node → focus mode (dims non-neighbors) + camera fly-to + details panel
- Service icons as extruded 3D shapes — *current release uses category-colored cubes with fresnel rim shading; logo-shape variants live in git history*
- Shader-animated data pulses along links, bloom, ACES tone mapping, SMAA, reflective floor, vignette + film grain
- SDF text labels (troika-three-text), cinematic intro, auto-rotate with idle resume

## Run locally

Any static file server works (ES modules require http):

```bash
npx serve .        # or: python3 -m http.server
```

## Tech

- Three.js r169 via importmap (jsdelivr CDN) — no bundler, no node_modules
- OrbitControls, EffectComposer (UnrealBloom / Output / ShaderPass / SMAA), Reflector
- troika-three-text for crisp SDF labels

## Editing the map

All content lives in the `NODES`, `LINKS`, `CATEGORIES`, and `LAYERS` constants at the top of the module script in `index.html`. Node descriptions and tags are shown in the info panel on click.

## Security note

The map is intentionally public-safe: tool names and architectural patterns only — no IPs, hostnames, locations, or version strings.
