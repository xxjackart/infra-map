# Private AI Infrastructure · architecture map

Architecture-as-code map of a two-site self-hosted system, built with [LikeC4](https://likec4.dev/): one declarative model, many generated 2D views with auto-layout.

**Live:** https://xxjackart.github.io/infra-map/

![type](https://img.shields.io/badge/type-architecture--as--code-blue) ![tool](https://img.shields.io/badge/tool-LikeC4-informational) ![build](https://img.shields.io/badge/build-static%20site-brightgreen)

## What it shows

- **Landscape**: two sites, an always-on agent node, clients, the private overlay, external systems
- **Services**: what runs on each host, with real runtime dependencies
- **Connectivity**: three independent layers (L3 routing, identity overlay, L2 service discovery)
- **Data & RAG**: ingestion pipelines, knowledge base, vector store, shared agent memory
- **Observability**: metrics scraping (including cross-site), dashboards, uptime failover pair
- **DNS**: two independent resolver chains
- **Security**: secrets flow, edge gateway, the single inbound chat channel
- **Dynamic flows**: content to knowledge base, shared agent memory, monitoring and alerting, remote access

## How it works

The single source of truth is `model/infra.c4` (LikeC4 DSL: specification, elements, relationships, views). The static site is generated from it, no runtime dependencies:

```bash
npm install
npm run dev        # local viewer with live reload
npm run validate   # model checks
npm run build      # clean + build static site into the repo root
```

The build uses `--base /infra-map/` and hash-based routing, so the same artifact works on GitHub Pages and behind a reverse proxy without server-side rewrites.

## Views versus a single diagram

A graph of nearly forty elements on one canvas is unreadable. This map is split into focused views (each with a short description), and the model is written once: elements and relationships are never duplicated across views. Layout is computed (ELK), so nothing is hand-positioned.

## Security note

The map is intentionally public-safe: tool names and architectural patterns only, with no addresses, hostnames, domains, locations, ports or software versions.
