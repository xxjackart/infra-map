# Private AI Infrastructure · system map

One-screen map of a two-site self-hosted system: services, agents, data flows and the private network, on a single schematic canvas.

**Live:** https://xxjackart.github.io/infra-map/

![type](https://img.shields.io/badge/type-single--file%20poster-blue) ![deps](https://img.shields.io/badge/runtime%20deps-none-brightgreen)

## What you see

- **Clients & agents** (left): people and devices, the workstation agent hub, the always-on agent worker
- **Network fabric** (ribbon): mesh overlay, L3 site-to-site tunnel, mDNS discovery
- **Site A · hub**: 18 components grouped into AI & knowledge, data, edge & security, observability, agents, DNS, home & media
- **Site B · satellite**: primary automation, its own DNS chain and monitoring, so it survives a hub outage
- **External systems** (bottom): AI APIs, content sources, cloud utilities, the E2E chat network, DNS roots
- **12 key flows** instead of every relation: network, data, agent, monitoring, DNS and secrets

Interactions: hover a component to trace the flows that touch it, click for a short description. On narrow screens the wires are hidden and the map becomes a clean stacked reference.

## How it is built

- `index.html`: the published map. Single file, no build step, no runtime dependencies, hand-designed layout with automatically drawn connectors (positions are measured from the DOM, so the layout survives content changes).
- `model/infra.c4`: a full [LikeC4](https://likec4.dev/) model of the same system for deep dives (every service, every relationship, dynamic flow views). Development only, not part of the published site.

```bash
npm install
npm run validate   # validate the LikeC4 model
npm run dev        # open the full model in the LikeC4 viewer
```

## Editing

- The map content lives in the `NODES` and `LINKS` arrays at the top of the script in `index.html` (labels, roles, descriptions, clusters, flows). Connectors and the stats line recompute automatically.
- Deeper detail lives in `model/infra.c4`.

## Security note

The map is intentionally public-safe: tool names and architectural patterns only, with no addresses, hostnames, domains, locations, ports or software versions.
