var e=e=>{switch(e){case`index`:return`direction: right

User: {
  label: "User"
  shape: c4-person
}
Mobile: {
  label: "Mobile devices"
  shape: c4-person
}
MdnsRelay: {
  label: "mDNS relay"
}
ContentSources: {
  label: "Content sources"
}
ChatNetwork: {
  label: "E2E chat network"
}
Workstation: {
  label: "Workstation · agent hub"
  shape: c4-person
}
Tailnet: {
  label: "Tailscale mesh"
}
SiteA: {
  label: "Site A · hub"
}
SiteB: {
  label: "Site B · satellite"
}
WorkerNode: {
  label: "Agent worker · always-on node"
}
AiApis: {
  label: "AI APIs"
}
CloudUtils: {
  label: "Cloud utilities"
}
RootDns: {
  label: "Root / authoritative nameservers"
}

User -> Workstation: "drives"
Mobile -> Tailnet: "joins (always on)"
Mobile -> SiteA: "DNS (tailnet-wide)"
Mobile -> WorkerNode: "file drop"
Workstation -> Tailnet: "joins"
Workstation -> SiteA: "[...]"
Workstation -> WorkerNode: "delegated tasks"
Tailnet -> SiteA: "exposes services"
Tailnet -> SiteB: "exposes services"
Tailnet -> WorkerNode: "exposes services"
MdnsRelay -> Tailnet: "transport"
SiteA -> MdnsRelay: "Bonjour discovery"
SiteB -> MdnsRelay: "Bonjour discovery"
SiteA -> SiteB: "L3 site-to-site"
SiteA -> WorkerNode: "over tailnet"
SiteA -> AiApis: "[...]"
SiteA -> CloudUtils: "[...]"
SiteA -> RootDns: "recursion"
SiteB -> SiteA
WorkerNode -> SiteA: "[...]"
ContentSources -> SiteA: "ingest"
ChatNetwork -> SiteA: "E2E transport"
SiteB -> RootDns: "recursion"
`;case`hub`:return`direction: right

Mobile: {
  label: "Mobile devices"
  shape: c4-person
}
Workstation: {
  label: "Workstation · agent hub"
  shape: c4-person
}
SiteB: {
  label: "Site B · satellite"
}
WorkerNode: {
  label: "Agent worker · always-on node"
}
ContentSources: {
  label: "Content sources"
}
ChatNetwork: {
  label: "E2E chat network"
}
SiteA: {
  label: "Site A · hub"

  Infisical: {
    label: "Infisical"
  }
  Caddy: {
    label: "Caddy"
  }
  ChatBridge: {
    label: "Chat bridge"
  }
  KumaA: {
    label: "Uptime Kuma (A)"
  }
  Prometheus: {
    label: "Prometheus"
  }
  Homepage: {
    label: "Homepage"
  }
  Dsh: {
    label: "Agent harness"
  }
  HaA: {
    label: "Home Assistant (A)"
  }
  Audiobookshelf: {
    label: "Audiobookshelf"
  }
  N8n: {
    label: "n8n"
  }
  PiholeA: {
    label: "Pi-hole (A)"
  }
  Grafana: {
    label: "Grafana"
  }
  Redmine: {
    label: "Redmine"
  }
  Searxng: {
    label: "SearXNG"
  }
  OpenWebUI: {
    label: "OpenWebUI"
  }
  UnboundA: {
    label: "Unbound (A)"
  }
  Postgres: {
    label: "PostgreSQL"
    shape: stored_data
  }
  Qdrant: {
    label: "Qdrant"
    shape: stored_data
  }
}
CloudUtils: {
  label: "Cloud utilities"
}
AiApis: {
  label: "AI APIs"
}
RootDns: {
  label: "Root / authoritative nameservers"
}

Mobile -> SiteA.PiholeA: "DNS (tailnet-wide)"
Workstation -> SiteA.OpenWebUI: "RAG API"
Workstation -> SiteA.N8n: "voice memo webhook"
Workstation -> SiteA.Redmine: "MCP"
Workstation -> SiteA.Grafana: "MCP"
Workstation -> SiteA.PiholeA: "DNS (tailnet-wide)"
Workstation -> SiteA.Infisical: "secrets at launch"
Workstation -> SiteA.Caddy: "MCP via gateway"
Workstation -> SiteA.Searxng: "web search"
SiteB -> SiteA.OpenWebUI
WorkerNode -> SiteA.OpenWebUI: "memory sync"
WorkerNode -> SiteA.Redmine: "MCP"
ContentSources -> SiteA.N8n: "ingest"
ChatNetwork -> SiteA.ChatBridge: "E2E transport"
SiteA.OpenWebUI -> SiteA.Qdrant: "embeddings"
SiteA.N8n -> SiteA.OpenWebUI: "KB upload"
SiteA.KumaA -> SiteA.OpenWebUI
SiteA.Dsh -> SiteA.OpenWebUI: "shared memory"
SiteA.N8n -> SiteA.Postgres: "pipeline state"
SiteA.N8n -> SiteA.Qdrant: "embeddings & lock"
SiteA.Prometheus -> SiteA.N8n: "[metrics pull]"
SiteA.Caddy -> SiteA.N8n: "automation API route"
SiteA.Redmine -> SiteA.Postgres: "data"
SiteA.Dsh -> SiteA.Redmine: "daily digest"
SiteA.Prometheus -> SiteA.Qdrant: "[metrics pull]"
SiteA.Prometheus -> SiteA.Grafana: "data source"
SiteA.Homepage -> SiteA.Grafana: "widgets"
SiteA.Prometheus -> SiteA.PiholeA: "[metrics pull]"
SiteA.Prometheus -> SiteA.UnboundA: "[metrics pull]"
SiteA.KumaA -> SiteA.HaA
SiteA.KumaA -> SiteA.Audiobookshelf
SiteA.PiholeA -> SiteA.UnboundA: "upstream"
SiteA.Dsh -> SiteA.Searxng: "web search"
SiteA.ChatBridge -> SiteA.Dsh: "loopback agent API"
SiteA.OpenWebUI -> AiApis: "chat & synthesis"
SiteA.N8n -> AiApis: "scoring & synthesis"
SiteA.N8n -> CloudUtils: "backups & reports"
SiteA.Prometheus -> SiteB: "over L3"
SiteA.Prometheus -> WorkerNode: "over tailnet"
SiteA.KumaA -> SiteB: "failover pair"
SiteA.KumaA -> CloudUtils: "alerts"
SiteA.UnboundA -> RootDns: "recursion"
SiteA.Caddy -> SiteB: "MCP proxy"
`;case`satellite`:return`direction: right

SiteA: {
  label: "Site A · hub"
}
SiteB: {
  label: "Site B · satellite"

  PiholeB: {
    label: "Pi-hole (B)"
  }
  KumaB: {
    label: "Uptime Kuma (B)"
  }
  HaMcp: {
    label: "Home automation MCP"
  }
  UnboundB: {
    label: "Unbound (B)"
  }
  HaB: {
    label: "Home Assistant (B)"
  }
}
RootDns: {
  label: "Root / authoritative nameservers"
}

SiteA -> SiteB.PiholeB: "over L3"
SiteA -> SiteB.UnboundB: "over L3"
SiteA -> SiteB.HaB
SiteA -> SiteB.KumaB: "failover pair"
SiteA -> SiteB.HaMcp: "MCP proxy"
SiteB.PiholeB -> SiteB.UnboundB: "upstream"
SiteB.KumaB -> SiteB.HaB
SiteB.UnboundB -> RootDns: "recursion"
SiteB.KumaB -> SiteA
`;case`connectivity`:return`direction: right

User: {
  label: "User"
  shape: c4-person
}
Mobile: {
  label: "Mobile devices"
  shape: c4-person
}
MdnsRelay: {
  label: "mDNS relay"
}
Workstation: {
  label: "Workstation · agent hub"
  shape: c4-person
}
Tailnet: {
  label: "Tailscale mesh"
}
SiteA: {
  label: "Site A · hub"
}
SiteB: {
  label: "Site B · satellite"
}
WorkerNode: {
  label: "Agent worker · always-on node"
}

User -> Workstation: "drives"
Mobile -> Tailnet: "joins (always on)"
Mobile -> SiteA: "DNS (tailnet-wide)"
Mobile -> WorkerNode: "file drop"
Workstation -> Tailnet: "joins"
Workstation -> SiteA: "[...]"
Workstation -> WorkerNode: "delegated tasks"
Tailnet -> SiteA: "exposes services"
Tailnet -> SiteB: "exposes services"
Tailnet -> WorkerNode: "exposes services"
MdnsRelay -> Tailnet: "transport"
SiteA -> MdnsRelay: "Bonjour discovery"
SiteB -> MdnsRelay: "Bonjour discovery"
SiteA -> SiteB: "L3 site-to-site"
SiteA -> WorkerNode: "over tailnet"
SiteB -> SiteA
WorkerNode -> SiteA: "[...]"
`;case`data`:return`direction: right

ContentSources: {
  label: "Content sources"
}
ChatNetwork: {
  label: "E2E chat network"
}
WorkerNode: {
  label: "Agent worker · always-on node"

  AgentApi: {
    label: "Agent endpoint"
  }
}
SiteA: {
  label: "Site A · hub"

  N8n: {
    label: "n8n"
  }
  ChatBridge: {
    label: "Chat bridge"
  }
  Dsh: {
    label: "Agent harness"
  }
  OpenWebUI: {
    label: "OpenWebUI"
  }
  Redmine: {
    label: "Redmine"
  }
  Searxng: {
    label: "SearXNG"
  }
  Qdrant: {
    label: "Qdrant"
    shape: stored_data
  }
  Postgres: {
    label: "PostgreSQL"
    shape: stored_data
  }
}
CloudUtils: {
  label: "Cloud utilities"
}
AiApis: {
  label: "AI APIs"
}

ContentSources -> SiteA.N8n: "ingest"
SiteA.N8n -> AiApis: "scoring & synthesis"
SiteA.N8n -> SiteA.OpenWebUI: "KB upload"
SiteA.OpenWebUI -> AiApis: "chat & synthesis"
SiteA.N8n -> SiteA.Qdrant: "embeddings & lock"
SiteA.OpenWebUI -> SiteA.Qdrant: "embeddings"
SiteA.N8n -> SiteA.Postgres: "pipeline state"
SiteA.Redmine -> SiteA.Postgres: "data"
SiteA.Dsh -> SiteA.OpenWebUI: "shared memory"
SiteA.Dsh -> SiteA.Redmine: "daily digest"
SiteA.Dsh -> SiteA.Searxng: "web search"
SiteA.ChatBridge -> SiteA.Dsh: "loopback agent API"
ChatNetwork -> SiteA.ChatBridge: "E2E transport"
SiteA.N8n -> CloudUtils: "backups & reports"
WorkerNode.AgentApi -> SiteA.OpenWebUI: "memory sync"
WorkerNode.AgentApi -> SiteA.Redmine: "MCP"
`;case`observability`:return`direction: right

SiteA: {
  label: "Site A · hub"

  Prometheus: {
    label: "Prometheus"
  }
  Homepage: {
    label: "Homepage"
  }
  KumaA: {
    label: "Uptime Kuma (A)"
  }
  N8n: {
    label: "n8n"
  }
  PiholeA: {
    label: "Pi-hole (A)"
  }
  Grafana: {
    label: "Grafana"
  }
  HaA: {
    label: "Home Assistant (A)"
  }
  Qdrant: {
    label: "Qdrant"
    shape: stored_data
  }
  UnboundA: {
    label: "Unbound (A)"
  }
}
WorkerNode: {
  label: "Agent worker · always-on node"

  AgentApi: {
    label: "Agent endpoint"
  }
}
SiteB: {
  label: "Site B · satellite"

  KumaB: {
    label: "Uptime Kuma (B)"
  }
  PiholeB: {
    label: "Pi-hole (B)"
  }
  UnboundB: {
    label: "Unbound (B)"
  }
}

SiteA.Prometheus -> SiteA.Grafana: "data source"
SiteA.Homepage -> SiteA.Grafana: "widgets"
SiteA.KumaA -> SiteB.KumaB: "failover pair"
SiteA.Prometheus -> SiteA.N8n: "[metrics pull]"
SiteA.Prometheus -> SiteA.Qdrant: "[metrics pull]"
SiteA.N8n -> SiteA.Qdrant: "embeddings & lock"
SiteA.Prometheus -> SiteA.PiholeA: "[metrics pull]"
SiteA.Prometheus -> SiteA.UnboundA: "[metrics pull]"
SiteA.PiholeA -> SiteA.UnboundA: "upstream"
SiteA.KumaA -> SiteA.HaA
SiteA.Prometheus -> SiteB.PiholeB: "over L3"
SiteA.Prometheus -> SiteB.UnboundB: "over L3"
SiteB.PiholeB -> SiteB.UnboundB: "upstream"
SiteA.Prometheus -> WorkerNode.AgentApi: "over tailnet"
`;case`dns`:return`direction: right

SiteB: {
  label: "Site B · satellite"

  PiholeB: {
    label: "Pi-hole (B)"
  }
  UnboundB: {
    label: "Unbound (B)"
  }
}
Mobile: {
  label: "Mobile devices"
  shape: c4-person
}
Workstation: {
  label: "Workstation · agent hub"
  shape: c4-person
}
SiteA: {
  label: "Site A · hub"

  PiholeA: {
    label: "Pi-hole (A)"
  }
  UnboundA: {
    label: "Unbound (A)"
  }
}
RootDns: {
  label: "Root / authoritative nameservers"
}

SiteA.PiholeA -> SiteA.UnboundA: "upstream"
SiteB.PiholeB -> SiteB.UnboundB: "upstream"
SiteA.UnboundA -> RootDns: "recursion"
SiteB.UnboundB -> RootDns: "recursion"
Mobile -> SiteA.PiholeA: "DNS (tailnet-wide)"
Workstation -> SiteA.PiholeA: "DNS (tailnet-wide)"
`;case`security`:return`direction: right

Workstation: {
  label: "Workstation · agent hub"
  shape: c4-person
}
ChatNetwork: {
  label: "E2E chat network"
}
SiteA: {
  label: "Site A · hub"

  Infisical: {
    label: "Infisical"
  }
  Caddy: {
    label: "Caddy"
  }
  ChatBridge: {
    label: "Chat bridge"
  }
  N8n: {
    label: "n8n"
  }
  Dsh: {
    label: "Agent harness"
  }
}
SiteB: {
  label: "Site B · satellite"

  HaMcp: {
    label: "Home automation MCP"
  }
}
AiApis: {
  label: "AI APIs"
}
CloudUtils: {
  label: "Cloud utilities"
}

Workstation -> SiteA.Infisical: "secrets at launch"
Workstation -> SiteA.Caddy: "MCP via gateway"
SiteA.Caddy -> SiteA.N8n: "automation API route"
Workstation -> SiteA.N8n: "voice memo webhook"
SiteA.Caddy -> SiteB.HaMcp: "MCP proxy"
ChatNetwork -> SiteA.ChatBridge: "E2E transport"
SiteA.ChatBridge -> SiteA.Dsh: "loopback agent API"
SiteA.N8n -> AiApis: "scoring & synthesis"
SiteA.N8n -> CloudUtils: "backups & reports"
`;case`flow-ingest`:return`direction: right

Workstation: {
  label: "Workstation · agent hub"
  shape: c4-person
}
ContentSources: {
  label: "Content sources"
}
SiteAN8n: {
  label: "n8n"
}
AiApis: {
  label: "AI APIs"
}
SiteAOpenWebUI: {
  label: "OpenWebUI"
}
SiteAQdrant: {
  label: "Qdrant"
  shape: stored_data
}
SiteB: {
  label: "Site B · satellite"
}
WorkerNode: {
  label: "Agent worker · always-on node"
}

Workstation -> SiteAN8n: "voice memo webhook"
ContentSources -> SiteAN8n: "feeds, mail, articles"
SiteAN8n -> AiApis: "score & synthesise"
SiteAN8n -> SiteAOpenWebUI: "upload to KB"
SiteAOpenWebUI -> SiteAQdrant: "embed & index"
`;case`flow-memory`:return`direction: right

WorkerNode: {
  label: "Agent worker · always-on node"
}
SiteADsh: {
  label: "Agent harness"
}
SiteAOpenWebUI: {
  label: "OpenWebUI"
}
Mobile: {
  label: "Mobile devices"
  shape: c4-person
}
ChatNetwork: {
  label: "E2E chat network"
}
SiteAChatBridge: {
  label: "Chat bridge"
}
SiteAQdrant: {
  label: "Qdrant"
  shape: stored_data
}
SiteB: {
  label: "Site B · satellite"
}

WorkerNode -> SiteAOpenWebUI: "push own memory"
SiteADsh -> SiteAOpenWebUI: "push own memory"
Mobile -> ChatNetwork: "ask from phone"
ChatNetwork -> SiteAChatBridge: "relay"
SiteAChatBridge -> SiteADsh: "agent turn"
SiteADsh -> SiteAOpenWebUI: "recall"
SiteAOpenWebUI -> SiteAQdrant: "vector search"
`;case`flow-uptime`:return`direction: right

WorkerNode: {
  label: "Agent worker · always-on node"
}
SiteAPrometheus: {
  label: "Prometheus"
}
SiteAPiholeA: {
  label: "Pi-hole (A)"
}
SiteB: {
  label: "Site B · satellite"

  PiholeB: {
    label: "Pi-hole (B)"
  }
}
SiteAGrafana: {
  label: "Grafana"
}
SiteAKumaA: {
  label: "Uptime Kuma (A)"
}
SiteAOpenWebUI: {
  label: "OpenWebUI"
}
CloudUtils: {
  label: "Cloud utilities"
}

SiteAPrometheus -> SiteAPiholeA: "scrape every 60s"
SiteAPrometheus -> SiteB.PiholeB: "scrape over L3"
SiteAPrometheus -> WorkerNode: "scrape over tailnet"
SiteAPrometheus -> SiteAGrafana: "dashboards"
SiteAKumaA -> SiteAOpenWebUI: "HTTP probe"
SiteAKumaA -> CloudUtils: "alert on down"
`;case`flow-access`:return`direction: right

Mobile: {
  label: "Mobile devices"
  shape: c4-person
}
Tailnet: {
  label: "Tailscale mesh"
}
SiteA: {
  label: "Site A · hub"

  PiholeA: {
    label: "Pi-hole (A)"
  }
  Caddy: {
    label: "Caddy"
  }
}
SiteB: {
  label: "Site B · satellite"

  HaMcp: {
    label: "Home automation MCP"
  }
}
WorkerNode: {
  label: "Agent worker · always-on node"
}
User: {
  label: "User"
  shape: c4-person
}

Mobile -> Tailnet: "join overlay (always on)"
Tailnet -> SiteA: "reach services"
Tailnet -> SiteB: "reach services"
Mobile -> SiteA.PiholeA: "DNS through overlay"
Mobile -> WorkerNode: "drop a file"
SiteA.Caddy -> SiteB.HaMcp: "MCP proxy"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};