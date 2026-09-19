var e=e=>{switch(e){case`index`:return`@startuml
title "Landscape"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<User>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam person<<Mobile>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<MdnsRelay>>{
  BackgroundColor #2fe6a8
  FontColor #004214
  BorderColor #00bd82
}
skinparam rectangle<<ContentSources>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam rectangle<<ChatNetwork>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam person<<Workstation>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<Tailnet>>{
  BackgroundColor #2fe6a8
  FontColor #004214
  BorderColor #00bd82
}
skinparam rectangle<<SiteA>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<SiteB>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<WorkerNode>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<AiApis>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam rectangle<<CloudUtils>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam rectangle<<RootDns>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
person "==User" <<User>> as User
person "==Mobile devices" <<Mobile>> as Mobile
rectangle "==mDNS relay\\n\\nUserspace relay that bridges service discovery between the two LANs:\\nmulticast (Bonjour) is forwarded as unicast over the overlay." <<MdnsRelay>> as MdnsRelay
rectangle "==Content sources\\n<size:10>[Youtube]</size>\\n\\nRSS feeds, video playlists, e-mail, voice memos, saved articles, NAS folders: raw material for ingestion pipelines." <<ContentSources>> as ContentSources
rectangle "==E2E chat network\\n\\nDecentralised end-to-end encrypted messaging network. No phone number, no global identity. The only inbound channel for the hub agent." <<ChatNetwork>> as ChatNetwork
person "==Workstation · agent hub\\n<size:10>[Apple]</size>\\n\\nDaily driver. Runs the agent CLI as the hub of the MCP ecosystem,\\noffline speech-to-text and local LLMs." <<Workstation>> as Workstation
rectangle "==Tailscale mesh\\n\\nMesh VPN (WireGuard-based). Identity instead of addresses:\\neach node gets an overlay identity, NAT traversal is automatic,\\ntraffic is end-to-end encrypted between nodes." <<Tailnet>> as Tailnet
rectangle "==Site A · hub\\n\\nPrimary host. Runs the application core, data platform, edge and observability." <<SiteA>> as SiteA
rectangle "==Site B · satellite\\n\\nSecondary site: home automation and independent DNS. Keeps working when the hub is down." <<SiteB>> as SiteB
rectangle "==Agent worker · always-on node\\n\\nDedicated headless node running a remote agent endpoint: delegated tasks, phone access, shared-memory producer, encrypted file inbox." <<WorkerNode>> as WorkerNode
rectangle "==AI APIs\\n<size:10>[Openai]</size>\\n\\nExternal language and speech APIs: primary model family (scoring, drafts, synthesis), classification, speech-to-text. Non-sensitive content only." <<AiApis>> as AiApis
rectangle "==Cloud utilities\\n<size:10>[Google Drive]</size>\\n\\nOff-site destination for workflow backups and delivery channel for pipeline and uptime reports." <<CloudUtils>> as CloudUtils
rectangle "==Root / authoritative nameservers\\n\\nThe end of the recursive resolver chain." <<RootDns>> as RootDns

User .[#8D8D8D,thickness=2].> Workstation : <color:#8D8D8D>drives
Mobile .[#8D8D8D,thickness=2].> Tailnet : <color:#8D8D8D>joins (always on)
Mobile .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>DNS (tailnet-wide)
Mobile .[#8D8D8D,thickness=2].> WorkerNode : <color:#8D8D8D>file drop
Workstation .[#8D8D8D,thickness=2].> Tailnet : <color:#8D8D8D>joins
Workstation .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>[...]
Workstation .[#8D8D8D,thickness=2].> WorkerNode : <color:#8D8D8D>delegated tasks
Tailnet .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>exposes services
Tailnet .[#8D8D8D,thickness=2].> SiteB : <color:#8D8D8D>exposes services
Tailnet .[#8D8D8D,thickness=2].> WorkerNode : <color:#8D8D8D>exposes services
MdnsRelay .[#8D8D8D,thickness=2].> Tailnet : <color:#8D8D8D>transport\\n<size:8>[<color:#8D8D8D>unicast over overlay]</size>
SiteA .[#8D8D8D,thickness=2].> MdnsRelay : <color:#8D8D8D>Bonjour discovery
SiteB .[#8D8D8D,thickness=2].> MdnsRelay : <color:#8D8D8D>Bonjour discovery
SiteA .[#b45309,thickness=2].> SiteB : <color:#b45309>L3 site-to-site\\n<size:8>[<color:#b45309>WireGuard tunnel between the sites]</size>
SiteA .[#b45309,thickness=2].> WorkerNode : <color:#b45309>over tailnet\\n<size:8>[<color:#b45309>node exporter]</size>
SiteA .[#8D8D8D,thickness=2].> AiApis : <color:#8D8D8D>[...]
SiteA .[#8D8D8D,thickness=2].> CloudUtils : <color:#8D8D8D>[...]
SiteA .[#8D8D8D,thickness=2].> RootDns : <color:#8D8D8D>recursion
SiteB .[#b45309,thickness=2].> SiteA
WorkerNode .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>[...]
ContentSources .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>ingest
ChatNetwork .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>E2E transport
SiteB .[#8D8D8D,thickness=2].> RootDns : <color:#8D8D8D>recursion
@enduml
`;case`hub`:return`@startuml
title "Services · hub"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Mobile>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam person<<Workstation>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<SiteB>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<WorkerNode>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<ContentSources>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam rectangle<<ChatNetwork>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam component<<SiteAInfisical>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<SiteACaddy>>{
  BackgroundColor #ff6b81
  FontColor #ffffff
  BorderColor #d2425d
}
skinparam component<<SiteAChatBridge>>{
  BackgroundColor #ffd166
  FontColor #503700
  BorderColor #d4aa40
}
skinparam component<<SiteAKumaA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAPrometheus>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAHomepage>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteADsh>>{
  BackgroundColor #ffd166
  FontColor #503700
  BorderColor #d4aa40
}
skinparam component<<SiteAHaA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAAudiobookshelf>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAN8n>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAPiholeA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAGrafana>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteARedmine>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteASearxng>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAOpenWebUI>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<CloudUtils>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam component<<SiteAUnboundA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam database<<SiteAPostgres>>{
  BackgroundColor #9d6bff
  FontColor #ffffff
  BorderColor #7346d5
}
skinparam database<<SiteAQdrant>>{
  BackgroundColor #9d6bff
  FontColor #ffffff
  BorderColor #7346d5
}
skinparam rectangle<<AiApis>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam rectangle<<RootDns>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
person "==Mobile devices" <<Mobile>> as Mobile
person "==Workstation · agent hub\\n<size:10>[Apple]</size>\\n\\nDaily driver. Runs the agent CLI as the hub of the MCP ecosystem,\\noffline speech-to-text and local LLMs." <<Workstation>> as Workstation
rectangle "==Site B · satellite\\n\\nSecondary site: home automation and independent DNS. Keeps working when the hub is down." <<SiteB>> as SiteB
rectangle "==Agent worker · always-on node\\n\\nDedicated headless node running a remote agent endpoint: delegated tasks, phone access, shared-memory producer, encrypted file inbox." <<WorkerNode>> as WorkerNode
rectangle "==Content sources\\n<size:10>[Youtube]</size>\\n\\nRSS feeds, video playlists, e-mail, voice memos, saved articles, NAS folders: raw material for ingestion pipelines." <<ContentSources>> as ContentSources
rectangle "==E2E chat network\\n\\nDecentralised end-to-end encrypted messaging network. No phone number, no global identity. The only inbound channel for the hub agent." <<ChatNetwork>> as ChatNetwork
rectangle "Site A · hub" <<SiteA>> as SiteA {
  skinparam RectangleBorderColor<<SiteA>> #5b7ad6
  skinparam RectangleFontColor<<SiteA>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteA>> dashed

  component "==Infisical\\n\\nSecrets management. Single source of truth for API keys and tokens, injected into local tools at launch." <<SiteAInfisical>> as SiteAInfisical
  rectangle "==Caddy\\n\\nReverse proxy and MCP gateway with automatic certificates. Edge routing for the automation API and remote MCP endpoints." <<SiteACaddy>> as SiteACaddy
  component "==Chat bridge\\n\\nBridges the end-to-end encrypted chat channel to the hub agent. Loopback-only API, hardened container." <<SiteAChatBridge>> as SiteAChatBridge
  component "==Uptime Kuma (A)\\n\\nUptime monitor, instance 1 of the failover pair. Watches tailnet services every 60s." <<SiteAKumaA>> as SiteAKumaA
  component "==Prometheus\\n<size:10>[Prometheus]</size>\\n\\nMetrics TSDB. Scrapes exporters every 60s, including the satellite site and the agent node over the L3 tunnel. 30-day retention, alert rules." <<SiteAPrometheus>> as SiteAPrometheus
  component "==Homepage\\n\\nStart page aggregating all services with live widgets." <<SiteAHomepage>> as SiteAHomepage
  component "==Agent harness\\n<size:10>[Nodejs]</size>\\n\\nLong-running agent on the hub: daily digests to the tracker, shared-memory producer, MCP clients." <<SiteADsh>> as SiteADsh
  component "==Home Assistant (A)\\n\\nHome automation instance A: entities, automations, dashboards." <<SiteAHaA>> as SiteAHaA
  component "==Audiobookshelf\\n\\nSelf-hosted audiobook and podcast server with mobile apps." <<SiteAAudiobookshelf>> as SiteAAudiobookshelf
  component "==n8n\\n\\nWorkflow orchestrator, the ETL backbone: ingest, AI scoring, dedup, KB upload, digests, backups, mail processing." <<SiteAN8n>> as SiteAN8n
  component "==Pi-hole (A)\\n\\nNetwork-wide ad and telemetry blocking at DNS level, covering devices that cannot run blockers." <<SiteAPiholeA>> as SiteAPiholeA
  component "==Grafana\\n<size:10>[Grafana]</size>\\n\\nDashboards: system, containers, DNS, databases, workflow metrics, knowledge-base stats." <<SiteAGrafana>> as SiteAGrafana
  component "==Redmine\\n\\nTask and project tracker. Single source of truth for work items, wiki and time tracking." <<SiteARedmine>> as SiteARedmine
  component "==SearXNG\\n\\nSelf-hosted metasearch aggregating public engines: no tracking, no API quota. The zero-cost web-search layer for agents." <<SiteASearxng>> as SiteASearxng
  component "==OpenWebUI\\n\\nKnowledge base hub and RAG front-end: OpenAI-compatible API, ~30 thematic collections, chat interface for local agents." <<SiteAOpenWebUI>> as SiteAOpenWebUI
  component "==Unbound (A)\\n\\nRecursive, validating (DNSSEC) caching resolver. Queries authoritative nameservers directly." <<SiteAUnboundA>> as SiteAUnboundA
  database "==PostgreSQL\\n<size:10>[Postgresql]</size>\\n\\nRelational database for application data and analytics." <<SiteAPostgres>> as SiteAPostgres
  database "==Qdrant\\n<size:10>[Qdrant]</size>\\n\\nVector database: embeddings for semantic search, plus lock/dedup store for ingestion pipelines." <<SiteAQdrant>> as SiteAQdrant
}
rectangle "==Cloud utilities\\n<size:10>[Google Drive]</size>\\n\\nOff-site destination for workflow backups and delivery channel for pipeline and uptime reports." <<CloudUtils>> as CloudUtils
rectangle "==AI APIs\\n<size:10>[Openai]</size>\\n\\nExternal language and speech APIs: primary model family (scoring, drafts, synthesis), classification, speech-to-text. Non-sensitive content only." <<AiApis>> as AiApis
rectangle "==Root / authoritative nameservers\\n\\nThe end of the recursive resolver chain." <<RootDns>> as RootDns

Mobile .[#8D8D8D,thickness=2].> SiteAPiholeA : <color:#8D8D8D>DNS (tailnet-wide)
Workstation .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>RAG API
Workstation .[#8D8D8D,thickness=2].> SiteAN8n : <color:#8D8D8D>voice memo webhook
Workstation .[#8D8D8D,thickness=2].> SiteARedmine : <color:#8D8D8D>MCP
Workstation .[#8D8D8D,thickness=2].> SiteAGrafana : <color:#8D8D8D>MCP
Workstation .[#8D8D8D,thickness=2].> SiteAPiholeA : <color:#8D8D8D>DNS (tailnet-wide)
Workstation .[#8D8D8D,thickness=2].> SiteAInfisical : <color:#8D8D8D>secrets at launch
Workstation .[#8D8D8D,thickness=2].> SiteACaddy : <color:#8D8D8D>MCP via gateway
Workstation .[#8D8D8D,thickness=2].> SiteASearxng : <color:#8D8D8D>web search
SiteB .[#b45309,thickness=2].> SiteAOpenWebUI
WorkerNode .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>memory sync
WorkerNode .[#8D8D8D,thickness=2].> SiteARedmine : <color:#8D8D8D>MCP
ContentSources .[#8D8D8D,thickness=2].> SiteAN8n : <color:#8D8D8D>ingest
ChatNetwork .[#8D8D8D,thickness=2].> SiteAChatBridge : <color:#8D8D8D>E2E transport
SiteAOpenWebUI .[#8D8D8D,thickness=2].> SiteAQdrant : <color:#8D8D8D>embeddings
SiteAN8n .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>KB upload
SiteAKumaA .[#b45309,thickness=2].> SiteAOpenWebUI
SiteADsh .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>shared memory
SiteAN8n .[#8D8D8D,thickness=2].> SiteAPostgres : <color:#8D8D8D>pipeline state
SiteAN8n .[#8D8D8D,thickness=2].> SiteAQdrant : <color:#8D8D8D>embeddings & lock
SiteAPrometheus .[#b45309,thickness=2].> SiteAN8n : <color:#b45309>[metrics pull]
SiteACaddy .[#8D8D8D,thickness=2].> SiteAN8n : <color:#8D8D8D>automation API route
SiteARedmine .[#8D8D8D,thickness=2].> SiteAPostgres : <color:#8D8D8D>data
SiteADsh .[#8D8D8D,thickness=2].> SiteARedmine : <color:#8D8D8D>daily digest
SiteAPrometheus .[#b45309,thickness=2].> SiteAQdrant : <color:#b45309>[metrics pull]
SiteAPrometheus .[#8D8D8D,thickness=2].> SiteAGrafana : <color:#8D8D8D>data source
SiteAHomepage .[#8D8D8D,thickness=2].> SiteAGrafana : <color:#8D8D8D>widgets
SiteAPrometheus .[#b45309,thickness=2].> SiteAPiholeA : <color:#b45309>[metrics pull]
SiteAPrometheus .[#b45309,thickness=2].> SiteAUnboundA : <color:#b45309>[metrics pull]
SiteAKumaA .[#b45309,thickness=2].> SiteAHaA
SiteAKumaA .[#b45309,thickness=2].> SiteAAudiobookshelf
SiteAPiholeA .[#8D8D8D,thickness=2].> SiteAUnboundA : <color:#8D8D8D>upstream
SiteADsh .[#8D8D8D,thickness=2].> SiteASearxng : <color:#8D8D8D>web search
SiteAChatBridge .[#8D8D8D,thickness=2].> SiteADsh : <color:#8D8D8D>loopback agent API
SiteAOpenWebUI .[#8D8D8D,thickness=2].> AiApis : <color:#8D8D8D>chat & synthesis
SiteAN8n .[#8D8D8D,thickness=2].> AiApis : <color:#8D8D8D>scoring & synthesis
SiteAN8n .[#8D8D8D,thickness=2].> CloudUtils : <color:#8D8D8D>backups & reports
SiteAPrometheus .[#b45309,thickness=2].> SiteB : <color:#b45309>over L3\\n<size:8>[<color:#b45309>metrics pull]</size>
SiteAPrometheus .[#b45309,thickness=2].> WorkerNode : <color:#b45309>over tailnet\\n<size:8>[<color:#b45309>node exporter]</size>
SiteAKumaA .[#b45309,thickness=2].> SiteB : <color:#b45309>failover pair\\n<size:8>[<color:#b45309>independent instances]</size>
SiteAKumaA .[#8D8D8D,thickness=2].> CloudUtils : <color:#8D8D8D>alerts
SiteAUnboundA .[#8D8D8D,thickness=2].> RootDns : <color:#8D8D8D>recursion
SiteACaddy .[#8D8D8D,thickness=2].> SiteB : <color:#8D8D8D>MCP proxy
@enduml
`;case`satellite`:return`@startuml
title "Services · satellite"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SiteA>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam component<<SiteBPiholeB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteBKumaB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<SiteBHaMcp>>{
  BackgroundColor #ff6b81
  FontColor #ffffff
  BorderColor #d2425d
}
skinparam component<<SiteBUnboundB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteBHaB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<RootDns>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
rectangle "==Site A · hub\\n\\nPrimary host. Runs the application core, data platform, edge and observability." <<SiteA>> as SiteA
rectangle "Site B · satellite" <<SiteB>> as SiteB {
  skinparam RectangleBorderColor<<SiteB>> #5b7ad6
  skinparam RectangleFontColor<<SiteB>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteB>> dashed

  component "==Pi-hole (B)\\n\\nSite B ad-blocking DNS. Same role, fully independent resolver chain." <<SiteBPiholeB>> as SiteBPiholeB
  component "==Uptime Kuma (B)\\n\\nUptime monitor, instance 2 of the failover pair. The watchdog must not die with what it watches." <<SiteBKumaB>> as SiteBKumaB
  rectangle "==Home automation MCP\\n\\nMCP endpoint exposing the automation instance to agents, reachable through the gateway." <<SiteBHaMcp>> as SiteBHaMcp
  component "==Unbound (B)\\n\\nSite B recursive resolver (DNSSEC), mirrors the site A chain." <<SiteBUnboundB>> as SiteBUnboundB
  component "==Home Assistant (B)\\n\\nPrimary automation instance: ~350 entities, Zigbee/Thread border router, voice-assistant integrations." <<SiteBHaB>> as SiteBHaB
}
rectangle "==Root / authoritative nameservers\\n\\nThe end of the recursive resolver chain." <<RootDns>> as RootDns

SiteA .[#b45309,thickness=2].> SiteBPiholeB : <color:#b45309>over L3\\n<size:8>[<color:#b45309>metrics pull]</size>
SiteA .[#b45309,thickness=2].> SiteBUnboundB : <color:#b45309>over L3\\n<size:8>[<color:#b45309>metrics pull]</size>
SiteA .[#b45309,thickness=2].> SiteBHaB
SiteA .[#8D8D8D,thickness=2].> SiteBKumaB : <color:#8D8D8D>failover pair\\n<size:8>[<color:#8D8D8D>independent instances]</size>
SiteA .[#8D8D8D,thickness=2].> SiteBHaMcp : <color:#8D8D8D>MCP proxy
SiteBPiholeB .[#8D8D8D,thickness=2].> SiteBUnboundB : <color:#8D8D8D>upstream
SiteBKumaB .[#b45309,thickness=2].> SiteBHaB
SiteBUnboundB .[#8D8D8D,thickness=2].> RootDns : <color:#8D8D8D>recursion
SiteBKumaB .[#b45309,thickness=2].> SiteA
@enduml
`;case`connectivity`:return`@startuml
title "Connectivity"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<User>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam person<<Mobile>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<MdnsRelay>>{
  BackgroundColor #2fe6a8
  FontColor #004214
  BorderColor #00bd82
}
skinparam person<<Workstation>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<Tailnet>>{
  BackgroundColor #2fe6a8
  FontColor #004214
  BorderColor #00bd82
}
skinparam rectangle<<SiteA>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<SiteB>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<WorkerNode>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
person "==User" <<User>> as User
person "==Mobile devices" <<Mobile>> as Mobile
rectangle "==mDNS relay\\n\\nUserspace relay that bridges service discovery between the two LANs:\\nmulticast (Bonjour) is forwarded as unicast over the overlay." <<MdnsRelay>> as MdnsRelay
person "==Workstation · agent hub\\n<size:10>[Apple]</size>\\n\\nDaily driver. Runs the agent CLI as the hub of the MCP ecosystem,\\noffline speech-to-text and local LLMs." <<Workstation>> as Workstation
rectangle "==Tailscale mesh\\n\\nMesh VPN (WireGuard-based). Identity instead of addresses:\\neach node gets an overlay identity, NAT traversal is automatic,\\ntraffic is end-to-end encrypted between nodes." <<Tailnet>> as Tailnet
rectangle "==Site A · hub\\n\\nPrimary host. Runs the application core, data platform, edge and observability." <<SiteA>> as SiteA
rectangle "==Site B · satellite\\n\\nSecondary site: home automation and independent DNS. Keeps working when the hub is down." <<SiteB>> as SiteB
rectangle "==Agent worker · always-on node\\n\\nDedicated headless node running a remote agent endpoint: delegated tasks, phone access, shared-memory producer, encrypted file inbox." <<WorkerNode>> as WorkerNode

User .[#8D8D8D,thickness=2].> Workstation : <color:#8D8D8D>drives
Mobile .[#8D8D8D,thickness=2].> Tailnet : <color:#8D8D8D>joins (always on)
Mobile .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>DNS (tailnet-wide)
Mobile .[#8D8D8D,thickness=2].> WorkerNode : <color:#8D8D8D>file drop
Workstation .[#8D8D8D,thickness=2].> Tailnet : <color:#8D8D8D>joins
Workstation .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>[...]
Workstation .[#8D8D8D,thickness=2].> WorkerNode : <color:#8D8D8D>delegated tasks
Tailnet .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>exposes services
Tailnet .[#8D8D8D,thickness=2].> SiteB : <color:#8D8D8D>exposes services
Tailnet .[#8D8D8D,thickness=2].> WorkerNode : <color:#8D8D8D>exposes services
MdnsRelay .[#8D8D8D,thickness=2].> Tailnet : <color:#8D8D8D>transport\\n<size:8>[<color:#8D8D8D>unicast over overlay]</size>
SiteA .[#8D8D8D,thickness=2].> MdnsRelay : <color:#8D8D8D>Bonjour discovery
SiteB .[#8D8D8D,thickness=2].> MdnsRelay : <color:#8D8D8D>Bonjour discovery
SiteA .[#b45309,thickness=2].> SiteB : <color:#b45309>L3 site-to-site\\n<size:8>[<color:#b45309>WireGuard tunnel between the sites]</size>
SiteA .[#b45309,thickness=2].> WorkerNode : <color:#b45309>over tailnet\\n<size:8>[<color:#b45309>node exporter]</size>
SiteB .[#b45309,thickness=2].> SiteA
WorkerNode .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>[...]
@enduml
`;case`data`:return`@startuml
title "Data & RAG"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ContentSources>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam rectangle<<ChatNetwork>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam component<<WorkerNodeAgentApi>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAN8n>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAChatBridge>>{
  BackgroundColor #ffd166
  FontColor #503700
  BorderColor #d4aa40
}
skinparam rectangle<<CloudUtils>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam component<<SiteADsh>>{
  BackgroundColor #ffd166
  FontColor #503700
  BorderColor #d4aa40
}
skinparam component<<SiteAOpenWebUI>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteARedmine>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteASearxng>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<AiApis>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam database<<SiteAQdrant>>{
  BackgroundColor #9d6bff
  FontColor #ffffff
  BorderColor #7346d5
}
skinparam database<<SiteAPostgres>>{
  BackgroundColor #9d6bff
  FontColor #ffffff
  BorderColor #7346d5
}
rectangle "==Content sources\\n<size:10>[Youtube]</size>\\n\\nRSS feeds, video playlists, e-mail, voice memos, saved articles, NAS folders: raw material for ingestion pipelines." <<ContentSources>> as ContentSources
rectangle "==E2E chat network\\n\\nDecentralised end-to-end encrypted messaging network. No phone number, no global identity. The only inbound channel for the hub agent." <<ChatNetwork>> as ChatNetwork
rectangle "Agent worker · always-on node" <<WorkerNode>> as WorkerNode {
  skinparam RectangleBorderColor<<WorkerNode>> #5b7ad6
  skinparam RectangleFontColor<<WorkerNode>> #5b7ad6
  skinparam RectangleBorderStyle<<WorkerNode>> dashed

  component "==Agent endpoint\\n\\nRemote agent API: delegation from the workstation and mobile access." <<WorkerNodeAgentApi>> as WorkerNodeAgentApi
}
rectangle "Site A · hub" <<SiteA>> as SiteA {
  skinparam RectangleBorderColor<<SiteA>> #5b7ad6
  skinparam RectangleFontColor<<SiteA>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteA>> dashed

  component "==n8n\\n\\nWorkflow orchestrator, the ETL backbone: ingest, AI scoring, dedup, KB upload, digests, backups, mail processing." <<SiteAN8n>> as SiteAN8n
  component "==Chat bridge\\n\\nBridges the end-to-end encrypted chat channel to the hub agent. Loopback-only API, hardened container." <<SiteAChatBridge>> as SiteAChatBridge
  component "==Agent harness\\n<size:10>[Nodejs]</size>\\n\\nLong-running agent on the hub: daily digests to the tracker, shared-memory producer, MCP clients." <<SiteADsh>> as SiteADsh
  component "==OpenWebUI\\n\\nKnowledge base hub and RAG front-end: OpenAI-compatible API, ~30 thematic collections, chat interface for local agents." <<SiteAOpenWebUI>> as SiteAOpenWebUI
  component "==Redmine\\n\\nTask and project tracker. Single source of truth for work items, wiki and time tracking." <<SiteARedmine>> as SiteARedmine
  component "==SearXNG\\n\\nSelf-hosted metasearch aggregating public engines: no tracking, no API quota. The zero-cost web-search layer for agents." <<SiteASearxng>> as SiteASearxng
  database "==Qdrant\\n<size:10>[Qdrant]</size>\\n\\nVector database: embeddings for semantic search, plus lock/dedup store for ingestion pipelines." <<SiteAQdrant>> as SiteAQdrant
  database "==PostgreSQL\\n<size:10>[Postgresql]</size>\\n\\nRelational database for application data and analytics." <<SiteAPostgres>> as SiteAPostgres
}
rectangle "==Cloud utilities\\n<size:10>[Google Drive]</size>\\n\\nOff-site destination for workflow backups and delivery channel for pipeline and uptime reports." <<CloudUtils>> as CloudUtils
rectangle "==AI APIs\\n<size:10>[Openai]</size>\\n\\nExternal language and speech APIs: primary model family (scoring, drafts, synthesis), classification, speech-to-text. Non-sensitive content only." <<AiApis>> as AiApis

ContentSources .[#8D8D8D,thickness=2].> SiteAN8n : <color:#8D8D8D>ingest
SiteAN8n .[#8D8D8D,thickness=2].> AiApis : <color:#8D8D8D>scoring & synthesis
SiteAN8n .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>KB upload
SiteAOpenWebUI .[#8D8D8D,thickness=2].> AiApis : <color:#8D8D8D>chat & synthesis
SiteAN8n .[#8D8D8D,thickness=2].> SiteAQdrant : <color:#8D8D8D>embeddings & lock
SiteAOpenWebUI .[#8D8D8D,thickness=2].> SiteAQdrant : <color:#8D8D8D>embeddings
SiteAN8n .[#8D8D8D,thickness=2].> SiteAPostgres : <color:#8D8D8D>pipeline state
SiteARedmine .[#8D8D8D,thickness=2].> SiteAPostgres : <color:#8D8D8D>data
SiteADsh .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>shared memory
SiteADsh .[#8D8D8D,thickness=2].> SiteARedmine : <color:#8D8D8D>daily digest
SiteADsh .[#8D8D8D,thickness=2].> SiteASearxng : <color:#8D8D8D>web search
SiteAChatBridge .[#8D8D8D,thickness=2].> SiteADsh : <color:#8D8D8D>loopback agent API
ChatNetwork .[#8D8D8D,thickness=2].> SiteAChatBridge : <color:#8D8D8D>E2E transport
SiteAN8n .[#8D8D8D,thickness=2].> CloudUtils : <color:#8D8D8D>backups & reports
WorkerNodeAgentApi .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>memory sync
WorkerNodeAgentApi .[#8D8D8D,thickness=2].> SiteARedmine : <color:#8D8D8D>MCP
@enduml
`;case`observability`:return`@startuml
title "Observability"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<SiteAPrometheus>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAHomepage>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAKumaA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAN8n>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAPiholeA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAGrafana>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAHaA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam database<<SiteAQdrant>>{
  BackgroundColor #9d6bff
  FontColor #ffffff
  BorderColor #7346d5
}
skinparam component<<SiteAUnboundA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<WorkerNodeAgentApi>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteBKumaB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteBPiholeB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteBUnboundB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
rectangle "Site A · hub" <<SiteA>> as SiteA {
  skinparam RectangleBorderColor<<SiteA>> #5b7ad6
  skinparam RectangleFontColor<<SiteA>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteA>> dashed

  component "==Prometheus\\n<size:10>[Prometheus]</size>\\n\\nMetrics TSDB. Scrapes exporters every 60s, including the satellite site and the agent node over the L3 tunnel. 30-day retention, alert rules." <<SiteAPrometheus>> as SiteAPrometheus
  component "==Homepage\\n\\nStart page aggregating all services with live widgets." <<SiteAHomepage>> as SiteAHomepage
  component "==Uptime Kuma (A)\\n\\nUptime monitor, instance 1 of the failover pair. Watches tailnet services every 60s." <<SiteAKumaA>> as SiteAKumaA
  component "==n8n\\n\\nWorkflow orchestrator, the ETL backbone: ingest, AI scoring, dedup, KB upload, digests, backups, mail processing." <<SiteAN8n>> as SiteAN8n
  component "==Pi-hole (A)\\n\\nNetwork-wide ad and telemetry blocking at DNS level, covering devices that cannot run blockers." <<SiteAPiholeA>> as SiteAPiholeA
  component "==Grafana\\n<size:10>[Grafana]</size>\\n\\nDashboards: system, containers, DNS, databases, workflow metrics, knowledge-base stats." <<SiteAGrafana>> as SiteAGrafana
  component "==Home Assistant (A)\\n\\nHome automation instance A: entities, automations, dashboards." <<SiteAHaA>> as SiteAHaA
  database "==Qdrant\\n<size:10>[Qdrant]</size>\\n\\nVector database: embeddings for semantic search, plus lock/dedup store for ingestion pipelines." <<SiteAQdrant>> as SiteAQdrant
  component "==Unbound (A)\\n\\nRecursive, validating (DNSSEC) caching resolver. Queries authoritative nameservers directly." <<SiteAUnboundA>> as SiteAUnboundA
}
rectangle "Agent worker · always-on node" <<WorkerNode>> as WorkerNode {
  skinparam RectangleBorderColor<<WorkerNode>> #5b7ad6
  skinparam RectangleFontColor<<WorkerNode>> #5b7ad6
  skinparam RectangleBorderStyle<<WorkerNode>> dashed

  component "==Agent endpoint\\n\\nRemote agent API: delegation from the workstation and mobile access." <<WorkerNodeAgentApi>> as WorkerNodeAgentApi
}
rectangle "Site B · satellite" <<SiteB>> as SiteB {
  skinparam RectangleBorderColor<<SiteB>> #5b7ad6
  skinparam RectangleFontColor<<SiteB>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteB>> dashed

  component "==Uptime Kuma (B)\\n\\nUptime monitor, instance 2 of the failover pair. The watchdog must not die with what it watches." <<SiteBKumaB>> as SiteBKumaB
  component "==Pi-hole (B)\\n\\nSite B ad-blocking DNS. Same role, fully independent resolver chain." <<SiteBPiholeB>> as SiteBPiholeB
  component "==Unbound (B)\\n\\nSite B recursive resolver (DNSSEC), mirrors the site A chain." <<SiteBUnboundB>> as SiteBUnboundB
}

SiteAPrometheus .[#8D8D8D,thickness=2].> SiteAGrafana : <color:#8D8D8D>data source
SiteAHomepage .[#8D8D8D,thickness=2].> SiteAGrafana : <color:#8D8D8D>widgets
SiteAKumaA .[#8D8D8D,thickness=2].> SiteBKumaB : <color:#8D8D8D>failover pair\\n<size:8>[<color:#8D8D8D>independent instances]</size>
SiteAPrometheus .[#b45309,thickness=2].> SiteAN8n : <color:#b45309>[metrics pull]
SiteAPrometheus .[#b45309,thickness=2].> SiteAQdrant : <color:#b45309>[metrics pull]
SiteAN8n .[#8D8D8D,thickness=2].> SiteAQdrant : <color:#8D8D8D>embeddings & lock
SiteAPrometheus .[#b45309,thickness=2].> SiteAPiholeA : <color:#b45309>[metrics pull]
SiteAPrometheus .[#b45309,thickness=2].> SiteAUnboundA : <color:#b45309>[metrics pull]
SiteAPiholeA .[#8D8D8D,thickness=2].> SiteAUnboundA : <color:#8D8D8D>upstream
SiteAKumaA .[#b45309,thickness=2].> SiteAHaA
SiteAPrometheus .[#b45309,thickness=2].> SiteBPiholeB : <color:#b45309>over L3\\n<size:8>[<color:#b45309>metrics pull]</size>
SiteAPrometheus .[#b45309,thickness=2].> SiteBUnboundB : <color:#b45309>over L3\\n<size:8>[<color:#b45309>metrics pull]</size>
SiteBPiholeB .[#8D8D8D,thickness=2].> SiteBUnboundB : <color:#8D8D8D>upstream
SiteAPrometheus .[#b45309,thickness=2].> WorkerNodeAgentApi : <color:#b45309>over tailnet\\n<size:8>[<color:#b45309>node exporter]</size>
@enduml
`;case`dns`:return`@startuml
title "DNS"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Mobile>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam person<<Workstation>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam component<<SiteBPiholeB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteBUnboundB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAPiholeA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAUnboundA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<RootDns>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
rectangle "Site B · satellite" <<SiteB>> as SiteB {
  skinparam RectangleBorderColor<<SiteB>> #5b7ad6
  skinparam RectangleFontColor<<SiteB>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteB>> dashed

  component "==Pi-hole (B)\\n\\nSite B ad-blocking DNS. Same role, fully independent resolver chain." <<SiteBPiholeB>> as SiteBPiholeB
  component "==Unbound (B)\\n\\nSite B recursive resolver (DNSSEC), mirrors the site A chain." <<SiteBUnboundB>> as SiteBUnboundB
}
person "==Mobile devices" <<Mobile>> as Mobile
person "==Workstation · agent hub\\n<size:10>[Apple]</size>\\n\\nDaily driver. Runs the agent CLI as the hub of the MCP ecosystem,\\noffline speech-to-text and local LLMs." <<Workstation>> as Workstation
rectangle "Site A · hub" <<SiteA>> as SiteA {
  skinparam RectangleBorderColor<<SiteA>> #5b7ad6
  skinparam RectangleFontColor<<SiteA>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteA>> dashed

  component "==Pi-hole (A)\\n\\nNetwork-wide ad and telemetry blocking at DNS level, covering devices that cannot run blockers." <<SiteAPiholeA>> as SiteAPiholeA
  component "==Unbound (A)\\n\\nRecursive, validating (DNSSEC) caching resolver. Queries authoritative nameservers directly." <<SiteAUnboundA>> as SiteAUnboundA
}
rectangle "==Root / authoritative nameservers\\n\\nThe end of the recursive resolver chain." <<RootDns>> as RootDns

SiteAPiholeA .[#8D8D8D,thickness=2].> SiteAUnboundA : <color:#8D8D8D>upstream
SiteBPiholeB .[#8D8D8D,thickness=2].> SiteBUnboundB : <color:#8D8D8D>upstream
SiteAUnboundA .[#8D8D8D,thickness=2].> RootDns : <color:#8D8D8D>recursion
SiteBUnboundB .[#8D8D8D,thickness=2].> RootDns : <color:#8D8D8D>recursion
Mobile .[#8D8D8D,thickness=2].> SiteAPiholeA : <color:#8D8D8D>DNS (tailnet-wide)
Workstation .[#8D8D8D,thickness=2].> SiteAPiholeA : <color:#8D8D8D>DNS (tailnet-wide)
@enduml
`;case`security`:return`@startuml
title "Security"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Workstation>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<ChatNetwork>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam component<<SiteAInfisical>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<SiteACaddy>>{
  BackgroundColor #ff6b81
  FontColor #ffffff
  BorderColor #d2425d
}
skinparam component<<SiteAChatBridge>>{
  BackgroundColor #ffd166
  FontColor #503700
  BorderColor #d4aa40
}
skinparam component<<SiteAN8n>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteADsh>>{
  BackgroundColor #ffd166
  FontColor #503700
  BorderColor #d4aa40
}
skinparam rectangle<<AiApis>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam rectangle<<CloudUtils>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam rectangle<<SiteBHaMcp>>{
  BackgroundColor #ff6b81
  FontColor #ffffff
  BorderColor #d2425d
}
person "==Workstation · agent hub\\n<size:10>[Apple]</size>\\n\\nDaily driver. Runs the agent CLI as the hub of the MCP ecosystem,\\noffline speech-to-text and local LLMs." <<Workstation>> as Workstation
rectangle "==E2E chat network\\n\\nDecentralised end-to-end encrypted messaging network. No phone number, no global identity. The only inbound channel for the hub agent." <<ChatNetwork>> as ChatNetwork
rectangle "Site A · hub" <<SiteA>> as SiteA {
  skinparam RectangleBorderColor<<SiteA>> #5b7ad6
  skinparam RectangleFontColor<<SiteA>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteA>> dashed

  component "==Infisical\\n\\nSecrets management. Single source of truth for API keys and tokens, injected into local tools at launch." <<SiteAInfisical>> as SiteAInfisical
  rectangle "==Caddy\\n\\nReverse proxy and MCP gateway with automatic certificates. Edge routing for the automation API and remote MCP endpoints." <<SiteACaddy>> as SiteACaddy
  component "==Chat bridge\\n\\nBridges the end-to-end encrypted chat channel to the hub agent. Loopback-only API, hardened container." <<SiteAChatBridge>> as SiteAChatBridge
  component "==n8n\\n\\nWorkflow orchestrator, the ETL backbone: ingest, AI scoring, dedup, KB upload, digests, backups, mail processing." <<SiteAN8n>> as SiteAN8n
  component "==Agent harness\\n<size:10>[Nodejs]</size>\\n\\nLong-running agent on the hub: daily digests to the tracker, shared-memory producer, MCP clients." <<SiteADsh>> as SiteADsh
}
rectangle "Site B · satellite" <<SiteB>> as SiteB {
  skinparam RectangleBorderColor<<SiteB>> #5b7ad6
  skinparam RectangleFontColor<<SiteB>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteB>> dashed

  rectangle "==Home automation MCP\\n\\nMCP endpoint exposing the automation instance to agents, reachable through the gateway." <<SiteBHaMcp>> as SiteBHaMcp
}
rectangle "==AI APIs\\n<size:10>[Openai]</size>\\n\\nExternal language and speech APIs: primary model family (scoring, drafts, synthesis), classification, speech-to-text. Non-sensitive content only." <<AiApis>> as AiApis
rectangle "==Cloud utilities\\n<size:10>[Google Drive]</size>\\n\\nOff-site destination for workflow backups and delivery channel for pipeline and uptime reports." <<CloudUtils>> as CloudUtils

Workstation .[#8D8D8D,thickness=2].> SiteAInfisical : <color:#8D8D8D>secrets at launch
Workstation .[#8D8D8D,thickness=2].> SiteACaddy : <color:#8D8D8D>MCP via gateway
SiteACaddy .[#8D8D8D,thickness=2].> SiteAN8n : <color:#8D8D8D>automation API route
Workstation .[#8D8D8D,thickness=2].> SiteAN8n : <color:#8D8D8D>voice memo webhook
SiteACaddy .[#8D8D8D,thickness=2].> SiteBHaMcp : <color:#8D8D8D>MCP proxy
ChatNetwork .[#8D8D8D,thickness=2].> SiteAChatBridge : <color:#8D8D8D>E2E transport
SiteAChatBridge .[#8D8D8D,thickness=2].> SiteADsh : <color:#8D8D8D>loopback agent API
SiteAN8n .[#8D8D8D,thickness=2].> AiApis : <color:#8D8D8D>scoring & synthesis
SiteAN8n .[#8D8D8D,thickness=2].> CloudUtils : <color:#8D8D8D>backups & reports
@enduml
`;case`flow-ingest`:return`@startuml
title "Flow · content to knowledge base"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Workstation>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<ContentSources>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam component<<SiteAN8n>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<AiApis>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam component<<SiteAOpenWebUI>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam database<<SiteAQdrant>>{
  BackgroundColor #9d6bff
  FontColor #ffffff
  BorderColor #7346d5
}
skinparam rectangle<<SiteB>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<WorkerNode>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
person "==Workstation · agent hub\\n<size:10>[Apple]</size>\\n\\nDaily driver. Runs the agent CLI as the hub of the MCP ecosystem,\\noffline speech-to-text and local LLMs." <<Workstation>> as Workstation
rectangle "==Content sources\\n<size:10>[Youtube]</size>\\n\\nRSS feeds, video playlists, e-mail, voice memos, saved articles, NAS folders: raw material for ingestion pipelines." <<ContentSources>> as ContentSources
component "==n8n\\n\\nWorkflow orchestrator, the ETL backbone: ingest, AI scoring, dedup, KB upload, digests, backups, mail processing." <<SiteAN8n>> as SiteAN8n
rectangle "==AI APIs\\n<size:10>[Openai]</size>\\n\\nExternal language and speech APIs: primary model family (scoring, drafts, synthesis), classification, speech-to-text. Non-sensitive content only." <<AiApis>> as AiApis
component "==OpenWebUI\\n\\nKnowledge base hub and RAG front-end: OpenAI-compatible API, ~30 thematic collections, chat interface for local agents." <<SiteAOpenWebUI>> as SiteAOpenWebUI
database "==Qdrant\\n<size:10>[Qdrant]</size>\\n\\nVector database: embeddings for semantic search, plus lock/dedup store for ingestion pipelines." <<SiteAQdrant>> as SiteAQdrant
rectangle "==Site B · satellite\\n\\nSecondary site: home automation and independent DNS. Keeps working when the hub is down." <<SiteB>> as SiteB
rectangle "==Agent worker · always-on node\\n\\nDedicated headless node running a remote agent endpoint: delegated tasks, phone access, shared-memory producer, encrypted file inbox." <<WorkerNode>> as WorkerNode

Workstation .[#8D8D8D,thickness=2].> SiteAN8n : <color:#8D8D8D>voice memo webhook
ContentSources .[#8D8D8D,thickness=2].> SiteAN8n : <color:#8D8D8D>feeds, mail, articles
SiteAN8n .[#8D8D8D,thickness=2].> AiApis : <color:#8D8D8D>score & synthesise
SiteAN8n .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>upload to KB
SiteAOpenWebUI .[#8D8D8D,thickness=2].> SiteAQdrant : <color:#8D8D8D>embed & index
@enduml
`;case`flow-memory`:return`@startuml
title "Flow · shared agent memory"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<WorkerNode>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam component<<SiteADsh>>{
  BackgroundColor #ffd166
  FontColor #503700
  BorderColor #d4aa40
}
skinparam component<<SiteAOpenWebUI>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam person<<Mobile>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<ChatNetwork>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
skinparam component<<SiteAChatBridge>>{
  BackgroundColor #ffd166
  FontColor #503700
  BorderColor #d4aa40
}
skinparam database<<SiteAQdrant>>{
  BackgroundColor #9d6bff
  FontColor #ffffff
  BorderColor #7346d5
}
skinparam rectangle<<SiteB>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
rectangle "==Agent worker · always-on node\\n\\nDedicated headless node running a remote agent endpoint: delegated tasks, phone access, shared-memory producer, encrypted file inbox." <<WorkerNode>> as WorkerNode
component "==Agent harness\\n<size:10>[Nodejs]</size>\\n\\nLong-running agent on the hub: daily digests to the tracker, shared-memory producer, MCP clients." <<SiteADsh>> as SiteADsh
component "==OpenWebUI\\n\\nKnowledge base hub and RAG front-end: OpenAI-compatible API, ~30 thematic collections, chat interface for local agents." <<SiteAOpenWebUI>> as SiteAOpenWebUI
person "==Mobile devices" <<Mobile>> as Mobile
rectangle "==E2E chat network\\n\\nDecentralised end-to-end encrypted messaging network. No phone number, no global identity. The only inbound channel for the hub agent." <<ChatNetwork>> as ChatNetwork
component "==Chat bridge\\n\\nBridges the end-to-end encrypted chat channel to the hub agent. Loopback-only API, hardened container." <<SiteAChatBridge>> as SiteAChatBridge
database "==Qdrant\\n<size:10>[Qdrant]</size>\\n\\nVector database: embeddings for semantic search, plus lock/dedup store for ingestion pipelines." <<SiteAQdrant>> as SiteAQdrant
rectangle "==Site B · satellite\\n\\nSecondary site: home automation and independent DNS. Keeps working when the hub is down." <<SiteB>> as SiteB

WorkerNode .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>push own memory
SiteADsh .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>push own memory
Mobile .[#8D8D8D,thickness=2].> ChatNetwork : <color:#8D8D8D>ask from phone
ChatNetwork .[#8D8D8D,thickness=2].> SiteAChatBridge : <color:#8D8D8D>relay
SiteAChatBridge .[#8D8D8D,thickness=2].> SiteADsh : <color:#8D8D8D>agent turn
SiteADsh .[#8D8D8D,thickness=2].> SiteAOpenWebUI : <color:#8D8D8D>recall
SiteAOpenWebUI .[#8D8D8D,thickness=2].> SiteAQdrant : <color:#8D8D8D>vector search
@enduml
`;case`flow-uptime`:return`@startuml
title "Flow · monitoring and alerting"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<WorkerNode>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam component<<SiteAPrometheus>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAPiholeA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteBPiholeB>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAGrafana>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAKumaA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam component<<SiteAOpenWebUI>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<CloudUtils>>{
  BackgroundColor #8a93a8
  FontColor #ffffff
  BorderColor #656e82
}
rectangle "==Agent worker · always-on node\\n\\nDedicated headless node running a remote agent endpoint: delegated tasks, phone access, shared-memory producer, encrypted file inbox." <<WorkerNode>> as WorkerNode
component "==Prometheus\\n<size:10>[Prometheus]</size>\\n\\nMetrics TSDB. Scrapes exporters every 60s, including the satellite site and the agent node over the L3 tunnel. 30-day retention, alert rules." <<SiteAPrometheus>> as SiteAPrometheus
component "==Pi-hole (A)\\n\\nNetwork-wide ad and telemetry blocking at DNS level, covering devices that cannot run blockers." <<SiteAPiholeA>> as SiteAPiholeA
rectangle "Site B · satellite" <<SiteB>> as SiteB {
  skinparam RectangleBorderColor<<SiteB>> #5b7ad6
  skinparam RectangleFontColor<<SiteB>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteB>> dashed

  component "==Pi-hole (B)\\n\\nSite B ad-blocking DNS. Same role, fully independent resolver chain." <<SiteBPiholeB>> as SiteBPiholeB
}
component "==Grafana\\n<size:10>[Grafana]</size>\\n\\nDashboards: system, containers, DNS, databases, workflow metrics, knowledge-base stats." <<SiteAGrafana>> as SiteAGrafana
component "==Uptime Kuma (A)\\n\\nUptime monitor, instance 1 of the failover pair. Watches tailnet services every 60s." <<SiteAKumaA>> as SiteAKumaA
component "==OpenWebUI\\n\\nKnowledge base hub and RAG front-end: OpenAI-compatible API, ~30 thematic collections, chat interface for local agents." <<SiteAOpenWebUI>> as SiteAOpenWebUI
rectangle "==Cloud utilities\\n<size:10>[Google Drive]</size>\\n\\nOff-site destination for workflow backups and delivery channel for pipeline and uptime reports." <<CloudUtils>> as CloudUtils

SiteAPrometheus .[#b45309,thickness=2].> SiteAPiholeA : <color:#b45309>scrape every 60s\\n<size:8>[<color:#b45309>metrics pull]</size>
SiteAPrometheus .[#b45309,thickness=2].> SiteBPiholeB : <color:#b45309>scrape over L3\\n<size:8>[<color:#b45309>metrics pull]</size>
SiteAPrometheus .[#b45309,thickness=2].> WorkerNode : <color:#b45309>scrape over tailnet\\n<size:8>[<color:#b45309>node exporter]</size>
SiteAPrometheus .[#8D8D8D,thickness=2].> SiteAGrafana : <color:#8D8D8D>dashboards
SiteAKumaA .[#b45309,thickness=2].> SiteAOpenWebUI : <color:#b45309>HTTP probe
SiteAKumaA .[#8D8D8D,thickness=2].> CloudUtils : <color:#8D8D8D>alert on down
@enduml
`;case`flow-access`:return`@startuml
title "Flow · remote access"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Mobile>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
skinparam rectangle<<Tailnet>>{
  BackgroundColor #2fe6a8
  FontColor #004214
  BorderColor #00bd82
}
skinparam component<<SiteAPiholeA>>{
  BackgroundColor #4f8cff
  FontColor #ffffff
  BorderColor #0068d5
}
skinparam rectangle<<WorkerNode>>{
  BackgroundColor #5b7ad6
  FontColor #ffffff
  BorderColor #2c57ae
}
skinparam rectangle<<SiteACaddy>>{
  BackgroundColor #ff6b81
  FontColor #ffffff
  BorderColor #d2425d
}
skinparam rectangle<<SiteBHaMcp>>{
  BackgroundColor #ff6b81
  FontColor #ffffff
  BorderColor #d2425d
}
skinparam person<<User>>{
  BackgroundColor #e8eefc
  FontColor #484d59
  BorderColor #c0c5d3
}
person "==Mobile devices" <<Mobile>> as Mobile
rectangle "==Tailscale mesh\\n\\nMesh VPN (WireGuard-based). Identity instead of addresses:\\neach node gets an overlay identity, NAT traversal is automatic,\\ntraffic is end-to-end encrypted between nodes." <<Tailnet>> as Tailnet
rectangle "Site A · hub" <<SiteA>> as SiteA {
  skinparam RectangleBorderColor<<SiteA>> #5b7ad6
  skinparam RectangleFontColor<<SiteA>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteA>> dashed

  component "==Pi-hole (A)\\n\\nNetwork-wide ad and telemetry blocking at DNS level, covering devices that cannot run blockers." <<SiteAPiholeA>> as SiteAPiholeA
  rectangle "==Caddy\\n\\nReverse proxy and MCP gateway with automatic certificates. Edge routing for the automation API and remote MCP endpoints." <<SiteACaddy>> as SiteACaddy
}
rectangle "Site B · satellite" <<SiteB>> as SiteB {
  skinparam RectangleBorderColor<<SiteB>> #5b7ad6
  skinparam RectangleFontColor<<SiteB>> #5b7ad6
  skinparam RectangleBorderStyle<<SiteB>> dashed

  rectangle "==Home automation MCP\\n\\nMCP endpoint exposing the automation instance to agents, reachable through the gateway." <<SiteBHaMcp>> as SiteBHaMcp
}
rectangle "==Agent worker · always-on node\\n\\nDedicated headless node running a remote agent endpoint: delegated tasks, phone access, shared-memory producer, encrypted file inbox." <<WorkerNode>> as WorkerNode
person "==User" <<User>> as User

Mobile .[#8D8D8D,thickness=2].> Tailnet : <color:#8D8D8D>join overlay (always on)
Tailnet .[#8D8D8D,thickness=2].> SiteA : <color:#8D8D8D>reach services
Tailnet .[#8D8D8D,thickness=2].> SiteB : <color:#8D8D8D>reach services
Mobile .[#8D8D8D,thickness=2].> SiteAPiholeA : <color:#8D8D8D>DNS through overlay
Mobile .[#8D8D8D,thickness=2].> WorkerNode : <color:#8D8D8D>drop a file
SiteACaddy .[#8D8D8D,thickness=2].> SiteBHaMcp : <color:#8D8D8D>MCP proxy
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};