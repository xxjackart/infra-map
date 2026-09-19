# Private AI Infrastructure · Interactive 3D Map

Interactive 3D visualization of a two-site self-hosted infrastructure, built as a single HTML file with [Three.js](https://threejs.org/) (no build step).

**Live demo:** https://xxjackart.github.io/infra-map/

![type](https://img.shields.io/badge/type-static%20site-blue) ![build](https://img.shields.io/badge/build-none-brightgreen) ![deps](https://img.shields.io/badge/deps-CDN%20only-brightgreen)

## Features

- 33 nodes / 59 edges, data-driven (`NODES` / `LINKS` arrays: edit to evolve the map)
- 4 toggleable connection layers: network (mesh VPN / L3), data flow (ETL / RAG), monitoring, DNS
- Click a node → focus mode (dims non-neighbors) + camera fly-to + details panel
- Animated data packets along every edge (1 draw call per layer, GPU-computed bezier motion)
- Power-on intro: nodes pop in sequence while links and packets fade in
- Search (`/`), auto-tour (`t`), clickable legend with per-category focus, deep links (`#node`), copy-view-link
- Hover tooltips for nodes and links; keyboard shortcuts (`r` reset, `1-4` layer toggles, `esc` release)
- Animated scan-grid floor with pulse rings, sky gradient, pedestal rings + contact shadows
- Shader glow pulses along links, bloom, ACES tone mapping, SMAA, reflective floor, vignette + film grain
- SDF text labels (troika-three-text), auto-rotate with idle resume

## Run locally

Any static file server works (ES modules require http):

```bash
npx serve .        # or: python3 -m http.server
```

## Tech

- Three.js r169 via importmap (jsdelivr CDN): no bundler, no node_modules
- OrbitControls, EffectComposer (UnrealBloom / Output / ShaderPass / SMAA), Reflector
- troika-three-text for crisp SDF labels

## Editing the map

All content lives in the `NODES`, `LINKS`, `CATEGORIES`, and `LAYERS` constants at the top of the module script in `index.html`. Node descriptions and tags are shown in the info panel on click.

## Security note

The map is intentionally public-safe: tool names and architectural patterns only, with no IPs, hostnames, locations, or version strings.
