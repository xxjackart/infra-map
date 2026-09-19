var e=e=>{switch(e){case`index`:return'---\ntitle: "Landscape"\n---\ngraph LR\n  User@{ icon: "fa:user", shape: rounded, label: "User" }\n  Mobile@{ icon: "fa:user", shape: rounded, label: "Mobile devices" }\n  MdnsRelay@{ shape: rectangle, label: "mDNS relay" }\n  ContentSources@{ shape: rectangle, label: "Content sources" }\n  ChatNetwork@{ shape: rectangle, label: "E2E chat network" }\n  Workstation@{ icon: "fa:user", shape: rounded, label: "Workstation · agent hub" }\n  Tailnet@{ shape: rectangle, label: "Tailscale mesh" }\n  SiteA@{ shape: rectangle, label: "Site A · hub" }\n  SiteB@{ shape: rectangle, label: "Site B · satellite" }\n  WorkerNode@{ shape: rectangle, label: "Agent worker · always-on node" }\n  AiApis@{ shape: rectangle, label: "AI APIs" }\n  CloudUtils@{ shape: rectangle, label: "Cloud utilities" }\n  RootDns@{ shape: rectangle, label: "Root / authoritative nameservers" }\n  User -. "`drives`" .-> Workstation\n  Mobile -. "`joins (always on)`" .-> Tailnet\n  Mobile -. "`DNS (tailnet-wide)`" .-> SiteA\n  Mobile -. "`file drop`" .-> WorkerNode\n  Workstation -. "`joins`" .-> Tailnet\n  Workstation -. "`[...]`" .-> SiteA\n  Workstation -. "`delegated tasks`" .-> WorkerNode\n  Tailnet -. "`exposes services`" .-> SiteA\n  Tailnet -. "`exposes services`" .-> SiteB\n  Tailnet -. "`exposes services`" .-> WorkerNode\n  MdnsRelay -. "`transport`" .-> Tailnet\n  SiteA -. "`Bonjour discovery`" .-> MdnsRelay\n  SiteB -. "`Bonjour discovery`" .-> MdnsRelay\n  SiteA -. "`L3 site-to-site`" .-> SiteB\n  SiteA -. "`over tailnet`" .-> WorkerNode\n  SiteA -. "`[...]`" .-> AiApis\n  SiteA -. "`[...]`" .-> CloudUtils\n  SiteA -. "`recursion`" .-> RootDns\n  SiteB -.-> SiteA\n  WorkerNode -. "`[...]`" .-> SiteA\n  ContentSources -. "`ingest`" .-> SiteA\n  ChatNetwork -. "`E2E transport`" .-> SiteA\n  SiteB -. "`recursion`" .-> RootDns\n';case`hub`:return'---\ntitle: "Services · hub"\n---\ngraph LR\n  Mobile@{ icon: "fa:user", shape: rounded, label: "Mobile devices" }\n  Workstation@{ icon: "fa:user", shape: rounded, label: "Workstation · agent hub" }\n  SiteB@{ shape: rectangle, label: "Site B · satellite" }\n  WorkerNode@{ shape: rectangle, label: "Agent worker · always-on node" }\n  ContentSources@{ shape: rectangle, label: "Content sources" }\n  ChatNetwork@{ shape: rectangle, label: "E2E chat network" }\n  subgraph SiteA["`Site A · hub`"]\n    SiteA.Infisical@{ shape: rectangle, label: "Infisical" }\n    SiteA.Caddy@{ shape: rectangle, label: "Caddy" }\n    SiteA.ChatBridge@{ shape: rectangle, label: "Chat bridge" }\n    SiteA.KumaA@{ shape: rectangle, label: "Uptime Kuma (A)" }\n    SiteA.Prometheus@{ shape: rectangle, label: "Prometheus" }\n    SiteA.Homepage@{ shape: rectangle, label: "Homepage" }\n    SiteA.Dsh@{ shape: rectangle, label: "Agent harness" }\n    SiteA.HaA@{ shape: rectangle, label: "Home Assistant (A)" }\n    SiteA.Audiobookshelf@{ shape: rectangle, label: "Audiobookshelf" }\n    SiteA.N8n@{ shape: rectangle, label: "n8n" }\n    SiteA.PiholeA@{ shape: rectangle, label: "Pi-hole (A)" }\n    SiteA.Grafana@{ shape: rectangle, label: "Grafana" }\n    SiteA.Redmine@{ shape: rectangle, label: "Redmine" }\n    SiteA.Searxng@{ shape: rectangle, label: "SearXNG" }\n    SiteA.OpenWebUI@{ shape: rectangle, label: "OpenWebUI" }\n    SiteA.UnboundA@{ shape: rectangle, label: "Unbound (A)" }\n    SiteA.Postgres@{ shape: disk, label: "PostgreSQL" }\n    SiteA.Qdrant@{ shape: disk, label: "Qdrant" }\n  end\n  CloudUtils@{ shape: rectangle, label: "Cloud utilities" }\n  AiApis@{ shape: rectangle, label: "AI APIs" }\n  RootDns@{ shape: rectangle, label: "Root / authoritative nameservers" }\n  Mobile -. "`DNS (tailnet-wide)`" .-> SiteA.PiholeA\n  Workstation -. "`RAG API`" .-> SiteA.OpenWebUI\n  Workstation -. "`voice memo webhook`" .-> SiteA.N8n\n  Workstation -. "`MCP`" .-> SiteA.Redmine\n  Workstation -. "`MCP`" .-> SiteA.Grafana\n  Workstation -. "`DNS (tailnet-wide)`" .-> SiteA.PiholeA\n  Workstation -. "`secrets at launch`" .-> SiteA.Infisical\n  Workstation -. "`MCP via gateway`" .-> SiteA.Caddy\n  Workstation -. "`web search`" .-> SiteA.Searxng\n  SiteB -.-> SiteA.OpenWebUI\n  WorkerNode -. "`memory sync`" .-> SiteA.OpenWebUI\n  WorkerNode -. "`MCP`" .-> SiteA.Redmine\n  ContentSources -. "`ingest`" .-> SiteA.N8n\n  ChatNetwork -. "`E2E transport`" .-> SiteA.ChatBridge\n  SiteA.OpenWebUI -. "`embeddings`" .-> SiteA.Qdrant\n  SiteA.N8n -. "`KB upload`" .-> SiteA.OpenWebUI\n  SiteA.KumaA -.-> SiteA.OpenWebUI\n  SiteA.Dsh -. "`shared memory`" .-> SiteA.OpenWebUI\n  SiteA.N8n -. "`pipeline state`" .-> SiteA.Postgres\n  SiteA.N8n -. "`embeddings & lock`" .-> SiteA.Qdrant\n  SiteA.Prometheus -. "`[metrics pull]`" .-> SiteA.N8n\n  SiteA.Caddy -. "`automation API route`" .-> SiteA.N8n\n  SiteA.Redmine -. "`data`" .-> SiteA.Postgres\n  SiteA.Dsh -. "`daily digest`" .-> SiteA.Redmine\n  SiteA.Prometheus -. "`[metrics pull]`" .-> SiteA.Qdrant\n  SiteA.Prometheus -. "`data source`" .-> SiteA.Grafana\n  SiteA.Homepage -. "`widgets`" .-> SiteA.Grafana\n  SiteA.Prometheus -. "`[metrics pull]`" .-> SiteA.PiholeA\n  SiteA.Prometheus -. "`[metrics pull]`" .-> SiteA.UnboundA\n  SiteA.KumaA -.-> SiteA.HaA\n  SiteA.KumaA -.-> SiteA.Audiobookshelf\n  SiteA.PiholeA -. "`upstream`" .-> SiteA.UnboundA\n  SiteA.Dsh -. "`web search`" .-> SiteA.Searxng\n  SiteA.ChatBridge -. "`loopback agent API`" .-> SiteA.Dsh\n  SiteA.OpenWebUI -. "`chat & synthesis`" .-> AiApis\n  SiteA.N8n -. "`scoring & synthesis`" .-> AiApis\n  SiteA.N8n -. "`backups & reports`" .-> CloudUtils\n  SiteA.Prometheus -. "`over L3`" .-> SiteB\n  SiteA.Prometheus -. "`over tailnet`" .-> WorkerNode\n  SiteA.KumaA -. "`failover pair`" .-> SiteB\n  SiteA.KumaA -. "`alerts`" .-> CloudUtils\n  SiteA.UnboundA -. "`recursion`" .-> RootDns\n  SiteA.Caddy -. "`MCP proxy`" .-> SiteB\n';case`satellite`:return`---
title: "Services · satellite"
---
graph LR
  SiteA@{ shape: rectangle, label: "Site A · hub" }
  subgraph SiteB["\`Site B · satellite\`"]
    SiteB.PiholeB@{ shape: rectangle, label: "Pi-hole (B)" }
    SiteB.KumaB@{ shape: rectangle, label: "Uptime Kuma (B)" }
    SiteB.HaMcp@{ shape: rectangle, label: "Home automation MCP" }
    SiteB.UnboundB@{ shape: rectangle, label: "Unbound (B)" }
    SiteB.HaB@{ shape: rectangle, label: "Home Assistant (B)" }
  end
  RootDns@{ shape: rectangle, label: "Root / authoritative nameservers" }
  SiteA -. "\`over L3\`" .-> SiteB.PiholeB
  SiteA -. "\`over L3\`" .-> SiteB.UnboundB
  SiteA -.-> SiteB.HaB
  SiteA -. "\`failover pair\`" .-> SiteB.KumaB
  SiteA -. "\`MCP proxy\`" .-> SiteB.HaMcp
  SiteB.PiholeB -. "\`upstream\`" .-> SiteB.UnboundB
  SiteB.KumaB -.-> SiteB.HaB
  SiteB.UnboundB -. "\`recursion\`" .-> RootDns
  SiteB.KumaB -.-> SiteA
`;case`connectivity`:return'---\ntitle: "Connectivity"\n---\ngraph LR\n  User@{ icon: "fa:user", shape: rounded, label: "User" }\n  Mobile@{ icon: "fa:user", shape: rounded, label: "Mobile devices" }\n  MdnsRelay@{ shape: rectangle, label: "mDNS relay" }\n  Workstation@{ icon: "fa:user", shape: rounded, label: "Workstation · agent hub" }\n  Tailnet@{ shape: rectangle, label: "Tailscale mesh" }\n  SiteA@{ shape: rectangle, label: "Site A · hub" }\n  SiteB@{ shape: rectangle, label: "Site B · satellite" }\n  WorkerNode@{ shape: rectangle, label: "Agent worker · always-on node" }\n  User -. "`drives`" .-> Workstation\n  Mobile -. "`joins (always on)`" .-> Tailnet\n  Mobile -. "`DNS (tailnet-wide)`" .-> SiteA\n  Mobile -. "`file drop`" .-> WorkerNode\n  Workstation -. "`joins`" .-> Tailnet\n  Workstation -. "`[...]`" .-> SiteA\n  Workstation -. "`delegated tasks`" .-> WorkerNode\n  Tailnet -. "`exposes services`" .-> SiteA\n  Tailnet -. "`exposes services`" .-> SiteB\n  Tailnet -. "`exposes services`" .-> WorkerNode\n  MdnsRelay -. "`transport`" .-> Tailnet\n  SiteA -. "`Bonjour discovery`" .-> MdnsRelay\n  SiteB -. "`Bonjour discovery`" .-> MdnsRelay\n  SiteA -. "`L3 site-to-site`" .-> SiteB\n  SiteA -. "`over tailnet`" .-> WorkerNode\n  SiteB -.-> SiteA\n  WorkerNode -. "`[...]`" .-> SiteA\n';case`data`:return`---
title: "Data & RAG"
---
graph LR
  ContentSources@{ shape: rectangle, label: "Content sources" }
  ChatNetwork@{ shape: rectangle, label: "E2E chat network" }
  subgraph WorkerNode["\`Agent worker · always-on node\`"]
    WorkerNode.AgentApi@{ shape: rectangle, label: "Agent endpoint" }
  end
  subgraph SiteA["\`Site A · hub\`"]
    SiteA.N8n@{ shape: rectangle, label: "n8n" }
    SiteA.ChatBridge@{ shape: rectangle, label: "Chat bridge" }
    SiteA.Dsh@{ shape: rectangle, label: "Agent harness" }
    SiteA.OpenWebUI@{ shape: rectangle, label: "OpenWebUI" }
    SiteA.Redmine@{ shape: rectangle, label: "Redmine" }
    SiteA.Searxng@{ shape: rectangle, label: "SearXNG" }
    SiteA.Qdrant@{ shape: disk, label: "Qdrant" }
    SiteA.Postgres@{ shape: disk, label: "PostgreSQL" }
  end
  CloudUtils@{ shape: rectangle, label: "Cloud utilities" }
  AiApis@{ shape: rectangle, label: "AI APIs" }
  ContentSources -. "\`ingest\`" .-> SiteA.N8n
  SiteA.N8n -. "\`scoring & synthesis\`" .-> AiApis
  SiteA.N8n -. "\`KB upload\`" .-> SiteA.OpenWebUI
  SiteA.OpenWebUI -. "\`chat & synthesis\`" .-> AiApis
  SiteA.N8n -. "\`embeddings & lock\`" .-> SiteA.Qdrant
  SiteA.OpenWebUI -. "\`embeddings\`" .-> SiteA.Qdrant
  SiteA.N8n -. "\`pipeline state\`" .-> SiteA.Postgres
  SiteA.Redmine -. "\`data\`" .-> SiteA.Postgres
  SiteA.Dsh -. "\`shared memory\`" .-> SiteA.OpenWebUI
  SiteA.Dsh -. "\`daily digest\`" .-> SiteA.Redmine
  SiteA.Dsh -. "\`web search\`" .-> SiteA.Searxng
  SiteA.ChatBridge -. "\`loopback agent API\`" .-> SiteA.Dsh
  ChatNetwork -. "\`E2E transport\`" .-> SiteA.ChatBridge
  SiteA.N8n -. "\`backups & reports\`" .-> CloudUtils
  WorkerNode.AgentApi -. "\`memory sync\`" .-> SiteA.OpenWebUI
  WorkerNode.AgentApi -. "\`MCP\`" .-> SiteA.Redmine
`;case`observability`:return`---
title: "Observability"
---
graph LR
  subgraph SiteA["\`Site A · hub\`"]
    SiteA.Prometheus@{ shape: rectangle, label: "Prometheus" }
    SiteA.Homepage@{ shape: rectangle, label: "Homepage" }
    SiteA.KumaA@{ shape: rectangle, label: "Uptime Kuma (A)" }
    SiteA.N8n@{ shape: rectangle, label: "n8n" }
    SiteA.PiholeA@{ shape: rectangle, label: "Pi-hole (A)" }
    SiteA.Grafana@{ shape: rectangle, label: "Grafana" }
    SiteA.HaA@{ shape: rectangle, label: "Home Assistant (A)" }
    SiteA.Qdrant@{ shape: disk, label: "Qdrant" }
    SiteA.UnboundA@{ shape: rectangle, label: "Unbound (A)" }
  end
  subgraph WorkerNode["\`Agent worker · always-on node\`"]
    WorkerNode.AgentApi@{ shape: rectangle, label: "Agent endpoint" }
  end
  subgraph SiteB["\`Site B · satellite\`"]
    SiteB.KumaB@{ shape: rectangle, label: "Uptime Kuma (B)" }
    SiteB.PiholeB@{ shape: rectangle, label: "Pi-hole (B)" }
    SiteB.UnboundB@{ shape: rectangle, label: "Unbound (B)" }
  end
  SiteA.Prometheus -. "\`data source\`" .-> SiteA.Grafana
  SiteA.Homepage -. "\`widgets\`" .-> SiteA.Grafana
  SiteA.KumaA -. "\`failover pair\`" .-> SiteB.KumaB
  SiteA.Prometheus -. "\`[metrics pull]\`" .-> SiteA.N8n
  SiteA.Prometheus -. "\`[metrics pull]\`" .-> SiteA.Qdrant
  SiteA.N8n -. "\`embeddings & lock\`" .-> SiteA.Qdrant
  SiteA.Prometheus -. "\`[metrics pull]\`" .-> SiteA.PiholeA
  SiteA.Prometheus -. "\`[metrics pull]\`" .-> SiteA.UnboundA
  SiteA.PiholeA -. "\`upstream\`" .-> SiteA.UnboundA
  SiteA.KumaA -.-> SiteA.HaA
  SiteA.Prometheus -. "\`over L3\`" .-> SiteB.PiholeB
  SiteA.Prometheus -. "\`over L3\`" .-> SiteB.UnboundB
  SiteB.PiholeB -. "\`upstream\`" .-> SiteB.UnboundB
  SiteA.Prometheus -. "\`over tailnet\`" .-> WorkerNode.AgentApi
`;case`dns`:return`---
title: "DNS"
---
graph LR
  subgraph SiteB["\`Site B · satellite\`"]
    SiteB.PiholeB@{ shape: rectangle, label: "Pi-hole (B)" }
    SiteB.UnboundB@{ shape: rectangle, label: "Unbound (B)" }
  end
  Mobile@{ icon: "fa:user", shape: rounded, label: "Mobile devices" }
  Workstation@{ icon: "fa:user", shape: rounded, label: "Workstation · agent hub" }
  subgraph SiteA["\`Site A · hub\`"]
    SiteA.PiholeA@{ shape: rectangle, label: "Pi-hole (A)" }
    SiteA.UnboundA@{ shape: rectangle, label: "Unbound (A)" }
  end
  RootDns@{ shape: rectangle, label: "Root / authoritative nameservers" }
  SiteA.PiholeA -. "\`upstream\`" .-> SiteA.UnboundA
  SiteB.PiholeB -. "\`upstream\`" .-> SiteB.UnboundB
  SiteA.UnboundA -. "\`recursion\`" .-> RootDns
  SiteB.UnboundB -. "\`recursion\`" .-> RootDns
  Mobile -. "\`DNS (tailnet-wide)\`" .-> SiteA.PiholeA
  Workstation -. "\`DNS (tailnet-wide)\`" .-> SiteA.PiholeA
`;case`security`:return`---
title: "Security"
---
graph LR
  Workstation@{ icon: "fa:user", shape: rounded, label: "Workstation · agent hub" }
  ChatNetwork@{ shape: rectangle, label: "E2E chat network" }
  subgraph SiteA["\`Site A · hub\`"]
    SiteA.Infisical@{ shape: rectangle, label: "Infisical" }
    SiteA.Caddy@{ shape: rectangle, label: "Caddy" }
    SiteA.ChatBridge@{ shape: rectangle, label: "Chat bridge" }
    SiteA.N8n@{ shape: rectangle, label: "n8n" }
    SiteA.Dsh@{ shape: rectangle, label: "Agent harness" }
  end
  subgraph SiteB["\`Site B · satellite\`"]
    SiteB.HaMcp@{ shape: rectangle, label: "Home automation MCP" }
  end
  AiApis@{ shape: rectangle, label: "AI APIs" }
  CloudUtils@{ shape: rectangle, label: "Cloud utilities" }
  Workstation -. "\`secrets at launch\`" .-> SiteA.Infisical
  Workstation -. "\`MCP via gateway\`" .-> SiteA.Caddy
  SiteA.Caddy -. "\`automation API route\`" .-> SiteA.N8n
  Workstation -. "\`voice memo webhook\`" .-> SiteA.N8n
  SiteA.Caddy -. "\`MCP proxy\`" .-> SiteB.HaMcp
  ChatNetwork -. "\`E2E transport\`" .-> SiteA.ChatBridge
  SiteA.ChatBridge -. "\`loopback agent API\`" .-> SiteA.Dsh
  SiteA.N8n -. "\`scoring & synthesis\`" .-> AiApis
  SiteA.N8n -. "\`backups & reports\`" .-> CloudUtils
`;case`flow-ingest`:return`---
title: "Flow · content to knowledge base"
---
graph LR
  Workstation@{ icon: "fa:user", shape: rounded, label: "Workstation · agent hub" }
  ContentSources@{ shape: rectangle, label: "Content sources" }
  SiteAN8n@{ shape: rectangle, label: "n8n" }
  AiApis@{ shape: rectangle, label: "AI APIs" }
  SiteAOpenWebUI@{ shape: rectangle, label: "OpenWebUI" }
  SiteAQdrant@{ shape: disk, label: "Qdrant" }
  SiteB@{ shape: rectangle, label: "Site B · satellite" }
  WorkerNode@{ shape: rectangle, label: "Agent worker · always-on node" }
  Workstation -. "\`voice memo webhook\`" .-> SiteAN8n
  ContentSources -. "\`feeds, mail, articles\`" .-> SiteAN8n
  SiteAN8n -. "\`score & synthesise\`" .-> AiApis
  SiteAN8n -. "\`upload to KB\`" .-> SiteAOpenWebUI
  SiteAOpenWebUI -. "\`embed & index\`" .-> SiteAQdrant
`;case`flow-memory`:return`---
title: "Flow · shared agent memory"
---
graph LR
  WorkerNode@{ shape: rectangle, label: "Agent worker · always-on node" }
  SiteADsh@{ shape: rectangle, label: "Agent harness" }
  SiteAOpenWebUI@{ shape: rectangle, label: "OpenWebUI" }
  Mobile@{ icon: "fa:user", shape: rounded, label: "Mobile devices" }
  ChatNetwork@{ shape: rectangle, label: "E2E chat network" }
  SiteAChatBridge@{ shape: rectangle, label: "Chat bridge" }
  SiteAQdrant@{ shape: disk, label: "Qdrant" }
  SiteB@{ shape: rectangle, label: "Site B · satellite" }
  WorkerNode -. "\`push own memory\`" .-> SiteAOpenWebUI
  SiteADsh -. "\`push own memory\`" .-> SiteAOpenWebUI
  Mobile -. "\`ask from phone\`" .-> ChatNetwork
  ChatNetwork -. "\`relay\`" .-> SiteAChatBridge
  SiteAChatBridge -. "\`agent turn\`" .-> SiteADsh
  SiteADsh -. "\`recall\`" .-> SiteAOpenWebUI
  SiteAOpenWebUI -. "\`vector search\`" .-> SiteAQdrant
`;case`flow-uptime`:return`---
title: "Flow · monitoring and alerting"
---
graph LR
  WorkerNode@{ shape: rectangle, label: "Agent worker · always-on node" }
  SiteAPrometheus@{ shape: rectangle, label: "Prometheus" }
  SiteAPiholeA@{ shape: rectangle, label: "Pi-hole (A)" }
  subgraph SiteB["\`Site B · satellite\`"]
    SiteB.PiholeB@{ shape: rectangle, label: "Pi-hole (B)" }
  end
  SiteAGrafana@{ shape: rectangle, label: "Grafana" }
  SiteAKumaA@{ shape: rectangle, label: "Uptime Kuma (A)" }
  SiteAOpenWebUI@{ shape: rectangle, label: "OpenWebUI" }
  CloudUtils@{ shape: rectangle, label: "Cloud utilities" }
  SiteAPrometheus -. "\`scrape every 60s\`" .-> SiteAPiholeA
  SiteAPrometheus -. "\`scrape over L3\`" .-> SiteB.PiholeB
  SiteAPrometheus -. "\`scrape over tailnet\`" .-> WorkerNode
  SiteAPrometheus -. "\`dashboards\`" .-> SiteAGrafana
  SiteAKumaA -. "\`HTTP probe\`" .-> SiteAOpenWebUI
  SiteAKumaA -. "\`alert on down\`" .-> CloudUtils
`;case`flow-access`:return`---
title: "Flow · remote access"
---
graph LR
  Mobile@{ icon: "fa:user", shape: rounded, label: "Mobile devices" }
  Tailnet@{ shape: rectangle, label: "Tailscale mesh" }
  subgraph SiteA["\`Site A · hub\`"]
    SiteA.PiholeA@{ shape: rectangle, label: "Pi-hole (A)" }
    SiteA.Caddy@{ shape: rectangle, label: "Caddy" }
  end
  subgraph SiteB["\`Site B · satellite\`"]
    SiteB.HaMcp@{ shape: rectangle, label: "Home automation MCP" }
  end
  WorkerNode@{ shape: rectangle, label: "Agent worker · always-on node" }
  User@{ icon: "fa:user", shape: rounded, label: "User" }
  Mobile -. "\`join overlay (always on)\`" .-> Tailnet
  Tailnet -. "\`reach services\`" .-> SiteA
  Tailnet -. "\`reach services\`" .-> SiteB
  Mobile -. "\`DNS through overlay\`" .-> SiteA.PiholeA
  Mobile -. "\`drop a file\`" .-> WorkerNode
  SiteA.Caddy -. "\`MCP proxy\`" .-> SiteB.HaMcp
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};