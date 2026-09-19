var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=0.973,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=0.973,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    user [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<FONT POINT-SIZE="20">User</FONT>>,
        likec4_id=user,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workstation [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Workstation · agent hub</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#595e6a">Apple</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#595e6a">Daily driver. Runs the agent CLI as<BR/>the hub of the MCP ecosystem,<BR/>offline speech-to-text and local<BR/>LLMs.</FONT></TD></TR></TABLE>>,
        likec4_id=workstation,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    user -> workstation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">drives</FONT></TD></TR></TABLE>>,
        likec4_id="2pj24g",
        minlen=1,
        style=dashed];
    mobile [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Mobile devices</FONT>>,
        likec4_id=mobile,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tailnet [color="#00bd82",
        fillcolor="#2fe6a8",
        fontcolor="#004214",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale mesh</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#005424">Mesh VPN (WireGuard-based). Identity instead<BR/>of addresses:<BR/>each node gets an overlay identity, NAT<BR/>traversal is automatic,<BR/>traffic is end-to-end encrypted between</FONT></TD></TR></TABLE>>,
        likec4_id=tailnet,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> tailnet [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">joins (always on)</FONT></TD></TR></TABLE>>,
        likec4_id="1p1ddj9",
        style=dashed];
    sitea [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site A · hub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Primary host. Runs the application core, data<BR/>platform, edge and observability.</FONT></TD></TR></TABLE>>,
        likec4_id=siteA,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">DNS (tailnet-wide)</FONT></TD></TR></TABLE>>,
        likec4_id="1hkbs0",
        style=dashed];
    workernode [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent worker · always-on node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Dedicated headless node running a remote<BR/>agent endpoint: delegated tasks, phone<BR/>access, shared-memory producer, encrypted<BR/>file inbox.</FONT></TD></TR></TABLE>>,
        likec4_id=workerNode,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> workernode [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">file drop</FONT></TD></TR></TABLE>>,
        likec4_id="16t2wd8",
        style=dashed];
    mdnsrelay [color="#00bd82",
        fillcolor="#2fe6a8",
        fontcolor="#004214",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">mDNS relay</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#005424">Userspace relay that bridges service<BR/>discovery between the two LANs:<BR/>multicast (Bonjour) is forwarded as unicast<BR/>over the overlay.</FONT></TD></TR></TABLE>>,
        likec4_id=mdnsRelay,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mdnsrelay -> tailnet [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">transport</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ unicast over overlay ]</FONT></TD></TR></TABLE>>,
        likec4_id="57cz9u",
        style=dashed];
    contentsources [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Content sources</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Youtube</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">RSS feeds, video playlists, e-mail,<BR/>voice memos, saved articles, NAS<BR/>folders: raw material for ingestion<BR/>pipelines.</FONT></TD></TR></TABLE>>,
        likec4_id=contentSources,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    contentsources -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">ingest</FONT></TD></TR></TABLE>>,
        likec4_id="1o005yf",
        minlen=1,
        style=dashed];
    chatnetwork [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">E2E chat network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Decentralised end-to-end encrypted messaging<BR/>network. No phone number, no global identity.<BR/>The only inbound channel for the hub agent.</FONT></TD></TR></TABLE>>,
        likec4_id=chatNetwork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    chatnetwork -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">E2E transport</FONT></TD></TR></TABLE>>,
        likec4_id=t5jtog,
        minlen=1,
        style=dashed];
    workstation -> tailnet [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">joins</FONT></TD></TR></TABLE>>,
        likec4_id="1thucce",
        style=dashed];
    workstation -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1cas26z",
        style=dashed];
    workstation -> workernode [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delegated tasks</FONT></TD></TR></TABLE>>,
        likec4_id="19bfsef",
        style=dashed];
    tailnet -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes services</FONT></TD></TR></TABLE>>,
        likec4_id=arvib3,
        style=dashed];
    siteb [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site B · satellite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Secondary site: home automation and<BR/>independent DNS. Keeps working when the hub<BR/>is down.</FONT></TD></TR></TABLE>>,
        likec4_id=siteB,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tailnet -> siteb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes services</FONT></TD></TR></TABLE>>,
        likec4_id=arvib0,
        style=dashed];
    tailnet -> workernode [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes services</FONT></TD></TR></TABLE>>,
        likec4_id="12n72yb",
        style=dashed];
    sitea -> mdnsrelay [arrowhead=normal,
        arrowtail=normal,
        dir=both,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Bonjour discovery</FONT></TD></TR></TABLE>>,
        likec4_id="6h31kn",
        style=dashed];
    sitea -> siteb [arrowhead=normal,
        arrowtail=normal,
        color="#b45309",
        dir=both,
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">L3 site-to-site</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ WireGuard tunnel between the sites ]</FONT></TD></TR></TABLE>>,
        likec4_id="15rzg5l",
        style=dotted];
    sitea -> workernode [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ node exporter ]</FONT></TD></TR></TABLE>>,
        likec4_id="1u2c3zq",
        style=dotted];
    aiapis [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">AI APIs</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Openai</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">External language and speech APIs:<BR/>primary model family (scoring,<BR/>drafts, synthesis), classification,<BR/>speech-to-text. Non-sensitive<BR/>content only.</FONT></TD></TR></TABLE>>,
        likec4_id=aiApis,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    sitea -> aiapis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=exjw1v,
        minlen=1,
        style=dashed];
    cloudutils [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cloud utilities</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Google Drive</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Off-site destination for workflow<BR/>backups and delivery channel for<BR/>pipeline and uptime reports.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudUtils,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    sitea -> cloudutils [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=qve6au,
        minlen=1,
        style=dashed];
    rootdns [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Root / authoritative nameservers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">The end of the recursive resolver chain.</FONT></TD></TR></TABLE>>,
        likec4_id=rootDns,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sitea -> rootdns [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">recursion</FONT></TD></TR></TABLE>>,
        likec4_id=yspq9r,
        style=dashed];
    siteb -> mdnsrelay [arrowhead=normal,
        arrowtail=normal,
        dir=both,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Bonjour discovery</FONT></TD></TR></TABLE>>,
        likec4_id="1x6dapg",
        style=dashed];
    siteb -> sitea [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1s9ueix",
        style=dotted];
    siteb -> rootdns [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">recursion</FONT></TD></TR></TABLE>>,
        likec4_id=ausm4c,
        style=dashed];
    workernode -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="57lu0m",
        style=dashed];
}
`;case`hub`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=hub,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_sitea {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE A · HUB</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteA,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        infisical [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Infisical</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Secrets management. Single source of truth<BR/>for API keys and tokens, injected into local<BR/>tools at launch.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.infisical",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        caddy [color="#d2425d",
            fillcolor="#ff6b81",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Caddy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Reverse proxy and MCP gateway with automatic<BR/>certificates. Edge routing for the automation<BR/>API and remote MCP endpoints.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.caddy",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        chatbridge [color="#d4aa40",
            fillcolor="#ffd166",
            fontcolor="#503700",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat bridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#634700">Bridges the end-to-end encrypted chat channel<BR/>to the hub agent. Loopback-only API, hardened<BR/>container.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.chatBridge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        kumaa [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Uptime Kuma (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Uptime monitor, instance 1 of the failover<BR/>pair. Watches tailnet services every 60s.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.kumaA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        prometheus [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Prometheus</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Prometheus</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Metrics TSDB. Scrapes exporters<BR/>every 60s, including the satellite<BR/>site and the agent node over the L3<BR/>tunnel. 30-day retention, alert<BR/>rules.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.prometheus",
            likec4_level=1,
            margin="0.389,0.223",
            width=4.584];
        homepage [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Homepage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Start page aggregating all services with live<BR/>widgets.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.homepage",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        dsh [color="#d4aa40",
            fillcolor="#ffd166",
            fontcolor="#503700",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Agent harness</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#634700">Nodejs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#634700">Long-running agent on the hub:<BR/>daily digests to the tracker,<BR/>shared-memory producer, MCP<BR/>clients.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.dsh",
            likec4_level=1,
            margin="0.389,0.223",
            width=4.584];
        haa [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home Assistant (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Home automation instance A: entities,<BR/>automations, dashboards.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.haA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        audiobookshelf [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Audiobookshelf</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Self-hosted audiobook and podcast server with<BR/>mobile apps.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.audiobookshelf",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        n8n [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">n8n</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Workflow orchestrator, the ETL backbone:<BR/>ingest, AI scoring, dedup, KB upload,<BR/>digests, backups, mail processing.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.n8n",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        piholea [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Network-wide ad and telemetry blocking at DNS<BR/>level, covering devices that cannot run<BR/>blockers.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.piholeA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        grafana [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Grafana</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Grafana</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Dashboards: system, containers,<BR/>DNS, databases, workflow metrics,<BR/>knowledge-base stats.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.grafana",
            likec4_level=1,
            margin="0.389,0.223",
            width=4.584];
        redmine [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Redmine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Task and project tracker. Single source of<BR/>truth for work items, wiki and time tracking.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.redmine",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        searxng [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SearXNG</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Self-hosted metasearch aggregating public<BR/>engines: no tracking, no API quota. The<BR/>zero-cost web-search layer for agents.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.searxng",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        openwebui [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OpenWebUI</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Knowledge base hub and RAG front-end:<BR/>OpenAI-compatible API, ~30 thematic<BR/>collections, chat interface for local agents.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.openWebUI",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        unbounda [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unbound (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Recursive, validating (DNSSEC) caching<BR/>resolver. Queries authoritative nameservers<BR/>directly.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.unboundA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        postgres [color="#7346d5",
            fillcolor="#9d6bff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">PostgreSQL</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Postgresql</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Relational database for application<BR/>data and analytics.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.postgres",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        qdrant [color="#7346d5",
            fillcolor="#9d6bff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Qdrant</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Qdrant</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Vector database: embeddings for<BR/>semantic search, plus lock/dedup<BR/>store for ingestion pipelines.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.qdrant",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    mobile [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Mobile devices</FONT>>,
        likec4_id=mobile,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> piholea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">DNS (tailnet-wide)</FONT></TD></TR></TABLE>>,
        likec4_id="1dkf69k",
        minlen=1,
        style=dashed];
    workstation [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Workstation · agent hub</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#595e6a">Apple</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#595e6a">Daily driver. Runs the agent CLI as<BR/>the hub of the MCP ecosystem,<BR/>offline speech-to-text and local<BR/>LLMs.</FONT></TD></TR></TABLE>>,
        likec4_id=workstation,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    workstation -> infisical [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">secrets at launch</FONT></TD></TR></TABLE>>,
        likec4_id=tmbl2h,
        minlen=1,
        style=dashed];
    workstation -> caddy [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP via gateway</FONT></TD></TR></TABLE>>,
        likec4_id=ohhwq6,
        style=dashed];
    workstation -> n8n [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">voice memo webhook</FONT></TD></TR></TABLE>>,
        likec4_id="1jzi91p",
        style=dashed];
    workstation -> piholea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">DNS (tailnet-wide)</FONT></TD></TR></TABLE>>,
        likec4_id="1rivbr7",
        style=dashed];
    workstation -> grafana [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP</FONT></TD></TR></TABLE>>,
        likec4_id=t6t3d,
        style=dashed];
    workstation -> redmine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP</FONT></TD></TR></TABLE>>,
        likec4_id=fs9c21,
        style=dashed];
    workstation -> searxng [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">web search</FONT></TD></TR></TABLE>>,
        likec4_id="13mziox",
        style=dashed];
    workstation -> openwebui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">RAG API</FONT></TD></TR></TABLE>>,
        likec4_id=zgpxt9,
        style=dashed];
    siteb [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site B · satellite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Secondary site: home automation and<BR/>independent DNS. Keeps working when the hub<BR/>is down.</FONT></TD></TR></TABLE>>,
        likec4_id=siteB,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    siteb -> openwebui [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1p3pce7",
        style=dotted];
    workernode [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent worker · always-on node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Dedicated headless node running a remote<BR/>agent endpoint: delegated tasks, phone<BR/>access, shared-memory producer, encrypted<BR/>file inbox.</FONT></TD></TR></TABLE>>,
        likec4_id=workerNode,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workernode -> redmine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP</FONT></TD></TR></TABLE>>,
        likec4_id="1jm6p0",
        style=dashed];
    workernode -> openwebui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">memory sync</FONT></TD></TR></TABLE>>,
        likec4_id="110qneo",
        style=dashed];
    contentsources [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Content sources</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Youtube</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">RSS feeds, video playlists, e-mail,<BR/>voice memos, saved articles, NAS<BR/>folders: raw material for ingestion<BR/>pipelines.</FONT></TD></TR></TABLE>>,
        likec4_id=contentSources,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    contentsources -> n8n [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">ingest</FONT></TD></TR></TABLE>>,
        likec4_id="1mq89rl",
        minlen=1,
        style=dashed];
    chatnetwork [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">E2E chat network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Decentralised end-to-end encrypted messaging<BR/>network. No phone number, no global identity.<BR/>The only inbound channel for the hub agent.</FONT></TD></TR></TABLE>>,
        likec4_id=chatNetwork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    chatnetwork -> chatbridge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">E2E transport</FONT></TD></TR></TABLE>>,
        likec4_id=zmajin,
        minlen=1,
        style=dashed];
    caddy -> siteb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP proxy</FONT></TD></TR></TABLE>>,
        likec4_id="10ts9do",
        style=dashed];
    caddy -> n8n [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">automation API route</FONT></TD></TR></TABLE>>,
        likec4_id="1t79gh5",
        style=dashed,
        weight=2];
    chatbridge -> dsh [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">loopback agent API</FONT></TD></TR></TABLE>>,
        likec4_id="54k3ck",
        style=dashed,
        weight=2];
    kumaa -> siteb [arrowhead=normal,
        arrowtail=normal,
        color="#b45309",
        dir=both,
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">failover pair</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ independent instances ]</FONT></TD></TR></TABLE>>,
        likec4_id=mqdilw,
        style=dotted];
    kumaa -> haa [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1n42iwh",
        minlen=1,
        style=dotted,
        weight=2];
    kumaa -> audiobookshelf [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="4equpe",
        minlen=1,
        style=dotted,
        weight=2];
    kumaa -> openwebui [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="168ghoh",
        style=dotted,
        weight=2];
    cloudutils [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cloud utilities</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Google Drive</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Off-site destination for workflow<BR/>backups and delivery channel for<BR/>pipeline and uptime reports.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudUtils,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    kumaa -> cloudutils [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">alerts</FONT></TD></TR></TABLE>>,
        likec4_id="1ttamuz",
        style=dashed];
    prometheus -> siteb [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over L3</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ metrics pull ]</FONT></TD></TR></TABLE>>,
        likec4_id="1y7wz6l",
        style=dotted];
    prometheus -> workernode [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ node exporter ]</FONT></TD></TR></TABLE>>,
        likec4_id="1i0fl0i",
        style=dotted];
    prometheus -> n8n [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[metrics pull]</FONT></TD></TR></TABLE>>,
        likec4_id=rv85zc,
        style=dotted,
        weight=2];
    prometheus -> piholea [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[metrics pull]</FONT></TD></TR></TABLE>>,
        likec4_id="1pu0wsm",
        style=dotted,
        weight=2];
    prometheus -> grafana [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">data source</FONT></TD></TR></TABLE>>,
        likec4_id="1iz6rik",
        style=dashed,
        weight=2];
    prometheus -> unbounda [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[metrics pull]</FONT></TD></TR></TABLE>>,
        likec4_id="17961y0",
        style=dotted,
        weight=2];
    prometheus -> qdrant [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[metrics pull]</FONT></TD></TR></TABLE>>,
        likec4_id="1n6j7m4",
        style=dotted,
        weight=2];
    homepage -> grafana [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">widgets</FONT></TD></TR></TABLE>>,
        likec4_id="1l7e2qy",
        minlen=1,
        style=dashed,
        weight=2];
    dsh -> redmine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">daily digest</FONT></TD></TR></TABLE>>,
        likec4_id="15hs695",
        style=dashed,
        weight=2];
    dsh -> searxng [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">web search</FONT></TD></TR></TABLE>>,
        likec4_id="1tccds1",
        style=dashed,
        weight=2];
    dsh -> openwebui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">shared memory</FONT></TD></TR></TABLE>>,
        likec4_id="12f25xp",
        style=dashed,
        weight=2];
    n8n -> openwebui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">KB upload</FONT></TD></TR></TABLE>>,
        likec4_id="1a2lrze",
        style=dashed,
        weight=2];
    n8n -> cloudutils [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">backups &amp; reports</FONT></TD></TR></TABLE>>,
        likec4_id="1rg8q28",
        style=dashed];
    n8n -> postgres [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">pipeline state</FONT></TD></TR></TABLE>>,
        likec4_id="1nttqmh",
        style=dashed,
        weight=2];
    n8n -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">embeddings &amp; lock</FONT></TD></TR></TABLE>>,
        likec4_id=y171vy,
        style=dashed,
        weight=2];
    aiapis [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">AI APIs</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Openai</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">External language and speech APIs:<BR/>primary model family (scoring,<BR/>drafts, synthesis), classification,<BR/>speech-to-text. Non-sensitive<BR/>content only.</FONT></TD></TR></TABLE>>,
        likec4_id=aiApis,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    n8n -> aiapis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">scoring &amp; synthesis</FONT></TD></TR></TABLE>>,
        likec4_id="19pgb6d",
        style=dashed];
    piholea -> unbounda [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">upstream</FONT></TD></TR></TABLE>>,
        likec4_id=bvm7f8,
        style=dashed,
        weight=2];
    redmine -> postgres [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">data</FONT></TD></TR></TABLE>>,
        likec4_id=r62op9,
        style=dashed,
        weight=2];
    openwebui -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">embeddings</FONT></TD></TR></TABLE>>,
        likec4_id="1op8pda",
        style=dashed,
        weight=2];
    openwebui -> aiapis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">chat &amp; synthesis</FONT></TD></TR></TABLE>>,
        likec4_id="17pd6et",
        style=dashed];
    rootdns [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Root / authoritative nameservers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">The end of the recursive resolver chain.</FONT></TD></TR></TABLE>>,
        likec4_id=rootDns,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    unbounda -> rootdns [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">recursion</FONT></TD></TR></TABLE>>,
        likec4_id="4roq61",
        minlen=1,
        style=dashed];
}
`;case`satellite`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=satellite,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_siteb {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE B · SATELLITE</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteB,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        piholeb [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            group=siteB,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Site B ad-blocking DNS. Same role, fully<BR/>independent resolver chain.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.piholeB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        kumab [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            group=siteB,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Uptime Kuma (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Uptime monitor, instance 2 of the failover<BR/>pair. The watchdog must not die with what it<BR/>watches.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.kumaB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        hamcp [color="#d2425d",
            fillcolor="#ff6b81",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home automation MCP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">MCP endpoint exposing the automation instance<BR/>to agents, reachable through the gateway.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.haMcp",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        unboundb [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            group=siteB,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unbound (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Site B recursive resolver (DNSSEC), mirrors<BR/>the site A chain.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.unboundB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        hab [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            group=siteB,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home Assistant (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Primary automation instance: ~350 entities,<BR/>Zigbee/Thread border router, voice-assistant<BR/>integrations.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.haB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    sitea [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site A · hub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Primary host. Runs the application core, data<BR/>platform, edge and observability.</FONT></TD></TR></TABLE>>,
        likec4_id=siteA,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sitea -> piholeb [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over L3</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ metrics pull ]</FONT></TD></TR></TABLE>>,
        likec4_id=wzhro2,
        style=dotted];
    sitea -> kumab [arrowhead=normal,
        arrowtail=normal,
        dir=both,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">failover pair</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ independent instances ]</FONT></TD></TR></TABLE>>,
        likec4_id="15vhppz",
        style=dashed];
    sitea -> hamcp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP proxy</FONT></TD></TR></TABLE>>,
        likec4_id="15t3f5c",
        minlen=1,
        style=dashed];
    sitea -> unboundb [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over L3</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ metrics pull ]</FONT></TD></TR></TABLE>>,
        likec4_id="157oa3w",
        style=dotted];
    sitea -> hab [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=dzvqq4,
        style=dotted];
    piholeb -> unboundb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">upstream</FONT></TD></TR></TABLE>>,
        likec4_id="1o7ym5w",
        style=dashed,
        weight=2];
    kumab -> sitea [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1wlhf93",
        style=dotted];
    kumab -> hab [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=b9f5o1,
        style=dotted,
        weight=2];
    rootdns [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Root / authoritative nameservers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">The end of the recursive resolver chain.</FONT></TD></TR></TABLE>>,
        likec4_id=rootDns,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    unboundb -> rootdns [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">recursion</FONT></TD></TR></TABLE>>,
        likec4_id="1foreah",
        minlen=1,
        style=dashed];
}
`;case`connectivity`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=connectivity,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    user [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<FONT POINT-SIZE="20">User</FONT>>,
        likec4_id=user,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workstation [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Workstation · agent hub</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#595e6a">Apple</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#595e6a">Daily driver. Runs the agent CLI as<BR/>the hub of the MCP ecosystem,<BR/>offline speech-to-text and local<BR/>LLMs.</FONT></TD></TR></TABLE>>,
        likec4_id=workstation,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    user -> workstation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">drives</FONT></TD></TR></TABLE>>,
        likec4_id="2pj24g",
        minlen=1,
        style=dashed];
    mobile [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Mobile devices</FONT>>,
        likec4_id=mobile,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tailnet [color="#00bd82",
        fillcolor="#2fe6a8",
        fontcolor="#004214",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale mesh</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#005424">Mesh VPN (WireGuard-based). Identity instead<BR/>of addresses:<BR/>each node gets an overlay identity, NAT<BR/>traversal is automatic,<BR/>traffic is end-to-end encrypted between</FONT></TD></TR></TABLE>>,
        likec4_id=tailnet,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> tailnet [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">joins (always on)</FONT></TD></TR></TABLE>>,
        likec4_id="1p1ddj9",
        style=dashed];
    sitea [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site A · hub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Primary host. Runs the application core, data<BR/>platform, edge and observability.</FONT></TD></TR></TABLE>>,
        likec4_id=siteA,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">DNS (tailnet-wide)</FONT></TD></TR></TABLE>>,
        likec4_id="1hkbs0",
        style=dashed];
    workernode [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent worker · always-on node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Dedicated headless node running a remote<BR/>agent endpoint: delegated tasks, phone<BR/>access, shared-memory producer, encrypted<BR/>file inbox.</FONT></TD></TR></TABLE>>,
        likec4_id=workerNode,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> workernode [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">file drop</FONT></TD></TR></TABLE>>,
        likec4_id="16t2wd8",
        style=dashed];
    mdnsrelay [color="#00bd82",
        fillcolor="#2fe6a8",
        fontcolor="#004214",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">mDNS relay</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#005424">Userspace relay that bridges service<BR/>discovery between the two LANs:<BR/>multicast (Bonjour) is forwarded as unicast<BR/>over the overlay.</FONT></TD></TR></TABLE>>,
        likec4_id=mdnsRelay,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mdnsrelay -> tailnet [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">transport</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ unicast over overlay ]</FONT></TD></TR></TABLE>>,
        likec4_id="57cz9u",
        style=dashed];
    workstation -> tailnet [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">joins</FONT></TD></TR></TABLE>>,
        likec4_id="1thucce",
        style=dashed];
    workstation -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1cas26z",
        style=dashed];
    workstation -> workernode [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delegated tasks</FONT></TD></TR></TABLE>>,
        likec4_id="19bfsef",
        style=dashed];
    tailnet -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes services</FONT></TD></TR></TABLE>>,
        likec4_id=arvib3,
        style=dashed];
    siteb [color="#2c57ae",
        fillcolor="#5b7ad6",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site B · satellite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Secondary site: home automation and<BR/>independent DNS. Keeps working when the hub<BR/>is down.</FONT></TD></TR></TABLE>>,
        likec4_id=siteB,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tailnet -> siteb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes services</FONT></TD></TR></TABLE>>,
        likec4_id=arvib0,
        style=dashed];
    tailnet -> workernode [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes services</FONT></TD></TR></TABLE>>,
        likec4_id="12n72yb",
        style=dashed];
    sitea -> mdnsrelay [arrowhead=normal,
        arrowtail=normal,
        dir=both,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Bonjour discovery</FONT></TD></TR></TABLE>>,
        likec4_id="6h31kn",
        style=dashed];
    sitea -> siteb [arrowhead=normal,
        arrowtail=normal,
        color="#b45309",
        dir=both,
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">L3 site-to-site</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ WireGuard tunnel between the sites ]</FONT></TD></TR></TABLE>>,
        likec4_id="15rzg5l",
        style=dotted];
    sitea -> workernode [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ node exporter ]</FONT></TD></TR></TABLE>>,
        likec4_id="1u2c3zq",
        style=dotted];
    siteb -> mdnsrelay [arrowhead=normal,
        arrowtail=normal,
        dir=both,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Bonjour discovery</FONT></TD></TR></TABLE>>,
        likec4_id="1x6dapg",
        style=dashed];
    siteb -> sitea [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1s9ueix",
        style=dotted];
    workernode -> sitea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="57lu0m",
        style=dashed];
}
`;case`data`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=data,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_workernode {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>AGENT WORKER · ALWAYS-ON NODE</B></FONT>>,
            likec4_depth=1,
            likec4_id=workerNode,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        agentapi [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent endpoint</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Remote agent API: delegation from the<BR/>workstation and mobile access.</FONT></TD></TR></TABLE>>,
            likec4_id="workerNode.agentApi",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_sitea {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE A · HUB</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteA,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        n8n [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">n8n</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Workflow orchestrator, the ETL backbone:<BR/>ingest, AI scoring, dedup, KB upload,<BR/>digests, backups, mail processing.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.n8n",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        chatbridge [color="#d4aa40",
            fillcolor="#ffd166",
            fontcolor="#503700",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat bridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#634700">Bridges the end-to-end encrypted chat channel<BR/>to the hub agent. Loopback-only API, hardened<BR/>container.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.chatBridge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        dsh [color="#d4aa40",
            fillcolor="#ffd166",
            fontcolor="#503700",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Agent harness</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#634700">Nodejs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#634700">Long-running agent on the hub:<BR/>daily digests to the tracker,<BR/>shared-memory producer, MCP<BR/>clients.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.dsh",
            likec4_level=1,
            margin="0.389,0.223",
            width=4.584];
        openwebui [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OpenWebUI</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Knowledge base hub and RAG front-end:<BR/>OpenAI-compatible API, ~30 thematic<BR/>collections, chat interface for local agents.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.openWebUI",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        redmine [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Redmine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Task and project tracker. Single source of<BR/>truth for work items, wiki and time tracking.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.redmine",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        searxng [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SearXNG</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Self-hosted metasearch aggregating public<BR/>engines: no tracking, no API quota. The<BR/>zero-cost web-search layer for agents.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.searxng",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        qdrant [color="#7346d5",
            fillcolor="#9d6bff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Qdrant</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Qdrant</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Vector database: embeddings for<BR/>semantic search, plus lock/dedup<BR/>store for ingestion pipelines.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.qdrant",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        postgres [color="#7346d5",
            fillcolor="#9d6bff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">PostgreSQL</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Postgresql</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Relational database for application<BR/>data and analytics.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.postgres",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    contentsources [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Content sources</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Youtube</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">RSS feeds, video playlists, e-mail,<BR/>voice memos, saved articles, NAS<BR/>folders: raw material for ingestion<BR/>pipelines.</FONT></TD></TR></TABLE>>,
        likec4_id=contentSources,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    contentsources -> n8n [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">ingest</FONT></TD></TR></TABLE>>,
        likec4_id="1mq89rl",
        minlen=1,
        style=dashed];
    chatnetwork [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">E2E chat network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Decentralised end-to-end encrypted messaging<BR/>network. No phone number, no global identity.<BR/>The only inbound channel for the hub agent.</FONT></TD></TR></TABLE>>,
        likec4_id=chatNetwork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    chatnetwork -> chatbridge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">E2E transport</FONT></TD></TR></TABLE>>,
        likec4_id=zmajin,
        minlen=1,
        style=dashed];
    agentapi -> openwebui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">memory sync</FONT></TD></TR></TABLE>>,
        likec4_id="1njjmxb",
        style=dashed];
    agentapi -> redmine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP</FONT></TD></TR></TABLE>>,
        likec4_id="135na3v",
        style=dashed];
    cloudutils [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cloud utilities</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Google Drive</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Off-site destination for workflow<BR/>backups and delivery channel for<BR/>pipeline and uptime reports.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudUtils,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    n8n -> cloudutils [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">backups &amp; reports</FONT></TD></TR></TABLE>>,
        likec4_id="1rg8q28",
        minlen=1,
        style=dashed];
    n8n -> openwebui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">KB upload</FONT></TD></TR></TABLE>>,
        likec4_id="1a2lrze",
        style=dashed,
        weight=3];
    aiapis [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">AI APIs</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Openai</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">External language and speech APIs:<BR/>primary model family (scoring,<BR/>drafts, synthesis), classification,<BR/>speech-to-text. Non-sensitive<BR/>content only.</FONT></TD></TR></TABLE>>,
        likec4_id=aiApis,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    n8n -> aiapis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">scoring &amp; synthesis</FONT></TD></TR></TABLE>>,
        likec4_id="19pgb6d",
        style=dashed];
    n8n -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">embeddings &amp; lock</FONT></TD></TR></TABLE>>,
        likec4_id=y171vy,
        style=dashed,
        weight=2];
    n8n -> postgres [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">pipeline state</FONT></TD></TR></TABLE>>,
        likec4_id="1nttqmh",
        style=dashed,
        weight=2];
    chatbridge -> dsh [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">loopback agent API</FONT></TD></TR></TABLE>>,
        likec4_id="54k3ck",
        style=dashed,
        weight=2];
    dsh -> openwebui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">shared memory</FONT></TD></TR></TABLE>>,
        likec4_id="12f25xp",
        style=dashed,
        weight=3];
    dsh -> redmine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">daily digest</FONT></TD></TR></TABLE>>,
        likec4_id="15hs695",
        style=dashed,
        weight=3];
    dsh -> searxng [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">web search</FONT></TD></TR></TABLE>>,
        likec4_id="1tccds1",
        minlen=1,
        style=dashed];
    openwebui -> aiapis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">chat &amp; synthesis</FONT></TD></TR></TABLE>>,
        likec4_id="17pd6et",
        style=dashed,
        weight=2];
    openwebui -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">embeddings</FONT></TD></TR></TABLE>>,
        likec4_id="1op8pda",
        style=dashed,
        weight=3];
    redmine -> postgres [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">data</FONT></TD></TR></TABLE>>,
        likec4_id=r62op9,
        style=dashed,
        weight=3];
}
`;case`observability`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=observability,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_sitea {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE A · HUB</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteA,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        prometheus [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Prometheus</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Prometheus</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Metrics TSDB. Scrapes exporters<BR/>every 60s, including the satellite<BR/>site and the agent node over the L3<BR/>tunnel. 30-day retention, alert<BR/>rules.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.prometheus",
            likec4_level=1,
            margin="0.389,0.223",
            width=4.584];
        homepage [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Homepage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Start page aggregating all services with live<BR/>widgets.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.homepage",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        kumaa [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Uptime Kuma (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Uptime monitor, instance 1 of the failover<BR/>pair. Watches tailnet services every 60s.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.kumaA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        n8n [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">n8n</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Workflow orchestrator, the ETL backbone:<BR/>ingest, AI scoring, dedup, KB upload,<BR/>digests, backups, mail processing.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.n8n",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        piholea [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Network-wide ad and telemetry blocking at DNS<BR/>level, covering devices that cannot run<BR/>blockers.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.piholeA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        grafana [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Grafana</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Grafana</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Dashboards: system, containers,<BR/>DNS, databases, workflow metrics,<BR/>knowledge-base stats.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.grafana",
            likec4_level=1,
            margin="0.389,0.223",
            width=4.584];
        haa [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home Assistant (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Home automation instance A: entities,<BR/>automations, dashboards.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.haA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        qdrant [color="#7346d5",
            fillcolor="#9d6bff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Qdrant</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Qdrant</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Vector database: embeddings for<BR/>semantic search, plus lock/dedup<BR/>store for ingestion pipelines.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.qdrant",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        unbounda [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unbound (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Recursive, validating (DNSSEC) caching<BR/>resolver. Queries authoritative nameservers<BR/>directly.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.unboundA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_workernode {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>AGENT WORKER · ALWAYS-ON NODE</B></FONT>>,
            likec4_depth=1,
            likec4_id=workerNode,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        agentapi [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent endpoint</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Remote agent API: delegation from the<BR/>workstation and mobile access.</FONT></TD></TR></TABLE>>,
            likec4_id="workerNode.agentApi",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_siteb {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE B · SATELLITE</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteB,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        kumab [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Uptime Kuma (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Uptime monitor, instance 2 of the failover<BR/>pair. The watchdog must not die with what it<BR/>watches.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.kumaB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        piholeb [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Site B ad-blocking DNS. Same role, fully<BR/>independent resolver chain.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.piholeB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        unboundb [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unbound (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Site B recursive resolver (DNSSEC), mirrors<BR/>the site A chain.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.unboundB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    prometheus -> n8n [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[metrics pull]</FONT></TD></TR></TABLE>>,
        likec4_id=rv85zc,
        style=dotted,
        weight=3];
    prometheus -> piholea [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[metrics pull]</FONT></TD></TR></TABLE>>,
        likec4_id="1pu0wsm",
        style=dotted,
        weight=3];
    prometheus -> grafana [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">data source</FONT></TD></TR></TABLE>>,
        likec4_id="1iz6rik",
        style=dashed,
        weight=3];
    prometheus -> qdrant [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[metrics pull]</FONT></TD></TR></TABLE>>,
        likec4_id="1n6j7m4",
        style=dotted,
        weight=3];
    prometheus -> unbounda [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[metrics pull]</FONT></TD></TR></TABLE>>,
        likec4_id="17961y0",
        style=dotted,
        weight=3];
    prometheus -> agentapi [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ node exporter ]</FONT></TD></TR></TABLE>>,
        likec4_id="17lp4bx",
        minlen=1,
        style=dotted];
    prometheus -> piholeb [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over L3</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ metrics pull ]</FONT></TD></TR></TABLE>>,
        likec4_id=gwpsqu,
        style=dotted];
    prometheus -> unboundb [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">over L3</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ metrics pull ]</FONT></TD></TR></TABLE>>,
        likec4_id="6ay2ig",
        style=dotted];
    homepage -> grafana [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">widgets</FONT></TD></TR></TABLE>>,
        likec4_id="1l7e2qy",
        minlen=1,
        style=dashed];
    kumaa -> haa [arrowhead=normal,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1n42iwh",
        minlen=1,
        style=dotted,
        weight=3];
    kumaa -> kumab [arrowhead=normal,
        arrowtail=normal,
        dir=both,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">failover pair</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ independent instances ]</FONT></TD></TR></TABLE>>,
        likec4_id="1n8uj2i",
        minlen=1,
        style=dashed];
    n8n -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">embeddings &amp; lock</FONT></TD></TR></TABLE>>,
        likec4_id=y171vy,
        style=dashed];
    piholea -> unbounda [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">upstream</FONT></TD></TR></TABLE>>,
        likec4_id=bvm7f8,
        style=dashed];
    piholeb -> unboundb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">upstream</FONT></TD></TR></TABLE>>,
        likec4_id="1o7ym5w",
        minlen=0,
        style=dashed,
        weight=3];
}
`;case`dns`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=dns,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_siteb {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE B · SATELLITE</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteB,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        piholeb [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Site B ad-blocking DNS. Same role, fully<BR/>independent resolver chain.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.piholeB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        unboundb [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unbound (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Site B recursive resolver (DNSSEC), mirrors<BR/>the site A chain.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.unboundB",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_sitea {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE A · HUB</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteA,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        piholea [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Network-wide ad and telemetry blocking at DNS<BR/>level, covering devices that cannot run<BR/>blockers.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.piholeA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        unbounda [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unbound (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Recursive, validating (DNSSEC) caching<BR/>resolver. Queries authoritative nameservers<BR/>directly.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.unboundA",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    mobile [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Mobile devices</FONT>>,
        likec4_id=mobile,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> piholea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">DNS (tailnet-wide)</FONT></TD></TR></TABLE>>,
        likec4_id="1dkf69k",
        minlen=1,
        style=dashed];
    workstation [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Workstation · agent hub</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#595e6a">Apple</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#595e6a">Daily driver. Runs the agent CLI as<BR/>the hub of the MCP ecosystem,<BR/>offline speech-to-text and local<BR/>LLMs.</FONT></TD></TR></TABLE>>,
        likec4_id=workstation,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    workstation -> piholea [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">DNS (tailnet-wide)</FONT></TD></TR></TABLE>>,
        likec4_id="1rivbr7",
        minlen=1,
        style=dashed];
    piholeb -> unboundb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">upstream</FONT></TD></TR></TABLE>>,
        likec4_id="1o7ym5w",
        minlen=0,
        style=dashed,
        weight=2];
    rootdns [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Root / authoritative nameservers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">The end of the recursive resolver chain.</FONT></TD></TR></TABLE>>,
        likec4_id=rootDns,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    unboundb -> rootdns [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">recursion</FONT></TD></TR></TABLE>>,
        likec4_id="1foreah",
        style=dashed];
    piholea -> unbounda [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">upstream</FONT></TD></TR></TABLE>>,
        likec4_id=bvm7f8,
        minlen=0,
        style=dashed,
        weight=2];
    unbounda -> rootdns [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">recursion</FONT></TD></TR></TABLE>>,
        likec4_id="4roq61",
        style=dashed];
}
`;case`security`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=security,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_sitea {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE A · HUB</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteA,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        infisical [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Infisical</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Secrets management. Single source of truth<BR/>for API keys and tokens, injected into local<BR/>tools at launch.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.infisical",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        caddy [color="#d2425d",
            fillcolor="#ff6b81",
            fontcolor="#ffffff",
            group=siteA,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Caddy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Reverse proxy and MCP gateway with automatic<BR/>certificates. Edge routing for the automation<BR/>API and remote MCP endpoints.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.caddy",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        chatbridge [color="#d4aa40",
            fillcolor="#ffd166",
            fontcolor="#503700",
            group=siteA,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat bridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#634700">Bridges the end-to-end encrypted chat channel<BR/>to the hub agent. Loopback-only API, hardened<BR/>container.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.chatBridge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        n8n [color="#0068d5",
            fillcolor="#4f8cff",
            fontcolor="#ffffff",
            group=siteA,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">n8n</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Workflow orchestrator, the ETL backbone:<BR/>ingest, AI scoring, dedup, KB upload,<BR/>digests, backups, mail processing.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.n8n",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        dsh [color="#d4aa40",
            fillcolor="#ffd166",
            fontcolor="#503700",
            group=siteA,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Agent harness</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#634700">Nodejs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#634700">Long-running agent on the hub:<BR/>daily digests to the tracker,<BR/>shared-memory producer, MCP<BR/>clients.</FONT></TD></TR></TABLE>>,
            likec4_id="siteA.dsh",
            likec4_level=1,
            margin="0.389,0.223",
            width=4.584];
    }
    subgraph cluster_siteb {
        graph [color="#223761",
            fillcolor="#304687",
            label=<<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE B · SATELLITE</B></FONT>>,
            likec4_depth=1,
            likec4_id=siteB,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        hamcp [color="#d2425d",
            fillcolor="#ff6b81",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home automation MCP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">MCP endpoint exposing the automation instance<BR/>to agents, reachable through the gateway.</FONT></TD></TR></TABLE>>,
            likec4_id="siteB.haMcp",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    workstation [color="#c0c5d3",
        fillcolor="#e8eefc",
        fontcolor="#484d59",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Workstation · agent hub</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#595e6a">Apple</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#595e6a">Daily driver. Runs the agent CLI as<BR/>the hub of the MCP ecosystem,<BR/>offline speech-to-text and local<BR/>LLMs.</FONT></TD></TR></TABLE>>,
        likec4_id=workstation,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    workstation -> infisical [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">secrets at launch</FONT></TD></TR></TABLE>>,
        likec4_id=tmbl2h,
        minlen=1,
        style=dashed];
    workstation -> caddy [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP via gateway</FONT></TD></TR></TABLE>>,
        likec4_id=ohhwq6,
        style=dashed,
        weight=2];
    workstation -> n8n [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">voice memo webhook</FONT></TD></TR></TABLE>>,
        likec4_id="1jzi91p",
        style=dashed];
    chatnetwork [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">E2E chat network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Decentralised end-to-end encrypted messaging<BR/>network. No phone number, no global identity.<BR/>The only inbound channel for the hub agent.</FONT></TD></TR></TABLE>>,
        likec4_id=chatNetwork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    chatnetwork -> chatbridge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">E2E transport</FONT></TD></TR></TABLE>>,
        likec4_id=zmajin,
        minlen=1,
        style=dashed];
    caddy -> n8n [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">automation API route</FONT></TD></TR></TABLE>>,
        likec4_id="1t79gh5",
        style=dashed,
        weight=3];
    caddy -> hamcp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">MCP proxy</FONT></TD></TR></TABLE>>,
        likec4_id=cub4hx,
        minlen=1,
        style=dashed];
    chatbridge -> dsh [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">loopback agent API</FONT></TD></TR></TABLE>>,
        likec4_id="54k3ck",
        minlen=1,
        style=dashed,
        weight=2];
    aiapis [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">AI APIs</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Openai</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">External language and speech APIs:<BR/>primary model family (scoring,<BR/>drafts, synthesis), classification,<BR/>speech-to-text. Non-sensitive<BR/>content only.</FONT></TD></TR></TABLE>>,
        likec4_id=aiApis,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    n8n -> aiapis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">scoring &amp; synthesis</FONT></TD></TR></TABLE>>,
        likec4_id="19pgb6d",
        minlen=1,
        style=dashed];
    cloudutils [color="#656e82",
        fillcolor="#8a93a8",
        fontcolor="#ffffff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cloud utilities</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Google Drive</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Off-site destination for workflow<BR/>backups and delivery channel for<BR/>pipeline and uptime reports.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudUtils,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    n8n -> cloudutils [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">backups &amp; reports</FONT></TD></TR></TABLE>>,
        likec4_id="1rg8q28",
        minlen=1,
        style=dashed];
}
`;case`flow-ingest`:return`digraph {
  likec4_viewId = "flow-ingest";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "workstation" [
    likec4_id = "workstation";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Workstation · agent hub</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#595e6a">Apple</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#595e6a">Daily driver. Runs the agent CLI as<BR/>the hub of the MCP ecosystem,<BR/>offline speech-to-text and local<BR/>LLMs.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#e8eefc";
    fontcolor = "#484d59";
    color = "#c0c5d3";
  ];
  "contentsources" [
    likec4_id = "contentSources";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Content sources</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Youtube</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">RSS feeds, video playlists, e-mail,<BR/>voice memos, saved articles, NAS<BR/>folders: raw material for ingestion<BR/>pipelines.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#8a93a8";
    fontcolor = "#ffffff";
    color = "#656e82";
  ];
  "n8n" [
    likec4_id = "siteA.n8n";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">n8n</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Workflow orchestrator, the ETL backbone:<BR/>ingest, AI scoring, dedup, KB upload,<BR/>digests, backups, mail processing.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "aiapis" [
    likec4_id = "aiApis";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">AI APIs</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Openai</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">External language and speech APIs:<BR/>primary model family (scoring,<BR/>drafts, synthesis), classification,<BR/>speech-to-text. Non-sensitive<BR/>content only.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#8a93a8";
    fontcolor = "#ffffff";
    color = "#656e82";
  ];
  "openwebui" [
    likec4_id = "siteA.openWebUI";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OpenWebUI</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Knowledge base hub and RAG front-end:<BR/>OpenAI-compatible API, ~30 thematic<BR/>collections, chat interface for local agents.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "qdrant" [
    likec4_id = "siteA.qdrant";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Qdrant</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Qdrant</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Vector database: embeddings for<BR/>semantic search, plus lock/dedup<BR/>store for ingestion pipelines.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#9d6bff";
    fontcolor = "#ffffff";
    color = "#7346d5";
    penwidth = 2;
    shape = "cylinder";
  ];
  "siteb" [
    likec4_id = "siteB";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site B · satellite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Secondary site: home automation and<BR/>independent DNS. Keeps working when the hub<BR/>is down.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#5b7ad6";
    fontcolor = "#ffffff";
    color = "#2c57ae";
  ];
  "workernode" [
    likec4_id = "workerNode";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent worker · always-on node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Dedicated headless node running a remote<BR/>agent endpoint: delegated tasks, phone<BR/>access, shared-memory producer, encrypted<BR/>file inbox.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#5b7ad6";
    fontcolor = "#ffffff";
    color = "#2c57ae";
  ];
  "workstation" -> "n8n" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">voice memo webhook</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "contentsources" -> "n8n" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">feeds, mail, articles</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "n8n" -> "aiapis" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">score &amp; synthesise</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "n8n" -> "openwebui" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">upload to KB</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "openwebui" -> "qdrant" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">embed &amp; index</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`flow-memory`:return`digraph {
  likec4_viewId = "flow-memory";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "workernode" [
    likec4_id = "workerNode";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent worker · always-on node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Dedicated headless node running a remote<BR/>agent endpoint: delegated tasks, phone<BR/>access, shared-memory producer, encrypted<BR/>file inbox.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#5b7ad6";
    fontcolor = "#ffffff";
    color = "#2c57ae";
  ];
  "dsh" [
    likec4_id = "siteA.dsh";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Agent harness</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#634700">Nodejs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#634700">Long-running agent on the hub:<BR/>daily digests to the tracker,<BR/>shared-memory producer, MCP<BR/>clients.</FONT></TD></TR></TABLE>>;
    margin = "0.389,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#ffd166";
    fontcolor = "#503700";
    color = "#d4aa40";
  ];
  "openwebui" [
    likec4_id = "siteA.openWebUI";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OpenWebUI</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Knowledge base hub and RAG front-end:<BR/>OpenAI-compatible API, ~30 thematic<BR/>collections, chat interface for local agents.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "mobile" [
    likec4_id = "mobile";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Mobile devices</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#e8eefc";
    fontcolor = "#484d59";
    color = "#c0c5d3";
  ];
  "chatnetwork" [
    likec4_id = "chatNetwork";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">E2E chat network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Decentralised end-to-end encrypted messaging<BR/>network. No phone number, no global identity.<BR/>The only inbound channel for the hub agent.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#8a93a8";
    fontcolor = "#ffffff";
    color = "#656e82";
  ];
  "chatbridge" [
    likec4_id = "siteA.chatBridge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat bridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#634700">Bridges the end-to-end encrypted chat channel<BR/>to the hub agent. Loopback-only API, hardened<BR/>container.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#ffd166";
    fontcolor = "#503700";
    color = "#d4aa40";
  ];
  "qdrant" [
    likec4_id = "siteA.qdrant";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Qdrant</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Qdrant</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Vector database: embeddings for<BR/>semantic search, plus lock/dedup<BR/>store for ingestion pipelines.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#9d6bff";
    fontcolor = "#ffffff";
    color = "#7346d5";
    penwidth = 2;
    shape = "cylinder";
  ];
  "siteb" [
    likec4_id = "siteB";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site B · satellite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Secondary site: home automation and<BR/>independent DNS. Keeps working when the hub<BR/>is down.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#5b7ad6";
    fontcolor = "#ffffff";
    color = "#2c57ae";
  ];
  "workernode" -> "openwebui" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">push own memory</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "dsh" -> "openwebui" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">push own memory</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mobile" -> "chatnetwork" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">ask from phone</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "chatnetwork" -> "chatbridge" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">relay</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "dsh" -> "chatbridge" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">agent turn</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "dsh" -> "openwebui" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">recall</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "openwebui" -> "qdrant" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">vector search</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`flow-uptime`:return`digraph {
  likec4_viewId = "flow-uptime";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "workernode" [
    likec4_id = "workerNode";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent worker · always-on node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Dedicated headless node running a remote<BR/>agent endpoint: delegated tasks, phone<BR/>access, shared-memory producer, encrypted<BR/>file inbox.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#5b7ad6";
    fontcolor = "#ffffff";
    color = "#2c57ae";
  ];
  "prometheus" [
    likec4_id = "siteA.prometheus";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Prometheus</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Prometheus</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Metrics TSDB. Scrapes exporters<BR/>every 60s, including the satellite<BR/>site and the agent node over the L3<BR/>tunnel. 30-day retention, alert<BR/>rules.</FONT></TD></TR></TABLE>>;
    margin = "0.389,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "piholea" [
    likec4_id = "siteA.piholeA";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Network-wide ad and telemetry blocking at DNS<BR/>level, covering devices that cannot run<BR/>blockers.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "piholeb" [
    likec4_id = "siteB.piholeB";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (B)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Site B ad-blocking DNS. Same role, fully<BR/>independent resolver chain.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "grafana" [
    likec4_id = "siteA.grafana";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Grafana</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Grafana</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Dashboards: system, containers,<BR/>DNS, databases, workflow metrics,<BR/>knowledge-base stats.</FONT></TD></TR></TABLE>>;
    margin = "0.389,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "kumaa" [
    likec4_id = "siteA.kumaA";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Uptime Kuma (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Uptime monitor, instance 1 of the failover<BR/>pair. Watches tailnet services every 60s.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "openwebui" [
    likec4_id = "siteA.openWebUI";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OpenWebUI</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Knowledge base hub and RAG front-end:<BR/>OpenAI-compatible API, ~30 thematic<BR/>collections, chat interface for local agents.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "cloudutils" [
    likec4_id = "cloudUtils";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cloud utilities</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#ffffff">Google Drive</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#ffffff">Off-site destination for workflow<BR/>backups and delivery channel for<BR/>pipeline and uptime reports.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#8a93a8";
    fontcolor = "#ffffff";
    color = "#656e82";
  ];
  subgraph "cluster_siteb" {
    likec4_id = "siteB";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#304687";
    color = "#223761";
    style = "filled";
    margin = 32;
    label = <<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE B · SATELLITE</B></FONT>>;
    "piholeb";
  }
  "prometheus" -> "piholea" [
    likec4_id = "step-01";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">scrape every 60s<BR/>metrics pull</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "prometheus" -> "piholeb" [
    likec4_id = "step-02";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">scrape over L3<BR/>metrics pull</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "workernode" -> "prometheus" [
    likec4_id = "step-03";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">scrape over tailnet<BR/>node exporter</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "prometheus" -> "grafana" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">dashboards</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "kumaa" -> "openwebui" [
    likec4_id = "step-05";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">HTTP probe</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "kumaa" -> "cloudutils" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">alert on down</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`flow-access`:return`digraph {
  likec4_viewId = "flow-access";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "mobile" [
    likec4_id = "mobile";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Mobile devices</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#e8eefc";
    fontcolor = "#484d59";
    color = "#c0c5d3";
  ];
  "tailnet" [
    likec4_id = "tailnet";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale mesh</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#005424">Mesh VPN (WireGuard-based). Identity instead<BR/>of addresses:<BR/>each node gets an overlay identity, NAT<BR/>traversal is automatic,<BR/>traffic is end-to-end encrypted between</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#2fe6a8";
    fontcolor = "#004214";
    color = "#00bd82";
  ];
  "piholea" [
    likec4_id = "siteA.piholeA";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi-hole (A)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Network-wide ad and telemetry blocking at DNS<BR/>level, covering devices that cannot run<BR/>blockers.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#4f8cff";
    fontcolor = "#ffffff";
    color = "#0068d5";
  ];
  "workernode" [
    likec4_id = "workerNode";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent worker · always-on node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f8ffff">Dedicated headless node running a remote<BR/>agent endpoint: delegated tasks, phone<BR/>access, shared-memory producer, encrypted<BR/>file inbox.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#5b7ad6";
    fontcolor = "#ffffff";
    color = "#2c57ae";
  ];
  "caddy" [
    likec4_id = "siteA.caddy";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Caddy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Reverse proxy and MCP gateway with automatic<BR/>certificates. Edge routing for the automation<BR/>API and remote MCP endpoints.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#ff6b81";
    fontcolor = "#ffffff";
    color = "#d2425d";
  ];
  "hamcp" [
    likec4_id = "siteB.haMcp";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home automation MCP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">MCP endpoint exposing the automation instance<BR/>to agents, reachable through the gateway.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#ff6b81";
    fontcolor = "#ffffff";
    color = "#d2425d";
  ];
  "user" [
    likec4_id = "user";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">User</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#e8eefc";
    fontcolor = "#484d59";
    color = "#c0c5d3";
  ];
  subgraph "cluster_sitea" {
    likec4_id = "siteA";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#304687";
    color = "#223761";
    style = "filled";
    margin = 40;
    label = <<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE A · HUB</B></FONT>>;
    "piholea";
    "caddy";
  }
  subgraph "cluster_siteb" {
    likec4_id = "siteB";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#304687";
    color = "#223761";
    style = "filled";
    margin = 32;
    label = <<FONT POINT-SIZE="11" COLOR="#f8ffffb3"><B>SITE B · SATELLITE</B></FONT>>;
    "hamcp";
  }
  "mobile" -> "tailnet" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">join overlay (always on)</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "tailnet" -> "piholea" [
    likec4_id = "step-02";
    lhead = "cluster_sitea";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">reach services</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "tailnet" -> "hamcp" [
    likec4_id = "step-03";
    lhead = "cluster_siteb";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">reach services</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mobile" -> "piholea" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">DNS through overlay</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mobile" -> "workernode" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">drop a file</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "caddy" -> "hamcp" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">MCP proxy</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3085pt" height="1445pt"
 viewBox="0.00 0.00 3085.00 1445.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1430.1)">
<!-- user -->
<g id="node1" class="node">
<title>user</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="337.67,-1314.13 17.63,-1314.13 17.63,-1134.13 337.67,-1134.13 337.67,-1314.13"/>
<text xml:space="preserve" text-anchor="start" x="156.53" y="-1216.13" font-family="Arial" font-size="20.00" fill="#484d59">User</text>
</g>
<!-- workstation -->
<g id="node2" class="node">
<title>workstation</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="825.38,-1314.13 468.64,-1314.13 468.64,-1134.13 825.38,-1134.13 825.38,-1314.13"/>
<text xml:space="preserve" text-anchor="start" x="516.76" y="-1218.53" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="560.7" y="-1263.93" font-family="Arial" font-size="20.00" fill="#484d59">Workstation · agent hub</text>
<text xml:space="preserve" text-anchor="start" x="803.37" y="-1218.53" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="560.7" y="-1242.93" font-family="Arial" font-size="13.00" fill="#595e6a">Apple</text>
<text xml:space="preserve" text-anchor="start" x="560.7" y="-1221.33" font-family="Arial" font-size="15.00" fill="#595e6a">Daily driver. Runs the agent CLI as</text>
<text xml:space="preserve" text-anchor="start" x="560.7" y="-1203.33" font-family="Arial" font-size="15.00" fill="#595e6a">the hub of the MCP ecosystem,</text>
<text xml:space="preserve" text-anchor="start" x="560.7" y="-1185.33" font-family="Arial" font-size="15.00" fill="#595e6a">offline speech&#45;to&#45;text and local</text>
<text xml:space="preserve" text-anchor="start" x="560.7" y="-1167.33" font-family="Arial" font-size="15.00" fill="#595e6a">LLMs.</text>
</g>
<!-- mobile -->
<g id="node3" class="node">
<title>mobile</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="337.67,-955.13 17.63,-955.13 17.63,-775.13 337.67,-775.13 337.67,-955.13"/>
<text xml:space="preserve" text-anchor="start" x="111.5" y="-857.13" font-family="Arial" font-size="20.00" fill="#484d59">Mobile devices</text>
</g>
<!-- tailnet -->
<g id="node4" class="node">
<title>tailnet</title>
<polygon fill="#2fe6a8" stroke="#00bd82" stroke-width="0" points="1368.54,-1234.13 1014.96,-1234.13 1014.96,-1054.13 1368.54,-1054.13 1368.54,-1234.13"/>
<text xml:space="preserve" text-anchor="start" x="1125.06" y="-1183.13" font-family="Arial" font-size="20.00" fill="#004214">Tailscale mesh</text>
<text xml:space="preserve" text-anchor="start" x="1035.02" y="-1160.13" font-family="Arial" font-size="15.00" fill="#005424">Mesh VPN (WireGuard&#45;based). Identity instead</text>
<text xml:space="preserve" text-anchor="start" x="1146.72" y="-1142.13" font-family="Arial" font-size="15.00" fill="#005424">of addresses:</text>
<text xml:space="preserve" text-anchor="start" x="1058.76" y="-1124.13" font-family="Arial" font-size="15.00" fill="#005424">each node gets an overlay identity, NAT</text>
<text xml:space="preserve" text-anchor="start" x="1118.81" y="-1106.13" font-family="Arial" font-size="15.00" fill="#005424">traversal is automatic,</text>
<text xml:space="preserve" text-anchor="start" x="1062.09" y="-1088.13" font-family="Arial" font-size="15.00" fill="#005424">traffic is end&#45;to&#45;end encrypted between</text>
</g>
<!-- sitea -->
<g id="node5" class="node">
<title>sitea</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="1891.35,-699.13 1551.92,-699.13 1551.92,-519.13 1891.35,-519.13 1891.35,-699.13"/>
<text xml:space="preserve" text-anchor="start" x="1667.15" y="-621.13" font-family="Arial" font-size="20.00" fill="#ffffff">Site A · hub</text>
<text xml:space="preserve" text-anchor="start" x="1571.97" y="-598.13" font-family="Arial" font-size="15.00" fill="#f8ffff">Primary host. Runs the application core, data</text>
<text xml:space="preserve" text-anchor="start" x="1613.24" y="-580.13" font-family="Arial" font-size="15.00" fill="#f8ffff">platform, edge and observability.</text>
</g>
<!-- workernode -->
<g id="node6" class="node">
<title>workernode</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="2523.72,-1260.13 2185.98,-1260.13 2185.98,-1080.13 2523.72,-1080.13 2523.72,-1260.13"/>
<text xml:space="preserve" text-anchor="start" x="2214.78" y="-1200.13" font-family="Arial" font-size="20.00" fill="#ffffff">Agent worker · always&#45;on node</text>
<text xml:space="preserve" text-anchor="start" x="2211.42" y="-1177.13" font-family="Arial" font-size="15.00" fill="#f8ffff">Dedicated headless node running a remote</text>
<text xml:space="preserve" text-anchor="start" x="2223.49" y="-1159.13" font-family="Arial" font-size="15.00" fill="#f8ffff">agent endpoint: delegated tasks, phone</text>
<text xml:space="preserve" text-anchor="start" x="2206.04" y="-1141.13" font-family="Arial" font-size="15.00" fill="#f8ffff">access, shared&#45;memory producer, encrypted</text>
<text xml:space="preserve" text-anchor="start" x="2323.17" y="-1123.13" font-family="Arial" font-size="15.00" fill="#f8ffff">file inbox.</text>
</g>
<!-- mdnsrelay -->
<g id="node7" class="node">
<title>mdnsrelay</title>
<polygon fill="#2fe6a8" stroke="#00bd82" stroke-width="0" points="3051.45,-1013.13 2728.73,-1013.13 2728.73,-833.13 3051.45,-833.13 3051.45,-1013.13"/>
<text xml:space="preserve" text-anchor="start" x="2836.19" y="-953.13" font-family="Arial" font-size="20.00" fill="#004214">mDNS relay</text>
<text xml:space="preserve" text-anchor="start" x="2768.79" y="-930.13" font-family="Arial" font-size="15.00" fill="#005424">Userspace relay that bridges service</text>
<text xml:space="preserve" text-anchor="start" x="2779.2" y="-912.13" font-family="Arial" font-size="15.00" fill="#005424">discovery between the two LANs:</text>
<text xml:space="preserve" text-anchor="start" x="2748.78" y="-894.13" font-family="Arial" font-size="15.00" fill="#005424">multicast (Bonjour) is forwarded as unicast</text>
<text xml:space="preserve" text-anchor="start" x="2834.65" y="-876.13" font-family="Arial" font-size="15.00" fill="#005424">over the overlay.</text>
</g>
<!-- contentsources -->
<g id="node8" class="node">
<title>contentsources</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="353.5,-526.13 1.79,-526.13 1.79,-346.13 353.5,-346.13 353.5,-526.13"/>
<text xml:space="preserve" text-anchor="start" x="49.91" y="-430.53" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-475.93" font-family="Arial" font-size="20.00" fill="#ffffff">Content sources</text>
<text xml:space="preserve" text-anchor="start" x="331.49" y="-430.53" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-454.93" font-family="Arial" font-size="13.00" fill="#ffffff">Youtube</text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-433.33" font-family="Arial" font-size="15.00" fill="#ffffff">RSS feeds, video playlists, e&#45;mail,</text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-415.33" font-family="Arial" font-size="15.00" fill="#ffffff">voice memos, saved articles, NAS</text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-397.33" font-family="Arial" font-size="15.00" fill="#ffffff">folders: raw material for ingestion</text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-379.33" font-family="Arial" font-size="15.00" fill="#ffffff">pipelines.</text>
</g>
<!-- chatnetwork -->
<g id="node9" class="node">
<title>chatnetwork</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="355.3,-276.13 0,-276.13 0,-96.13 355.3,-96.13 355.3,-276.13"/>
<text xml:space="preserve" text-anchor="start" x="99.27" y="-207.13" font-family="Arial" font-size="20.00" fill="#ffffff">E2E chat network</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-184.13" font-family="Arial" font-size="15.00" fill="#ffffff">Decentralised end&#45;to&#45;end encrypted messaging</text>
<text xml:space="preserve" text-anchor="start" x="24.64" y="-166.13" font-family="Arial" font-size="15.00" fill="#ffffff">network. No phone number, no global identity.</text>
<text xml:space="preserve" text-anchor="start" x="30.87" y="-148.13" font-family="Arial" font-size="15.00" fill="#ffffff">The only inbound channel for the hub agent.</text>
</g>
<!-- siteb -->
<g id="node10" class="node">
<title>siteb</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="2534.6,-783.13 2175.1,-783.13 2175.1,-603.13 2534.6,-603.13 2534.6,-783.13"/>
<text xml:space="preserve" text-anchor="start" x="2283.15" y="-714.13" font-family="Arial" font-size="20.00" fill="#ffffff">Site B · satellite</text>
<text xml:space="preserve" text-anchor="start" x="2228.52" y="-691.13" font-family="Arial" font-size="15.00" fill="#f8ffff">Secondary site: home automation and</text>
<text xml:space="preserve" text-anchor="start" x="2195.16" y="-673.13" font-family="Arial" font-size="15.00" fill="#f8ffff">independent DNS. Keeps working when the hub</text>
<text xml:space="preserve" text-anchor="start" x="2327.34" y="-655.13" font-family="Arial" font-size="15.00" fill="#f8ffff">is down.</text>
</g>
<!-- aiapis -->
<g id="node11" class="node">
<title>aiapis</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2538.25,-283.13 2171.45,-283.13 2171.45,-103.13 2538.25,-103.13 2538.25,-283.13"/>
<text xml:space="preserve" text-anchor="start" x="2219.57" y="-187.53" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2263.52" y="-241.93" font-family="Arial" font-size="20.00" fill="#ffffff">AI APIs</text>
<text xml:space="preserve" text-anchor="start" x="2516.24" y="-187.53" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2263.52" y="-220.93" font-family="Arial" font-size="13.00" fill="#ffffff">Openai</text>
<text xml:space="preserve" text-anchor="start" x="2263.52" y="-199.33" font-family="Arial" font-size="15.00" fill="#ffffff">External language and speech APIs:</text>
<text xml:space="preserve" text-anchor="start" x="2263.52" y="-181.33" font-family="Arial" font-size="15.00" fill="#ffffff">primary model family (scoring,</text>
<text xml:space="preserve" text-anchor="start" x="2263.52" y="-163.33" font-family="Arial" font-size="15.00" fill="#ffffff">drafts, synthesis), classification,</text>
<text xml:space="preserve" text-anchor="start" x="2263.52" y="-145.33" font-family="Arial" font-size="15.00" fill="#ffffff">speech&#45;to&#45;text. Non&#45;sensitive</text>
<text xml:space="preserve" text-anchor="start" x="2263.52" y="-127.33" font-family="Arial" font-size="15.00" fill="#ffffff">content only.</text>
</g>
<!-- cloudutils -->
<g id="node12" class="node">
<title>cloudutils</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2526.56,-533.13 2183.13,-533.13 2183.13,-353.13 2526.56,-353.13 2526.56,-533.13"/>
<text xml:space="preserve" text-anchor="start" x="2231.25" y="-437.53" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2275.2" y="-473.93" font-family="Arial" font-size="20.00" fill="#ffffff">Cloud utilities</text>
<text xml:space="preserve" text-anchor="start" x="2504.56" y="-437.53" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2275.2" y="-452.93" font-family="Arial" font-size="13.00" fill="#ffffff">Google Drive</text>
<text xml:space="preserve" text-anchor="start" x="2275.2" y="-431.33" font-family="Arial" font-size="15.00" fill="#ffffff">Off&#45;site destination for workflow</text>
<text xml:space="preserve" text-anchor="start" x="2275.2" y="-413.33" font-family="Arial" font-size="15.00" fill="#ffffff">backups and delivery channel for</text>
<text xml:space="preserve" text-anchor="start" x="2275.2" y="-395.33" font-family="Arial" font-size="15.00" fill="#ffffff">pipeline and uptime reports.</text>
</g>
<!-- rootdns -->
<g id="node13" class="node">
<title>rootdns</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="3054.66,-432.13 2725.52,-432.13 2725.52,-252.13 3054.66,-252.13 3054.66,-432.13"/>
<text xml:space="preserve" text-anchor="start" x="2745.58" y="-345.13" font-family="Arial" font-size="20.00" fill="#ffffff">Root / authoritative nameservers</text>
<text xml:space="preserve" text-anchor="start" x="2758.36" y="-322.13" font-family="Arial" font-size="15.00" fill="#ffffff">The end of the recursive resolver chain.</text>
</g>
<!-- user&#45;&gt;workstation -->
<g id="edge1" class="edge">
<title>user&#45;&gt;workstation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M337.53,-1224.13C376.35,-1224.13 418.26,-1224.13 458.3,-1224.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="458.18,-1226.75 465.68,-1224.13 458.18,-1221.5 458.18,-1226.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="390.3,-1224.13 390.3,-1246.93 433.64,-1246.93 433.64,-1224.13 390.3,-1224.13"/>
<text xml:space="preserve" text-anchor="start" x="393.3" y="-1229.93" font-family="Arial" font-size="14.00" fill="#c9c9c9">drives</text>
</g>
<!-- workstation&#45;&gt;tailnet -->
<g id="edge8" class="edge">
<title>workstation&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M825.35,-1197.99C882.82,-1189.52 946.71,-1180.1 1004.79,-1171.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1005.15,-1174.14 1012.19,-1170.45 1004.39,-1168.94 1005.15,-1174.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="902.77,-1191.29 902.77,-1214.09 937.57,-1214.09 937.57,-1191.29 902.77,-1191.29"/>
<text xml:space="preserve" text-anchor="start" x="905.77" y="-1197.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">joins</text>
</g>
<!-- workstation&#45;&gt;sitea -->
<g id="edge9" class="edge">
<title>workstation&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M769.04,-1134.36C788.75,-1117.59 808.28,-1099.52 825.38,-1081.13 926.16,-972.72 894.46,-893.27 1014.96,-807.33 1099.36,-747.14 1362.14,-683.29 1542.07,-644.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1542.44,-647.41 1549.23,-643.28 1541.35,-642.28 1542.44,-647.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1178.25,-807.33 1178.25,-830.13 1205.25,-830.13 1205.25,-807.33 1178.25,-807.33"/>
<text xml:space="preserve" text-anchor="start" x="1181.25" y="-815.53" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- workstation&#45;&gt;workernode -->
<g id="edge10" class="edge">
<title>workstation&#45;&gt;workernode</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M824.93,-1250.05C885.1,-1257.74 952.83,-1265.16 1014.96,-1269.13 1512.4,-1300.88 1650.36,-1384.41 2136.45,-1274.13 2149.75,-1271.11 2163.19,-1267.18 2176.51,-1262.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2177.14,-1265.17 2183.33,-1260.18 2175.39,-1260.22 2177.14,-1265.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1408.19,-1319.36 1408.19,-1342.16 1512.26,-1342.16 1512.26,-1319.36 1408.19,-1319.36"/>
<text xml:space="preserve" text-anchor="start" x="1411.19" y="-1325.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">delegated tasks</text>
</g>
<!-- mobile&#45;&gt;tailnet -->
<g id="edge2" class="edge">
<title>mobile&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M337.62,-908.95C518.68,-958.86 814.11,-1040.3 1005.45,-1093.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1004.49,-1095.51 1012.42,-1094.97 1005.89,-1090.44 1004.49,-1095.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="591.88,-1041.43 591.88,-1064.23 702.14,-1064.23 702.14,-1041.43 591.88,-1041.43"/>
<text xml:space="preserve" text-anchor="start" x="594.88" y="-1047.23" font-family="Arial" font-size="14.00" fill="#c9c9c9">joins (always on)</text>
</g>
<!-- mobile&#45;&gt;sitea -->
<g id="edge3" class="edge">
<title>mobile&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M337.47,-824.98C355.28,-820.59 373.17,-816.23 390.3,-812.13 667.27,-745.75 733.62,-713.42 1014.96,-669.13 1186.21,-642.16 1230.8,-649.77 1403.54,-635.13 1448.22,-631.34 1496.44,-627.34 1541.48,-623.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1541.66,-626.26 1548.92,-623.03 1541.23,-621.03 1541.66,-626.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="860.38,-695.59 860.38,-718.39 979.96,-718.39 979.96,-695.59 860.38,-695.59"/>
<text xml:space="preserve" text-anchor="start" x="863.38" y="-701.39" font-family="Arial" font-size="14.00" fill="#c9c9c9">DNS (tailnet&#45;wide)</text>
</g>
<!-- mobile&#45;&gt;workernode -->
<g id="edge4" class="edge">
<title>mobile&#45;&gt;workernode</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M337.62,-859.88C590.76,-855.13 1099.49,-860.29 1516.92,-957.13 1708.36,-1001.54 1735.8,-1076.03 1926.35,-1124.13 2006.96,-1144.47 2098.34,-1155.82 2175.87,-1162.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2175.53,-1164.76 2183.21,-1162.73 2175.94,-1159.52 2175.53,-1164.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1163.85,-925.46 1163.85,-948.26 1219.65,-948.26 1219.65,-925.46 1163.85,-925.46"/>
<text xml:space="preserve" text-anchor="start" x="1166.85" y="-931.26" font-family="Arial" font-size="14.00" fill="#c9c9c9">file drop</text>
</g>
<!-- tailnet&#45;&gt;sitea -->
<g id="edge11" class="edge">
<title>tailnet&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1281.4,-1054.28C1376.52,-957.88 1527.07,-805.3 1624.85,-706.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1626.57,-708.2 1629.97,-701.01 1622.83,-704.51 1626.57,-708.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1403.54,-924.55 1403.54,-947.35 1516.92,-947.35 1516.92,-924.55 1403.54,-924.55"/>
<text xml:space="preserve" text-anchor="start" x="1406.54" y="-930.35" font-family="Arial" font-size="14.00" fill="#c9c9c9">exposes services</text>
</g>
<!-- tailnet&#45;&gt;workernode -->
<g id="edge13" class="edge">
<title>tailnet&#45;&gt;workernode</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1368.25,-1176.41C1557.95,-1206.91 1869.05,-1244.11 2136.45,-1216.13 2149.37,-1214.77 2162.65,-1212.98 2175.97,-1210.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2176.2,-1213.51 2183.18,-1209.72 2175.36,-1208.33 2176.2,-1213.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1664.94,-1225.45 1664.94,-1248.25 1778.32,-1248.25 1778.32,-1225.45 1664.94,-1225.45"/>
<text xml:space="preserve" text-anchor="start" x="1667.94" y="-1231.25" font-family="Arial" font-size="14.00" fill="#c9c9c9">exposes services</text>
</g>
<!-- tailnet&#45;&gt;siteb -->
<g id="edge12" class="edge">
<title>tailnet&#45;&gt;siteb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1368.41,-1152.05C1610.82,-1158.96 2030.09,-1155.13 2136.45,-1053.13 2218.07,-974.86 2108.81,-895.27 2171.45,-801.13 2173.86,-797.51 2176.44,-793.99 2179.15,-790.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2180.95,-792.53 2183.8,-785.11 2176.94,-789.13 2180.95,-792.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1664.94,-1153.98 1664.94,-1176.78 1778.32,-1176.78 1778.32,-1153.98 1664.94,-1153.98"/>
<text xml:space="preserve" text-anchor="start" x="1667.94" y="-1159.78" font-family="Arial" font-size="14.00" fill="#c9c9c9">exposes services</text>
</g>
<!-- sitea&#45;&gt;workernode -->
<g id="edge16" class="edge">
<title>sitea&#45;&gt;workernode</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1786.01,-698.83C1818.94,-746.92 1858.97,-807.74 1891.35,-864.13 1908.87,-894.64 1902.03,-909.7 1926.35,-935.13 1964.91,-975.45 2077.03,-1036.52 2176.77,-1086.3"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2175.47,-1088.59 2183.36,-1089.58 2177.81,-1083.89 2175.47,-1088.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1984.71,-1064.01 1984.71,-1107.21 2078.09,-1107.21 2078.09,-1064.01 1984.71,-1064.01"/>
<text xml:space="preserve" text-anchor="start" x="1987.71" y="-1090.21" font-family="Arial" font-size="14.00" fill="#ffe0c2">over tailnet</text>
<text xml:space="preserve" text-anchor="start" x="1987.71" y="-1069.41" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ node exporter ]</text>
</g>
<!-- sitea&#45;&gt;mdnsrelay -->
<g id="edge14" class="edge">
<title>sitea&#45;&gt;mdnsrelay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1896.51,-703.69C1906.55,-708.68 1916.55,-713.52 1926.35,-718.13 2032.83,-768.17 2057.95,-787.16 2171.45,-818.13 2354.88,-868.17 2571.6,-895.71 2718.52,-909.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1897.87,-701.44 1889.99,-700.43 1895.52,-706.13 1897.87,-701.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2718.25,-912.49 2725.96,-910.59 2718.75,-907.26 2718.25,-912.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2296.21,-888.99 2296.21,-911.79 2413.49,-911.79 2413.49,-888.99 2296.21,-888.99"/>
<text xml:space="preserve" text-anchor="start" x="2299.21" y="-894.79" font-family="Arial" font-size="14.00" fill="#c9c9c9">Bonjour discovery</text>
</g>
<!-- sitea&#45;&gt;siteb -->
<g id="edge15" class="edge">
<title>sitea&#45;&gt;siteb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1901.4,-585.52C1974.92,-580.54 2060.48,-580.87 2136.45,-596.93 2145.97,-598.94 2155.57,-601.39 2165.17,-604.2"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1901.42,-582.89 1894.13,-586.04 1901.8,-588.12 1901.42,-582.89"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2164.33,-606.68 2172.27,-606.36 2165.86,-601.66 2164.33,-606.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1926.35,-596.93 1926.35,-640.13 2136.45,-640.13 2136.45,-596.93 1926.35,-596.93"/>
<text xml:space="preserve" text-anchor="start" x="1929.35" y="-623.13" font-family="Arial" font-size="14.00" fill="#ffe0c2">L3 site&#45;to&#45;site</text>
<text xml:space="preserve" text-anchor="start" x="1929.35" y="-602.33" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ WireGuard tunnel between the sites ]</text>
</g>
<!-- sitea&#45;&gt;aiapis -->
<g id="edge17" class="edge">
<title>sitea&#45;&gt;aiapis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1832.89,-519.28C1862.69,-496.08 1895.3,-471.65 1926.35,-450.33 2009.53,-393.19 2105.54,-334.79 2185.47,-288.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2186.37,-290.62 2191.53,-284.58 2183.73,-286.09 2186.37,-290.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2017.9,-450.33 2017.9,-473.13 2044.9,-473.13 2044.9,-450.33 2017.9,-450.33"/>
<text xml:space="preserve" text-anchor="start" x="2020.9" y="-458.53" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- sitea&#45;&gt;cloudutils -->
<g id="edge18" class="edge">
<title>sitea&#45;&gt;cloudutils</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1891.28,-553.48C1903.11,-549.93 1914.89,-546.51 1926.35,-543.33 2006.74,-520.96 2096.54,-499.41 2173.01,-482.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2173.54,-484.62 2180.27,-480.41 2172.38,-479.5 2173.54,-484.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2017.9,-543.33 2017.9,-566.13 2044.9,-566.13 2044.9,-543.33 2017.9,-543.33"/>
<text xml:space="preserve" text-anchor="start" x="2020.9" y="-551.53" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- sitea&#45;&gt;rootdns -->
<g id="edge19" class="edge">
<title>sitea&#45;&gt;rootdns</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1760.21,-519.16C1822.44,-384.12 1961.25,-135.28 2171.45,-45.33 2321.33,18.81 2385.17,10.74 2538.25,-45.33 2646.49,-84.97 2744.31,-174.41 2808.99,-244.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2806.9,-246.41 2813.89,-250.18 2810.78,-242.87 2806.9,-246.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2323.06,-45.33 2323.06,-68.13 2386.64,-68.13 2386.64,-45.33 2323.06,-45.33"/>
<text xml:space="preserve" text-anchor="start" x="2326.06" y="-51.13" font-family="Arial" font-size="14.00" fill="#c9c9c9">recursion</text>
</g>
<!-- workernode&#45;&gt;sitea -->
<g id="edge23" class="edge">
<title>workernode&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2266.74,-1080.31C2234.87,-1045.21 2199.73,-1003.7 2171.45,-963.13 2152.73,-936.27 2161.91,-918.9 2136.45,-898.33 2060.79,-837.21 2008.62,-889 1926.35,-837.13 1873.29,-803.68 1825.82,-752.54 1790.07,-707.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1792.3,-705.75 1785.62,-701.44 1788.15,-708.97 1792.3,-705.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2017.9,-898.33 2017.9,-921.13 2044.9,-921.13 2044.9,-898.33 2017.9,-898.33"/>
<text xml:space="preserve" text-anchor="start" x="2020.9" y="-906.53" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- mdnsrelay&#45;&gt;tailnet -->
<g id="edge5" class="edge">
<title>mdnsrelay&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2835.88,-1012.88C2776.37,-1103.49 2670.7,-1237.98 2538.25,-1295.13 2135.56,-1468.87 1988.25,-1309.38 1551.92,-1265.13 1485.52,-1258.39 1467.4,-1261.5 1403.54,-1242.13 1395.12,-1239.57 1386.61,-1236.74 1378.08,-1233.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1379.23,-1231.33 1371.29,-1231.23 1377.43,-1236.26 1379.23,-1231.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1968.37,-1371.86 1968.37,-1415.06 2094.43,-1415.06 2094.43,-1371.86 1968.37,-1371.86"/>
<text xml:space="preserve" text-anchor="start" x="1971.37" y="-1398.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">transport</text>
<text xml:space="preserve" text-anchor="start" x="1971.37" y="-1377.26" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ unicast over overlay ]</text>
</g>
<!-- contentsources&#45;&gt;sitea -->
<g id="edge6" class="edge">
<title>contentsources&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M353.42,-427.82C612,-419.97 1109.79,-421.93 1516.92,-525.13 1525.25,-527.24 1533.68,-529.63 1542.14,-532.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1541.25,-534.7 1549.19,-534.45 1542.83,-529.69 1541.25,-534.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="898.49,-441.31 898.49,-464.11 941.85,-464.11 941.85,-441.31 898.49,-441.31"/>
<text xml:space="preserve" text-anchor="start" x="901.49" y="-447.11" font-family="Arial" font-size="14.00" fill="#c9c9c9">ingest</text>
</g>
<!-- chatnetwork&#45;&gt;sitea -->
<g id="edge7" class="edge">
<title>chatnetwork&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.24,-213.8C589.32,-252.39 1014.09,-329.03 1368.54,-429.13 1436.07,-448.2 1453.77,-452.51 1516.92,-483.13 1535.98,-492.37 1555.51,-502.92 1574.59,-513.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1573.19,-516.12 1580.99,-517.62 1575.83,-511.58 1573.19,-516.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="874.37,-330.64 874.37,-353.44 965.97,-353.44 965.97,-330.64 874.37,-330.64"/>
<text xml:space="preserve" text-anchor="start" x="877.37" y="-336.44" font-family="Arial" font-size="14.00" fill="#c9c9c9">E2E transport</text>
</g>
<!-- siteb&#45;&gt;sitea -->
<g id="edge21" class="edge">
<title>siteb&#45;&gt;sitea</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M2175.17,-681.2C2098.33,-674.83 2007.66,-665.67 1926.35,-653.13 1918.21,-651.87 1909.91,-650.49 1901.55,-649.02"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1902.14,-646.46 1894.29,-647.72 1901.21,-651.63 1902.14,-646.46"/>
</g>
<!-- siteb&#45;&gt;mdnsrelay -->
<g id="edge20" class="edge">
<title>siteb&#45;&gt;mdnsrelay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2544.17,-774.35C2601.29,-798.99 2663.68,-825.9 2719.49,-849.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2545.23,-771.95 2537.3,-771.39 2543.15,-776.77 2545.23,-771.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2718.41,-852.36 2726.33,-852.92 2720.48,-847.54 2718.41,-852.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2573.25,-835.49 2573.25,-858.29 2690.52,-858.29 2690.52,-835.49 2573.25,-835.49"/>
<text xml:space="preserve" text-anchor="start" x="2576.25" y="-841.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">Bonjour discovery</text>
</g>
<!-- siteb&#45;&gt;rootdns -->
<g id="edge22" class="edge">
<title>siteb&#45;&gt;rootdns</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2492.48,-603.19C2569.59,-552.43 2665.91,-489.03 2744.32,-437.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2745.47,-439.81 2750.29,-433.49 2742.58,-435.42 2745.47,-439.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2600.09,-549.06 2600.09,-571.86 2663.67,-571.86 2663.67,-549.06 2600.09,-549.06"/>
<text xml:space="preserve" text-anchor="start" x="2603.09" y="-554.86" font-family="Arial" font-size="14.00" fill="#c9c9c9">recursion</text>
</g>
</g>
</svg>
`;case`hub`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2947pt" height="4575pt"
 viewBox="0.00 0.00 2947.00 4575.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 4560.05)">
<g id="clust1" class="cluster">
<title>cluster_sitea</title>
<polygon fill="#304687" stroke="#223761" points="551.67,-835 551.67,-3164 2908.77,-3164 2908.77,-835 551.67,-835"/>
<text xml:space="preserve" text-anchor="start" x="559.67" y="-3151.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE A · HUB</text>
</g>
<!-- infisical -->
<g id="node1" class="node">
<title>infisical</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="978.01,-2359 605.36,-2359 605.36,-2179 978.01,-2179 978.01,-2359"/>
<text xml:space="preserve" text-anchor="start" x="758.34" y="-2290" font-family="Arial" font-size="20.00" fill="#ffffff">Infisical</text>
<text xml:space="preserve" text-anchor="start" x="645.36" y="-2267" font-family="Arial" font-size="15.00" fill="#ffffff">Secrets management. Single source of truth</text>
<text xml:space="preserve" text-anchor="start" x="650.77" y="-2249" font-family="Arial" font-size="15.00" fill="#ffffff">for API keys and tokens, injected into local</text>
<text xml:space="preserve" text-anchor="start" x="741.24" y="-2231" font-family="Arial" font-size="15.00" fill="#ffffff">tools at launch.</text>
</g>
<!-- caddy -->
<g id="node2" class="node">
<title>caddy</title>
<polygon fill="#ff6b81" stroke="#d2425d" stroke-width="0" points="973.48,-1779 609.89,-1779 609.89,-1599 973.48,-1599 973.48,-1779"/>
<text xml:space="preserve" text-anchor="start" x="762.78" y="-1710" font-family="Arial" font-size="20.00" fill="#ffffff">Caddy</text>
<text xml:space="preserve" text-anchor="start" x="629.95" y="-1687" font-family="Arial" font-size="15.00" fill="#ffffff">Reverse proxy and MCP gateway with automatic</text>
<text xml:space="preserve" text-anchor="start" x="646.6" y="-1669" font-family="Arial" font-size="15.00" fill="#ffffff">certificates. Edge routing for the automation</text>
<text xml:space="preserve" text-anchor="start" x="684.13" y="-1651" font-family="Arial" font-size="15.00" fill="#ffffff">API and remote MCP endpoints.</text>
</g>
<!-- chatbridge -->
<g id="node3" class="node">
<title>chatbridge</title>
<polygon fill="#ffd166" stroke="#d4aa40" stroke-width="0" points="988.88,-2939 594.48,-2939 594.48,-2759 988.88,-2759 988.88,-2939"/>
<text xml:space="preserve" text-anchor="start" x="739.99" y="-2870" font-family="Arial" font-size="20.00" fill="#503700">Chat bridge</text>
<text xml:space="preserve" text-anchor="start" x="635.75" y="-2847" font-family="Arial" font-size="15.00" fill="#634700">Bridges the end&#45;to&#45;end encrypted chat channel</text>
<text xml:space="preserve" text-anchor="start" x="634.48" y="-2829" font-family="Arial" font-size="15.00" fill="#634700">to the hub agent. Loopback&#45;only API, hardened</text>
<text xml:space="preserve" text-anchor="start" x="758.75" y="-2811" font-family="Arial" font-size="15.00" fill="#634700">container.</text>
</g>
<!-- kumaa -->
<g id="node4" class="node">
<title>kumaa</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="968,-1489 615.37,-1489 615.37,-1309 968,-1309 968,-1489"/>
<text xml:space="preserve" text-anchor="start" x="715" y="-1411" font-family="Arial" font-size="20.00" fill="#ffffff">Uptime Kuma (A)</text>
<text xml:space="preserve" text-anchor="start" x="655.37" y="-1388" font-family="Arial" font-size="15.00" fill="#ffffff">Uptime monitor, instance 1 of the failover</text>
<text xml:space="preserve" text-anchor="start" x="657.46" y="-1370" font-family="Arial" font-size="15.00" fill="#ffffff">pair. Watches tailnet services every 60s.</text>
</g>
<!-- prometheus -->
<g id="node5" class="node">
<title>prometheus</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="991.7,-2649 591.67,-2649 591.67,-2469 991.7,-2469 991.7,-2649"/>
<text xml:space="preserve" text-anchor="start" x="659.73" y="-2553.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="703.68" y="-2607.8" font-family="Arial" font-size="20.00" fill="#ffffff">Prometheus</text>
<text xml:space="preserve" text-anchor="start" x="949.75" y="-2553.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="703.68" y="-2586.8" font-family="Arial" font-size="13.00" fill="#ffffff">Prometheus</text>
<text xml:space="preserve" text-anchor="start" x="703.68" y="-2565.2" font-family="Arial" font-size="15.00" fill="#ffffff">Metrics TSDB. Scrapes exporters</text>
<text xml:space="preserve" text-anchor="start" x="703.68" y="-2547.2" font-family="Arial" font-size="15.00" fill="#ffffff">every 60s, including the satellite</text>
<text xml:space="preserve" text-anchor="start" x="703.68" y="-2529.2" font-family="Arial" font-size="15.00" fill="#ffffff">site and the agent node over the L3</text>
<text xml:space="preserve" text-anchor="start" x="703.68" y="-2511.2" font-family="Arial" font-size="15.00" fill="#ffffff">tunnel. 30&#45;day retention, alert</text>
<text xml:space="preserve" text-anchor="start" x="703.68" y="-2493.2" font-family="Arial" font-size="15.00" fill="#ffffff">rules.</text>
</g>
<!-- homepage -->
<g id="node6" class="node">
<title>homepage</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="975.93,-2069 607.44,-2069 607.44,-1889 975.93,-1889 975.93,-2069"/>
<text xml:space="preserve" text-anchor="start" x="742.76" y="-1991" font-family="Arial" font-size="20.00" fill="#ffffff">Homepage</text>
<text xml:space="preserve" text-anchor="start" x="647.44" y="-1968" font-family="Arial" font-size="15.00" fill="#ffffff">Start page aggregating all services with live</text>
<text xml:space="preserve" text-anchor="start" x="764.17" y="-1950" font-family="Arial" font-size="15.00" fill="#ffffff">widgets.</text>
</g>
<!-- dsh -->
<g id="node7" class="node">
<title>dsh</title>
<polygon fill="#ffd166" stroke="#d4aa40" stroke-width="0" points="1637.41,-2853 1263.32,-2853 1263.32,-2673 1637.41,-2673 1637.41,-2853"/>
<text xml:space="preserve" text-anchor="start" x="1331.39" y="-2757.4" font-family="Arial" font-size="14.00" fill="#503700"> </text>
<text xml:space="preserve" text-anchor="start" x="1375.33" y="-2802.8" font-family="Arial" font-size="20.00" fill="#503700">Agent harness</text>
<text xml:space="preserve" text-anchor="start" x="1595.45" y="-2757.4" font-family="Arial" font-size="14.00" fill="#503700"> </text>
<text xml:space="preserve" text-anchor="start" x="1375.33" y="-2781.8" font-family="Arial" font-size="13.00" fill="#634700">Nodejs</text>
<text xml:space="preserve" text-anchor="start" x="1375.33" y="-2760.2" font-family="Arial" font-size="15.00" fill="#634700">Long&#45;running agent on the hub:</text>
<text xml:space="preserve" text-anchor="start" x="1375.33" y="-2742.2" font-family="Arial" font-size="15.00" fill="#634700">daily digests to the tracker,</text>
<text xml:space="preserve" text-anchor="start" x="1375.33" y="-2724.2" font-family="Arial" font-size="15.00" fill="#634700">shared&#45;memory producer, MCP</text>
<text xml:space="preserve" text-anchor="start" x="1375.33" y="-2706.2" font-family="Arial" font-size="15.00" fill="#634700">clients.</text>
</g>
<!-- haa -->
<g id="node8" class="node">
<title>haa</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2250.68,-1541 1918.05,-1541 1918.05,-1361 2250.68,-1361 2250.68,-1541"/>
<text xml:space="preserve" text-anchor="start" x="1998.23" y="-1463" font-family="Arial" font-size="20.00" fill="#ffffff">Home Assistant (A)</text>
<text xml:space="preserve" text-anchor="start" x="1958.05" y="-1440" font-family="Arial" font-size="15.00" fill="#ffffff">Home automation instance A: entities,</text>
<text xml:space="preserve" text-anchor="start" x="1998.06" y="-1422" font-family="Arial" font-size="15.00" fill="#ffffff">automations, dashboards.</text>
</g>
<!-- audiobookshelf -->
<g id="node9" class="node">
<title>audiobookshelf</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2280.29,-2121 1888.44,-2121 1888.44,-1941 2280.29,-1941 2280.29,-2121"/>
<text xml:space="preserve" text-anchor="start" x="2015.98" y="-2043" font-family="Arial" font-size="20.00" fill="#ffffff">Audiobookshelf</text>
<text xml:space="preserve" text-anchor="start" x="1928.44" y="-2020" font-family="Arial" font-size="15.00" fill="#ffffff">Self&#45;hosted audiobook and podcast server with</text>
<text xml:space="preserve" text-anchor="start" x="2041.84" y="-2002" font-family="Arial" font-size="15.00" fill="#ffffff">mobile apps.</text>
</g>
<!-- n8n -->
<g id="node10" class="node">
<title>n8n</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1630.43,-1288 1270.3,-1288 1270.3,-1108 1630.43,-1108 1630.43,-1288"/>
<text xml:space="preserve" text-anchor="start" x="1433.68" y="-1219" font-family="Arial" font-size="20.00" fill="#ffffff">n8n</text>
<text xml:space="preserve" text-anchor="start" x="1310.3" y="-1196" font-family="Arial" font-size="15.00" fill="#ffffff">Workflow orchestrator, the ETL backbone:</text>
<text xml:space="preserve" text-anchor="start" x="1326.95" y="-1178" font-family="Arial" font-size="15.00" fill="#ffffff">ingest, AI scoring, dedup, KB upload,</text>
<text xml:space="preserve" text-anchor="start" x="1336.14" y="-1160" font-family="Arial" font-size="15.00" fill="#ffffff">digests, backups, mail processing.</text>
</g>
<!-- piholea -->
<g id="node11" class="node">
<title>piholea</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1649.6,-1690 1251.13,-1690 1251.13,-1510 1649.6,-1510 1649.6,-1690"/>
<text xml:space="preserve" text-anchor="start" x="1403.13" y="-1621" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (A)</text>
<text xml:space="preserve" text-anchor="start" x="1291.13" y="-1598" font-family="Arial" font-size="15.00" fill="#ffffff">Network&#45;wide ad and telemetry blocking at DNS</text>
<text xml:space="preserve" text-anchor="start" x="1322.79" y="-1580" font-family="Arial" font-size="15.00" fill="#ffffff">level, covering devices that cannot run</text>
<text xml:space="preserve" text-anchor="start" x="1420.35" y="-1562" font-family="Arial" font-size="15.00" fill="#ffffff">blockers.</text>
</g>
<!-- grafana -->
<g id="node12" class="node">
<title>grafana</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1648.66,-2204 1252.07,-2204 1252.07,-2024 1648.66,-2024 1648.66,-2204"/>
<text xml:space="preserve" text-anchor="start" x="1320.13" y="-2108.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1364.08" y="-2144.8" font-family="Arial" font-size="20.00" fill="#ffffff">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="1606.71" y="-2108.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1364.08" y="-2123.8" font-family="Arial" font-size="13.00" fill="#ffffff">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="1364.08" y="-2102.2" font-family="Arial" font-size="15.00" fill="#ffffff">Dashboards: system, containers,</text>
<text xml:space="preserve" text-anchor="start" x="1364.08" y="-2084.2" font-family="Arial" font-size="15.00" fill="#ffffff">DNS, databases, workflow metrics,</text>
<text xml:space="preserve" text-anchor="start" x="1364.08" y="-2066.2" font-family="Arial" font-size="15.00" fill="#ffffff">knowledge&#45;base stats.</text>
</g>
<!-- redmine -->
<g id="node13" class="node">
<title>redmine</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2266.07,-3103 1902.66,-3103 1902.66,-2923 2266.07,-2923 2266.07,-3103"/>
<text xml:space="preserve" text-anchor="start" x="2044.34" y="-3025" font-family="Arial" font-size="20.00" fill="#ffffff">Redmine</text>
<text xml:space="preserve" text-anchor="start" x="1945.97" y="-3002" font-family="Arial" font-size="15.00" fill="#ffffff">Task and project tracker. Single source of</text>
<text xml:space="preserve" text-anchor="start" x="1942.66" y="-2984" font-family="Arial" font-size="15.00" fill="#ffffff">truth for work items, wiki and time tracking.</text>
</g>
<!-- searxng -->
<g id="node14" class="node">
<title>searxng</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2266.95,-2813 1901.78,-2813 1901.78,-2633 2266.95,-2633 2266.95,-2813"/>
<text xml:space="preserve" text-anchor="start" x="2041.57" y="-2744" font-family="Arial" font-size="20.00" fill="#ffffff">SearXNG</text>
<text xml:space="preserve" text-anchor="start" x="1941.78" y="-2721" font-family="Arial" font-size="15.00" fill="#ffffff">Self&#45;hosted metasearch aggregating public</text>
<text xml:space="preserve" text-anchor="start" x="1952.61" y="-2703" font-family="Arial" font-size="15.00" fill="#ffffff">engines: no tracking, no API quota. The</text>
<text xml:space="preserve" text-anchor="start" x="1956.81" y="-2685" font-family="Arial" font-size="15.00" fill="#ffffff">zero&#45;cost web&#45;search layer for agents.</text>
</g>
<!-- openwebui -->
<g id="node15" class="node">
<title>openwebui</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2263.61,-2523 1905.12,-2523 1905.12,-2343 2263.61,-2343 2263.61,-2523"/>
<text xml:space="preserve" text-anchor="start" x="2029.34" y="-2454" font-family="Arial" font-size="20.00" fill="#ffffff">OpenWebUI</text>
<text xml:space="preserve" text-anchor="start" x="1947.19" y="-2431" font-family="Arial" font-size="15.00" fill="#ffffff">Knowledge base hub and RAG front&#45;end:</text>
<text xml:space="preserve" text-anchor="start" x="1958.67" y="-2413" font-family="Arial" font-size="15.00" fill="#ffffff">OpenAI&#45;compatible API, ~30 thematic</text>
<text xml:space="preserve" text-anchor="start" x="1945.12" y="-2395" font-family="Arial" font-size="15.00" fill="#ffffff">collections, chat interface for local agents.</text>
</g>
<!-- unbounda -->
<g id="node16" class="node">
<title>unbounda</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2269.84,-1831 1898.89,-1831 1898.89,-1651 2269.84,-1651 2269.84,-1831"/>
<text xml:space="preserve" text-anchor="start" x="2027.67" y="-1762" font-family="Arial" font-size="20.00" fill="#ffffff">Unbound (A)</text>
<text xml:space="preserve" text-anchor="start" x="1948.9" y="-1739" font-family="Arial" font-size="15.00" fill="#ffffff">Recursive, validating (DNSSEC) caching</text>
<text xml:space="preserve" text-anchor="start" x="1938.89" y="-1721" font-family="Arial" font-size="15.00" fill="#ffffff">resolver. Queries authoritative nameservers</text>
<text xml:space="preserve" text-anchor="start" x="2058.52" y="-1703" font-family="Arial" font-size="15.00" fill="#ffffff">directly.</text>
</g>
<!-- postgres -->
<g id="node17" class="node">
<title>postgres</title>
<path fill="#9d6bff" stroke="#7346d5" stroke-width="2" d="M2868.77,-2611.64C2868.77,-2620.67 2789.37,-2628 2691.63,-2628 2593.88,-2628 2514.49,-2620.67 2514.49,-2611.64 2514.49,-2611.64 2514.49,-2464.36 2514.49,-2464.36 2514.49,-2455.33 2593.88,-2448 2691.63,-2448 2789.37,-2448 2868.77,-2455.33 2868.77,-2464.36 2868.77,-2464.36 2868.77,-2611.64 2868.77,-2611.64"/>
<path fill="none" stroke="#7346d5" stroke-width="2" d="M2868.77,-2611.64C2868.77,-2602.61 2789.37,-2595.27 2691.63,-2595.27 2593.88,-2595.27 2514.49,-2602.61 2514.49,-2611.64"/>
<text xml:space="preserve" text-anchor="start" x="2562.6" y="-2532.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2606.55" y="-2559.8" font-family="Arial" font-size="20.00" fill="#ffffff">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="2846.76" y="-2532.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2606.55" y="-2538.8" font-family="Arial" font-size="13.00" fill="#ffffff">Postgresql</text>
<text xml:space="preserve" text-anchor="start" x="2606.55" y="-2517.2" font-family="Arial" font-size="15.00" fill="#ffffff">Relational database for application</text>
<text xml:space="preserve" text-anchor="start" x="2606.55" y="-2499.2" font-family="Arial" font-size="15.00" fill="#ffffff">data and analytics.</text>
</g>
<!-- qdrant -->
<g id="node18" class="node">
<title>qdrant</title>
<path fill="#9d6bff" stroke="#7346d5" stroke-width="2" d="M2864.58,-2305.64C2864.58,-2314.67 2787.06,-2322 2691.63,-2322 2596.19,-2322 2518.67,-2314.67 2518.67,-2305.64 2518.67,-2305.64 2518.67,-2158.36 2518.67,-2158.36 2518.67,-2149.33 2596.19,-2142 2691.63,-2142 2787.06,-2142 2864.58,-2149.33 2864.58,-2158.36 2864.58,-2158.36 2864.58,-2305.64 2864.58,-2305.64"/>
<path fill="none" stroke="#7346d5" stroke-width="2" d="M2864.58,-2305.64C2864.58,-2296.61 2787.06,-2289.27 2691.63,-2289.27 2596.19,-2289.27 2518.67,-2296.61 2518.67,-2305.64"/>
<text xml:space="preserve" text-anchor="start" x="2566.79" y="-2226.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2610.74" y="-2262.8" font-family="Arial" font-size="20.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="2842.58" y="-2226.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2610.74" y="-2241.8" font-family="Arial" font-size="13.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="2610.74" y="-2220.2" font-family="Arial" font-size="15.00" fill="#ffffff">Vector database: embeddings for</text>
<text xml:space="preserve" text-anchor="start" x="2610.74" y="-2202.2" font-family="Arial" font-size="15.00" fill="#ffffff">semantic search, plus lock/dedup</text>
<text xml:space="preserve" text-anchor="start" x="2610.74" y="-2184.2" font-family="Arial" font-size="15.00" fill="#ffffff">store for ingestion pipelines.</text>
</g>
<!-- mobile -->
<g id="node19" class="node">
<title>mobile</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="951.7,-713 631.66,-713 631.66,-533 951.7,-533 951.7,-713"/>
<text xml:space="preserve" text-anchor="start" x="725.54" y="-615" font-family="Arial" font-size="20.00" fill="#484d59">Mobile devices</text>
</g>
<!-- workstation -->
<g id="node20" class="node">
<title>workstation</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="356.74,-1924 0,-1924 0,-1744 356.74,-1744 356.74,-1924"/>
<text xml:space="preserve" text-anchor="start" x="48.12" y="-1828.4" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-1873.8" font-family="Arial" font-size="20.00" fill="#484d59">Workstation · agent hub</text>
<text xml:space="preserve" text-anchor="start" x="334.73" y="-1828.4" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-1852.8" font-family="Arial" font-size="13.00" fill="#595e6a">Apple</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-1831.2" font-family="Arial" font-size="15.00" fill="#595e6a">Daily driver. Runs the agent CLI as</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-1813.2" font-family="Arial" font-size="15.00" fill="#595e6a">the hub of the MCP ecosystem,</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-1795.2" font-family="Arial" font-size="15.00" fill="#595e6a">offline speech&#45;to&#45;text and local</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-1777.2" font-family="Arial" font-size="15.00" fill="#595e6a">LLMs.</text>
</g>
<!-- siteb -->
<g id="node21" class="node">
<title>siteb</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="1630.11,-3384 1270.62,-3384 1270.62,-3204 1630.11,-3204 1630.11,-3384"/>
<text xml:space="preserve" text-anchor="start" x="1378.67" y="-3315" font-family="Arial" font-size="20.00" fill="#ffffff">Site B · satellite</text>
<text xml:space="preserve" text-anchor="start" x="1324.04" y="-3292" font-family="Arial" font-size="15.00" fill="#f8ffff">Secondary site: home automation and</text>
<text xml:space="preserve" text-anchor="start" x="1290.68" y="-3274" font-family="Arial" font-size="15.00" fill="#f8ffff">independent DNS. Keeps working when the hub</text>
<text xml:space="preserve" text-anchor="start" x="1422.85" y="-3256" font-family="Arial" font-size="15.00" fill="#f8ffff">is down.</text>
</g>
<!-- workernode -->
<g id="node22" class="node">
<title>workernode</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="1619.24,-3674 1281.5,-3674 1281.5,-3494 1619.24,-3494 1619.24,-3674"/>
<text xml:space="preserve" text-anchor="start" x="1310.29" y="-3614" font-family="Arial" font-size="20.00" fill="#ffffff">Agent worker · always&#45;on node</text>
<text xml:space="preserve" text-anchor="start" x="1306.94" y="-3591" font-family="Arial" font-size="15.00" fill="#f8ffff">Dedicated headless node running a remote</text>
<text xml:space="preserve" text-anchor="start" x="1319.01" y="-3573" font-family="Arial" font-size="15.00" fill="#f8ffff">agent endpoint: delegated tasks, phone</text>
<text xml:space="preserve" text-anchor="start" x="1301.55" y="-3555" font-family="Arial" font-size="15.00" fill="#f8ffff">access, shared&#45;memory producer, encrypted</text>
<text xml:space="preserve" text-anchor="start" x="1418.68" y="-3537" font-family="Arial" font-size="15.00" fill="#f8ffff">file inbox.</text>
</g>
<!-- contentsources -->
<g id="node23" class="node">
<title>contentsources</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="967.54,-180 615.83,-180 615.83,0 967.54,0 967.54,-180"/>
<text xml:space="preserve" text-anchor="start" x="663.95" y="-84.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="707.9" y="-129.8" font-family="Arial" font-size="20.00" fill="#ffffff">Content sources</text>
<text xml:space="preserve" text-anchor="start" x="945.53" y="-84.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="707.9" y="-108.8" font-family="Arial" font-size="13.00" fill="#ffffff">Youtube</text>
<text xml:space="preserve" text-anchor="start" x="707.9" y="-87.2" font-family="Arial" font-size="15.00" fill="#ffffff">RSS feeds, video playlists, e&#45;mail,</text>
<text xml:space="preserve" text-anchor="start" x="707.9" y="-69.2" font-family="Arial" font-size="15.00" fill="#ffffff">voice memos, saved articles, NAS</text>
<text xml:space="preserve" text-anchor="start" x="707.9" y="-51.2" font-family="Arial" font-size="15.00" fill="#ffffff">folders: raw material for ingestion</text>
<text xml:space="preserve" text-anchor="start" x="707.9" y="-33.2" font-family="Arial" font-size="15.00" fill="#ffffff">pipelines.</text>
</g>
<!-- chatnetwork -->
<g id="node24" class="node">
<title>chatnetwork</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="356.02,-4545 0.72,-4545 0.72,-4365 356.02,-4365 356.02,-4545"/>
<text xml:space="preserve" text-anchor="start" x="99.99" y="-4476" font-family="Arial" font-size="20.00" fill="#ffffff">E2E chat network</text>
<text xml:space="preserve" text-anchor="start" x="20.78" y="-4453" font-family="Arial" font-size="15.00" fill="#ffffff">Decentralised end&#45;to&#45;end encrypted messaging</text>
<text xml:space="preserve" text-anchor="start" x="25.36" y="-4435" font-family="Arial" font-size="15.00" fill="#ffffff">network. No phone number, no global identity.</text>
<text xml:space="preserve" text-anchor="start" x="31.59" y="-4417" font-family="Arial" font-size="15.00" fill="#ffffff">The only inbound channel for the hub agent.</text>
</g>
<!-- cloudutils -->
<g id="node25" class="node">
<title>cloudutils</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2256.08,-522 1912.65,-522 1912.65,-342 2256.08,-342 2256.08,-522"/>
<text xml:space="preserve" text-anchor="start" x="1960.77" y="-426.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2004.71" y="-462.8" font-family="Arial" font-size="20.00" fill="#ffffff">Cloud utilities</text>
<text xml:space="preserve" text-anchor="start" x="2234.07" y="-426.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2004.71" y="-441.8" font-family="Arial" font-size="13.00" fill="#ffffff">Google Drive</text>
<text xml:space="preserve" text-anchor="start" x="2004.71" y="-420.2" font-family="Arial" font-size="15.00" fill="#ffffff">Off&#45;site destination for workflow</text>
<text xml:space="preserve" text-anchor="start" x="2004.71" y="-402.2" font-family="Arial" font-size="15.00" fill="#ffffff">backups and delivery channel for</text>
<text xml:space="preserve" text-anchor="start" x="2004.71" y="-384.2" font-family="Arial" font-size="15.00" fill="#ffffff">pipeline and uptime reports.</text>
</g>
<!-- aiapis -->
<g id="node26" class="node">
<title>aiapis</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2875.02,-795 2508.23,-795 2508.23,-615 2875.02,-615 2875.02,-795"/>
<text xml:space="preserve" text-anchor="start" x="2556.35" y="-699.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2600.29" y="-753.8" font-family="Arial" font-size="20.00" fill="#ffffff">AI APIs</text>
<text xml:space="preserve" text-anchor="start" x="2853.02" y="-699.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2600.29" y="-732.8" font-family="Arial" font-size="13.00" fill="#ffffff">Openai</text>
<text xml:space="preserve" text-anchor="start" x="2600.29" y="-711.2" font-family="Arial" font-size="15.00" fill="#ffffff">External language and speech APIs:</text>
<text xml:space="preserve" text-anchor="start" x="2600.29" y="-693.2" font-family="Arial" font-size="15.00" fill="#ffffff">primary model family (scoring,</text>
<text xml:space="preserve" text-anchor="start" x="2600.29" y="-675.2" font-family="Arial" font-size="15.00" fill="#ffffff">drafts, synthesis), classification,</text>
<text xml:space="preserve" text-anchor="start" x="2600.29" y="-657.2" font-family="Arial" font-size="15.00" fill="#ffffff">speech&#45;to&#45;text. Non&#45;sensitive</text>
<text xml:space="preserve" text-anchor="start" x="2600.29" y="-639.2" font-family="Arial" font-size="15.00" fill="#ffffff">content only.</text>
</g>
<!-- rootdns -->
<g id="node27" class="node">
<title>rootdns</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2856.2,-3384 2527.06,-3384 2527.06,-3204 2856.2,-3204 2856.2,-3384"/>
<text xml:space="preserve" text-anchor="start" x="2547.12" y="-3297" font-family="Arial" font-size="20.00" fill="#ffffff">Root / authoritative nameservers</text>
<text xml:space="preserve" text-anchor="start" x="2559.89" y="-3274" font-family="Arial" font-size="15.00" fill="#ffffff">The end of the recursive resolver chain.</text>
</g>
<!-- caddy&#45;&gt;n8n -->
<g id="edge16" class="edge">
<title>caddy&#45;&gt;n8n</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M916.88,-1599.03C941.72,-1580.89 967.59,-1561.9 991.7,-1544 1104.47,-1460.3 1231.85,-1363.84 1323.54,-1294.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1324.95,-1296.29 1329.33,-1289.66 1321.77,-1292.11 1324.95,-1296.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1052.65,-1497.38 1052.65,-1520.18 1190.18,-1520.18 1190.18,-1497.38 1052.65,-1497.38"/>
<text xml:space="preserve" text-anchor="start" x="1055.65" y="-1503.18" font-family="Arial" font-size="14.00" fill="#c9c9c9">automation API route</text>
</g>
<!-- caddy&#45;&gt;siteb -->
<g id="edge15" class="edge">
<title>caddy&#45;&gt;siteb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M947.38,-1778.56C964.93,-1794.84 980.5,-1813.32 991.7,-1834 1115.04,-2061.76 928.15,-2770.35 1051.7,-2998 1088.22,-3065.3 1138.33,-3043.75 1191.13,-3099.2 1224.74,-3134.5 1214.99,-3158.29 1251.13,-3191 1254.8,-3194.32 1258.6,-3197.57 1262.5,-3200.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1260.75,-3202.7 1268.27,-3205.27 1264,-3198.58 1260.75,-3202.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1083.8,-3099.2 1083.8,-3122 1159.03,-3122 1159.03,-3099.2 1083.8,-3099.2"/>
<text xml:space="preserve" text-anchor="start" x="1086.8" y="-3105" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP proxy</text>
</g>
<!-- chatbridge&#45;&gt;dsh -->
<g id="edge17" class="edge">
<title>chatbridge&#45;&gt;dsh</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M988.88,-2788.55C1009.93,-2783.65 1031.16,-2779.38 1051.7,-2776.2 1116.82,-2766.12 1188.63,-2761.72 1253.1,-2760.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1252.91,-2762.79 1260.35,-2760 1252.8,-2757.54 1252.91,-2762.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1057.71,-2776.2 1057.71,-2799 1185.12,-2799 1185.12,-2776.2 1057.71,-2776.2"/>
<text xml:space="preserve" text-anchor="start" x="1060.71" y="-2782" font-family="Arial" font-size="14.00" fill="#c9c9c9">loopback agent API</text>
</g>
<!-- kumaa&#45;&gt;haa -->
<g id="edge19" class="edge">
<title>kumaa&#45;&gt;haa</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M967.76,-1406.05C1214.22,-1415.98 1660.9,-1433.98 1907.69,-1443.92"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1907.58,-1446.54 1915.18,-1444.22 1907.79,-1441.3 1907.58,-1446.54"/>
</g>
<!-- kumaa&#45;&gt;audiobookshelf -->
<g id="edge20" class="edge">
<title>kumaa&#45;&gt;audiobookshelf</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M917.31,-1488.94C942.06,-1507.04 967.78,-1526.02 991.7,-1544 1108.31,-1631.62 1115.8,-1690.6 1251.13,-1745 1490.52,-1841.23 1604.06,-1678.63 1828.44,-1806 1867.09,-1827.94 1856.95,-1854.64 1888.44,-1886 1905.24,-1902.73 1924.06,-1919.11 1943.2,-1934.48"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1941.55,-1936.52 1949.05,-1939.12 1944.81,-1932.4 1941.55,-1936.52"/>
</g>
<!-- kumaa&#45;&gt;openwebui -->
<g id="edge21" class="edge">
<title>kumaa&#45;&gt;openwebui</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M944.3,-1488.9C962.55,-1505.22 979.14,-1523.62 991.7,-1544 1077.72,-1683.59 932.24,-1795.69 1051.7,-1908 1149.01,-1999.48 1529.95,-1909.66 1649.6,-1969 1693.49,-1990.77 1885.47,-2205.91 1998.79,-2335.46"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1996.56,-2336.9 2003.47,-2340.82 2000.51,-2333.45 1996.56,-2336.9"/>
</g>
<!-- kumaa&#45;&gt;siteb -->
<g id="edge18" class="edge">
<title>kumaa&#45;&gt;siteb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M955.14,-1495.91C969.52,-1510.34 982.21,-1526.37 991.7,-1544 1126.51,-1794.32 919.33,-2570.38 1051.7,-2822 1087.92,-2890.84 1148.96,-2862.43 1191.13,-2927.8 1256.17,-3028.62 1177.77,-3096.06 1251.13,-3191 1255.02,-3196.04 1259.23,-3200.85 1263.69,-3205.45"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="957.34,-1494.39 950.12,-1491.06 953.69,-1498.16 957.34,-1494.39"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1261.55,-3207.02 1268.75,-3210.38 1265.21,-3203.26 1261.55,-3207.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1051.7,-2927.8 1051.7,-2971 1191.13,-2971 1191.13,-2927.8 1051.7,-2927.8"/>
<text xml:space="preserve" text-anchor="start" x="1054.7" y="-2954" font-family="Arial" font-size="14.00" fill="#ffe0c2">failover pair</text>
<text xml:space="preserve" text-anchor="start" x="1054.7" y="-2933.2" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ independent instances ]</text>
</g>
<!-- kumaa&#45;&gt;cloudutils -->
<g id="edge22" class="edge">
<title>kumaa&#45;&gt;cloudutils</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M952.15,-1309.04C965.8,-1299.97 979.17,-1290.56 991.7,-1281 1119.19,-1183.71 1132.56,-1138.18 1251.13,-1030.2 1449.6,-849.45 1488.85,-789.74 1709.6,-637 1770.36,-594.96 1840.58,-554.53 1903.64,-520.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1904.82,-523.19 1910.21,-517.35 1902.36,-518.55 1904.82,-523.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1430.25,-1030.2 1430.25,-1053 1470.48,-1053 1470.48,-1030.2 1430.25,-1030.2"/>
<text xml:space="preserve" text-anchor="start" x="1433.25" y="-1036" font-family="Arial" font-size="14.00" fill="#c9c9c9">alerts</text>
</g>
<!-- prometheus&#45;&gt;n8n -->
<g id="edge25" class="edge">
<title>prometheus&#45;&gt;n8n</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M944.76,-2469.38C962.95,-2453.02 979.39,-2434.53 991.7,-2414 1090.85,-2248.56 1004.07,-2171.1 1051.7,-1984.2 1113.77,-1740.64 1128.71,-1674.52 1251.13,-1455 1282.39,-1398.94 1325.08,-1341.89 1362.84,-1295.82"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1364.67,-1297.73 1367.42,-1290.27 1360.62,-1294.39 1364.67,-1297.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1079.13,-1984.2 1079.13,-2007 1163.7,-2007 1163.7,-1984.2 1079.13,-1984.2"/>
<text xml:space="preserve" text-anchor="start" x="1082.13" y="-1990" font-family="Arial" font-size="14.00" fill="#ffe0c2">[metrics pull]</text>
</g>
<!-- prometheus&#45;&gt;piholea -->
<g id="edge26" class="edge">
<title>prometheus&#45;&gt;piholea</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M938.62,-2469.09C958.28,-2452.53 976.78,-2434.07 991.7,-2414 1039.72,-2349.44 1008.33,-2310.97 1051.7,-2243.2 1098.23,-2170.5 1142.1,-2179.04 1191.13,-2108 1229.35,-2052.62 1221.85,-2029.58 1251.13,-1969 1296.14,-1875.88 1352.32,-1772.34 1393.37,-1698.7"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1395.46,-1700.34 1396.82,-1692.51 1390.87,-1697.78 1395.46,-1700.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1079.13,-2243.2 1079.13,-2266 1163.7,-2266 1163.7,-2243.2 1079.13,-2243.2"/>
<text xml:space="preserve" text-anchor="start" x="1082.13" y="-2249" font-family="Arial" font-size="14.00" fill="#ffe0c2">[metrics pull]</text>
</g>
<!-- prometheus&#45;&gt;grafana -->
<g id="edge27" class="edge">
<title>prometheus&#45;&gt;grafana</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M922.95,-2469.21C964.08,-2440.96 1009.74,-2409.7 1051.7,-2381.2 1135.84,-2324.05 1230.34,-2260.53 1306.1,-2209.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1307.49,-2212 1312.26,-2205.64 1304.56,-2207.63 1307.49,-2212"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1081.84,-2381.2 1081.84,-2404 1160.99,-2404 1160.99,-2381.2 1081.84,-2381.2"/>
<text xml:space="preserve" text-anchor="start" x="1084.84" y="-2387" font-family="Arial" font-size="14.00" fill="#c9c9c9">data source</text>
</g>
<!-- prometheus&#45;&gt;unbounda -->
<g id="edge28" class="edge">
<title>prometheus&#45;&gt;unbounda</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M991.26,-2514.4C1216.62,-2459.69 1564.09,-2361.5 1649.6,-2259 1759.14,-2127.71 1601.18,-2011.21 1709.6,-1879 1754.44,-1824.32 1823.06,-1791.31 1889.33,-1771.38"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1889.72,-1774 1896.18,-1769.38 1888.24,-1768.96 1889.72,-1774"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1408.08,-2443.85 1408.08,-2466.65 1492.65,-2466.65 1492.65,-2443.85 1408.08,-2443.85"/>
<text xml:space="preserve" text-anchor="start" x="1411.08" y="-2449.65" font-family="Arial" font-size="14.00" fill="#ffe0c2">[metrics pull]</text>
</g>
<!-- prometheus&#45;&gt;qdrant -->
<g id="edge29" class="edge">
<title>prometheus&#45;&gt;qdrant</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M991.34,-2578.24C1170.42,-2587.76 1437.42,-2582.14 1649.6,-2494 1779.05,-2440.22 1758.82,-2341.39 1888.44,-2288 2088.37,-2205.65 2340.01,-2202.45 2507.61,-2212.77"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2507.35,-2215.38 2515,-2213.24 2507.69,-2210.14 2507.35,-2215.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1726.73,-2458.62 1726.73,-2481.42 1811.3,-2481.42 1811.3,-2458.62 1726.73,-2458.62"/>
<text xml:space="preserve" text-anchor="start" x="1729.73" y="-2464.42" font-family="Arial" font-size="14.00" fill="#ffe0c2">[metrics pull]</text>
</g>
<!-- prometheus&#45;&gt;siteb -->
<g id="edge23" class="edge">
<title>prometheus&#45;&gt;siteb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M944.83,-2648.58C963,-2664.94 979.43,-2683.44 991.7,-2704 1093.09,-2873.84 928.28,-2990.42 1051.7,-3145 1102.93,-3209.16 1184.84,-3245.7 1261.04,-3266.5"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1259.94,-3268.92 1267.86,-3268.31 1261.28,-3263.85 1259.94,-3268.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1081.41,-3242.23 1081.41,-3285.43 1161.42,-3285.43 1161.42,-3242.23 1081.41,-3242.23"/>
<text xml:space="preserve" text-anchor="start" x="1084.41" y="-3268.43" font-family="Arial" font-size="14.00" fill="#ffe0c2">over L3</text>
<text xml:space="preserve" text-anchor="start" x="1084.41" y="-3247.63" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ metrics pull ]</text>
</g>
<!-- prometheus&#45;&gt;workernode -->
<g id="edge24" class="edge">
<title>prometheus&#45;&gt;workernode</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M946.01,-2648.61C963.89,-2664.93 979.92,-2683.41 991.7,-2704 1126.56,-2939.68 913.35,-3078.36 1051.7,-3312 1102.33,-3397.5 1191.6,-3462.22 1272.75,-3507.04"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1271.09,-3509.12 1278.93,-3510.41 1273.61,-3504.51 1271.09,-3509.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1074.72,-3452.01 1074.72,-3495.21 1168.11,-3495.21 1168.11,-3452.01 1074.72,-3452.01"/>
<text xml:space="preserve" text-anchor="start" x="1077.72" y="-3478.21" font-family="Arial" font-size="14.00" fill="#ffe0c2">over tailnet</text>
<text xml:space="preserve" text-anchor="start" x="1077.72" y="-3457.41" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ node exporter ]</text>
</g>
<!-- homepage&#45;&gt;grafana -->
<g id="edge30" class="edge">
<title>homepage&#45;&gt;grafana</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M975.61,-2016.61C1058.38,-2033.62 1156.61,-2053.82 1242.1,-2071.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1241.36,-2073.92 1249.23,-2072.86 1242.41,-2068.77 1241.36,-2073.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1094.68,-2058.59 1094.68,-2081.39 1148.15,-2081.39 1148.15,-2058.59 1094.68,-2058.59"/>
<text xml:space="preserve" text-anchor="start" x="1097.68" y="-2064.39" font-family="Arial" font-size="14.00" fill="#c9c9c9">widgets</text>
</g>
<!-- dsh&#45;&gt;redmine -->
<g id="edge31" class="edge">
<title>dsh&#45;&gt;redmine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1637.14,-2836.49C1717.88,-2868.43 1812.37,-2905.8 1893.55,-2937.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1892.12,-2940.17 1900.06,-2940.49 1894.06,-2935.29 1892.12,-2940.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1731,-2910.39 1731,-2933.19 1807.04,-2933.19 1807.04,-2910.39 1731,-2910.39"/>
<text xml:space="preserve" text-anchor="start" x="1734" y="-2916.19" font-family="Arial" font-size="14.00" fill="#c9c9c9">daily digest</text>
</g>
<!-- dsh&#45;&gt;searxng -->
<g id="edge32" class="edge">
<title>dsh&#45;&gt;searxng</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1637.14,-2751.24C1717.2,-2746.17 1810.78,-2740.25 1891.51,-2735.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1891.45,-2737.78 1898.77,-2734.68 1891.12,-2732.54 1891.45,-2737.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1730.22,-2746.58 1730.22,-2769.38 1807.81,-2769.38 1807.81,-2746.58 1730.22,-2746.58"/>
<text xml:space="preserve" text-anchor="start" x="1733.22" y="-2752.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">web search</text>
</g>
<!-- dsh&#45;&gt;openwebui -->
<g id="edge33" class="edge">
<title>dsh&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1623.64,-2673.04C1709.95,-2627.98 1814.44,-2573.42 1901.98,-2527.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1903.09,-2530.09 1908.52,-2524.29 1900.66,-2525.44 1903.09,-2530.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1717.39,-2627.56 1717.39,-2650.36 1820.65,-2650.36 1820.65,-2627.56 1717.39,-2627.56"/>
<text xml:space="preserve" text-anchor="start" x="1720.39" y="-2633.36" font-family="Arial" font-size="14.00" fill="#c9c9c9">shared memory</text>
</g>
<!-- n8n&#45;&gt;openwebui -->
<g id="edge34" class="edge">
<title>n8n&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1536.65,-1287.78C1576.54,-1334.37 1621.36,-1394.18 1649.6,-1455 1702.84,-1569.64 1668.32,-1613.53 1709.6,-1733 1749.03,-1847.08 1784.45,-1864.8 1828.44,-1977.2 1862.07,-2063.15 1846.55,-2093.76 1888.44,-2176 1917.2,-2232.49 1958.65,-2289.28 1995.93,-2335.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1993.89,-2336.7 2000.67,-2340.83 1997.94,-2333.37 1993.89,-2336.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1733.72,-1977.2 1733.72,-2000 1804.32,-2000 1804.32,-1977.2 1733.72,-1977.2"/>
<text xml:space="preserve" text-anchor="start" x="1736.72" y="-1983" font-family="Arial" font-size="14.00" fill="#c9c9c9">KB upload</text>
</g>
<!-- n8n&#45;&gt;postgres -->
<g id="edge36" class="edge">
<title>n8n&#45;&gt;postgres</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1630.31,-1161.1C1816.57,-1133.92 2105.05,-1125.14 2280.29,-1283.2 2649.04,-1615.79 2258.68,-1947.68 2508.23,-2377 2522.03,-2400.74 2540.59,-2422.81 2560.59,-2442.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2558.62,-2444.26 2565.84,-2447.57 2562.26,-2440.48 2558.62,-2444.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2040.11,-1283.2 2040.11,-1306 2128.62,-1306 2128.62,-1283.2 2040.11,-1283.2"/>
<text xml:space="preserve" text-anchor="start" x="2043.11" y="-1289" font-family="Arial" font-size="14.00" fill="#c9c9c9">pipeline state</text>
</g>
<!-- n8n&#45;&gt;qdrant -->
<g id="edge37" class="edge">
<title>n8n&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1616.35,-1108.01C1796.03,-1023.55 2083.96,-929.25 2280.29,-1068.2 2633.1,-1317.9 2684.67,-1896.85 2690.69,-2131"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2688.06,-2130.75 2690.86,-2138.19 2693.3,-2130.63 2688.06,-2130.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2022.22,-1068.2 2022.22,-1091 2146.51,-1091 2146.51,-1068.2 2022.22,-1068.2"/>
<text xml:space="preserve" text-anchor="start" x="2025.22" y="-1074" font-family="Arial" font-size="14.00" fill="#c9c9c9">embeddings &amp; lock</text>
</g>
<!-- n8n&#45;&gt;cloudutils -->
<g id="edge35" class="edge">
<title>n8n&#45;&gt;cloudutils</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1514.8,-1108.17C1556.23,-1047.22 1609.82,-963.86 1649.6,-886 1682.42,-821.77 1666.87,-793.32 1709.6,-735.2 1719.26,-722.06 1856.25,-612.1 1961.61,-528.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1963.17,-530.46 1967.41,-523.74 1959.9,-526.35 1963.17,-530.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1709.6,-735.2 1709.6,-758 1828.44,-758 1828.44,-735.2 1709.6,-735.2"/>
<text xml:space="preserve" text-anchor="start" x="1712.6" y="-741" font-family="Arial" font-size="14.00" fill="#c9c9c9">backups &amp; reports</text>
</g>
<!-- n8n&#45;&gt;aiapis -->
<g id="edge38" class="edge">
<title>n8n&#45;&gt;aiapis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1525.22,-1108.26C1604.59,-1018.99 1739.58,-886.72 1888.44,-825.2 2085.87,-743.6 2331,-716.5 2497.97,-707.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2497.97,-710.59 2505.33,-707.6 2497.71,-705.35 2497.97,-710.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2021.06,-825.2 2021.06,-848 2147.67,-848 2147.67,-825.2 2021.06,-825.2"/>
<text xml:space="preserve" text-anchor="start" x="2024.06" y="-831" font-family="Arial" font-size="14.00" fill="#c9c9c9">scoring &amp; synthesis</text>
</g>
<!-- piholea&#45;&gt;unbounda -->
<g id="edge39" class="edge">
<title>piholea&#45;&gt;unbounda</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1649.6,-1644.23C1725.9,-1661.25 1812.9,-1680.66 1888.85,-1697.6"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1888.17,-1700.14 1896.06,-1699.21 1889.31,-1695.02 1888.17,-1700.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1736.84,-1683.13 1736.84,-1705.93 1801.2,-1705.93 1801.2,-1683.13 1736.84,-1683.13"/>
<text xml:space="preserve" text-anchor="start" x="1739.84" y="-1688.93" font-family="Arial" font-size="14.00" fill="#c9c9c9">upstream</text>
</g>
<!-- redmine&#45;&gt;postgres -->
<g id="edge40" class="edge">
<title>redmine&#45;&gt;postgres</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2207.82,-2923.01C2231.96,-2904.96 2257.02,-2886 2280.29,-2868 2380.29,-2790.65 2491.99,-2700.57 2573.57,-2634.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2574.87,-2636.41 2579.02,-2629.64 2571.55,-2632.34 2574.87,-2636.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2377.64,-2814.96 2377.64,-2837.76 2410.89,-2837.76 2410.89,-2814.96 2377.64,-2814.96"/>
<text xml:space="preserve" text-anchor="start" x="2380.64" y="-2820.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">data</text>
</g>
<!-- openwebui&#45;&gt;qdrant -->
<g id="edge41" class="edge">
<title>openwebui&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2263.28,-2373.92C2340.29,-2348.34 2430.36,-2318.43 2507.9,-2292.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2508.61,-2295.21 2514.9,-2290.36 2506.96,-2290.23 2508.61,-2295.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2353.12,-2344.53 2353.12,-2367.33 2435.4,-2367.33 2435.4,-2344.53 2353.12,-2344.53"/>
<text xml:space="preserve" text-anchor="start" x="2356.12" y="-2350.33" font-family="Arial" font-size="14.00" fill="#c9c9c9">embeddings</text>
</g>
<!-- openwebui&#45;&gt;aiapis -->
<g id="edge42" class="edge">
<title>openwebui&#45;&gt;aiapis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2170.68,-2343.25C2210.12,-2296.78 2253.97,-2237.07 2280.29,-2176 2524.29,-1609.97 2154.66,-1312.89 2508.23,-808 2509.54,-806.12 2510.9,-804.28 2512.31,-802.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2514.04,-804.48 2516.79,-797.02 2509.99,-801.14 2514.04,-804.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2340.29,-1983.02 2340.29,-2005.82 2448.23,-2005.82 2448.23,-1983.02 2340.29,-1983.02"/>
<text xml:space="preserve" text-anchor="start" x="2343.29" y="-1988.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">chat &amp; synthesis</text>
</g>
<!-- unbounda&#45;&gt;rootdns -->
<g id="edge43" class="edge">
<title>unbounda&#45;&gt;rootdns</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2236.27,-1830.63C2253.67,-1846.94 2269.15,-1865.41 2280.29,-1886 2384.07,-2077.67 2282.48,-2654.84 2340.29,-2865 2383.52,-3022.15 2395.22,-3073.56 2508.23,-3191 2511.84,-3194.75 2515.62,-3198.41 2519.53,-3201.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2517.57,-3203.73 2524.94,-3206.69 2521.02,-3199.78 2517.57,-3203.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2362.47,-3121.25 2362.47,-3144.05 2426.05,-3144.05 2426.05,-3121.25 2362.47,-3121.25"/>
<text xml:space="preserve" text-anchor="start" x="2365.47" y="-3127.05" font-family="Arial" font-size="14.00" fill="#c9c9c9">recursion</text>
</g>
<!-- mobile&#45;&gt;piholea -->
<g id="edge1" class="edge">
<title>mobile&#45;&gt;piholea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M951.63,-664.6C1036.55,-695.3 1134.92,-746.17 1191.13,-827.2 1322.68,-1016.83 1164.15,-1129.23 1251.13,-1343 1274.77,-1401.1 1315.33,-1457.27 1353.63,-1502.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1351.64,-1503.9 1358.52,-1507.87 1355.62,-1500.48 1351.64,-1503.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1061.62,-827.2 1061.62,-850 1181.21,-850 1181.21,-827.2 1061.62,-827.2"/>
<text xml:space="preserve" text-anchor="start" x="1064.62" y="-833" font-family="Arial" font-size="14.00" fill="#c9c9c9">DNS (tailnet&#45;wide)</text>
</g>
<!-- workstation&#45;&gt;infisical -->
<g id="edge2" class="edge">
<title>workstation&#45;&gt;infisical</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M287.62,-1923.74C360.59,-1982.87 459.93,-2060.76 551.67,-2124 575.9,-2140.71 602.07,-2157.63 627.89,-2173.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="626.3,-2175.84 634.06,-2177.57 629.07,-2171.38 626.3,-2175.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="418.29,-2109.48 418.29,-2132.28 530.12,-2132.28 530.12,-2109.48 418.29,-2109.48"/>
<text xml:space="preserve" text-anchor="start" x="421.29" y="-2115.28" font-family="Arial" font-size="14.00" fill="#c9c9c9">secrets at launch</text>
</g>
<!-- workstation&#45;&gt;caddy -->
<g id="edge3" class="edge">
<title>workstation&#45;&gt;caddy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M356.6,-1791.96C432.93,-1773.86 522.32,-1752.66 600.07,-1734.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="600.35,-1736.84 607.04,-1732.56 599.14,-1731.74 600.35,-1736.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.74,-1774.49 416.74,-1797.29 531.67,-1797.29 531.67,-1774.49 416.74,-1774.49"/>
<text xml:space="preserve" text-anchor="start" x="419.74" y="-1780.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP via gateway</text>
</g>
<!-- workstation&#45;&gt;n8n -->
<g id="edge4" class="edge">
<title>workstation&#45;&gt;n8n</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M189.55,-1744.45C223.37,-1464.64 341.89,-615.84 551.67,-455.2 706.94,-336.29 813.69,-374.22 991.7,-455.2 1114.49,-511.06 1126.12,-565.8 1191.13,-684 1236.26,-766.06 1212.31,-800.77 1251.13,-886 1285.55,-961.58 1335.83,-1040.48 1377.14,-1100.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1374.73,-1101.16 1381.18,-1105.81 1379.04,-1098.16 1374.73,-1101.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="720.98,-455.2 720.98,-478 862.38,-478 862.38,-455.2 720.98,-455.2"/>
<text xml:space="preserve" text-anchor="start" x="723.98" y="-461" font-family="Arial" font-size="14.00" fill="#c9c9c9">voice memo webhook</text>
</g>
<!-- workstation&#45;&gt;piholea -->
<g id="edge5" class="edge">
<title>workstation&#45;&gt;piholea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M182.03,-1744.1C193.47,-1549.71 252.41,-1100.93 551.67,-1016.2 825.22,-938.75 973.51,-816.05 1191.13,-999 1309.93,-1098.87 1188.58,-1200.97 1251.13,-1343 1276.57,-1400.77 1317.7,-1457.19 1355.93,-1502.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1353.69,-1503.81 1360.56,-1507.81 1357.69,-1500.4 1353.69,-1503.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="731.89,-1016.2 731.89,-1039 851.48,-1039 851.48,-1016.2 731.89,-1016.2"/>
<text xml:space="preserve" text-anchor="start" x="734.89" y="-1022" font-family="Arial" font-size="14.00" fill="#c9c9c9">DNS (tailnet&#45;wide)</text>
</g>
<!-- workstation&#45;&gt;grafana -->
<g id="edge6" class="edge">
<title>workstation&#45;&gt;grafana</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M204.16,-1744.22C248.01,-1604.98 353.87,-1341.52 551.67,-1231.2 722.47,-1135.94 805.59,-1171.1 991.7,-1231.2 1095.69,-1264.78 1133.7,-1282.04 1191.13,-1375 1278.69,-1516.73 1197.64,-1587.23 1251.13,-1745 1283.94,-1841.79 1340.47,-1943.52 1384.79,-2015.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1382.36,-2016.65 1388.54,-2021.65 1386.83,-2013.89 1382.36,-2016.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="773.13,-1231.2 773.13,-1254 810.24,-1254 810.24,-1231.2 773.13,-1231.2"/>
<text xml:space="preserve" text-anchor="start" x="776.13" y="-1237" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP</text>
</g>
<!-- workstation&#45;&gt;redmine -->
<g id="edge7" class="edge">
<title>workstation&#45;&gt;redmine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M185.02,-1923.9C207.75,-2256.23 303.53,-3409.02 551.67,-3661 905.1,-4019.89 1167.17,-4086.82 1649.6,-3942 1990.11,-3839.79 2063.32,-3331.58 2079.06,-3113.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2081.68,-3113.29 2079.58,-3105.63 2076.44,-3112.93 2081.68,-3113.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1102.86,-4011.77 1102.86,-4034.57 1139.97,-4034.57 1139.97,-4011.77 1102.86,-4011.77"/>
<text xml:space="preserve" text-anchor="start" x="1105.86" y="-4017.57" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP</text>
</g>
<!-- workstation&#45;&gt;searxng -->
<g id="edge8" class="edge">
<title>workstation&#45;&gt;searxng</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M178.47,-1923.59C180.26,-2177.56 215.88,-2914.32 551.67,-3387 766.45,-3689.33 888.74,-3763.23 1251.13,-3842 1513.37,-3899 1715.87,-3908.62 1828.44,-3665 1902.94,-3503.77 1802.79,-3023.6 1888.44,-2868 1898.14,-2850.38 1910.99,-2834.29 1925.48,-2819.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1926.98,-2821.98 1930.54,-2814.88 1923.33,-2818.2 1926.98,-2821.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1082.62,-3827.46 1082.62,-3850.26 1160.21,-3850.26 1160.21,-3827.46 1082.62,-3827.46"/>
<text xml:space="preserve" text-anchor="start" x="1085.62" y="-3833.26" font-family="Arial" font-size="14.00" fill="#c9c9c9">web search</text>
</g>
<!-- workstation&#45;&gt;openwebui -->
<g id="edge9" class="edge">
<title>workstation&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M192.79,-1923.84C247.98,-2255.16 491.55,-3406.05 1251.13,-3729 1414.11,-3798.29 1496.49,-3818 1649.6,-3729 1788.45,-3648.29 1781.8,-3568.68 1828.44,-3415 1882.59,-3236.56 1798.8,-2741.52 1888.44,-2578 1898.1,-2560.36 1910.94,-2544.26 1925.42,-2529.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1926.91,-2531.94 1930.48,-2524.84 1923.26,-2528.17 1926.91,-2531.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1090.02,-3701 1090.02,-3723.8 1152.81,-3723.8 1152.81,-3701 1090.02,-3701"/>
<text xml:space="preserve" text-anchor="start" x="1093.02" y="-3706.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">RAG API</text>
</g>
<!-- siteb&#45;&gt;openwebui -->
<g id="edge10" class="edge">
<title>siteb&#45;&gt;openwebui</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1630.01,-3206.16C1636.79,-3201.28 1643.35,-3196.22 1649.6,-3191 1749.27,-3107.79 1777,-3079.22 1828.44,-2960 1896.51,-2802.2 1799.56,-2725.09 1888.44,-2578 1899.03,-2560.47 1912.61,-2544.38 1927.68,-2529.8"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1929.29,-2531.88 1932.97,-2524.84 1925.71,-2528.05 1929.29,-2531.88"/>
</g>
<!-- workernode&#45;&gt;redmine -->
<g id="edge11" class="edge">
<title>workernode&#45;&gt;redmine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1618.89,-3617.2C1688.87,-3622.12 1767.81,-3615.1 1828.44,-3575 1985.63,-3471.02 2047.16,-3244.56 2070.28,-3113.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2072.82,-3113.79 2071.5,-3105.96 2067.64,-3112.91 2072.82,-3113.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1750.46,-3614.77 1750.46,-3637.57 1787.57,-3637.57 1787.57,-3614.77 1750.46,-3614.77"/>
<text xml:space="preserve" text-anchor="start" x="1753.46" y="-3620.57" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP</text>
</g>
<!-- workernode&#45;&gt;openwebui -->
<g id="edge12" class="edge">
<title>workernode&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1590.12,-3494.03C1611.32,-3477.12 1631.98,-3458.56 1649.6,-3439 1755.3,-3321.69 1779.11,-3282.01 1828.44,-3132 1905.8,-2896.73 1765.47,-2792.98 1888.44,-2578 1898.51,-2560.38 1911.69,-2544.26 1926.45,-2529.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1928,-2531.84 1931.62,-2524.77 1924.38,-2528.04 1928,-2531.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1724.4,-3365.35 1724.4,-3388.15 1813.64,-3388.15 1813.64,-3365.35 1724.4,-3365.35"/>
<text xml:space="preserve" text-anchor="start" x="1727.4" y="-3371.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">memory sync</text>
</g>
<!-- contentsources&#45;&gt;n8n -->
<g id="edge13" class="edge">
<title>contentsources&#45;&gt;n8n</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M967.3,-136.93C1048.64,-168.01 1138.8,-217.57 1191.13,-294.2 1265.67,-403.36 1207.85,-761.1 1251.13,-886 1278.02,-963.61 1327.57,-1041.59 1370.4,-1100.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1368.04,-1101.41 1374.6,-1105.89 1372.26,-1098.29 1368.04,-1101.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1099.74,-294.2 1099.74,-317 1143.09,-317 1143.09,-294.2 1099.74,-294.2"/>
<text xml:space="preserve" text-anchor="start" x="1102.74" y="-300" font-family="Arial" font-size="14.00" fill="#c9c9c9">ingest</text>
</g>
<!-- chatnetwork&#45;&gt;chatbridge -->
<g id="edge14" class="edge">
<title>chatnetwork&#45;&gt;chatbridge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M213.55,-4365.21C319.52,-4086.81 642.1,-3239.35 752.87,-2948.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="755.27,-2949.42 755.48,-2941.48 750.36,-2947.55 755.27,-2949.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="428.4,-3795.85 428.4,-3818.65 520,-3818.65 520,-3795.85 428.4,-3795.85"/>
<text xml:space="preserve" text-anchor="start" x="431.4" y="-3801.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">E2E transport</text>
</g>
</g>
</svg>
`;case`satellite`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2074pt" height="1171pt"
 viewBox="0.00 0.00 2074.00 1171.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1155.87)">
<g id="clust1" class="cluster">
<title>cluster_siteb</title>
<polygon fill="#304687" stroke="#223761" points="558.86,-271.82 558.86,-1132.82 1571.01,-1132.82 1571.01,-271.82 558.86,-271.82"/>
<text xml:space="preserve" text-anchor="start" x="566.86" y="-1119.92" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE B · SATELLITE</text>
</g>
<!-- piholeb -->
<g id="node1" class="node">
<title>piholeb</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="958.99,-781.82 610.54,-781.82 610.54,-601.82 958.99,-601.82 958.99,-781.82"/>
<text xml:space="preserve" text-anchor="start" x="737.53" y="-703.82" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (B)</text>
<text xml:space="preserve" text-anchor="start" x="650.54" y="-680.82" font-family="Arial" font-size="15.00" fill="#ffffff">Site B ad&#45;blocking DNS. Same role, fully</text>
<text xml:space="preserve" text-anchor="start" x="692.62" y="-662.82" font-family="Arial" font-size="15.00" fill="#ffffff">independent resolver chain.</text>
</g>
<!-- kumab -->
<g id="node2" class="node">
<title>kumab</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="970.67,-1071.82 598.86,-1071.82 598.86,-891.82 970.67,-891.82 970.67,-1071.82"/>
<text xml:space="preserve" text-anchor="start" x="708.08" y="-1002.82" font-family="Arial" font-size="20.00" fill="#ffffff">Uptime Kuma (B)</text>
<text xml:space="preserve" text-anchor="start" x="648.45" y="-979.82" font-family="Arial" font-size="15.00" fill="#ffffff">Uptime monitor, instance 2 of the failover</text>
<text xml:space="preserve" text-anchor="start" x="638.86" y="-961.82" font-family="Arial" font-size="15.00" fill="#ffffff">pair. The watchdog must not die with what it</text>
<text xml:space="preserve" text-anchor="start" x="755.17" y="-943.82" font-family="Arial" font-size="15.00" fill="#ffffff">watches.</text>
</g>
<!-- hamcp -->
<g id="node3" class="node">
<title>hamcp</title>
<polygon fill="#ff6b81" stroke="#d2425d" stroke-width="0" points="966.17,-491.82 603.36,-491.82 603.36,-311.82 966.17,-311.82 966.17,-491.82"/>
<text xml:space="preserve" text-anchor="start" x="680.84" y="-413.82" font-family="Arial" font-size="20.00" fill="#ffffff">Home automation MCP</text>
<text xml:space="preserve" text-anchor="start" x="623.41" y="-390.82" font-family="Arial" font-size="15.00" fill="#ffffff">MCP endpoint exposing the automation instance</text>
<text xml:space="preserve" text-anchor="start" x="644.67" y="-372.82" font-family="Arial" font-size="15.00" fill="#ffffff">to agents, reachable through the gateway.</text>
</g>
<!-- unboundb -->
<g id="node4" class="node">
<title>unboundb</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1530.13,-781.82 1155.91,-781.82 1155.91,-601.82 1530.13,-601.82 1530.13,-781.82"/>
<text xml:space="preserve" text-anchor="start" x="1286.32" y="-703.82" font-family="Arial" font-size="20.00" fill="#ffffff">Unbound (B)</text>
<text xml:space="preserve" text-anchor="start" x="1195.91" y="-680.82" font-family="Arial" font-size="15.00" fill="#ffffff">Site B recursive resolver (DNSSEC), mirrors</text>
<text xml:space="preserve" text-anchor="start" x="1289.66" y="-662.82" font-family="Arial" font-size="15.00" fill="#ffffff">the site A chain.</text>
</g>
<!-- hab -->
<g id="node5" class="node">
<title>hab</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1531.01,-1071.82 1155.03,-1071.82 1155.03,-891.82 1531.01,-891.82 1531.01,-1071.82"/>
<text xml:space="preserve" text-anchor="start" x="1256.89" y="-1002.82" font-family="Arial" font-size="20.00" fill="#ffffff">Home Assistant (B)</text>
<text xml:space="preserve" text-anchor="start" x="1198.99" y="-979.82" font-family="Arial" font-size="15.00" fill="#ffffff">Primary automation instance: ~350 entities,</text>
<text xml:space="preserve" text-anchor="start" x="1195.03" y="-961.82" font-family="Arial" font-size="15.00" fill="#ffffff">Zigbee/Thread border router, voice&#45;assistant</text>
<text xml:space="preserve" text-anchor="start" x="1302.16" y="-943.82" font-family="Arial" font-size="15.00" fill="#ffffff">integrations.</text>
</g>
<!-- sitea -->
<g id="node6" class="node">
<title>sitea</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="339.43,-573.82 0,-573.82 0,-393.82 339.43,-393.82 339.43,-573.82"/>
<text xml:space="preserve" text-anchor="start" x="115.24" y="-495.82" font-family="Arial" font-size="20.00" fill="#ffffff">Site A · hub</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-472.82" font-family="Arial" font-size="15.00" fill="#f8ffff">Primary host. Runs the application core, data</text>
<text xml:space="preserve" text-anchor="start" x="61.32" y="-454.82" font-family="Arial" font-size="15.00" fill="#f8ffff">platform, edge and observability.</text>
</g>
<!-- rootdns -->
<g id="node7" class="node">
<title>rootdns</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2043.72,-781.82 1714.59,-781.82 1714.59,-601.82 2043.72,-601.82 2043.72,-781.82"/>
<text xml:space="preserve" text-anchor="start" x="1734.64" y="-694.82" font-family="Arial" font-size="20.00" fill="#ffffff">Root / authoritative nameservers</text>
<text xml:space="preserve" text-anchor="start" x="1747.42" y="-671.82" font-family="Arial" font-size="15.00" fill="#ffffff">The end of the recursive resolver chain.</text>
</g>
<!-- piholeb&#45;&gt;unboundb -->
<g id="edge6" class="edge">
<title>piholeb&#45;&gt;unboundb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M958.72,-691.82C1017.96,-691.82 1084.67,-691.82 1145.63,-691.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1145.62,-694.45 1153.12,-691.82 1145.62,-689.2 1145.62,-694.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1030.67,-691.82 1030.67,-714.62 1095.03,-714.62 1095.03,-691.82 1030.67,-691.82"/>
<text xml:space="preserve" text-anchor="start" x="1033.67" y="-697.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">upstream</text>
</g>
<!-- kumab&#45;&gt;hab -->
<g id="edge8" class="edge">
<title>kumab&#45;&gt;hab</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M970.6,-981.82C1026.67,-981.82 1088.46,-981.82 1145.28,-981.82"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1144.94,-984.45 1152.44,-981.82 1144.94,-979.2 1144.94,-984.45"/>
</g>
<!-- kumab&#45;&gt;sitea -->
<g id="edge7" class="edge">
<title>kumab&#45;&gt;sitea</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M598.92,-968.58C530.86,-956.15 456.53,-932.9 399.43,-889.82 297.6,-812.99 234.45,-676.79 200.96,-583.5"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="203.5,-582.81 198.52,-576.61 198.55,-584.56 203.5,-582.81"/>
</g>
<!-- unboundb&#45;&gt;rootdns -->
<g id="edge9" class="edge">
<title>unboundb&#45;&gt;rootdns</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1530.09,-691.82C1586.77,-691.82 1648.84,-691.82 1704.66,-691.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1704.48,-694.45 1711.98,-691.82 1704.48,-689.2 1704.48,-694.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1591.01,-691.82 1591.01,-714.62 1654.59,-714.62 1654.59,-691.82 1591.01,-691.82"/>
<text xml:space="preserve" text-anchor="start" x="1594.01" y="-697.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">recursion</text>
</g>
<!-- sitea&#45;&gt;piholeb -->
<g id="edge1" class="edge">
<title>sitea&#45;&gt;piholeb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M339.05,-540.93C420.28,-568.49 517.89,-601.61 600.95,-629.79"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="599.93,-632.22 607.88,-632.14 601.62,-627.25 599.93,-632.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="429.14,-606.45 429.14,-649.65 509.15,-649.65 509.15,-606.45 429.14,-606.45"/>
<text xml:space="preserve" text-anchor="start" x="432.14" y="-632.65" font-family="Arial" font-size="14.00" fill="#ffe0c2">over L3</text>
<text xml:space="preserve" text-anchor="start" x="432.14" y="-611.85" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ metrics pull ]</text>
</g>
<!-- sitea&#45;&gt;kumab -->
<g id="edge2" class="edge">
<title>sitea&#45;&gt;kumab</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M267.95,-580.6C344.16,-654.36 454.44,-756.56 558.86,-836.82 580.59,-853.53 604.26,-870.23 627.8,-886.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="270.06,-579 262.85,-575.66 266.41,-582.77 270.06,-579"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="626.26,-888.18 633.95,-890.16 629.17,-883.81 626.26,-888.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="399.43,-819.46 399.43,-862.66 538.86,-862.66 538.86,-819.46 399.43,-819.46"/>
<text xml:space="preserve" text-anchor="start" x="402.43" y="-845.66" font-family="Arial" font-size="14.00" fill="#c9c9c9">failover pair</text>
<text xml:space="preserve" text-anchor="start" x="402.43" y="-824.86" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ independent instances ]</text>
</g>
<!-- sitea&#45;&gt;hamcp -->
<g id="edge3" class="edge">
<title>sitea&#45;&gt;hamcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M339.05,-461.3C417.74,-450.78 511.8,-438.2 593.11,-427.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="593.38,-429.93 600.47,-426.34 592.69,-424.73 593.38,-429.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="431.53,-452.58 431.53,-475.38 506.76,-475.38 506.76,-452.58 431.53,-452.58"/>
<text xml:space="preserve" text-anchor="start" x="434.53" y="-458.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP proxy</text>
</g>
<!-- sitea&#45;&gt;unboundb -->
<g id="edge4" class="edge">
<title>sitea&#45;&gt;unboundb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M196.2,-393.87C228.06,-297.76 291.92,-147.8 399.43,-62.82 533.94,43.5 958.11,-17.5 970.67,-19.62 1028.37,-29.36 1052.84,-22.28 1095.03,-62.82 1245.33,-207.25 1305.98,-454.19 1329.02,-591.78"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1326.38,-591.93 1330.19,-598.91 1331.56,-591.08 1326.38,-591.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="744.76,-19.62 744.76,-62.82 824.77,-62.82 824.77,-19.62 744.76,-19.62"/>
<text xml:space="preserve" text-anchor="start" x="747.76" y="-45.82" font-family="Arial" font-size="14.00" fill="#ffe0c2">over L3</text>
<text xml:space="preserve" text-anchor="start" x="747.76" y="-25.02" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ metrics pull ]</text>
</g>
<!-- sitea&#45;&gt;hab -->
<g id="edge5" class="edge">
<title>sitea&#45;&gt;hab</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M286.64,-393.89C452.81,-276.75 761.66,-103.94 970.67,-256.82 1079.83,-336.66 1077.61,-725.93 1155.03,-836.82 1167.16,-854.2 1182,-870.46 1197.96,-885.36"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1195.82,-886.95 1203.13,-890.06 1199.35,-883.07 1195.82,-886.95"/>
</g>
</g>
</svg>
`;case`connectivity`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3286pt" height="1357pt"
 viewBox="0.00 0.00 3286.00 1357.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1342.28)">
<!-- user -->
<g id="node1" class="node">
<title>user</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="320.04,-1327.23 0,-1327.23 0,-1147.23 320.04,-1147.23 320.04,-1327.23"/>
<text xml:space="preserve" text-anchor="start" x="138.91" y="-1229.23" font-family="Arial" font-size="20.00" fill="#484d59">User</text>
</g>
<!-- workstation -->
<g id="node2" class="node">
<title>workstation</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="840.12,-1327.23 483.38,-1327.23 483.38,-1147.23 840.12,-1147.23 840.12,-1327.23"/>
<text xml:space="preserve" text-anchor="start" x="531.5" y="-1231.63" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="575.45" y="-1277.03" font-family="Arial" font-size="20.00" fill="#484d59">Workstation · agent hub</text>
<text xml:space="preserve" text-anchor="start" x="818.11" y="-1231.63" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="575.45" y="-1256.03" font-family="Arial" font-size="13.00" fill="#595e6a">Apple</text>
<text xml:space="preserve" text-anchor="start" x="575.45" y="-1234.43" font-family="Arial" font-size="15.00" fill="#595e6a">Daily driver. Runs the agent CLI as</text>
<text xml:space="preserve" text-anchor="start" x="575.45" y="-1216.43" font-family="Arial" font-size="15.00" fill="#595e6a">the hub of the MCP ecosystem,</text>
<text xml:space="preserve" text-anchor="start" x="575.45" y="-1198.43" font-family="Arial" font-size="15.00" fill="#595e6a">offline speech&#45;to&#45;text and local</text>
<text xml:space="preserve" text-anchor="start" x="575.45" y="-1180.43" font-family="Arial" font-size="15.00" fill="#595e6a">LLMs.</text>
</g>
<!-- mobile -->
<g id="node3" class="node">
<title>mobile</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="320.04,-280.23 0,-280.23 0,-100.23 320.04,-100.23 320.04,-280.23"/>
<text xml:space="preserve" text-anchor="start" x="93.88" y="-182.23" font-family="Arial" font-size="20.00" fill="#484d59">Mobile devices</text>
</g>
<!-- tailnet -->
<g id="node4" class="node">
<title>tailnet</title>
<polygon fill="#2fe6a8" stroke="#00bd82" stroke-width="0" points="1433.28,-552.23 1079.71,-552.23 1079.71,-372.23 1433.28,-372.23 1433.28,-552.23"/>
<text xml:space="preserve" text-anchor="start" x="1189.81" y="-501.23" font-family="Arial" font-size="20.00" fill="#004214">Tailscale mesh</text>
<text xml:space="preserve" text-anchor="start" x="1099.76" y="-478.23" font-family="Arial" font-size="15.00" fill="#005424">Mesh VPN (WireGuard&#45;based). Identity instead</text>
<text xml:space="preserve" text-anchor="start" x="1211.47" y="-460.23" font-family="Arial" font-size="15.00" fill="#005424">of addresses:</text>
<text xml:space="preserve" text-anchor="start" x="1123.5" y="-442.23" font-family="Arial" font-size="15.00" fill="#005424">each node gets an overlay identity, NAT</text>
<text xml:space="preserve" text-anchor="start" x="1183.55" y="-424.23" font-family="Arial" font-size="15.00" fill="#005424">traversal is automatic,</text>
<text xml:space="preserve" text-anchor="start" x="1126.84" y="-406.23" font-family="Arial" font-size="15.00" fill="#005424">traffic is end&#45;to&#45;end encrypted between</text>
</g>
<!-- sitea -->
<g id="node5" class="node">
<title>sitea</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="2006.09,-623.23 1666.66,-623.23 1666.66,-443.23 2006.09,-443.23 2006.09,-623.23"/>
<text xml:space="preserve" text-anchor="start" x="1781.9" y="-545.23" font-family="Arial" font-size="20.00" fill="#ffffff">Site A · hub</text>
<text xml:space="preserve" text-anchor="start" x="1686.72" y="-522.23" font-family="Arial" font-size="15.00" fill="#f8ffff">Primary host. Runs the application core, data</text>
<text xml:space="preserve" text-anchor="start" x="1727.98" y="-504.23" font-family="Arial" font-size="15.00" fill="#f8ffff">platform, edge and observability.</text>
</g>
<!-- workernode -->
<g id="node6" class="node">
<title>workernode</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="2684.81,-1053.23 2347.07,-1053.23 2347.07,-873.23 2684.81,-873.23 2684.81,-1053.23"/>
<text xml:space="preserve" text-anchor="start" x="2375.87" y="-993.23" font-family="Arial" font-size="20.00" fill="#ffffff">Agent worker · always&#45;on node</text>
<text xml:space="preserve" text-anchor="start" x="2372.51" y="-970.23" font-family="Arial" font-size="15.00" fill="#f8ffff">Dedicated headless node running a remote</text>
<text xml:space="preserve" text-anchor="start" x="2384.59" y="-952.23" font-family="Arial" font-size="15.00" fill="#f8ffff">agent endpoint: delegated tasks, phone</text>
<text xml:space="preserve" text-anchor="start" x="2367.13" y="-934.23" font-family="Arial" font-size="15.00" fill="#f8ffff">access, shared&#45;memory producer, encrypted</text>
<text xml:space="preserve" text-anchor="start" x="2484.26" y="-916.23" font-family="Arial" font-size="15.00" fill="#f8ffff">file inbox.</text>
</g>
<!-- mdnsrelay -->
<g id="node7" class="node">
<title>mdnsrelay</title>
<polygon fill="#2fe6a8" stroke="#00bd82" stroke-width="0" points="3255.69,-330.23 2932.96,-330.23 2932.96,-150.23 3255.69,-150.23 3255.69,-330.23"/>
<text xml:space="preserve" text-anchor="start" x="3040.43" y="-270.23" font-family="Arial" font-size="20.00" fill="#004214">mDNS relay</text>
<text xml:space="preserve" text-anchor="start" x="2973.02" y="-247.23" font-family="Arial" font-size="15.00" fill="#005424">Userspace relay that bridges service</text>
<text xml:space="preserve" text-anchor="start" x="2983.44" y="-229.23" font-family="Arial" font-size="15.00" fill="#005424">discovery between the two LANs:</text>
<text xml:space="preserve" text-anchor="start" x="2953.02" y="-211.23" font-family="Arial" font-size="15.00" fill="#005424">multicast (Bonjour) is forwarded as unicast</text>
<text xml:space="preserve" text-anchor="start" x="3038.88" y="-193.23" font-family="Arial" font-size="15.00" fill="#005424">over the overlay.</text>
</g>
<!-- siteb -->
<g id="node8" class="node">
<title>siteb</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="2695.69,-330.23 2336.2,-330.23 2336.2,-150.23 2695.69,-150.23 2695.69,-330.23"/>
<text xml:space="preserve" text-anchor="start" x="2444.24" y="-261.23" font-family="Arial" font-size="20.00" fill="#ffffff">Site B · satellite</text>
<text xml:space="preserve" text-anchor="start" x="2389.62" y="-238.23" font-family="Arial" font-size="15.00" fill="#f8ffff">Secondary site: home automation and</text>
<text xml:space="preserve" text-anchor="start" x="2356.25" y="-220.23" font-family="Arial" font-size="15.00" fill="#f8ffff">independent DNS. Keeps working when the hub</text>
<text xml:space="preserve" text-anchor="start" x="2488.43" y="-202.23" font-family="Arial" font-size="15.00" fill="#f8ffff">is down.</text>
</g>
<!-- user&#45;&gt;workstation -->
<g id="edge1" class="edge">
<title>user&#45;&gt;workstation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.83,-1237.23C368.62,-1237.23 422.79,-1237.23 473.31,-1237.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="473.17,-1239.86 480.67,-1237.23 473.17,-1234.61 473.17,-1239.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="380.04,-1237.23 380.04,-1260.03 423.38,-1260.03 423.38,-1237.23 380.04,-1237.23"/>
<text xml:space="preserve" text-anchor="start" x="383.04" y="-1243.03" font-family="Arial" font-size="14.00" fill="#c9c9c9">drives</text>
</g>
<!-- workstation&#45;&gt;tailnet -->
<g id="edge6" class="edge">
<title>workstation&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M731.33,-1147.58C843.37,-1001.08 1064.8,-711.57 1180.73,-559.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1182.54,-561.94 1185.01,-554.39 1178.37,-558.75 1182.54,-561.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="942.52,-919.15 942.52,-941.95 977.31,-941.95 977.31,-919.15 942.52,-919.15"/>
<text xml:space="preserve" text-anchor="start" x="945.52" y="-924.95" font-family="Arial" font-size="14.00" fill="#c9c9c9">joins</text>
</g>
<!-- workstation&#45;&gt;sitea -->
<g id="edge7" class="edge">
<title>workstation&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M839.76,-1224.44C1006.02,-1204.91 1255.19,-1155.62 1433.28,-1031.23 1581.15,-927.96 1550.04,-836.82 1666.66,-699.23 1686.35,-676 1708.79,-652.3 1730.72,-630.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1732.52,-632.27 1735.99,-625.13 1728.82,-628.55 1732.52,-632.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1243,-1180.76 1243,-1203.56 1269.99,-1203.56 1269.99,-1180.76 1243,-1180.76"/>
<text xml:space="preserve" text-anchor="start" x="1246" y="-1188.96" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- workstation&#45;&gt;workernode -->
<g id="edge8" class="edge">
<title>workstation&#45;&gt;workernode</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M839.99,-1279.58C860.17,-1283.13 880.53,-1286.15 900.12,-1288.23 952.97,-1293.85 966.62,-1290.87 1019.71,-1288.23 1580.22,-1260.42 1758.92,-1380.86 2276.2,-1163.23 2331.68,-1139.89 2384.05,-1099.03 2425.53,-1060.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2427.3,-1062.24 2430.95,-1055.18 2423.7,-1058.43 2427.3,-1062.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1497.94,-1296.35 1497.94,-1319.15 1602.01,-1319.15 1602.01,-1296.35 1497.94,-1296.35"/>
<text xml:space="preserve" text-anchor="start" x="1500.94" y="-1302.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">delegated tasks</text>
</g>
<!-- mobile&#45;&gt;tailnet -->
<g id="edge2" class="edge">
<title>mobile&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.76,-109.51C501.01,-29.63 800.69,64.06 1019.71,-61.23 1132.04,-125.5 1196.13,-266.43 1228.36,-362.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1225.79,-363.46 1230.62,-369.77 1230.78,-361.82 1225.79,-363.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="606.62,-46.53 606.62,-69.33 716.88,-69.33 716.88,-46.53 606.62,-46.53"/>
<text xml:space="preserve" text-anchor="start" x="609.62" y="-52.33" font-family="Arial" font-size="14.00" fill="#c9c9c9">joins (always on)</text>
</g>
<!-- mobile&#45;&gt;sitea -->
<g id="edge3" class="edge">
<title>mobile&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.86,-186.38C564.54,-184.8 1045.95,-199.02 1433.28,-317.23 1523.77,-344.85 1617.32,-393.69 1691.39,-437.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1689.95,-440.15 1697.73,-441.77 1692.66,-435.65 1689.95,-440.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="900.12,-228.32 900.12,-251.12 1019.71,-251.12 1019.71,-228.32 900.12,-228.32"/>
<text xml:space="preserve" text-anchor="start" x="903.12" y="-234.12" font-family="Arial" font-size="14.00" fill="#c9c9c9">DNS (tailnet&#45;wide)</text>
</g>
<!-- mobile&#45;&gt;workernode -->
<g id="edge4" class="edge">
<title>mobile&#45;&gt;workernode</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219.09,-280.06C329.38,-441.8 586.39,-778.42 900.12,-921.23 1018.36,-975.06 1936.27,-1003.4 2066.09,-1008.23 2159.41,-1011.71 2183.22,-1016.92 2276.2,-1008.23 2295.96,-1006.39 2316.52,-1003.7 2336.92,-1000.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2337.25,-1003.15 2344.25,-999.38 2336.43,-997.96 2337.25,-1003.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1228.59,-980.5 1228.59,-1003.3 1284.4,-1003.3 1284.4,-980.5 1228.59,-980.5"/>
<text xml:space="preserve" text-anchor="start" x="1231.59" y="-986.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">file drop</text>
</g>
<!-- tailnet&#45;&gt;sitea -->
<g id="edge9" class="edge">
<title>tailnet&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1433.23,-483.83C1503.97,-492.52 1585.46,-502.53 1656.51,-511.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1656.14,-513.86 1663.91,-512.17 1656.78,-508.65 1656.14,-513.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1493.28,-504.09 1493.28,-526.89 1606.66,-526.89 1606.66,-504.09 1493.28,-504.09"/>
<text xml:space="preserve" text-anchor="start" x="1496.28" y="-509.89" font-family="Arial" font-size="14.00" fill="#c9c9c9">exposes services</text>
</g>
<!-- tailnet&#45;&gt;workernode -->
<g id="edge11" class="edge">
<title>tailnet&#45;&gt;workernode</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1386.56,-552.22C1540.72,-654.93 1810.01,-819.48 2066.09,-903.23 2152.8,-931.59 2253.12,-946.57 2336.9,-954.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2336.57,-957.08 2344.28,-955.15 2337.05,-951.85 2336.57,-957.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1779.69,-880.39 1779.69,-903.19 1893.07,-903.19 1893.07,-880.39 1779.69,-880.39"/>
<text xml:space="preserve" text-anchor="start" x="1782.69" y="-886.19" font-family="Arial" font-size="14.00" fill="#c9c9c9">exposes services</text>
</g>
<!-- tailnet&#45;&gt;siteb -->
<g id="edge10" class="edge">
<title>tailnet&#45;&gt;siteb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1433.23,-394.02C1594.84,-335.18 1842.56,-254.71 2066.09,-222.23 2158.5,-208.81 2182.88,-218.72 2276.2,-222.23 2292.36,-222.84 2309.13,-223.68 2325.95,-224.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2325.75,-227.29 2333.4,-225.12 2326.07,-222.05 2325.75,-227.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1779.69,-315.56 1779.69,-338.36 1893.07,-338.36 1893.07,-315.56 1779.69,-315.56"/>
<text xml:space="preserve" text-anchor="start" x="1782.69" y="-321.36" font-family="Arial" font-size="14.00" fill="#c9c9c9">exposes services</text>
</g>
<!-- sitea&#45;&gt;workernode -->
<g id="edge14" class="edge">
<title>sitea&#45;&gt;workernode</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1920.63,-623.23C1961.66,-664.08 2013.55,-710.83 2066.09,-745.23 2151.35,-801.06 2184.4,-792.79 2276.2,-837.03 2296.89,-847.01 2318.41,-857.79 2339.68,-868.7"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2338.22,-870.9 2346.09,-872 2340.62,-866.23 2338.22,-870.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2124.45,-837.03 2124.45,-880.23 2217.84,-880.23 2217.84,-837.03 2124.45,-837.03"/>
<text xml:space="preserve" text-anchor="start" x="2127.45" y="-863.23" font-family="Arial" font-size="14.00" fill="#ffe0c2">over tailnet</text>
<text xml:space="preserve" text-anchor="start" x="2127.45" y="-842.43" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ node exporter ]</text>
</g>
<!-- sitea&#45;&gt;mdnsrelay -->
<g id="edge12" class="edge">
<title>sitea&#45;&gt;mdnsrelay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2016.07,-521.73C2096.02,-515.05 2191.21,-504.95 2276.2,-490.23 2465.57,-457.44 2511.94,-441.57 2695.69,-385.23 2771.17,-362.09 2853.34,-332.84 2923.29,-306.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2016.18,-519.09 2008.92,-522.32 2016.61,-524.32 2016.18,-519.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2924.14,-309.15 2930.24,-304.06 2922.29,-304.24 2924.14,-309.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2457.31,-478.86 2457.31,-501.66 2574.58,-501.66 2574.58,-478.86 2457.31,-478.86"/>
<text xml:space="preserve" text-anchor="start" x="2460.31" y="-484.66" font-family="Arial" font-size="14.00" fill="#c9c9c9">Bonjour discovery</text>
</g>
<!-- sitea&#45;&gt;siteb -->
<g id="edge13" class="edge">
<title>sitea&#45;&gt;siteb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1911.15,-435.55C1951.67,-389.05 2005.89,-337.15 2066.09,-307.03 2145.74,-267.2 2242.56,-249.52 2325.86,-242.19"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1909.39,-433.57 1906.49,-440.97 1913.37,-437 1909.39,-433.57"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2325.94,-244.82 2333.19,-241.58 2325.5,-239.59 2325.94,-244.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2066.09,-307.03 2066.09,-350.23 2276.2,-350.23 2276.2,-307.03 2066.09,-307.03"/>
<text xml:space="preserve" text-anchor="start" x="2069.09" y="-333.23" font-family="Arial" font-size="14.00" fill="#ffe0c2">L3 site&#45;to&#45;site</text>
<text xml:space="preserve" text-anchor="start" x="2069.09" y="-312.43" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ WireGuard tunnel between the sites ]</text>
</g>
<!-- workernode&#45;&gt;sitea -->
<g id="edge17" class="edge">
<title>workernode&#45;&gt;sitea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2447.43,-873.25C2403.47,-819.63 2342.17,-753.46 2276.2,-708.43 2231.56,-677.97 2116.64,-632.46 2015.61,-595.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2016.66,-593.05 2008.72,-592.94 2014.86,-597.98 2016.66,-593.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2157.65,-708.43 2157.65,-731.23 2184.64,-731.23 2184.64,-708.43 2157.65,-708.43"/>
<text xml:space="preserve" text-anchor="start" x="2160.65" y="-716.63" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- mdnsrelay&#45;&gt;tailnet -->
<g id="edge5" class="edge">
<title>mdnsrelay&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2933.4,-167.42C2862.2,-138.83 2776.37,-109.49 2695.69,-95.23 2242.75,-15.23 2098.14,-45.93 1666.66,-205.23 1563.02,-243.5 1457.73,-310.41 1379.91,-366.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1378.5,-364.15 1373.96,-370.67 1381.58,-368.4 1378.5,-364.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2108.12,-77.47 2108.12,-120.67 2234.17,-120.67 2234.17,-77.47 2108.12,-77.47"/>
<text xml:space="preserve" text-anchor="start" x="2111.12" y="-103.67" font-family="Arial" font-size="14.00" fill="#c9c9c9">transport</text>
<text xml:space="preserve" text-anchor="start" x="2111.12" y="-82.87" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ unicast over overlay ]</text>
</g>
<!-- siteb&#45;&gt;sitea -->
<g id="edge16" class="edge">
<title>siteb&#45;&gt;sitea</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M2362.04,-330.1C2333.89,-345.29 2304.46,-360.31 2276.2,-373.23 2192.4,-411.56 2096.54,-447.38 2015.83,-475.38"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2015.16,-472.83 2008.92,-477.76 2016.87,-477.8 2015.16,-472.83"/>
</g>
<!-- siteb&#45;&gt;mdnsrelay -->
<g id="edge15" class="edge">
<title>siteb&#45;&gt;mdnsrelay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2705.69,-240.23C2775.7,-240.23 2854.63,-240.23 2922.91,-240.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2705.89,-237.61 2698.39,-240.23 2705.89,-242.86 2705.89,-237.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2922.82,-242.86 2930.32,-240.23 2922.82,-237.61 2922.82,-242.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2755.69,-240.23 2755.69,-263.03 2872.96,-263.03 2872.96,-240.23 2755.69,-240.23"/>
<text xml:space="preserve" text-anchor="start" x="2758.69" y="-246.03" font-family="Arial" font-size="14.00" fill="#c9c9c9">Bonjour discovery</text>
</g>
</g>
</svg>
`;case`data`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2861pt" height="1804pt"
 viewBox="0.00 0.00 2861.00 1804.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1789.05)">
<g id="clust1" class="cluster">
<title>cluster_workernode</title>
<polygon fill="#304687" stroke="#223761" points="1194.09,-1501 1194.09,-1766 1597.42,-1766 1597.42,-1501 1194.09,-1501"/>
<text xml:space="preserve" text-anchor="start" x="1202.09" y="-1753.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">AGENT WORKER · ALWAYS&#45;ON NODE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_sitea</title>
<polygon fill="#304687" stroke="#223761" points="526.89,-377 526.89,-1462 2823.05,-1462 2823.05,-377 526.89,-377"/>
<text xml:space="preserve" text-anchor="start" x="534.89" y="-1449.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE A · HUB</text>
</g>
<!-- agentapi -->
<g id="node1" class="node">
<title>agentapi</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1565.42,-1713 1226.09,-1713 1226.09,-1533 1565.42,-1533 1565.42,-1713"/>
<text xml:space="preserve" text-anchor="start" x="1328.47" y="-1635" font-family="Arial" font-size="20.00" fill="#ffffff">Agent endpoint</text>
<text xml:space="preserve" text-anchor="start" x="1266.09" y="-1612" font-family="Arial" font-size="15.00" fill="#ffffff">Remote agent API: delegation from the</text>
<text xml:space="preserve" text-anchor="start" x="1291.54" y="-1594" font-family="Arial" font-size="15.00" fill="#ffffff">workstation and mobile access.</text>
</g>
<!-- n8n -->
<g id="node2" class="node">
<title>n8n</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="944.16,-954 584.03,-954 584.03,-774 944.16,-774 944.16,-954"/>
<text xml:space="preserve" text-anchor="start" x="747.41" y="-885" font-family="Arial" font-size="20.00" fill="#ffffff">n8n</text>
<text xml:space="preserve" text-anchor="start" x="624.03" y="-862" font-family="Arial" font-size="15.00" fill="#ffffff">Workflow orchestrator, the ETL backbone:</text>
<text xml:space="preserve" text-anchor="start" x="640.68" y="-844" font-family="Arial" font-size="15.00" fill="#ffffff">ingest, AI scoring, dedup, KB upload,</text>
<text xml:space="preserve" text-anchor="start" x="649.87" y="-826" font-family="Arial" font-size="15.00" fill="#ffffff">digests, backups, mail processing.</text>
</g>
<!-- chatbridge -->
<g id="node3" class="node">
<title>chatbridge</title>
<polygon fill="#ffd166" stroke="#d4aa40" stroke-width="0" points="961.29,-644 566.89,-644 566.89,-464 961.29,-464 961.29,-644"/>
<text xml:space="preserve" text-anchor="start" x="712.4" y="-575" font-family="Arial" font-size="20.00" fill="#503700">Chat bridge</text>
<text xml:space="preserve" text-anchor="start" x="608.16" y="-552" font-family="Arial" font-size="15.00" fill="#634700">Bridges the end&#45;to&#45;end encrypted chat channel</text>
<text xml:space="preserve" text-anchor="start" x="606.89" y="-534" font-family="Arial" font-size="15.00" fill="#634700">to the hub agent. Loopback&#45;only API, hardened</text>
<text xml:space="preserve" text-anchor="start" x="731.16" y="-516" font-family="Arial" font-size="15.00" fill="#634700">container.</text>
</g>
<!-- dsh -->
<g id="node4" class="node">
<title>dsh</title>
<polygon fill="#ffd166" stroke="#d4aa40" stroke-width="0" points="1582.8,-644 1208.71,-644 1208.71,-464 1582.8,-464 1582.8,-644"/>
<text xml:space="preserve" text-anchor="start" x="1276.78" y="-548.4" font-family="Arial" font-size="14.00" fill="#503700"> </text>
<text xml:space="preserve" text-anchor="start" x="1320.72" y="-593.8" font-family="Arial" font-size="20.00" fill="#503700">Agent harness</text>
<text xml:space="preserve" text-anchor="start" x="1540.84" y="-548.4" font-family="Arial" font-size="14.00" fill="#503700"> </text>
<text xml:space="preserve" text-anchor="start" x="1320.72" y="-572.8" font-family="Arial" font-size="13.00" fill="#634700">Nodejs</text>
<text xml:space="preserve" text-anchor="start" x="1320.72" y="-551.2" font-family="Arial" font-size="15.00" fill="#634700">Long&#45;running agent on the hub:</text>
<text xml:space="preserve" text-anchor="start" x="1320.72" y="-533.2" font-family="Arial" font-size="15.00" fill="#634700">daily digests to the tracker,</text>
<text xml:space="preserve" text-anchor="start" x="1320.72" y="-515.2" font-family="Arial" font-size="15.00" fill="#634700">shared&#45;memory producer, MCP</text>
<text xml:space="preserve" text-anchor="start" x="1320.72" y="-497.2" font-family="Arial" font-size="15.00" fill="#634700">clients.</text>
</g>
<!-- openwebui -->
<g id="node5" class="node">
<title>openwebui</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2191.23,-887 1832.75,-887 1832.75,-707 2191.23,-707 2191.23,-887"/>
<text xml:space="preserve" text-anchor="start" x="1956.97" y="-818" font-family="Arial" font-size="20.00" fill="#ffffff">OpenWebUI</text>
<text xml:space="preserve" text-anchor="start" x="1874.82" y="-795" font-family="Arial" font-size="15.00" fill="#ffffff">Knowledge base hub and RAG front&#45;end:</text>
<text xml:space="preserve" text-anchor="start" x="1886.3" y="-777" font-family="Arial" font-size="15.00" fill="#ffffff">OpenAI&#45;compatible API, ~30 thematic</text>
<text xml:space="preserve" text-anchor="start" x="1872.75" y="-759" font-family="Arial" font-size="15.00" fill="#ffffff">collections, chat interface for local agents.</text>
</g>
<!-- redmine -->
<g id="node6" class="node">
<title>redmine</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2193.7,-1289 1830.28,-1289 1830.28,-1109 2193.7,-1109 2193.7,-1289"/>
<text xml:space="preserve" text-anchor="start" x="1971.97" y="-1211" font-family="Arial" font-size="20.00" fill="#ffffff">Redmine</text>
<text xml:space="preserve" text-anchor="start" x="1873.59" y="-1188" font-family="Arial" font-size="15.00" fill="#ffffff">Task and project tracker. Single source of</text>
<text xml:space="preserve" text-anchor="start" x="1870.28" y="-1170" font-family="Arial" font-size="15.00" fill="#ffffff">truth for work items, wiki and time tracking.</text>
</g>
<!-- searxng -->
<g id="node7" class="node">
<title>searxng</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="2194.58,-597 1829.4,-597 1829.4,-417 2194.58,-417 2194.58,-597"/>
<text xml:space="preserve" text-anchor="start" x="1969.2" y="-528" font-family="Arial" font-size="20.00" fill="#ffffff">SearXNG</text>
<text xml:space="preserve" text-anchor="start" x="1869.4" y="-505" font-family="Arial" font-size="15.00" fill="#ffffff">Self&#45;hosted metasearch aggregating public</text>
<text xml:space="preserve" text-anchor="start" x="1880.24" y="-487" font-family="Arial" font-size="15.00" fill="#ffffff">engines: no tracking, no API quota. The</text>
<text xml:space="preserve" text-anchor="start" x="1884.44" y="-469" font-family="Arial" font-size="15.00" fill="#ffffff">zero&#45;cost web&#45;search layer for agents.</text>
</g>
<!-- qdrant -->
<g id="node8" class="node">
<title>qdrant</title>
<path fill="#9d6bff" stroke="#7346d5" stroke-width="2" d="M2778.87,-870.63C2778.87,-879.66 2701.35,-887 2605.91,-887 2510.48,-887 2432.96,-879.66 2432.96,-870.63 2432.96,-870.63 2432.96,-723.36 2432.96,-723.36 2432.96,-714.33 2510.48,-707 2605.91,-707 2701.35,-707 2778.87,-714.33 2778.87,-723.36 2778.87,-723.36 2778.87,-870.63 2778.87,-870.63"/>
<path fill="none" stroke="#7346d5" stroke-width="2" d="M2778.87,-870.63C2778.87,-861.61 2701.35,-854.27 2605.91,-854.27 2510.48,-854.27 2432.96,-861.61 2432.96,-870.63"/>
<text xml:space="preserve" text-anchor="start" x="2481.08" y="-791.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2525.02" y="-827.8" font-family="Arial" font-size="20.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="2756.86" y="-791.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2525.02" y="-806.8" font-family="Arial" font-size="13.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="2525.02" y="-785.2" font-family="Arial" font-size="15.00" fill="#ffffff">Vector database: embeddings for</text>
<text xml:space="preserve" text-anchor="start" x="2525.02" y="-767.2" font-family="Arial" font-size="15.00" fill="#ffffff">semantic search, plus lock/dedup</text>
<text xml:space="preserve" text-anchor="start" x="2525.02" y="-749.2" font-family="Arial" font-size="15.00" fill="#ffffff">store for ingestion pipelines.</text>
</g>
<!-- postgres -->
<g id="node9" class="node">
<title>postgres</title>
<path fill="#9d6bff" stroke="#7346d5" stroke-width="2" d="M2783.05,-1272.63C2783.05,-1281.66 2703.66,-1289 2605.91,-1289 2508.17,-1289 2428.77,-1281.66 2428.77,-1272.63 2428.77,-1272.63 2428.77,-1125.36 2428.77,-1125.36 2428.77,-1116.33 2508.17,-1109 2605.91,-1109 2703.66,-1109 2783.05,-1116.33 2783.05,-1125.36 2783.05,-1125.36 2783.05,-1272.63 2783.05,-1272.63"/>
<path fill="none" stroke="#7346d5" stroke-width="2" d="M2783.05,-1272.63C2783.05,-1263.61 2703.66,-1256.27 2605.91,-1256.27 2508.17,-1256.27 2428.77,-1263.61 2428.77,-1272.63"/>
<text xml:space="preserve" text-anchor="start" x="2476.89" y="-1193.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2520.83" y="-1220.8" font-family="Arial" font-size="20.00" fill="#ffffff">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="2761.05" y="-1193.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2520.83" y="-1199.8" font-family="Arial" font-size="13.00" fill="#ffffff">Postgresql</text>
<text xml:space="preserve" text-anchor="start" x="2520.83" y="-1178.2" font-family="Arial" font-size="15.00" fill="#ffffff">Relational database for application</text>
<text xml:space="preserve" text-anchor="start" x="2520.83" y="-1160.2" font-family="Arial" font-size="15.00" fill="#ffffff">data and analytics.</text>
</g>
<!-- contentsources -->
<g id="node10" class="node">
<title>contentsources</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="353.5,-954 1.79,-954 1.79,-774 353.5,-774 353.5,-954"/>
<text xml:space="preserve" text-anchor="start" x="49.91" y="-858.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-903.8" font-family="Arial" font-size="20.00" fill="#ffffff">Content sources</text>
<text xml:space="preserve" text-anchor="start" x="331.49" y="-858.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-882.8" font-family="Arial" font-size="13.00" fill="#ffffff">Youtube</text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-861.2" font-family="Arial" font-size="15.00" fill="#ffffff">RSS feeds, video playlists, e&#45;mail,</text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-843.2" font-family="Arial" font-size="15.00" fill="#ffffff">voice memos, saved articles, NAS</text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-825.2" font-family="Arial" font-size="15.00" fill="#ffffff">folders: raw material for ingestion</text>
<text xml:space="preserve" text-anchor="start" x="93.86" y="-807.2" font-family="Arial" font-size="15.00" fill="#ffffff">pipelines.</text>
</g>
<!-- chatnetwork -->
<g id="node11" class="node">
<title>chatnetwork</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="355.3,-644 0,-644 0,-464 355.3,-464 355.3,-644"/>
<text xml:space="preserve" text-anchor="start" x="99.27" y="-575" font-family="Arial" font-size="20.00" fill="#ffffff">E2E chat network</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-552" font-family="Arial" font-size="15.00" fill="#ffffff">Decentralised end&#45;to&#45;end encrypted messaging</text>
<text xml:space="preserve" text-anchor="start" x="24.64" y="-534" font-family="Arial" font-size="15.00" fill="#ffffff">network. No phone number, no global identity.</text>
<text xml:space="preserve" text-anchor="start" x="30.87" y="-516" font-family="Arial" font-size="15.00" fill="#ffffff">The only inbound channel for the hub agent.</text>
</g>
<!-- cloudutils -->
<g id="node12" class="node">
<title>cloudutils</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="1567.47,-337 1224.04,-337 1224.04,-157 1567.47,-157 1567.47,-337"/>
<text xml:space="preserve" text-anchor="start" x="1272.16" y="-241.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1316.1" y="-277.8" font-family="Arial" font-size="20.00" fill="#ffffff">Cloud utilities</text>
<text xml:space="preserve" text-anchor="start" x="1545.46" y="-241.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1316.1" y="-256.8" font-family="Arial" font-size="13.00" fill="#ffffff">Google Drive</text>
<text xml:space="preserve" text-anchor="start" x="1316.1" y="-235.2" font-family="Arial" font-size="15.00" fill="#ffffff">Off&#45;site destination for workflow</text>
<text xml:space="preserve" text-anchor="start" x="1316.1" y="-217.2" font-family="Arial" font-size="15.00" fill="#ffffff">backups and delivery channel for</text>
<text xml:space="preserve" text-anchor="start" x="1316.1" y="-199.2" font-family="Arial" font-size="15.00" fill="#ffffff">pipeline and uptime reports.</text>
</g>
<!-- aiapis -->
<g id="node13" class="node">
<title>aiapis</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2789.31,-337 2422.52,-337 2422.52,-157 2789.31,-157 2789.31,-337"/>
<text xml:space="preserve" text-anchor="start" x="2470.63" y="-241.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2514.58" y="-295.8" font-family="Arial" font-size="20.00" fill="#ffffff">AI APIs</text>
<text xml:space="preserve" text-anchor="start" x="2767.3" y="-241.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2514.58" y="-274.8" font-family="Arial" font-size="13.00" fill="#ffffff">Openai</text>
<text xml:space="preserve" text-anchor="start" x="2514.58" y="-253.2" font-family="Arial" font-size="15.00" fill="#ffffff">External language and speech APIs:</text>
<text xml:space="preserve" text-anchor="start" x="2514.58" y="-235.2" font-family="Arial" font-size="15.00" fill="#ffffff">primary model family (scoring,</text>
<text xml:space="preserve" text-anchor="start" x="2514.58" y="-217.2" font-family="Arial" font-size="15.00" fill="#ffffff">drafts, synthesis), classification,</text>
<text xml:space="preserve" text-anchor="start" x="2514.58" y="-199.2" font-family="Arial" font-size="15.00" fill="#ffffff">speech&#45;to&#45;text. Non&#45;sensitive</text>
<text xml:space="preserve" text-anchor="start" x="2514.58" y="-181.2" font-family="Arial" font-size="15.00" fill="#ffffff">content only.</text>
</g>
<!-- agentapi&#45;&gt;openwebui -->
<g id="edge3" class="edge">
<title>agentapi&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1565.38,-1540.77C1650.93,-1495.71 1742.39,-1441.22 1769.4,-1402 1858.43,-1272.74 1769.31,-1198.99 1829.4,-1054 1852.98,-997.1 1891.01,-940.48 1926.18,-894.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1928.08,-896.76 1930.63,-889.23 1923.94,-893.53 1928.08,-896.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1661.48,-1496.5 1661.48,-1519.3 1750.72,-1519.3 1750.72,-1496.5 1661.48,-1496.5"/>
<text xml:space="preserve" text-anchor="start" x="1664.48" y="-1502.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">memory sync</text>
</g>
<!-- agentapi&#45;&gt;redmine -->
<g id="edge4" class="edge">
<title>agentapi&#45;&gt;redmine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1565.22,-1611.82C1633.1,-1600.89 1709.38,-1579.91 1769.4,-1540 1858.81,-1480.55 1925.58,-1375.88 1966.01,-1298.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1968.33,-1299.36 1969.42,-1291.49 1963.66,-1296.96 1968.33,-1299.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1687.54,-1594.04 1687.54,-1616.84 1724.65,-1616.84 1724.65,-1594.04 1687.54,-1594.04"/>
<text xml:space="preserve" text-anchor="start" x="1690.54" y="-1599.84" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP</text>
</g>
<!-- n8n&#45;&gt;openwebui -->
<g id="edge6" class="edge">
<title>n8n&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M943.93,-854.38C1177.4,-841.83 1584.23,-819.95 1822.41,-807.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1822.55,-809.76 1829.9,-806.74 1822.27,-804.52 1822.55,-809.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1360.45,-840.41 1360.45,-863.21 1431.06,-863.21 1431.06,-840.41 1360.45,-840.41"/>
<text xml:space="preserve" text-anchor="start" x="1363.45" y="-846.21" font-family="Arial" font-size="14.00" fill="#c9c9c9">KB upload</text>
</g>
<!-- n8n&#45;&gt;qdrant -->
<g id="edge8" class="edge">
<title>n8n&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M944.01,-899.19C1216.15,-947.02 1749.5,-1018.32 2194.58,-942 2271.21,-928.86 2352.54,-902.85 2422.41,-876.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2423.29,-878.92 2429.36,-873.79 2421.42,-874.01 2423.29,-878.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1643.95,-975.53 1643.95,-998.33 1768.24,-998.33 1768.24,-975.53 1643.95,-975.53"/>
<text xml:space="preserve" text-anchor="start" x="1646.95" y="-981.33" font-family="Arial" font-size="14.00" fill="#c9c9c9">embeddings &amp; lock</text>
</g>
<!-- n8n&#45;&gt;postgres -->
<g id="edge9" class="edge">
<title>n8n&#45;&gt;postgres</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M910.61,-953.85C1109.42,-1070.81 1481.12,-1269.09 1829.4,-1344 1988.07,-1378.12 2034.61,-1371.43 2194.58,-1344 2269.7,-1331.12 2349.34,-1305.87 2418.26,-1280"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2419,-1282.53 2425.09,-1277.42 2417.14,-1277.62 2419,-1282.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1661.85,-1327.28 1661.85,-1350.08 1750.35,-1350.08 1750.35,-1327.28 1661.85,-1327.28"/>
<text xml:space="preserve" text-anchor="start" x="1664.85" y="-1333.08" font-family="Arial" font-size="14.00" fill="#c9c9c9">pipeline state</text>
</g>
<!-- n8n&#45;&gt;cloudutils -->
<g id="edge5" class="edge">
<title>n8n&#45;&gt;cloudutils</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M894.01,-774.02C919.03,-751.82 943.1,-726.45 961.29,-699 1011.33,-623.48 972.37,-580.44 1021.29,-504.2 1076.88,-417.57 1109.22,-408.24 1194.09,-350 1201,-345.26 1208.15,-340.6 1215.46,-336.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1216.51,-338.46 1221.52,-332.29 1213.76,-333.99 1216.51,-338.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1025.59,-504.2 1025.59,-527 1144.42,-527 1144.42,-504.2 1025.59,-504.2"/>
<text xml:space="preserve" text-anchor="start" x="1028.59" y="-510" font-family="Arial" font-size="14.00" fill="#c9c9c9">backups &amp; reports</text>
</g>
<!-- n8n&#45;&gt;aiapis -->
<g id="edge7" class="edge">
<title>n8n&#45;&gt;aiapis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M898.44,-774.08C922.63,-752.15 945.25,-726.87 961.29,-699 1038.51,-564.88 963.13,-499.41 1021.29,-356 1072.61,-229.47 1073.41,-165.86 1194.09,-102 1587.62,106.24 2129.09,-52.03 2413.18,-162.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2412,-165.31 2419.94,-165.61 2413.92,-160.42 2412,-165.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1642.8,-4.3 1642.8,-27.1 1769.4,-27.1 1769.4,-4.3 1642.8,-4.3"/>
<text xml:space="preserve" text-anchor="start" x="1645.8" y="-10.1" font-family="Arial" font-size="14.00" fill="#c9c9c9">scoring &amp; synthesis</text>
</g>
<!-- chatbridge&#45;&gt;dsh -->
<g id="edge10" class="edge">
<title>chatbridge&#45;&gt;dsh</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M960.87,-554C1036.54,-554 1122.96,-554 1198.65,-554"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1198.26,-556.62 1205.76,-554 1198.26,-551.37 1198.26,-556.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1021.29,-554 1021.29,-576.8 1148.71,-576.8 1148.71,-554 1021.29,-554"/>
<text xml:space="preserve" text-anchor="start" x="1024.29" y="-559.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">loopback agent API</text>
</g>
<!-- dsh&#45;&gt;openwebui -->
<g id="edge11" class="edge">
<title>dsh&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1582.71,-627.57C1658.82,-657.67 1746.74,-692.46 1823.05,-722.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1822.02,-725.06 1829.96,-725.38 1823.95,-720.18 1822.02,-725.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1654.47,-697.26 1654.47,-720.06 1757.73,-720.06 1757.73,-697.26 1654.47,-697.26"/>
<text xml:space="preserve" text-anchor="start" x="1657.47" y="-703.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">shared memory</text>
</g>
<!-- dsh&#45;&gt;redmine -->
<g id="edge12" class="edge">
<title>dsh&#45;&gt;redmine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1528.98,-643.87C1555.52,-667.88 1580.44,-695.91 1597.42,-727 1666.48,-853.45 1554.34,-934.26 1642.8,-1048 1686.56,-1104.27 1754.85,-1139.71 1820.8,-1161.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1819.69,-1164.37 1827.63,-1164.21 1821.32,-1159.38 1819.69,-1164.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1668.08,-1137.68 1668.08,-1160.48 1744.12,-1160.48 1744.12,-1137.68 1668.08,-1137.68"/>
<text xml:space="preserve" text-anchor="start" x="1671.08" y="-1143.48" font-family="Arial" font-size="14.00" fill="#c9c9c9">daily digest</text>
</g>
<!-- dsh&#45;&gt;searxng -->
<g id="edge13" class="edge">
<title>dsh&#45;&gt;searxng</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1582.71,-539.77C1657.65,-534.04 1744.04,-527.42 1819.52,-521.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1819.33,-524.3 1826.6,-521.11 1818.93,-519.06 1819.33,-524.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1667.3,-534.71 1667.3,-557.51 1744.9,-557.51 1744.9,-534.71 1667.3,-534.71"/>
<text xml:space="preserve" text-anchor="start" x="1670.3" y="-540.51" font-family="Arial" font-size="14.00" fill="#c9c9c9">web search</text>
</g>
<!-- openwebui&#45;&gt;qdrant -->
<g id="edge15" class="edge">
<title>openwebui&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2190.99,-797C2263.91,-797 2348.25,-797 2421.7,-797"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2421.47,-799.62 2428.97,-797 2421.47,-794.37 2421.47,-799.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2267.41,-797 2267.41,-819.8 2349.68,-819.8 2349.68,-797 2267.41,-797"/>
<text xml:space="preserve" text-anchor="start" x="2270.41" y="-802.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">embeddings</text>
</g>
<!-- openwebui&#45;&gt;aiapis -->
<g id="edge14" class="edge">
<title>openwebui&#45;&gt;aiapis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2134.38,-707.08C2155.26,-689.68 2176.15,-670.94 2194.58,-652 2311.85,-531.48 2296,-460.78 2422.52,-350 2425.2,-347.65 2427.94,-345.33 2430.73,-343.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2432.14,-345.28 2436.38,-338.56 2428.87,-341.17 2432.14,-345.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2254.58,-578.73 2254.58,-601.53 2362.52,-601.53 2362.52,-578.73 2254.58,-578.73"/>
<text xml:space="preserve" text-anchor="start" x="2257.58" y="-584.53" font-family="Arial" font-size="14.00" fill="#c9c9c9">chat &amp; synthesis</text>
</g>
<!-- redmine&#45;&gt;postgres -->
<g id="edge16" class="edge">
<title>redmine&#45;&gt;postgres</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2193.4,-1199C2264.3,-1199 2345.7,-1199 2417.28,-1199"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2417.25,-1201.62 2424.75,-1199 2417.25,-1196.37 2417.25,-1201.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2291.92,-1199 2291.92,-1221.8 2325.17,-1221.8 2325.17,-1199 2291.92,-1199"/>
<text xml:space="preserve" text-anchor="start" x="2294.92" y="-1204.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">data</text>
</g>
<!-- contentsources&#45;&gt;n8n -->
<g id="edge1" class="edge">
<title>contentsources&#45;&gt;n8n</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M353.21,-864C422.7,-864 502.84,-864 573.73,-864"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="573.59,-866.62 581.09,-864 573.59,-861.37 573.59,-866.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="439.42,-864 439.42,-886.8 482.77,-886.8 482.77,-864 439.42,-864"/>
<text xml:space="preserve" text-anchor="start" x="442.42" y="-869.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">ingest</text>
</g>
<!-- chatnetwork&#45;&gt;chatbridge -->
<g id="edge2" class="edge">
<title>chatnetwork&#45;&gt;chatbridge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.19,-554C418.67,-554 490.83,-554 556.62,-554"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="556.6,-556.62 564.1,-554 556.6,-551.37 556.6,-556.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="415.3,-554 415.3,-576.8 506.89,-576.8 506.89,-554 415.3,-554"/>
<text xml:space="preserve" text-anchor="start" x="418.3" y="-559.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">E2E transport</text>
</g>
</g>
</svg>
`;case`observability`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1799pt" height="2866pt"
 viewBox="0.00 0.00 1799.00 2866.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2851.05)">
<g id="clust1" class="cluster">
<title>cluster_sitea</title>
<polygon fill="#304687" stroke="#223761" points="8,-1191 8,-2828 1761.18,-2828 1761.18,-1191 8,-1191"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-2815.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE A · HUB</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_workernode</title>
<polygon fill="#304687" stroke="#223761" points="705.04,-909 705.04,-1174 1108.36,-1174 1108.36,-909 705.04,-909"/>
<text xml:space="preserve" text-anchor="start" x="713.04" y="-1161.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">AGENT WORKER · ALWAYS&#45;ON NODE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_siteb</title>
<polygon fill="#304687" stroke="#223761" points="679.59,-8 679.59,-892 1133.8,-892 1133.8,-8 679.59,-8"/>
<text xml:space="preserve" text-anchor="start" x="687.59" y="-879.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE B · SATELLITE</text>
</g>
<!-- prometheus -->
<g id="node1" class="node">
<title>prometheus</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="448.03,-2169 48,-2169 48,-1989 448.03,-1989 448.03,-2169"/>
<text xml:space="preserve" text-anchor="start" x="116.06" y="-2073.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="160.01" y="-2127.8" font-family="Arial" font-size="20.00" fill="#ffffff">Prometheus</text>
<text xml:space="preserve" text-anchor="start" x="406.08" y="-2073.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="160.01" y="-2106.8" font-family="Arial" font-size="13.00" fill="#ffffff">Prometheus</text>
<text xml:space="preserve" text-anchor="start" x="160.01" y="-2085.2" font-family="Arial" font-size="15.00" fill="#ffffff">Metrics TSDB. Scrapes exporters</text>
<text xml:space="preserve" text-anchor="start" x="160.01" y="-2067.2" font-family="Arial" font-size="15.00" fill="#ffffff">every 60s, including the satellite</text>
<text xml:space="preserve" text-anchor="start" x="160.01" y="-2049.2" font-family="Arial" font-size="15.00" fill="#ffffff">site and the agent node over the L3</text>
<text xml:space="preserve" text-anchor="start" x="160.01" y="-2031.2" font-family="Arial" font-size="15.00" fill="#ffffff">tunnel. 30&#45;day retention, alert</text>
<text xml:space="preserve" text-anchor="start" x="160.01" y="-2013.2" font-family="Arial" font-size="15.00" fill="#ffffff">rules.</text>
</g>
<!-- homepage -->
<g id="node2" class="node">
<title>homepage</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="432.26,-2767 63.77,-2767 63.77,-2587 432.26,-2587 432.26,-2767"/>
<text xml:space="preserve" text-anchor="start" x="199.09" y="-2689" font-family="Arial" font-size="20.00" fill="#ffffff">Homepage</text>
<text xml:space="preserve" text-anchor="start" x="103.77" y="-2666" font-family="Arial" font-size="15.00" fill="#ffffff">Start page aggregating all services with live</text>
<text xml:space="preserve" text-anchor="start" x="220.5" y="-2648" font-family="Arial" font-size="15.00" fill="#ffffff">widgets.</text>
</g>
<!-- kumaa -->
<g id="node3" class="node">
<title>kumaa</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="424.33,-1411 71.7,-1411 71.7,-1231 424.33,-1231 424.33,-1411"/>
<text xml:space="preserve" text-anchor="start" x="171.33" y="-1333" font-family="Arial" font-size="20.00" fill="#ffffff">Uptime Kuma (A)</text>
<text xml:space="preserve" text-anchor="start" x="111.7" y="-1310" font-family="Arial" font-size="15.00" fill="#ffffff">Uptime monitor, instance 1 of the failover</text>
<text xml:space="preserve" text-anchor="start" x="113.8" y="-1292" font-family="Arial" font-size="15.00" fill="#ffffff">pair. Watches tailnet services every 60s.</text>
</g>
<!-- n8n -->
<g id="node4" class="node">
<title>n8n</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1086.76,-1944 726.64,-1944 726.64,-1764 1086.76,-1764 1086.76,-1944"/>
<text xml:space="preserve" text-anchor="start" x="890.01" y="-1875" font-family="Arial" font-size="20.00" fill="#ffffff">n8n</text>
<text xml:space="preserve" text-anchor="start" x="766.64" y="-1852" font-family="Arial" font-size="15.00" fill="#ffffff">Workflow orchestrator, the ETL backbone:</text>
<text xml:space="preserve" text-anchor="start" x="783.28" y="-1834" font-family="Arial" font-size="15.00" fill="#ffffff">ingest, AI scoring, dedup, KB upload,</text>
<text xml:space="preserve" text-anchor="start" x="792.48" y="-1816" font-family="Arial" font-size="15.00" fill="#ffffff">digests, backups, mail processing.</text>
</g>
<!-- piholea -->
<g id="node5" class="node">
<title>piholea</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1105.93,-2477 707.46,-2477 707.46,-2297 1105.93,-2297 1105.93,-2477"/>
<text xml:space="preserve" text-anchor="start" x="859.46" y="-2408" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (A)</text>
<text xml:space="preserve" text-anchor="start" x="747.46" y="-2385" font-family="Arial" font-size="15.00" fill="#ffffff">Network&#45;wide ad and telemetry blocking at DNS</text>
<text xml:space="preserve" text-anchor="start" x="779.12" y="-2367" font-family="Arial" font-size="15.00" fill="#ffffff">level, covering devices that cannot run</text>
<text xml:space="preserve" text-anchor="start" x="876.69" y="-2349" font-family="Arial" font-size="15.00" fill="#ffffff">blockers.</text>
</g>
<!-- grafana -->
<g id="node6" class="node">
<title>grafana</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1104.99,-2767 708.4,-2767 708.4,-2587 1104.99,-2587 1104.99,-2767"/>
<text xml:space="preserve" text-anchor="start" x="776.47" y="-2671.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="820.41" y="-2707.8" font-family="Arial" font-size="20.00" fill="#ffffff">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="1063.04" y="-2671.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="820.41" y="-2686.8" font-family="Arial" font-size="13.00" fill="#ffffff">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="820.41" y="-2665.2" font-family="Arial" font-size="15.00" fill="#ffffff">Dashboards: system, containers,</text>
<text xml:space="preserve" text-anchor="start" x="820.41" y="-2647.2" font-family="Arial" font-size="15.00" fill="#ffffff">DNS, databases, workflow metrics,</text>
<text xml:space="preserve" text-anchor="start" x="820.41" y="-2629.2" font-family="Arial" font-size="15.00" fill="#ffffff">knowledge&#45;base stats.</text>
</g>
<!-- haa -->
<g id="node7" class="node">
<title>haa</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1073.01,-1411 740.38,-1411 740.38,-1231 1073.01,-1231 1073.01,-1411"/>
<text xml:space="preserve" text-anchor="start" x="820.56" y="-1333" font-family="Arial" font-size="20.00" fill="#ffffff">Home Assistant (A)</text>
<text xml:space="preserve" text-anchor="start" x="780.38" y="-1310" font-family="Arial" font-size="15.00" fill="#ffffff">Home automation instance A: entities,</text>
<text xml:space="preserve" text-anchor="start" x="820.39" y="-1292" font-family="Arial" font-size="15.00" fill="#ffffff">automations, dashboards.</text>
</g>
<!-- qdrant -->
<g id="node8" class="node">
<title>qdrant</title>
<path fill="#9d6bff" stroke="#7346d5" stroke-width="2" d="M1708.66,-1704.64C1708.66,-1713.67 1631.13,-1721 1535.7,-1721 1440.26,-1721 1362.74,-1713.67 1362.74,-1704.64 1362.74,-1704.64 1362.74,-1557.36 1362.74,-1557.36 1362.74,-1548.33 1440.26,-1541 1535.7,-1541 1631.13,-1541 1708.66,-1548.33 1708.66,-1557.36 1708.66,-1557.36 1708.66,-1704.64 1708.66,-1704.64"/>
<path fill="none" stroke="#7346d5" stroke-width="2" d="M1708.66,-1704.64C1708.66,-1695.61 1631.13,-1688.27 1535.7,-1688.27 1440.26,-1688.27 1362.74,-1695.61 1362.74,-1704.64"/>
<text xml:space="preserve" text-anchor="start" x="1410.86" y="-1625.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1454.81" y="-1661.8" font-family="Arial" font-size="20.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="1686.65" y="-1625.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1454.81" y="-1640.8" font-family="Arial" font-size="13.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="1454.81" y="-1619.2" font-family="Arial" font-size="15.00" fill="#ffffff">Vector database: embeddings for</text>
<text xml:space="preserve" text-anchor="start" x="1454.81" y="-1601.2" font-family="Arial" font-size="15.00" fill="#ffffff">semantic search, plus lock/dedup</text>
<text xml:space="preserve" text-anchor="start" x="1454.81" y="-1583.2" font-family="Arial" font-size="15.00" fill="#ffffff">store for ingestion pipelines.</text>
</g>
<!-- unbounda -->
<g id="node9" class="node">
<title>unbounda</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1721.18,-2254 1350.22,-2254 1350.22,-2074 1721.18,-2074 1721.18,-2254"/>
<text xml:space="preserve" text-anchor="start" x="1479" y="-2185" font-family="Arial" font-size="20.00" fill="#ffffff">Unbound (A)</text>
<text xml:space="preserve" text-anchor="start" x="1400.23" y="-2162" font-family="Arial" font-size="15.00" fill="#ffffff">Recursive, validating (DNSSEC) caching</text>
<text xml:space="preserve" text-anchor="start" x="1390.22" y="-2144" font-family="Arial" font-size="15.00" fill="#ffffff">resolver. Queries authoritative nameservers</text>
<text xml:space="preserve" text-anchor="start" x="1509.86" y="-2126" font-family="Arial" font-size="15.00" fill="#ffffff">directly.</text>
</g>
<!-- agentapi -->
<g id="node10" class="node">
<title>agentapi</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1076.36,-1121 737.04,-1121 737.04,-941 1076.36,-941 1076.36,-1121"/>
<text xml:space="preserve" text-anchor="start" x="839.42" y="-1043" font-family="Arial" font-size="20.00" fill="#ffffff">Agent endpoint</text>
<text xml:space="preserve" text-anchor="start" x="777.04" y="-1020" font-family="Arial" font-size="15.00" fill="#ffffff">Remote agent API: delegation from the</text>
<text xml:space="preserve" text-anchor="start" x="802.48" y="-1002" font-family="Arial" font-size="15.00" fill="#ffffff">workstation and mobile access.</text>
</g>
<!-- kumab -->
<g id="node11" class="node">
<title>kumab</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1092.6,-228 720.79,-228 720.79,-48 1092.6,-48 1092.6,-228"/>
<text xml:space="preserve" text-anchor="start" x="830.01" y="-159" font-family="Arial" font-size="20.00" fill="#ffffff">Uptime Kuma (B)</text>
<text xml:space="preserve" text-anchor="start" x="770.38" y="-136" font-family="Arial" font-size="15.00" fill="#ffffff">Uptime monitor, instance 2 of the failover</text>
<text xml:space="preserve" text-anchor="start" x="760.79" y="-118" font-family="Arial" font-size="15.00" fill="#ffffff">pair. The watchdog must not die with what it</text>
<text xml:space="preserve" text-anchor="start" x="877.1" y="-100" font-family="Arial" font-size="15.00" fill="#ffffff">watches.</text>
</g>
<!-- piholeb -->
<g id="node12" class="node">
<title>piholeb</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1080.92,-831 732.47,-831 732.47,-651 1080.92,-651 1080.92,-831"/>
<text xml:space="preserve" text-anchor="start" x="859.46" y="-753" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (B)</text>
<text xml:space="preserve" text-anchor="start" x="772.47" y="-730" font-family="Arial" font-size="15.00" fill="#ffffff">Site B ad&#45;blocking DNS. Same role, fully</text>
<text xml:space="preserve" text-anchor="start" x="814.55" y="-712" font-family="Arial" font-size="15.00" fill="#ffffff">independent resolver chain.</text>
</g>
<!-- unboundb -->
<g id="node13" class="node">
<title>unboundb</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1093.8,-518 719.59,-518 719.59,-338 1093.8,-338 1093.8,-518"/>
<text xml:space="preserve" text-anchor="start" x="850" y="-440" font-family="Arial" font-size="20.00" fill="#ffffff">Unbound (B)</text>
<text xml:space="preserve" text-anchor="start" x="759.59" y="-417" font-family="Arial" font-size="15.00" fill="#ffffff">Site B recursive resolver (DNSSEC), mirrors</text>
<text xml:space="preserve" text-anchor="start" x="853.33" y="-399" font-family="Arial" font-size="15.00" fill="#ffffff">the site A chain.</text>
</g>
<!-- prometheus&#45;&gt;n8n -->
<g id="edge1" class="edge">
<title>prometheus&#45;&gt;n8n</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M447.82,-2010.88C533.25,-1981.61 632.6,-1947.57 716.89,-1918.69"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="717.72,-1921.18 723.96,-1916.27 716.02,-1916.22 717.72,-1921.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="535.46,-1986.65 535.46,-2009.45 620.03,-2009.45 620.03,-1986.65 535.46,-1986.65"/>
<text xml:space="preserve" text-anchor="start" x="538.46" y="-1992.45" font-family="Arial" font-size="14.00" fill="#ffe0c2">[metrics pull]</text>
</g>
<!-- prometheus&#45;&gt;piholea -->
<g id="edge2" class="edge">
<title>prometheus&#45;&gt;piholea</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M440.72,-2168.91C523.64,-2207.81 620.72,-2253.34 704.65,-2292.71"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="703.39,-2295.01 711.3,-2295.82 705.62,-2290.26 703.39,-2295.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="535.46,-2260.59 535.46,-2283.39 620.03,-2283.39 620.03,-2260.59 535.46,-2260.59"/>
<text xml:space="preserve" text-anchor="start" x="538.46" y="-2266.39" font-family="Arial" font-size="14.00" fill="#ffe0c2">[metrics pull]</text>
</g>
<!-- prometheus&#45;&gt;grafana -->
<g id="edge3" class="edge">
<title>prometheus&#45;&gt;grafana</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M323.09,-2168.99C404.7,-2265.1 542.62,-2418.83 679.59,-2532 700.24,-2549.06 723.01,-2565.77 745.91,-2581.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="744.16,-2583.4 751.84,-2585.44 747.1,-2579.06 744.16,-2583.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="538.17,-2499.16 538.17,-2521.96 617.33,-2521.96 617.33,-2499.16 538.17,-2499.16"/>
<text xml:space="preserve" text-anchor="start" x="541.17" y="-2504.96" font-family="Arial" font-size="14.00" fill="#c9c9c9">data source</text>
</g>
<!-- prometheus&#45;&gt;qdrant -->
<g id="edge4" class="edge">
<title>prometheus&#45;&gt;qdrant</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M316.01,-1989.29C392.3,-1894.94 526.41,-1751.33 679.59,-1686.2 896.65,-1593.91 1172.84,-1594.77 1351.66,-1608.79"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1351.26,-1611.39 1358.94,-1609.37 1351.68,-1606.16 1351.26,-1611.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="864.41,-1686.2 864.41,-1709 948.98,-1709 948.98,-1686.2 864.41,-1686.2"/>
<text xml:space="preserve" text-anchor="start" x="867.41" y="-1692" font-family="Arial" font-size="14.00" fill="#ffe0c2">[metrics pull]</text>
</g>
<!-- prometheus&#45;&gt;unbounda -->
<g id="edge5" class="edge">
<title>prometheus&#45;&gt;unbounda</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M447.79,-2092.14C690.73,-2108.2 1099.16,-2135.21 1340.16,-2151.14"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1339.76,-2153.74 1347.42,-2151.62 1340.11,-2148.5 1339.76,-2153.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="864.41,-2136.77 864.41,-2159.57 948.98,-2159.57 948.98,-2136.77 864.41,-2136.77"/>
<text xml:space="preserve" text-anchor="start" x="867.41" y="-2142.57" font-family="Arial" font-size="14.00" fill="#ffe0c2">[metrics pull]</text>
</g>
<!-- prometheus&#45;&gt;agentapi -->
<g id="edge6" class="edge">
<title>prometheus&#45;&gt;agentapi</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M271.88,-1989.29C320.65,-1812.89 449.62,-1416.13 679.59,-1164 694.09,-1148.1 710.95,-1133.53 728.79,-1120.36"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="730.05,-1122.68 734.6,-1116.17 726.98,-1118.43 730.05,-1122.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="531.05,-1386.67 531.05,-1429.87 624.44,-1429.87 624.44,-1386.67 531.05,-1386.67"/>
<text xml:space="preserve" text-anchor="start" x="534.05" y="-1412.87" font-family="Arial" font-size="14.00" fill="#ffe0c2">over tailnet</text>
<text xml:space="preserve" text-anchor="start" x="534.05" y="-1392.07" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ node exporter ]</text>
</g>
<!-- prometheus&#45;&gt;piholeb -->
<g id="edge7" class="edge">
<title>prometheus&#45;&gt;piholeb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M282.38,-1989.23C325.43,-1870.76 400.44,-1655.07 448.03,-1466 484.54,-1320.93 451.47,-1273.29 508.03,-1134.8 559.37,-1009.09 581.74,-976.14 679.59,-882 696.29,-865.93 715.11,-850.76 734.59,-836.73"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="735.9,-839.02 740.5,-832.55 732.86,-834.74 735.9,-839.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="537.74,-1134.8 537.74,-1178 617.75,-1178 617.75,-1134.8 537.74,-1134.8"/>
<text xml:space="preserve" text-anchor="start" x="540.74" y="-1161" font-family="Arial" font-size="14.00" fill="#ffe0c2">over L3</text>
<text xml:space="preserve" text-anchor="start" x="540.74" y="-1140.2" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ metrics pull ]</text>
</g>
<!-- prometheus&#45;&gt;unboundb -->
<g id="edge8" class="edge">
<title>prometheus&#45;&gt;unboundb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M285.09,-1989.03C330.81,-1870.99 408.42,-1656.48 448.03,-1466 504.59,-1194 412.55,-1104.69 508.03,-843.8 554.07,-718.01 586.47,-692.29 679.59,-596 704.22,-570.53 733.01,-546.03 761.64,-523.98"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="762.93,-526.3 767.3,-519.66 759.75,-522.12 762.93,-526.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="537.74,-843.8 537.74,-887 617.75,-887 617.75,-843.8 537.74,-843.8"/>
<text xml:space="preserve" text-anchor="start" x="540.74" y="-870" font-family="Arial" font-size="14.00" fill="#ffe0c2">over L3</text>
<text xml:space="preserve" text-anchor="start" x="540.74" y="-849.2" font-family="Arial" font-size="12.00" fill="#ffe0c2">[ metrics pull ]</text>
</g>
<!-- homepage&#45;&gt;grafana -->
<g id="edge9" class="edge">
<title>homepage&#45;&gt;grafana</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M431.94,-2677C514.63,-2677 612.74,-2677 698.17,-2677"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="698,-2679.63 705.5,-2677 698,-2674.38 698,-2679.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.01,-2677 551.01,-2699.8 604.48,-2699.8 604.48,-2677 551.01,-2677"/>
<text xml:space="preserve" text-anchor="start" x="554.01" y="-2682.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">widgets</text>
</g>
<!-- kumaa&#45;&gt;haa -->
<g id="edge10" class="edge">
<title>kumaa&#45;&gt;haa</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M424.13,-1321C518.8,-1321 635.38,-1321 730.12,-1321"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="729.86,-1323.63 737.36,-1321 729.86,-1318.38 729.86,-1323.63"/>
</g>
<!-- kumaa&#45;&gt;kumab -->
<g id="edge11" class="edge">
<title>kumaa&#45;&gt;kumab</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M251.01,-1220.65C259.69,-1032.04 302.68,-620.07 508.03,-357.8 560.15,-291.24 638.32,-241.89 711.6,-207"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="248.39,-1220.48 250.68,-1228.09 253.63,-1220.71 248.39,-1220.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="712.55,-209.45 718.23,-203.89 710.32,-204.7 712.55,-209.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="508.03,-357.8 508.03,-401 647.46,-401 647.46,-357.8 508.03,-357.8"/>
<text xml:space="preserve" text-anchor="start" x="511.03" y="-384" font-family="Arial" font-size="14.00" fill="#c9c9c9">failover pair</text>
<text xml:space="preserve" text-anchor="start" x="511.03" y="-363.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ independent instances ]</text>
</g>
<!-- n8n&#45;&gt;qdrant -->
<g id="edge12" class="edge">
<title>n8n&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1086.53,-1790.4C1169.66,-1760.83 1268.38,-1725.72 1351.99,-1695.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1352.8,-1698.48 1358.99,-1693.49 1351.05,-1693.53 1352.8,-1698.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1165.93,-1755.85 1165.93,-1778.65 1290.22,-1778.65 1290.22,-1755.85 1165.93,-1755.85"/>
<text xml:space="preserve" text-anchor="start" x="1168.93" y="-1761.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">embeddings &amp; lock</text>
</g>
<!-- piholea&#45;&gt;unbounda -->
<g id="edge13" class="edge">
<title>piholea&#45;&gt;unbounda</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1105.65,-2316.59C1180.76,-2289.88 1266.16,-2259.51 1340.89,-2232.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1341.37,-2235.54 1347.56,-2230.56 1339.62,-2230.6 1341.37,-2235.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1195.9,-2288.85 1195.9,-2311.65 1260.26,-2311.65 1260.26,-2288.85 1195.9,-2288.85"/>
<text xml:space="preserve" text-anchor="start" x="1198.9" y="-2294.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">upstream</text>
</g>
<!-- piholeb&#45;&gt;unboundb -->
<g id="edge14" class="edge">
<title>piholeb&#45;&gt;unboundb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M906.7,-651.02C906.7,-612.6 906.7,-567.61 906.7,-528.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="909.32,-528.22 906.7,-520.72 904.07,-528.22 909.32,-528.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="860.12,-573.1 860.12,-595.9 924.48,-595.9 924.48,-573.1 860.12,-573.1"/>
<text xml:space="preserve" text-anchor="start" x="863.12" y="-578.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">upstream</text>
</g>
</g>
</svg>
`;case`dns`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1538pt" height="1340pt"
 viewBox="0.00 0.00 1538.00 1340.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1325.05)">
<g id="clust1" class="cluster">
<title>cluster_siteb</title>
<polygon fill="#304687" stroke="#223761" points="568.45,-708 568.45,-1302 1022.67,-1302 1022.67,-708 568.45,-708"/>
<text xml:space="preserve" text-anchor="start" x="576.45" y="-1289.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE B · SATELLITE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_sitea</title>
<polygon fill="#304687" stroke="#223761" points="556.32,-105 556.32,-699 1034.8,-699 1034.8,-105 556.32,-105"/>
<text xml:space="preserve" text-anchor="start" x="564.32" y="-686.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE A · HUB</text>
</g>
<!-- piholeb -->
<g id="node1" class="node">
<title>piholeb</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="969.78,-928 621.34,-928 621.34,-748 969.78,-748 969.78,-928"/>
<text xml:space="preserve" text-anchor="start" x="748.32" y="-850" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (B)</text>
<text xml:space="preserve" text-anchor="start" x="661.34" y="-827" font-family="Arial" font-size="15.00" fill="#ffffff">Site B ad&#45;blocking DNS. Same role, fully</text>
<text xml:space="preserve" text-anchor="start" x="703.41" y="-809" font-family="Arial" font-size="15.00" fill="#ffffff">independent resolver chain.</text>
</g>
<!-- unboundb -->
<g id="node2" class="node">
<title>unboundb</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="982.67,-1241 608.45,-1241 608.45,-1061 982.67,-1061 982.67,-1241"/>
<text xml:space="preserve" text-anchor="start" x="738.86" y="-1163" font-family="Arial" font-size="20.00" fill="#ffffff">Unbound (B)</text>
<text xml:space="preserve" text-anchor="start" x="648.45" y="-1140" font-family="Arial" font-size="15.00" fill="#ffffff">Site B recursive resolver (DNSSEC), mirrors</text>
<text xml:space="preserve" text-anchor="start" x="742.2" y="-1122" font-family="Arial" font-size="15.00" fill="#ffffff">the site A chain.</text>
</g>
<!-- piholea -->
<g id="node3" class="node">
<title>piholea</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="994.8,-325 596.32,-325 596.32,-145 994.8,-145 994.8,-325"/>
<text xml:space="preserve" text-anchor="start" x="748.32" y="-256" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (A)</text>
<text xml:space="preserve" text-anchor="start" x="636.32" y="-233" font-family="Arial" font-size="15.00" fill="#ffffff">Network&#45;wide ad and telemetry blocking at DNS</text>
<text xml:space="preserve" text-anchor="start" x="667.99" y="-215" font-family="Arial" font-size="15.00" fill="#ffffff">level, covering devices that cannot run</text>
<text xml:space="preserve" text-anchor="start" x="765.55" y="-197" font-family="Arial" font-size="15.00" fill="#ffffff">blockers.</text>
</g>
<!-- unbounda -->
<g id="node4" class="node">
<title>unbounda</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="981.04,-638 610.08,-638 610.08,-458 981.04,-458 981.04,-638"/>
<text xml:space="preserve" text-anchor="start" x="738.86" y="-569" font-family="Arial" font-size="20.00" fill="#ffffff">Unbound (A)</text>
<text xml:space="preserve" text-anchor="start" x="660.09" y="-546" font-family="Arial" font-size="15.00" fill="#ffffff">Recursive, validating (DNSSEC) caching</text>
<text xml:space="preserve" text-anchor="start" x="650.08" y="-528" font-family="Arial" font-size="15.00" fill="#ffffff">resolver. Queries authoritative nameservers</text>
<text xml:space="preserve" text-anchor="start" x="769.72" y="-510" font-family="Arial" font-size="15.00" fill="#ffffff">directly.</text>
</g>
<!-- mobile -->
<g id="node5" class="node">
<title>mobile</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="338.39,-470 18.35,-470 18.35,-290 338.39,-290 338.39,-470"/>
<text xml:space="preserve" text-anchor="start" x="112.23" y="-372" font-family="Arial" font-size="20.00" fill="#484d59">Mobile devices</text>
</g>
<!-- workstation -->
<g id="node6" class="node">
<title>workstation</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="356.74,-180 0,-180 0,0 356.74,0 356.74,-180"/>
<text xml:space="preserve" text-anchor="start" x="48.12" y="-84.4" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-129.8" font-family="Arial" font-size="20.00" fill="#484d59">Workstation · agent hub</text>
<text xml:space="preserve" text-anchor="start" x="334.73" y="-84.4" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-108.8" font-family="Arial" font-size="13.00" fill="#595e6a">Apple</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-87.2" font-family="Arial" font-size="15.00" fill="#595e6a">Daily driver. Runs the agent CLI as</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-69.2" font-family="Arial" font-size="15.00" fill="#595e6a">the hub of the MCP ecosystem,</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-51.2" font-family="Arial" font-size="15.00" fill="#595e6a">offline speech&#45;to&#45;text and local</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-33.2" font-family="Arial" font-size="15.00" fill="#595e6a">LLMs.</text>
</g>
<!-- rootdns -->
<g id="node7" class="node">
<title>rootdns</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="1507.51,-997 1178.37,-997 1178.37,-817 1507.51,-817 1507.51,-997"/>
<text xml:space="preserve" text-anchor="start" x="1198.43" y="-910" font-family="Arial" font-size="20.00" fill="#ffffff">Root / authoritative nameservers</text>
<text xml:space="preserve" text-anchor="start" x="1211.21" y="-887" font-family="Arial" font-size="15.00" fill="#ffffff">The end of the recursive resolver chain.</text>
</g>
<!-- piholeb&#45;&gt;unboundb -->
<g id="edge3" class="edge">
<title>piholeb&#45;&gt;unboundb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M795.56,-927.69C795.56,-966.08 795.56,-1011.07 795.56,-1050.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="792.93,-1050.5 795.56,-1058 798.18,-1050.5 792.93,-1050.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="748.98,-983.1 748.98,-1005.9 813.34,-1005.9 813.34,-983.1 748.98,-983.1"/>
<text xml:space="preserve" text-anchor="start" x="751.98" y="-988.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">upstream</text>
</g>
<!-- unboundb&#45;&gt;rootdns -->
<g id="edge4" class="edge">
<title>unboundb&#45;&gt;rootdns</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M982.34,-1067.88C1042.85,-1040.81 1109.73,-1010.89 1169.24,-984.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1170.19,-986.72 1175.97,-981.26 1168.05,-981.92 1170.19,-986.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1054.8,-1029 1054.8,-1051.8 1118.37,-1051.8 1118.37,-1029 1054.8,-1029"/>
<text xml:space="preserve" text-anchor="start" x="1057.8" y="-1034.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">recursion</text>
</g>
<!-- piholea&#45;&gt;unbounda -->
<g id="edge5" class="edge">
<title>piholea&#45;&gt;unbounda</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M795.56,-324.69C795.56,-363.08 795.56,-408.07 795.56,-447.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="792.93,-447.5 795.56,-455 798.18,-447.5 792.93,-447.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="748.98,-380.1 748.98,-402.9 813.34,-402.9 813.34,-380.1 748.98,-380.1"/>
<text xml:space="preserve" text-anchor="start" x="751.98" y="-385.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">upstream</text>
</g>
<!-- unbounda&#45;&gt;rootdns -->
<g id="edge6" class="edge">
<title>unbounda&#45;&gt;rootdns</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M963.78,-637.85C987.9,-651.82 1012.19,-666.45 1034.8,-681 1097.02,-721.04 1163.45,-769.19 1218.56,-810.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1216.98,-812.84 1224.54,-815.26 1220.14,-808.65 1216.98,-812.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1054.8,-733.63 1054.8,-756.43 1118.37,-756.43 1118.37,-733.63 1054.8,-733.63"/>
<text xml:space="preserve" text-anchor="start" x="1057.8" y="-739.43" font-family="Arial" font-size="14.00" fill="#c9c9c9">recursion</text>
</g>
<!-- mobile&#45;&gt;piholea -->
<g id="edge1" class="edge">
<title>mobile&#45;&gt;piholea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M338.2,-342.56C413.89,-324.72 505.41,-303.15 586.56,-284.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="586.76,-286.68 593.46,-282.4 585.56,-281.57 586.76,-286.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.74,-320.49 416.74,-343.29 536.32,-343.29 536.32,-320.49 416.74,-320.49"/>
<text xml:space="preserve" text-anchor="start" x="419.74" y="-326.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">DNS (tailnet&#45;wide)</text>
</g>
<!-- workstation&#45;&gt;piholea -->
<g id="edge2" class="edge">
<title>workstation&#45;&gt;piholea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M356.48,-131.75C428.33,-148.68 511.84,-168.36 586.56,-185.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="585.72,-188.47 593.62,-187.64 586.92,-183.36 585.72,-188.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.74,-171.18 416.74,-193.98 536.32,-193.98 536.32,-171.18 416.74,-171.18"/>
<text xml:space="preserve" text-anchor="start" x="419.74" y="-176.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">DNS (tailnet&#45;wide)</text>
</g>
</g>
</svg>
`;case`security`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2261pt" height="1261pt"
 viewBox="0.00 0.00 2261.00 1261.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1245.84)">
<g id="clust1" class="cluster">
<title>cluster_sitea</title>
<polygon fill="#304687" stroke="#223761" points="551.67,-281 551.67,-1162 1657.67,-1162 1657.67,-281 551.67,-281"/>
<text xml:space="preserve" text-anchor="start" x="559.67" y="-1149.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE A · HUB</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_siteb</title>
<polygon fill="#304687" stroke="#223761" points="1217.22,-8 1217.22,-273 1644.04,-273 1644.04,-8 1217.22,-8"/>
<text xml:space="preserve" text-anchor="start" x="1225.22" y="-260.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE B · SATELLITE</text>
</g>
<!-- infisical -->
<g id="node1" class="node">
<title>infisical</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="975.2,-1101 602.54,-1101 602.54,-921 975.2,-921 975.2,-1101"/>
<text xml:space="preserve" text-anchor="start" x="755.52" y="-1032" font-family="Arial" font-size="20.00" fill="#ffffff">Infisical</text>
<text xml:space="preserve" text-anchor="start" x="642.54" y="-1009" font-family="Arial" font-size="15.00" fill="#ffffff">Secrets management. Single source of truth</text>
<text xml:space="preserve" text-anchor="start" x="647.96" y="-991" font-family="Arial" font-size="15.00" fill="#ffffff">for API keys and tokens, injected into local</text>
<text xml:space="preserve" text-anchor="start" x="738.42" y="-973" font-family="Arial" font-size="15.00" fill="#ffffff">tools at launch.</text>
</g>
<!-- caddy -->
<g id="node2" class="node">
<title>caddy</title>
<polygon fill="#ff6b81" stroke="#d2425d" stroke-width="0" points="970.66,-811 607.08,-811 607.08,-631 970.66,-631 970.66,-811"/>
<text xml:space="preserve" text-anchor="start" x="759.96" y="-742" font-family="Arial" font-size="20.00" fill="#ffffff">Caddy</text>
<text xml:space="preserve" text-anchor="start" x="627.13" y="-719" font-family="Arial" font-size="15.00" fill="#ffffff">Reverse proxy and MCP gateway with automatic</text>
<text xml:space="preserve" text-anchor="start" x="643.79" y="-701" font-family="Arial" font-size="15.00" fill="#ffffff">certificates. Edge routing for the automation</text>
<text xml:space="preserve" text-anchor="start" x="681.31" y="-683" font-family="Arial" font-size="15.00" fill="#ffffff">API and remote MCP endpoints.</text>
</g>
<!-- chatbridge -->
<g id="node3" class="node">
<title>chatbridge</title>
<polygon fill="#ffd166" stroke="#d4aa40" stroke-width="0" points="986.07,-521 591.67,-521 591.67,-341 986.07,-341 986.07,-521"/>
<text xml:space="preserve" text-anchor="start" x="737.17" y="-452" font-family="Arial" font-size="20.00" fill="#503700">Chat bridge</text>
<text xml:space="preserve" text-anchor="start" x="632.93" y="-429" font-family="Arial" font-size="15.00" fill="#634700">Bridges the end&#45;to&#45;end encrypted chat channel</text>
<text xml:space="preserve" text-anchor="start" x="631.67" y="-411" font-family="Arial" font-size="15.00" fill="#634700">to the hub agent. Loopback&#45;only API, hardened</text>
<text xml:space="preserve" text-anchor="start" x="755.93" y="-393" font-family="Arial" font-size="15.00" fill="#634700">container.</text>
</g>
<!-- n8n -->
<g id="node4" class="node">
<title>n8n</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1610.69,-811 1250.57,-811 1250.57,-631 1610.69,-631 1610.69,-811"/>
<text xml:space="preserve" text-anchor="start" x="1413.95" y="-742" font-family="Arial" font-size="20.00" fill="#ffffff">n8n</text>
<text xml:space="preserve" text-anchor="start" x="1290.57" y="-719" font-family="Arial" font-size="15.00" fill="#ffffff">Workflow orchestrator, the ETL backbone:</text>
<text xml:space="preserve" text-anchor="start" x="1307.22" y="-701" font-family="Arial" font-size="15.00" fill="#ffffff">ingest, AI scoring, dedup, KB upload,</text>
<text xml:space="preserve" text-anchor="start" x="1316.41" y="-683" font-family="Arial" font-size="15.00" fill="#ffffff">digests, backups, mail processing.</text>
</g>
<!-- dsh -->
<g id="node5" class="node">
<title>dsh</title>
<polygon fill="#ffd166" stroke="#d4aa40" stroke-width="0" points="1617.67,-521 1243.59,-521 1243.59,-341 1617.67,-341 1617.67,-521"/>
<text xml:space="preserve" text-anchor="start" x="1311.65" y="-425.4" font-family="Arial" font-size="14.00" fill="#503700"> </text>
<text xml:space="preserve" text-anchor="start" x="1355.6" y="-470.8" font-family="Arial" font-size="20.00" fill="#503700">Agent harness</text>
<text xml:space="preserve" text-anchor="start" x="1575.72" y="-425.4" font-family="Arial" font-size="14.00" fill="#503700"> </text>
<text xml:space="preserve" text-anchor="start" x="1355.6" y="-449.8" font-family="Arial" font-size="13.00" fill="#634700">Nodejs</text>
<text xml:space="preserve" text-anchor="start" x="1355.6" y="-428.2" font-family="Arial" font-size="15.00" fill="#634700">Long&#45;running agent on the hub:</text>
<text xml:space="preserve" text-anchor="start" x="1355.6" y="-410.2" font-family="Arial" font-size="15.00" fill="#634700">daily digests to the tracker,</text>
<text xml:space="preserve" text-anchor="start" x="1355.6" y="-392.2" font-family="Arial" font-size="15.00" fill="#634700">shared&#45;memory producer, MCP</text>
<text xml:space="preserve" text-anchor="start" x="1355.6" y="-374.2" font-family="Arial" font-size="15.00" fill="#634700">clients.</text>
</g>
<!-- hamcp -->
<g id="node6" class="node">
<title>hamcp</title>
<polygon fill="#ff6b81" stroke="#d2425d" stroke-width="0" points="1612.04,-220 1249.22,-220 1249.22,-40 1612.04,-40 1612.04,-220"/>
<text xml:space="preserve" text-anchor="start" x="1326.7" y="-142" font-family="Arial" font-size="20.00" fill="#ffffff">Home automation MCP</text>
<text xml:space="preserve" text-anchor="start" x="1269.28" y="-119" font-family="Arial" font-size="15.00" fill="#ffffff">MCP endpoint exposing the automation instance</text>
<text xml:space="preserve" text-anchor="start" x="1290.53" y="-101" font-family="Arial" font-size="15.00" fill="#ffffff">to agents, reachable through the gateway.</text>
</g>
<!-- workstation -->
<g id="node7" class="node">
<title>workstation</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="356.74,-937 0,-937 0,-757 356.74,-757 356.74,-937"/>
<text xml:space="preserve" text-anchor="start" x="48.12" y="-841.4" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-886.8" font-family="Arial" font-size="20.00" fill="#484d59">Workstation · agent hub</text>
<text xml:space="preserve" text-anchor="start" x="334.73" y="-841.4" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-865.8" font-family="Arial" font-size="13.00" fill="#595e6a">Apple</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-844.2" font-family="Arial" font-size="15.00" fill="#595e6a">Daily driver. Runs the agent CLI as</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-826.2" font-family="Arial" font-size="15.00" fill="#595e6a">the hub of the MCP ecosystem,</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-808.2" font-family="Arial" font-size="15.00" fill="#595e6a">offline speech&#45;to&#45;text and local</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-790.2" font-family="Arial" font-size="15.00" fill="#595e6a">LLMs.</text>
</g>
<!-- chatnetwork -->
<g id="node8" class="node">
<title>chatnetwork</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="356.02,-521 0.72,-521 0.72,-341 356.02,-341 356.02,-521"/>
<text xml:space="preserve" text-anchor="start" x="99.99" y="-452" font-family="Arial" font-size="20.00" fill="#ffffff">E2E chat network</text>
<text xml:space="preserve" text-anchor="start" x="20.78" y="-429" font-family="Arial" font-size="15.00" fill="#ffffff">Decentralised end&#45;to&#45;end encrypted messaging</text>
<text xml:space="preserve" text-anchor="start" x="25.36" y="-411" font-family="Arial" font-size="15.00" fill="#ffffff">network. No phone number, no global identity.</text>
<text xml:space="preserve" text-anchor="start" x="31.59" y="-393" font-family="Arial" font-size="15.00" fill="#ffffff">The only inbound channel for the hub agent.</text>
</g>
<!-- aiapis -->
<g id="node9" class="node">
<title>aiapis</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2231.07,-956 1864.28,-956 1864.28,-776 2231.07,-776 2231.07,-956"/>
<text xml:space="preserve" text-anchor="start" x="1912.4" y="-860.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1956.34" y="-914.8" font-family="Arial" font-size="20.00" fill="#ffffff">AI APIs</text>
<text xml:space="preserve" text-anchor="start" x="2209.06" y="-860.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1956.34" y="-893.8" font-family="Arial" font-size="13.00" fill="#ffffff">Openai</text>
<text xml:space="preserve" text-anchor="start" x="1956.34" y="-872.2" font-family="Arial" font-size="15.00" fill="#ffffff">External language and speech APIs:</text>
<text xml:space="preserve" text-anchor="start" x="1956.34" y="-854.2" font-family="Arial" font-size="15.00" fill="#ffffff">primary model family (scoring,</text>
<text xml:space="preserve" text-anchor="start" x="1956.34" y="-836.2" font-family="Arial" font-size="15.00" fill="#ffffff">drafts, synthesis), classification,</text>
<text xml:space="preserve" text-anchor="start" x="1956.34" y="-818.2" font-family="Arial" font-size="15.00" fill="#ffffff">speech&#45;to&#45;text. Non&#45;sensitive</text>
<text xml:space="preserve" text-anchor="start" x="1956.34" y="-800.2" font-family="Arial" font-size="15.00" fill="#ffffff">content only.</text>
</g>
<!-- cloudutils -->
<g id="node10" class="node">
<title>cloudutils</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="2219.39,-666 1875.96,-666 1875.96,-486 2219.39,-486 2219.39,-666"/>
<text xml:space="preserve" text-anchor="start" x="1924.08" y="-570.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1968.03" y="-606.8" font-family="Arial" font-size="20.00" fill="#ffffff">Cloud utilities</text>
<text xml:space="preserve" text-anchor="start" x="2197.38" y="-570.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1968.03" y="-585.8" font-family="Arial" font-size="13.00" fill="#ffffff">Google Drive</text>
<text xml:space="preserve" text-anchor="start" x="1968.03" y="-564.2" font-family="Arial" font-size="15.00" fill="#ffffff">Off&#45;site destination for workflow</text>
<text xml:space="preserve" text-anchor="start" x="1968.03" y="-546.2" font-family="Arial" font-size="15.00" fill="#ffffff">backups and delivery channel for</text>
<text xml:space="preserve" text-anchor="start" x="1968.03" y="-528.2" font-family="Arial" font-size="15.00" fill="#ffffff">pipeline and uptime reports.</text>
</g>
<!-- caddy&#45;&gt;n8n -->
<g id="edge5" class="edge">
<title>caddy&#45;&gt;n8n</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M970.63,-721C1054.87,-721 1155.1,-721 1240.37,-721"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1240.17,-723.63 1247.67,-721 1240.17,-718.38 1240.17,-723.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1046.07,-721 1046.07,-743.8 1183.59,-743.8 1183.59,-721 1046.07,-721"/>
<text xml:space="preserve" text-anchor="start" x="1049.07" y="-726.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">automation API route</text>
</g>
<!-- caddy&#45;&gt;hamcp -->
<g id="edge6" class="edge">
<title>caddy&#45;&gt;hamcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M934.43,-631.35C953.72,-614.76 971.74,-596.22 986.07,-576 1038.45,-502.09 993.78,-455.18 1046.07,-381.2 1100.77,-303.8 1138.14,-306.24 1217.22,-254 1231.8,-244.37 1247.15,-234.65 1262.65,-225.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1263.66,-227.57 1268.68,-221.42 1260.92,-223.09 1263.66,-227.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1077.21,-381.2 1077.21,-404 1152.45,-404 1152.45,-381.2 1077.21,-381.2"/>
<text xml:space="preserve" text-anchor="start" x="1080.21" y="-387" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP proxy</text>
</g>
<!-- chatbridge&#45;&gt;dsh -->
<g id="edge7" class="edge">
<title>chatbridge&#45;&gt;dsh</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M985.73,-431C1064.31,-431 1154.71,-431 1233.34,-431"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1233.33,-433.63 1240.83,-431 1233.33,-428.38 1233.33,-433.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1051.12,-431 1051.12,-453.8 1178.54,-453.8 1178.54,-431 1051.12,-431"/>
<text xml:space="preserve" text-anchor="start" x="1054.12" y="-436.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">loopback agent API</text>
</g>
<!-- n8n&#45;&gt;aiapis -->
<g id="edge8" class="edge">
<title>n8n&#45;&gt;aiapis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1610.35,-763.13C1686.88,-781.18 1776.4,-802.28 1854.37,-820.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1853.46,-823.14 1861.36,-822.31 1854.66,-818.03 1853.46,-823.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1677.67,-806.49 1677.67,-829.29 1804.28,-829.29 1804.28,-806.49 1677.67,-806.49"/>
<text xml:space="preserve" text-anchor="start" x="1680.67" y="-812.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">scoring &amp; synthesis</text>
</g>
<!-- n8n&#45;&gt;cloudutils -->
<g id="edge9" class="edge">
<title>n8n&#45;&gt;cloudutils</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1610.35,-678.87C1690.79,-659.9 1785.57,-637.56 1866.21,-618.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1866.33,-621.22 1873.03,-616.94 1865.12,-616.11 1866.33,-621.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1681.56,-661.49 1681.56,-684.29 1800.39,-684.29 1800.39,-661.49 1681.56,-661.49"/>
<text xml:space="preserve" text-anchor="start" x="1684.56" y="-667.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">backups &amp; reports</text>
</g>
<!-- workstation&#45;&gt;infisical -->
<g id="edge1" class="edge">
<title>workstation&#45;&gt;infisical</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M356.6,-894.77C430.55,-914.7 516.71,-937.92 592.49,-958.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="591.78,-960.87 599.71,-960.29 593.15,-955.8 591.78,-960.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="418.29,-938.82 418.29,-961.62 530.12,-961.62 530.12,-938.82 418.29,-938.82"/>
<text xml:space="preserve" text-anchor="start" x="421.29" y="-944.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">secrets at launch</text>
</g>
<!-- workstation&#45;&gt;caddy -->
<g id="edge2" class="edge">
<title>workstation&#45;&gt;caddy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M356.51,-790.29C376.71,-784.76 397.09,-779.58 416.74,-775.2 474.74,-762.27 538.56,-751.67 596.68,-743.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="597.02,-745.98 604.08,-742.33 596.29,-740.78 597.02,-745.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.74,-775.2 416.74,-798 531.67,-798 531.67,-775.2 416.74,-775.2"/>
<text xml:space="preserve" text-anchor="start" x="419.74" y="-781" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP via gateway</text>
</g>
<!-- workstation&#45;&gt;n8n -->
<g id="edge3" class="edge">
<title>workstation&#45;&gt;n8n</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M253.98,-936.73C322.48,-1011.52 431.38,-1112.58 551.67,-1156 733.27,-1221.54 807.34,-1229.01 986.07,-1156 1151.82,-1088.29 1289.12,-925.48 1365.17,-819.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1367.25,-820.98 1369.46,-813.35 1362.98,-817.94 1367.25,-820.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="718.17,-1208 718.17,-1230.8 859.57,-1230.8 859.57,-1208 718.17,-1208"/>
<text xml:space="preserve" text-anchor="start" x="721.17" y="-1213.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">voice memo webhook</text>
</g>
<!-- chatnetwork&#45;&gt;chatbridge -->
<g id="edge4" class="edge">
<title>chatnetwork&#45;&gt;chatbridge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.78,-431C426.34,-431 508.11,-431 581.4,-431"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="581.16,-433.63 588.66,-431 581.16,-428.38 581.16,-433.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="428.4,-431 428.4,-453.8 520,-453.8 520,-431 428.4,-431"/>
<text xml:space="preserve" text-anchor="start" x="431.4" y="-436.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">E2E transport</text>
</g>
</g>
</svg>
`;case`flow-ingest`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2286pt" height="1080pt"
 viewBox="0.00 0.00 2286.00 1080.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1065.05)">
<!-- workstation -->
<g id="node1" class="node">
<title>workstation</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="358.11,-470 1.38,-470 1.38,-290 358.11,-290 358.11,-470"/>
<text xml:space="preserve" text-anchor="start" x="49.5" y="-374.4" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="93.44" y="-419.8" font-family="Arial" font-size="20.00" fill="#484d59">Workstation · agent hub</text>
<text xml:space="preserve" text-anchor="start" x="336.11" y="-374.4" font-family="Arial" font-size="14.00" fill="#484d59"> </text>
<text xml:space="preserve" text-anchor="start" x="93.44" y="-398.8" font-family="Arial" font-size="13.00" fill="#595e6a">Apple</text>
<text xml:space="preserve" text-anchor="start" x="93.44" y="-377.2" font-family="Arial" font-size="15.00" fill="#595e6a">Daily driver. Runs the agent CLI as</text>
<text xml:space="preserve" text-anchor="start" x="93.44" y="-359.2" font-family="Arial" font-size="15.00" fill="#595e6a">the hub of the MCP ecosystem,</text>
<text xml:space="preserve" text-anchor="start" x="93.44" y="-341.2" font-family="Arial" font-size="15.00" fill="#595e6a">offline speech&#45;to&#45;text and local</text>
<text xml:space="preserve" text-anchor="start" x="93.44" y="-323.2" font-family="Arial" font-size="15.00" fill="#595e6a">LLMs.</text>
</g>
<!-- contentsources -->
<g id="node2" class="node">
<title>contentsources</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="355.6,-180 3.89,-180 3.89,0 355.6,0 355.6,-180"/>
<text xml:space="preserve" text-anchor="start" x="52.01" y="-84.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="95.96" y="-129.8" font-family="Arial" font-size="20.00" fill="#ffffff">Content sources</text>
<text xml:space="preserve" text-anchor="start" x="333.59" y="-84.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="95.96" y="-108.8" font-family="Arial" font-size="13.00" fill="#ffffff">Youtube</text>
<text xml:space="preserve" text-anchor="start" x="95.96" y="-87.2" font-family="Arial" font-size="15.00" fill="#ffffff">RSS feeds, video playlists, e&#45;mail,</text>
<text xml:space="preserve" text-anchor="start" x="95.96" y="-69.2" font-family="Arial" font-size="15.00" fill="#ffffff">voice memos, saved articles, NAS</text>
<text xml:space="preserve" text-anchor="start" x="95.96" y="-51.2" font-family="Arial" font-size="15.00" fill="#ffffff">folders: raw material for ingestion</text>
<text xml:space="preserve" text-anchor="start" x="95.96" y="-33.2" font-family="Arial" font-size="15.00" fill="#ffffff">pipelines.</text>
</g>
<!-- n8n -->
<g id="node3" class="node">
<title>n8n</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1014.01,-325 653.89,-325 653.89,-145 1014.01,-145 1014.01,-325"/>
<text xml:space="preserve" text-anchor="start" x="817.27" y="-256" font-family="Arial" font-size="20.00" fill="#ffffff">n8n</text>
<text xml:space="preserve" text-anchor="start" x="693.89" y="-233" font-family="Arial" font-size="15.00" fill="#ffffff">Workflow orchestrator, the ETL backbone:</text>
<text xml:space="preserve" text-anchor="start" x="710.54" y="-215" font-family="Arial" font-size="15.00" fill="#ffffff">ingest, AI scoring, dedup, KB upload,</text>
<text xml:space="preserve" text-anchor="start" x="719.73" y="-197" font-family="Arial" font-size="15.00" fill="#ffffff">digests, backups, mail processing.</text>
</g>
<!-- aiapis -->
<g id="node4" class="node">
<title>aiapis</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="1657.3,-470 1290.51,-470 1290.51,-290 1657.3,-290 1657.3,-470"/>
<text xml:space="preserve" text-anchor="start" x="1338.63" y="-374.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1382.57" y="-428.8" font-family="Arial" font-size="20.00" fill="#ffffff">AI APIs</text>
<text xml:space="preserve" text-anchor="start" x="1635.29" y="-374.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1382.57" y="-407.8" font-family="Arial" font-size="13.00" fill="#ffffff">Openai</text>
<text xml:space="preserve" text-anchor="start" x="1382.57" y="-386.2" font-family="Arial" font-size="15.00" fill="#ffffff">External language and speech APIs:</text>
<text xml:space="preserve" text-anchor="start" x="1382.57" y="-368.2" font-family="Arial" font-size="15.00" fill="#ffffff">primary model family (scoring,</text>
<text xml:space="preserve" text-anchor="start" x="1382.57" y="-350.2" font-family="Arial" font-size="15.00" fill="#ffffff">drafts, synthesis), classification,</text>
<text xml:space="preserve" text-anchor="start" x="1382.57" y="-332.2" font-family="Arial" font-size="15.00" fill="#ffffff">speech&#45;to&#45;text. Non&#45;sensitive</text>
<text xml:space="preserve" text-anchor="start" x="1382.57" y="-314.2" font-family="Arial" font-size="15.00" fill="#ffffff">content only.</text>
</g>
<!-- openwebui -->
<g id="node5" class="node">
<title>openwebui</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1653.15,-180 1294.67,-180 1294.67,0 1653.15,0 1653.15,-180"/>
<text xml:space="preserve" text-anchor="start" x="1418.88" y="-111" font-family="Arial" font-size="20.00" fill="#ffffff">OpenWebUI</text>
<text xml:space="preserve" text-anchor="start" x="1336.73" y="-88" font-family="Arial" font-size="15.00" fill="#ffffff">Knowledge base hub and RAG front&#45;end:</text>
<text xml:space="preserve" text-anchor="start" x="1348.22" y="-70" font-family="Arial" font-size="15.00" fill="#ffffff">OpenAI&#45;compatible API, ~30 thematic</text>
<text xml:space="preserve" text-anchor="start" x="1334.67" y="-52" font-family="Arial" font-size="15.00" fill="#ffffff">collections, chat interface for local agents.</text>
</g>
<!-- qdrant -->
<g id="node6" class="node">
<title>qdrant</title>
<path fill="#9d6bff" stroke="#7346d5" stroke-width="2" d="M2255.61,-163.64C2255.61,-172.67 2178.09,-180 2082.65,-180 1987.22,-180 1909.7,-172.67 1909.7,-163.64 1909.7,-163.64 1909.7,-16.36 1909.7,-16.36 1909.7,-7.33 1987.22,0 2082.65,0 2178.09,0 2255.61,-7.33 2255.61,-16.36 2255.61,-16.36 2255.61,-163.64 2255.61,-163.64"/>
<path fill="none" stroke="#7346d5" stroke-width="2" d="M2255.61,-163.64C2255.61,-154.61 2178.09,-147.27 2082.65,-147.27 1987.22,-147.27 1909.7,-154.61 1909.7,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="1957.82" y="-84.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2001.76" y="-120.8" font-family="Arial" font-size="20.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="2233.6" y="-84.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="2001.76" y="-99.8" font-family="Arial" font-size="13.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="2001.76" y="-78.2" font-family="Arial" font-size="15.00" fill="#ffffff">Vector database: embeddings for</text>
<text xml:space="preserve" text-anchor="start" x="2001.76" y="-60.2" font-family="Arial" font-size="15.00" fill="#ffffff">semantic search, plus lock/dedup</text>
<text xml:space="preserve" text-anchor="start" x="2001.76" y="-42.2" font-family="Arial" font-size="15.00" fill="#ffffff">store for ingestion pipelines.</text>
</g>
<!-- siteb -->
<g id="node7" class="node">
<title>siteb</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="359.49,-760 0,-760 0,-580 359.49,-580 359.49,-760"/>
<text xml:space="preserve" text-anchor="start" x="108.05" y="-691" font-family="Arial" font-size="20.00" fill="#ffffff">Site B · satellite</text>
<text xml:space="preserve" text-anchor="start" x="53.42" y="-668" font-family="Arial" font-size="15.00" fill="#f8ffff">Secondary site: home automation and</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-650" font-family="Arial" font-size="15.00" fill="#f8ffff">independent DNS. Keeps working when the hub</text>
<text xml:space="preserve" text-anchor="start" x="152.23" y="-632" font-family="Arial" font-size="15.00" fill="#f8ffff">is down.</text>
</g>
<!-- workernode -->
<g id="node8" class="node">
<title>workernode</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="348.62,-1050 10.88,-1050 10.88,-870 348.62,-870 348.62,-1050"/>
<text xml:space="preserve" text-anchor="start" x="39.67" y="-990" font-family="Arial" font-size="20.00" fill="#ffffff">Agent worker · always&#45;on node</text>
<text xml:space="preserve" text-anchor="start" x="36.32" y="-967" font-family="Arial" font-size="15.00" fill="#f8ffff">Dedicated headless node running a remote</text>
<text xml:space="preserve" text-anchor="start" x="48.39" y="-949" font-family="Arial" font-size="15.00" fill="#f8ffff">agent endpoint: delegated tasks, phone</text>
<text xml:space="preserve" text-anchor="start" x="30.93" y="-931" font-family="Arial" font-size="15.00" fill="#f8ffff">access, shared&#45;memory producer, encrypted</text>
<text xml:space="preserve" text-anchor="start" x="148.06" y="-913" font-family="Arial" font-size="15.00" fill="#f8ffff">file inbox.</text>
</g>
<!-- workstation&#45;&gt;n8n -->
<g id="edge1" class="edge">
<title>workstation&#45;&gt;n8n</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M358.1,-340.57C446.63,-320.89 553.78,-297.07 643.87,-277.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="644.22,-279.65 650.98,-275.46 643.09,-274.52 644.22,-279.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.49,-327.75 422.49,-360.55 446.49,-360.55 446.49,-327.75 422.49,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="430.6" y="-340.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="449.49,-327.75 449.49,-360.55 590.89,-360.55 590.89,-327.75 449.49,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="452.49" y="-338.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">voice memo webhook</text>
</g>
<!-- contentsources&#45;&gt;n8n -->
<g id="edge2" class="edge">
<title>contentsources&#45;&gt;n8n</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.53,-128.86C444.54,-148.65 552.88,-172.73 643.84,-192.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="643.15,-195.49 651.04,-194.56 644.29,-190.37 643.15,-195.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="430.28,-182.75 430.28,-215.55 454.28,-215.55 454.28,-182.75 430.28,-182.75"/>
<text xml:space="preserve" text-anchor="start" x="438.39" y="-195.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="457.28,-182.75 457.28,-215.55 583.1,-215.55 583.1,-182.75 457.28,-182.75"/>
<text xml:space="preserve" text-anchor="start" x="460.28" y="-193.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">feeds, mail, articles</text>
</g>
<!-- n8n&#45;&gt;aiapis -->
<g id="edge3" class="edge">
<title>n8n&#45;&gt;aiapis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1013.93,-275.68C1096.99,-294.56 1195.84,-317.03 1280.49,-336.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1279.9,-338.82 1287.79,-337.93 1281.06,-333.7 1279.9,-338.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1077.01,-327.75 1077.01,-360.55 1101.01,-360.55 1101.01,-327.75 1077.01,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="1085.12" y="-340.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1104.01,-327.75 1104.01,-360.55 1227.51,-360.55 1227.51,-327.75 1104.01,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="1107.01" y="-338.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">score &amp; synthesise</text>
</g>
<!-- n8n&#45;&gt;openwebui -->
<g id="edge4" class="edge">
<title>n8n&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1013.93,-194.32C1098.4,-175.12 1199.21,-152.21 1284.8,-132.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1285.22,-135.35 1291.95,-131.13 1284.05,-130.23 1285.22,-135.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1095.68,-182.75 1095.68,-215.55 1119.68,-215.55 1119.68,-182.75 1095.68,-182.75"/>
<text xml:space="preserve" text-anchor="start" x="1103.78" y="-195.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1122.68,-182.75 1122.68,-215.55 1208.85,-215.55 1208.85,-182.75 1122.68,-182.75"/>
<text xml:space="preserve" text-anchor="start" x="1125.68" y="-193.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">upload to KB</text>
</g>
<!-- openwebui&#45;&gt;qdrant -->
<g id="edge5" class="edge">
<title>openwebui&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1652.85,-90C1730.15,-90 1820.65,-90 1898.52,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1898.41,-92.63 1905.91,-90 1898.41,-87.38 1898.41,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1720.3,-93 1720.3,-125.8 1744.3,-125.8 1744.3,-93 1720.3,-93"/>
<text xml:space="preserve" text-anchor="start" x="1728.41" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1747.3,-93 1747.3,-125.8 1846.7,-125.8 1846.7,-93 1747.3,-93"/>
<text xml:space="preserve" text-anchor="start" x="1750.3" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">embed &amp; index</text>
</g>
</g>
</svg>
`;case`flow-memory`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2276pt" height="824pt"
 viewBox="0.00 0.00 2276.00 824.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 809.45)">
<!-- workernode -->
<g id="node1" class="node">
<title>workernode</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="970.9,-794.4 633.16,-794.4 633.16,-614.4 970.9,-614.4 970.9,-794.4"/>
<text xml:space="preserve" text-anchor="start" x="661.96" y="-734.4" font-family="Arial" font-size="20.00" fill="#ffffff">Agent worker · always&#45;on node</text>
<text xml:space="preserve" text-anchor="start" x="658.6" y="-711.4" font-family="Arial" font-size="15.00" fill="#f8ffff">Dedicated headless node running a remote</text>
<text xml:space="preserve" text-anchor="start" x="670.67" y="-693.4" font-family="Arial" font-size="15.00" fill="#f8ffff">agent endpoint: delegated tasks, phone</text>
<text xml:space="preserve" text-anchor="start" x="653.22" y="-675.4" font-family="Arial" font-size="15.00" fill="#f8ffff">access, shared&#45;memory producer, encrypted</text>
<text xml:space="preserve" text-anchor="start" x="770.34" y="-657.4" font-family="Arial" font-size="15.00" fill="#f8ffff">file inbox.</text>
</g>
<!-- dsh -->
<g id="node2" class="node">
<title>dsh</title>
<polygon fill="#ffd166" stroke="#d4aa40" stroke-width="0" points="989.07,-495.4 614.99,-495.4 614.99,-315.4 989.07,-315.4 989.07,-495.4"/>
<text xml:space="preserve" text-anchor="start" x="683.05" y="-399.8" font-family="Arial" font-size="14.00" fill="#503700"> </text>
<text xml:space="preserve" text-anchor="start" x="727" y="-445.2" font-family="Arial" font-size="20.00" fill="#503700">Agent harness</text>
<text xml:space="preserve" text-anchor="start" x="947.12" y="-399.8" font-family="Arial" font-size="14.00" fill="#503700"> </text>
<text xml:space="preserve" text-anchor="start" x="727" y="-424.2" font-family="Arial" font-size="13.00" fill="#634700">Nodejs</text>
<text xml:space="preserve" text-anchor="start" x="727" y="-402.6" font-family="Arial" font-size="15.00" fill="#634700">Long&#45;running agent on the hub:</text>
<text xml:space="preserve" text-anchor="start" x="727" y="-384.6" font-family="Arial" font-size="15.00" fill="#634700">daily digests to the tracker,</text>
<text xml:space="preserve" text-anchor="start" x="727" y="-366.6" font-family="Arial" font-size="15.00" fill="#634700">shared&#45;memory producer, MCP</text>
<text xml:space="preserve" text-anchor="start" x="727" y="-348.6" font-family="Arial" font-size="15.00" fill="#634700">clients.</text>
</g>
<!-- openwebui -->
<g id="node3" class="node">
<title>openwebui</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1638.89,-640.4 1280.41,-640.4 1280.41,-460.4 1638.89,-460.4 1638.89,-640.4"/>
<text xml:space="preserve" text-anchor="start" x="1404.62" y="-571.4" font-family="Arial" font-size="20.00" fill="#ffffff">OpenWebUI</text>
<text xml:space="preserve" text-anchor="start" x="1322.47" y="-548.4" font-family="Arial" font-size="15.00" fill="#ffffff">Knowledge base hub and RAG front&#45;end:</text>
<text xml:space="preserve" text-anchor="start" x="1333.96" y="-530.4" font-family="Arial" font-size="15.00" fill="#ffffff">OpenAI&#45;compatible API, ~30 thematic</text>
<text xml:space="preserve" text-anchor="start" x="1320.41" y="-512.4" font-family="Arial" font-size="15.00" fill="#ffffff">collections, chat interface for local agents.</text>
</g>
<!-- mobile -->
<g id="node4" class="node">
<title>mobile</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="339.77,-205.4 19.73,-205.4 19.73,-25.4 339.77,-25.4 339.77,-205.4"/>
<text xml:space="preserve" text-anchor="start" x="113.6" y="-107.4" font-family="Arial" font-size="20.00" fill="#484d59">Mobile devices</text>
</g>
<!-- chatnetwork -->
<g id="node5" class="node">
<title>chatnetwork</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="979.68,-205.4 624.38,-205.4 624.38,-25.4 979.68,-25.4 979.68,-205.4"/>
<text xml:space="preserve" text-anchor="start" x="723.65" y="-136.4" font-family="Arial" font-size="20.00" fill="#ffffff">E2E chat network</text>
<text xml:space="preserve" text-anchor="start" x="644.44" y="-113.4" font-family="Arial" font-size="15.00" fill="#ffffff">Decentralised end&#45;to&#45;end encrypted messaging</text>
<text xml:space="preserve" text-anchor="start" x="649.02" y="-95.4" font-family="Arial" font-size="15.00" fill="#ffffff">network. No phone number, no global identity.</text>
<text xml:space="preserve" text-anchor="start" x="655.25" y="-77.4" font-family="Arial" font-size="15.00" fill="#ffffff">The only inbound channel for the hub agent.</text>
</g>
<!-- chatbridge -->
<g id="node6" class="node">
<title>chatbridge</title>
<polygon fill="#ffd166" stroke="#d4aa40" stroke-width="0" points="1656.85,-187.4 1262.45,-187.4 1262.45,-7.4 1656.85,-7.4 1656.85,-187.4"/>
<text xml:space="preserve" text-anchor="start" x="1407.95" y="-118.4" font-family="Arial" font-size="20.00" fill="#503700">Chat bridge</text>
<text xml:space="preserve" text-anchor="start" x="1303.71" y="-95.4" font-family="Arial" font-size="15.00" fill="#634700">Bridges the end&#45;to&#45;end encrypted chat channel</text>
<text xml:space="preserve" text-anchor="start" x="1302.45" y="-77.4" font-family="Arial" font-size="15.00" fill="#634700">to the hub agent. Loopback&#45;only API, hardened</text>
<text xml:space="preserve" text-anchor="start" x="1426.71" y="-59.4" font-family="Arial" font-size="15.00" fill="#634700">container.</text>
</g>
<!-- qdrant -->
<g id="node7" class="node">
<title>qdrant</title>
<path fill="#9d6bff" stroke="#7346d5" stroke-width="2" d="M2245.8,-624.04C2245.8,-633.07 2168.27,-640.4 2072.84,-640.4 1977.4,-640.4 1899.88,-633.07 1899.88,-624.04 1899.88,-624.04 1899.88,-476.76 1899.88,-476.76 1899.88,-467.73 1977.4,-460.4 2072.84,-460.4 2168.27,-460.4 2245.8,-467.73 2245.8,-476.76 2245.8,-476.76 2245.8,-624.04 2245.8,-624.04"/>
<path fill="none" stroke="#7346d5" stroke-width="2" d="M2245.8,-624.04C2245.8,-615.01 2168.27,-607.67 2072.84,-607.67 1977.4,-607.67 1899.88,-615.01 1899.88,-624.04"/>
<text xml:space="preserve" text-anchor="start" x="1948" y="-544.8" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1991.95" y="-581.2" font-family="Arial" font-size="20.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="2223.79" y="-544.8" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1991.95" y="-560.2" font-family="Arial" font-size="13.00" fill="#ffffff">Qdrant</text>
<text xml:space="preserve" text-anchor="start" x="1991.95" y="-538.6" font-family="Arial" font-size="15.00" fill="#ffffff">Vector database: embeddings for</text>
<text xml:space="preserve" text-anchor="start" x="1991.95" y="-520.6" font-family="Arial" font-size="15.00" fill="#ffffff">semantic search, plus lock/dedup</text>
<text xml:space="preserve" text-anchor="start" x="1991.95" y="-502.6" font-family="Arial" font-size="15.00" fill="#ffffff">store for ingestion pipelines.</text>
</g>
<!-- siteb -->
<g id="node8" class="node">
<title>siteb</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="359.49,-495.4 0,-495.4 0,-315.4 359.49,-315.4 359.49,-495.4"/>
<text xml:space="preserve" text-anchor="start" x="108.05" y="-426.4" font-family="Arial" font-size="20.00" fill="#ffffff">Site B · satellite</text>
<text xml:space="preserve" text-anchor="start" x="53.42" y="-403.4" font-family="Arial" font-size="15.00" fill="#f8ffff">Secondary site: home automation and</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-385.4" font-family="Arial" font-size="15.00" fill="#f8ffff">independent DNS. Keeps working when the hub</text>
<text xml:space="preserve" text-anchor="start" x="152.23" y="-367.4" font-family="Arial" font-size="15.00" fill="#f8ffff">is down.</text>
</g>
<!-- workernode&#45;&gt;openwebui -->
<g id="edge1" class="edge">
<title>workernode&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M970.59,-665.04C1062.2,-643.52 1175.94,-616.81 1270.58,-594.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1270.9,-597.2 1277.6,-592.93 1269.7,-592.09 1270.9,-597.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1052.07,-648.72 1052.07,-681.52 1076.07,-681.52 1076.07,-648.72 1052.07,-648.72"/>
<text xml:space="preserve" text-anchor="start" x="1060.18" y="-661.92" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1079.07,-648.72 1079.07,-681.52 1199.45,-681.52 1199.45,-648.72 1079.07,-648.72"/>
<text xml:space="preserve" text-anchor="start" x="1082.07" y="-659.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">push own memory</text>
</g>
<!-- dsh&#45;&gt;openwebui -->
<g id="edge2" class="edge">
<title>dsh&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M988.71,-446.47C1076.85,-465.96 1181.98,-489.21 1270.43,-508.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1269.74,-511.31 1277.63,-510.37 1270.87,-506.18 1269.74,-511.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1052.07,-493.89 1052.07,-526.69 1076.07,-526.69 1076.07,-493.89 1052.07,-493.89"/>
<text xml:space="preserve" text-anchor="start" x="1060.18" y="-507.09" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1079.07,-493.89 1079.07,-526.69 1199.45,-526.69 1199.45,-493.89 1079.07,-493.89"/>
<text xml:space="preserve" text-anchor="start" x="1082.07" y="-504.69" font-family="Arial" font-size="14.00" fill="#c9c9c9">push own memory</text>
</g>
<!-- dsh&#45;&gt;openwebui -->
<g id="edge6" class="edge">
<title>dsh&#45;&gt;openwebui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M989.04,-377.64C1057.26,-373.35 1134.4,-375.53 1202.45,-394.6 1247.65,-407.27 1292.8,-430.34 1332.32,-454.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1330.89,-457.12 1338.63,-458.9 1333.69,-452.68 1330.89,-457.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1092.53,-397.6 1092.53,-430.4 1116.53,-430.4 1116.53,-397.6 1092.53,-397.6"/>
<text xml:space="preserve" text-anchor="start" x="1100.64" y="-410.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1119.53,-397.6 1119.53,-430.4 1158.99,-430.4 1158.99,-397.6 1119.53,-397.6"/>
<text xml:space="preserve" text-anchor="start" x="1122.53" y="-408.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">recall</text>
</g>
<!-- dsh&#45;&gt;chatbridge -->
<g id="edge5" class="edge">
<title>dsh&#45;&gt;chatbridge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M947.9,-308.58C963.34,-293.83 977.58,-277.69 989.07,-260.4 1045.59,-175.34 967.98,-100.67 1049.07,-38.6 1109.18,7.41 1189.2,5.58 1262.56,-12.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="946.15,-306.62 942.44,-313.64 949.72,-310.46 946.15,-306.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1077.74,-41.6 1077.74,-74.4 1101.74,-74.4 1101.74,-41.6 1077.74,-41.6"/>
<text xml:space="preserve" text-anchor="start" x="1085.84" y="-54.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1104.74,-41.6 1104.74,-74.4 1173.78,-74.4 1173.78,-41.6 1104.74,-41.6"/>
<text xml:space="preserve" text-anchor="start" x="1107.74" y="-52.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">agent turn</text>
</g>
<!-- openwebui&#45;&gt;qdrant -->
<g id="edge7" class="edge">
<title>openwebui&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1638.66,-550.4C1717.32,-550.4 1809.72,-550.4 1888.93,-550.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1888.5,-553.03 1896,-550.4 1888.5,-547.78 1888.5,-553.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1719.85,-553.4 1719.85,-586.2 1743.85,-586.2 1743.85,-553.4 1719.85,-553.4"/>
<text xml:space="preserve" text-anchor="start" x="1727.96" y="-566.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1746.85,-553.4 1746.85,-586.2 1836.88,-586.2 1836.88,-553.4 1746.85,-553.4"/>
<text xml:space="preserve" text-anchor="start" x="1749.85" y="-564.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">vector search</text>
</g>
<!-- mobile&#45;&gt;chatnetwork -->
<g id="edge3" class="edge">
<title>mobile&#45;&gt;chatnetwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M339.68,-115.4C423.41,-115.4 526.61,-115.4 614.15,-115.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="613.95,-118.03 621.45,-115.4 613.95,-112.78 613.95,-118.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.49,-118.4 422.49,-151.2 446.49,-151.2 446.49,-118.4 422.49,-118.4"/>
<text xml:space="preserve" text-anchor="start" x="430.6" y="-131.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="449.49,-118.4 449.49,-151.2 551.99,-151.2 551.99,-118.4 449.49,-118.4"/>
<text xml:space="preserve" text-anchor="start" x="452.49" y="-129.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">ask from phone</text>
</g>
<!-- chatnetwork&#45;&gt;chatbridge -->
<g id="edge4" class="edge">
<title>chatnetwork&#45;&gt;chatbridge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M979.59,-110.55C1063.68,-108.24 1164.78,-105.47 1252.38,-103.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1252.27,-105.69 1259.7,-102.86 1252.13,-100.44 1252.27,-105.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1094.09,-111.54 1094.09,-144.34 1118.09,-144.34 1118.09,-111.54 1094.09,-111.54"/>
<text xml:space="preserve" text-anchor="start" x="1102.19" y="-124.74" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1121.09,-111.54 1121.09,-144.34 1157.43,-144.34 1157.43,-111.54 1121.09,-111.54"/>
<text xml:space="preserve" text-anchor="start" x="1124.09" y="-122.34" font-family="Arial" font-size="14.00" fill="#c9c9c9">relay</text>
</g>
</g>
</svg>
`;case`flow-uptime`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1735pt" height="1152pt"
 viewBox="0.00 0.00 1735.00 1152.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1137.05)">
<g id="clust1" class="cluster">
<title>cluster_siteb</title>
<polygon fill="#304687" stroke="#223761" points="1284.67,-258 1284.67,-523 1697.12,-523 1697.12,-258 1284.67,-258"/>
<text xml:space="preserve" text-anchor="start" x="1292.67" y="-510.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE B · SATELLITE</text>
</g>
<!-- workernode -->
<g id="node1" class="node">
<title>workernode</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="345.18,-470 7.45,-470 7.45,-290 345.18,-290 345.18,-470"/>
<text xml:space="preserve" text-anchor="start" x="36.24" y="-410" font-family="Arial" font-size="20.00" fill="#ffffff">Agent worker · always&#45;on node</text>
<text xml:space="preserve" text-anchor="start" x="32.88" y="-387" font-family="Arial" font-size="15.00" fill="#f8ffff">Dedicated headless node running a remote</text>
<text xml:space="preserve" text-anchor="start" x="44.96" y="-369" font-family="Arial" font-size="15.00" fill="#f8ffff">agent endpoint: delegated tasks, phone</text>
<text xml:space="preserve" text-anchor="start" x="27.5" y="-351" font-family="Arial" font-size="15.00" fill="#f8ffff">access, shared&#45;memory producer, encrypted</text>
<text xml:space="preserve" text-anchor="start" x="144.63" y="-333" font-family="Arial" font-size="15.00" fill="#f8ffff">file inbox.</text>
</g>
<!-- prometheus -->
<g id="node2" class="node">
<title>prometheus</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1026.05,-470 626.02,-470 626.02,-290 1026.05,-290 1026.05,-470"/>
<text xml:space="preserve" text-anchor="start" x="694.09" y="-374.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="738.03" y="-428.8" font-family="Arial" font-size="20.00" fill="#ffffff">Prometheus</text>
<text xml:space="preserve" text-anchor="start" x="984.1" y="-374.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="738.03" y="-407.8" font-family="Arial" font-size="13.00" fill="#ffffff">Prometheus</text>
<text xml:space="preserve" text-anchor="start" x="738.03" y="-386.2" font-family="Arial" font-size="15.00" fill="#ffffff">Metrics TSDB. Scrapes exporters</text>
<text xml:space="preserve" text-anchor="start" x="738.03" y="-368.2" font-family="Arial" font-size="15.00" fill="#ffffff">every 60s, including the satellite</text>
<text xml:space="preserve" text-anchor="start" x="738.03" y="-350.2" font-family="Arial" font-size="15.00" fill="#ffffff">site and the agent node over the L3</text>
<text xml:space="preserve" text-anchor="start" x="738.03" y="-332.2" font-family="Arial" font-size="15.00" fill="#ffffff">tunnel. 30&#45;day retention, alert</text>
<text xml:space="preserve" text-anchor="start" x="738.03" y="-314.2" font-family="Arial" font-size="15.00" fill="#ffffff">rules.</text>
</g>
<!-- piholea -->
<g id="node3" class="node">
<title>piholea</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1690.13,-760 1291.66,-760 1291.66,-580 1690.13,-580 1690.13,-760"/>
<text xml:space="preserve" text-anchor="start" x="1443.66" y="-691" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (A)</text>
<text xml:space="preserve" text-anchor="start" x="1331.66" y="-668" font-family="Arial" font-size="15.00" fill="#ffffff">Network&#45;wide ad and telemetry blocking at DNS</text>
<text xml:space="preserve" text-anchor="start" x="1363.32" y="-650" font-family="Arial" font-size="15.00" fill="#ffffff">level, covering devices that cannot run</text>
<text xml:space="preserve" text-anchor="start" x="1460.88" y="-632" font-family="Arial" font-size="15.00" fill="#ffffff">blockers.</text>
</g>
<!-- piholeb -->
<g id="node4" class="node">
<title>piholeb</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1665.12,-470 1316.67,-470 1316.67,-290 1665.12,-290 1665.12,-470"/>
<text xml:space="preserve" text-anchor="start" x="1443.66" y="-392" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (B)</text>
<text xml:space="preserve" text-anchor="start" x="1356.67" y="-369" font-family="Arial" font-size="15.00" fill="#ffffff">Site B ad&#45;blocking DNS. Same role, fully</text>
<text xml:space="preserve" text-anchor="start" x="1398.75" y="-351" font-family="Arial" font-size="15.00" fill="#ffffff">independent resolver chain.</text>
</g>
<!-- grafana -->
<g id="node5" class="node">
<title>grafana</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1689.19,-180 1292.6,-180 1292.6,0 1689.19,0 1689.19,-180"/>
<text xml:space="preserve" text-anchor="start" x="1360.66" y="-84.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1404.61" y="-120.8" font-family="Arial" font-size="20.00" fill="#ffffff">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="1647.24" y="-84.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="1404.61" y="-99.8" font-family="Arial" font-size="13.00" fill="#ffffff">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="1404.61" y="-78.2" font-family="Arial" font-size="15.00" fill="#ffffff">Dashboards: system, containers,</text>
<text xml:space="preserve" text-anchor="start" x="1404.61" y="-60.2" font-family="Arial" font-size="15.00" fill="#ffffff">DNS, databases, workflow metrics,</text>
<text xml:space="preserve" text-anchor="start" x="1404.61" y="-42.2" font-family="Arial" font-size="15.00" fill="#ffffff">knowledge&#45;base stats.</text>
</g>
<!-- kumaa -->
<g id="node6" class="node">
<title>kumaa</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="352.63,-905 0,-905 0,-725 352.63,-725 352.63,-905"/>
<text xml:space="preserve" text-anchor="start" x="99.63" y="-827" font-family="Arial" font-size="20.00" fill="#ffffff">Uptime Kuma (A)</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-804" font-family="Arial" font-size="15.00" fill="#ffffff">Uptime monitor, instance 1 of the failover</text>
<text xml:space="preserve" text-anchor="start" x="42.09" y="-786" font-family="Arial" font-size="15.00" fill="#ffffff">pair. Watches tailnet services every 60s.</text>
</g>
<!-- openwebui -->
<g id="node7" class="node">
<title>openwebui</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1005.28,-1122 646.8,-1122 646.8,-942 1005.28,-942 1005.28,-1122"/>
<text xml:space="preserve" text-anchor="start" x="771.01" y="-1053" font-family="Arial" font-size="20.00" fill="#ffffff">OpenWebUI</text>
<text xml:space="preserve" text-anchor="start" x="688.86" y="-1030" font-family="Arial" font-size="15.00" fill="#ffffff">Knowledge base hub and RAG front&#45;end:</text>
<text xml:space="preserve" text-anchor="start" x="700.35" y="-1012" font-family="Arial" font-size="15.00" fill="#ffffff">OpenAI&#45;compatible API, ~30 thematic</text>
<text xml:space="preserve" text-anchor="start" x="686.8" y="-994" font-family="Arial" font-size="15.00" fill="#ffffff">collections, chat interface for local agents.</text>
</g>
<!-- cloudutils -->
<g id="node8" class="node">
<title>cloudutils</title>
<polygon fill="#8a93a8" stroke="#656e82" stroke-width="0" points="997.75,-832 654.32,-832 654.32,-652 997.75,-652 997.75,-832"/>
<text xml:space="preserve" text-anchor="start" x="702.44" y="-736.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="746.39" y="-772.8" font-family="Arial" font-size="20.00" fill="#ffffff">Cloud utilities</text>
<text xml:space="preserve" text-anchor="start" x="975.74" y="-736.4" font-family="Arial" font-size="14.00" fill="#ffffff"> </text>
<text xml:space="preserve" text-anchor="start" x="746.39" y="-751.8" font-family="Arial" font-size="13.00" fill="#ffffff">Google Drive</text>
<text xml:space="preserve" text-anchor="start" x="746.39" y="-730.2" font-family="Arial" font-size="15.00" fill="#ffffff">Off&#45;site destination for workflow</text>
<text xml:space="preserve" text-anchor="start" x="746.39" y="-712.2" font-family="Arial" font-size="15.00" fill="#ffffff">backups and delivery channel for</text>
<text xml:space="preserve" text-anchor="start" x="746.39" y="-694.2" font-family="Arial" font-size="15.00" fill="#ffffff">pipeline and uptime reports.</text>
</g>
<!-- workernode&#45;&gt;prometheus -->
<g id="edge3" class="edge">
<title>workernode&#45;&gt;prometheus</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M355.37,-380C439.3,-380 539.72,-380 626.14,-380"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="355.49,-377.38 347.99,-380 355.49,-382.63 355.49,-377.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="415.63,-383 415.63,-422.6 439.63,-422.6 439.63,-383 415.63,-383"/>
<text xml:space="preserve" text-anchor="start" x="423.74" y="-399.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#ffe0c2">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="442.63,-383 442.63,-422.6 563.02,-422.6 563.02,-383 442.63,-383"/>
<text xml:space="preserve" text-anchor="start" x="445.63" y="-405.6" font-family="Arial" font-size="14.00" fill="#ffe0c2">scrape over tailnet</text>
<text xml:space="preserve" text-anchor="start" x="459.63" y="-388.8" font-family="Arial" font-size="14.00" fill="#ffe0c2">node exporter</text>
</g>
<!-- prometheus&#45;&gt;piholea -->
<g id="edge1" class="edge">
<title>prometheus&#45;&gt;piholea</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1025.92,-467.01C1106.88,-502.43 1200.49,-543.38 1282.32,-579.19"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1281.03,-581.49 1288.96,-582.09 1283.14,-576.68 1281.03,-581.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1089.05,-553.97 1089.05,-593.57 1113.05,-593.57 1113.05,-553.97 1089.05,-553.97"/>
<text xml:space="preserve" text-anchor="start" x="1097.16" y="-570.57" font-family="Arial" font-weight="bold" font-size="14.00" fill="#ffe0c2">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1116.05,-553.97 1116.05,-593.57 1228.66,-593.57 1228.66,-553.97 1116.05,-553.97"/>
<text xml:space="preserve" text-anchor="start" x="1119.05" y="-576.57" font-family="Arial" font-size="14.00" fill="#ffe0c2">scrape every 60s</text>
<text xml:space="preserve" text-anchor="start" x="1136.96" y="-559.77" font-family="Arial" font-size="14.00" fill="#ffe0c2">metrics pull</text>
</g>
<!-- prometheus&#45;&gt;piholeb -->
<g id="edge2" class="edge">
<title>prometheus&#45;&gt;piholeb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1025.92,-380C1114.96,-380 1219.29,-380 1306.44,-380"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1306.19,-382.63 1313.69,-380 1306.19,-377.38 1306.19,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1096.05,-383 1096.05,-422.6 1120.05,-422.6 1120.05,-383 1096.05,-383"/>
<text xml:space="preserve" text-anchor="start" x="1104.16" y="-399.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#ffe0c2">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1123.05,-383 1123.05,-422.6 1221.66,-422.6 1221.66,-383 1123.05,-383"/>
<text xml:space="preserve" text-anchor="start" x="1126.05" y="-405.6" font-family="Arial" font-size="14.00" fill="#ffe0c2">scrape over L3</text>
<text xml:space="preserve" text-anchor="start" x="1136.96" y="-388.8" font-family="Arial" font-size="14.00" fill="#ffe0c2">metrics pull</text>
</g>
<!-- prometheus&#45;&gt;grafana -->
<g id="edge4" class="edge">
<title>prometheus&#45;&gt;grafana</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1025.92,-292.99C1107.25,-257.41 1201.33,-216.25 1283.43,-180.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1284.28,-182.82 1290.1,-177.41 1282.17,-178.01 1284.28,-182.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1105.77,-263.97 1105.77,-296.77 1129.77,-296.77 1129.77,-263.97 1105.77,-263.97"/>
<text xml:space="preserve" text-anchor="start" x="1113.88" y="-277.17" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1132.77,-263.97 1132.77,-296.77 1211.94,-296.77 1211.94,-263.97 1132.77,-263.97"/>
<text xml:space="preserve" text-anchor="start" x="1135.77" y="-274.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">dashboards</text>
</g>
<!-- kumaa&#45;&gt;openwebui -->
<g id="edge5" class="edge">
<title>kumaa&#45;&gt;openwebui</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M352.6,-873.72C440.62,-903.21 547.34,-938.97 637.06,-969.02"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="635.98,-971.43 643.93,-971.32 637.65,-966.45 635.98,-971.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="434.7,-945.94 434.7,-978.74 458.7,-978.74 458.7,-945.94 434.7,-945.94"/>
<text xml:space="preserve" text-anchor="start" x="442.81" y="-959.14" font-family="Arial" font-weight="bold" font-size="14.00" fill="#ffe0c2">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="461.7,-945.94 461.7,-978.74 543.95,-978.74 543.95,-945.94 461.7,-945.94"/>
<text xml:space="preserve" text-anchor="start" x="464.7" y="-956.74" font-family="Arial" font-size="14.00" fill="#ffe0c2">HTTP probe</text>
</g>
<!-- kumaa&#45;&gt;cloudutils -->
<g id="edge6" class="edge">
<title>kumaa&#45;&gt;cloudutils</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M352.6,-795.25C442.88,-785.07 552.82,-772.68 643.93,-762.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="644.21,-765.02 651.37,-761.57 643.62,-759.8 644.21,-765.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="430.8,-790.19 430.8,-822.99 454.8,-822.99 454.8,-790.19 430.8,-790.19"/>
<text xml:space="preserve" text-anchor="start" x="438.91" y="-803.39" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="457.8,-790.19 457.8,-822.99 547.85,-822.99 547.85,-790.19 457.8,-790.19"/>
<text xml:space="preserve" text-anchor="start" x="460.8" y="-800.99" font-family="Arial" font-size="14.00" fill="#c9c9c9">alert on down</text>
</g>
</g>
</svg>
`;case`flow-access`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2288pt" height="1079pt"
 viewBox="0.00 0.00 2288.00 1079.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1064.05)">
<g id="clust1" class="cluster">
<title>cluster_sitea</title>
<polygon fill="#304687" stroke="#223761" points="1188.15,-270 1188.15,-841 1666.62,-841 1666.62,-270 1188.15,-270"/>
<text xml:space="preserve" text-anchor="start" x="1196.15" y="-828.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE A · HUB</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_siteb</title>
<polygon fill="#304687" stroke="#223761" points="1822.86,-776 1822.86,-1041 2249.67,-1041 2249.67,-776 1822.86,-776"/>
<text xml:space="preserve" text-anchor="start" x="1830.86" y="-1028.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f8ffff" fill-opacity="0.701961">SITE B · SATELLITE</text>
</g>
<!-- mobile -->
<g id="node1" class="node">
<title>mobile</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="320.04,-490 0,-490 0,-310 320.04,-310 320.04,-490"/>
<text xml:space="preserve" text-anchor="start" x="93.88" y="-392" font-family="Arial" font-size="20.00" fill="#484d59">Mobile devices</text>
</g>
<!-- tailnet -->
<g id="node2" class="node">
<title>tailnet</title>
<polygon fill="#2fe6a8" stroke="#00bd82" stroke-width="0" points="978.9,-729 625.32,-729 625.32,-549 978.9,-549 978.9,-729"/>
<text xml:space="preserve" text-anchor="start" x="735.42" y="-678" font-family="Arial" font-size="20.00" fill="#004214">Tailscale mesh</text>
<text xml:space="preserve" text-anchor="start" x="645.38" y="-655" font-family="Arial" font-size="15.00" fill="#005424">Mesh VPN (WireGuard&#45;based). Identity instead</text>
<text xml:space="preserve" text-anchor="start" x="757.08" y="-637" font-family="Arial" font-size="15.00" fill="#005424">of addresses:</text>
<text xml:space="preserve" text-anchor="start" x="669.12" y="-619" font-family="Arial" font-size="15.00" fill="#005424">each node gets an overlay identity, NAT</text>
<text xml:space="preserve" text-anchor="start" x="729.17" y="-601" font-family="Arial" font-size="15.00" fill="#005424">traversal is automatic,</text>
<text xml:space="preserve" text-anchor="start" x="672.45" y="-583" font-family="Arial" font-size="15.00" fill="#005424">traffic is end&#45;to&#45;end encrypted between</text>
</g>
<!-- piholea -->
<g id="node3" class="node">
<title>piholea</title>
<polygon fill="#4f8cff" stroke="#0068d5" stroke-width="0" points="1626.62,-490 1228.15,-490 1228.15,-310 1626.62,-310 1626.62,-490"/>
<text xml:space="preserve" text-anchor="start" x="1380.15" y="-421" font-family="Arial" font-size="20.00" fill="#ffffff">Pi&#45;hole (A)</text>
<text xml:space="preserve" text-anchor="start" x="1268.15" y="-398" font-family="Arial" font-size="15.00" fill="#ffffff">Network&#45;wide ad and telemetry blocking at DNS</text>
<text xml:space="preserve" text-anchor="start" x="1299.81" y="-380" font-family="Arial" font-size="15.00" fill="#ffffff">level, covering devices that cannot run</text>
<text xml:space="preserve" text-anchor="start" x="1397.38" y="-362" font-family="Arial" font-size="15.00" fill="#ffffff">blockers.</text>
</g>
<!-- workernode -->
<g id="node4" class="node">
<title>workernode</title>
<polygon fill="#5b7ad6" stroke="#2c57ae" stroke-width="0" points="970.98,-180 633.24,-180 633.24,0 970.98,0 970.98,-180"/>
<text xml:space="preserve" text-anchor="start" x="662.04" y="-120" font-family="Arial" font-size="20.00" fill="#ffffff">Agent worker · always&#45;on node</text>
<text xml:space="preserve" text-anchor="start" x="658.68" y="-97" font-family="Arial" font-size="15.00" fill="#f8ffff">Dedicated headless node running a remote</text>
<text xml:space="preserve" text-anchor="start" x="670.75" y="-79" font-family="Arial" font-size="15.00" fill="#f8ffff">agent endpoint: delegated tasks, phone</text>
<text xml:space="preserve" text-anchor="start" x="653.3" y="-61" font-family="Arial" font-size="15.00" fill="#f8ffff">access, shared&#45;memory producer, encrypted</text>
<text xml:space="preserve" text-anchor="start" x="770.42" y="-43" font-family="Arial" font-size="15.00" fill="#f8ffff">file inbox.</text>
</g>
<!-- caddy -->
<g id="node5" class="node">
<title>caddy</title>
<polygon fill="#ff6b81" stroke="#d2425d" stroke-width="0" points="1609.18,-780 1245.59,-780 1245.59,-600 1609.18,-600 1609.18,-780"/>
<text xml:space="preserve" text-anchor="start" x="1398.48" y="-711" font-family="Arial" font-size="20.00" fill="#ffffff">Caddy</text>
<text xml:space="preserve" text-anchor="start" x="1265.65" y="-688" font-family="Arial" font-size="15.00" fill="#ffffff">Reverse proxy and MCP gateway with automatic</text>
<text xml:space="preserve" text-anchor="start" x="1282.31" y="-670" font-family="Arial" font-size="15.00" fill="#ffffff">certificates. Edge routing for the automation</text>
<text xml:space="preserve" text-anchor="start" x="1319.83" y="-652" font-family="Arial" font-size="15.00" fill="#ffffff">API and remote MCP endpoints.</text>
</g>
<!-- hamcp -->
<g id="node6" class="node">
<title>hamcp</title>
<polygon fill="#ff6b81" stroke="#d2425d" stroke-width="0" points="2217.67,-988 1854.86,-988 1854.86,-808 2217.67,-808 2217.67,-988"/>
<text xml:space="preserve" text-anchor="start" x="1932.33" y="-910" font-family="Arial" font-size="20.00" fill="#ffffff">Home automation MCP</text>
<text xml:space="preserve" text-anchor="start" x="1874.91" y="-887" font-family="Arial" font-size="15.00" fill="#ffffff">MCP endpoint exposing the automation instance</text>
<text xml:space="preserve" text-anchor="start" x="1896.17" y="-869" font-family="Arial" font-size="15.00" fill="#ffffff">to agents, reachable through the gateway.</text>
</g>
<!-- user -->
<g id="node7" class="node">
<title>user</title>
<polygon fill="#e8eefc" stroke="#c0c5d3" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="138.91" y="-682" font-family="Arial" font-size="20.00" fill="#484d59">User</text>
</g>
<!-- mobile&#45;&gt;tailnet -->
<g id="edge1" class="edge">
<title>mobile&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.77,-460.32C340.05,-467.98 360.53,-475.69 380.04,-483 457.07,-511.86 542.13,-543.43 615.51,-570.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="614.54,-573.02 622.49,-573.16 616.36,-568.09 614.54,-573.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-554.79 383.04,-587.59 407.04,-587.59 407.04,-554.79 383.04,-554.79"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-567.99" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-554.79 410.04,-587.59 562.32,-587.59 562.32,-554.79 410.04,-554.79"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-565.59" font-family="Arial" font-size="14.00" fill="#c9c9c9">join overlay (always on)</text>
</g>
<!-- mobile&#45;&gt;piholea -->
<g id="edge4" class="edge">
<title>mobile&#45;&gt;piholea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M320,-400C547.42,-400 965.93,-400 1217.93,-400"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1217.78,-402.63 1225.28,-400 1217.78,-397.38 1217.78,-402.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="720.63,-403 720.63,-435.8 744.63,-435.8 744.63,-403 720.63,-403"/>
<text xml:space="preserve" text-anchor="start" x="728.74" y="-416.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="747.63,-403 747.63,-435.8 883.58,-435.8 883.58,-403 747.63,-403"/>
<text xml:space="preserve" text-anchor="start" x="750.63" y="-413.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">DNS through overlay</text>
</g>
<!-- mobile&#45;&gt;workernode -->
<g id="edge5" class="edge">
<title>mobile&#45;&gt;workernode</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M318.95,-310.04C339.36,-299.04 360.1,-288.18 380.04,-278.2 459.09,-238.65 548.26,-198.21 624.12,-165.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="624.71,-167.62 630.53,-162.21 622.6,-162.81 624.71,-167.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="425.44,-281.2 425.44,-314 449.44,-314 449.44,-281.2 425.44,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="433.55" y="-294.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="452.44,-281.2 452.44,-314 519.92,-314 519.92,-281.2 452.44,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="455.44" y="-292" font-family="Arial" font-size="14.00" fill="#c9c9c9">drop a file</text>
</g>
<!-- tailnet&#45;&gt;piholea -->
<g id="edge2" class="edge">
<title>tailnet&#45;&gt;piholea</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M978.8,-571.63C1040.73,-547.88 1111.56,-520.72 1178.33,-495.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1179.26,-497.57 1185.33,-492.44 1177.38,-492.67 1179.26,-497.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1041.9,-550.94 1041.9,-583.74 1065.9,-583.74 1065.9,-550.94 1041.9,-550.94"/>
<text xml:space="preserve" text-anchor="start" x="1050" y="-564.14" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068.9,-550.94 1068.9,-583.74 1165.15,-583.74 1165.15,-550.94 1068.9,-550.94"/>
<text xml:space="preserve" text-anchor="start" x="1071.9" y="-561.74" font-family="Arial" font-size="14.00" fill="#c9c9c9">reach services</text>
</g>
<!-- tailnet&#45;&gt;hamcp -->
<g id="edge3" class="edge">
<title>tailnet&#45;&gt;hamcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M918.95,-728.92C991.87,-779.97 1090.4,-839.26 1188.15,-868 1393.46,-928.37 1638.87,-929.83 1812.57,-919.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1812.51,-922.47 1819.84,-919.4 1812.2,-917.23 1812.51,-922.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1365.76,-927.5 1365.76,-960.3 1389.76,-960.3 1389.76,-927.5 1365.76,-927.5"/>
<text xml:space="preserve" text-anchor="start" x="1373.87" y="-940.7" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1392.76,-927.5 1392.76,-960.3 1489.01,-960.3 1489.01,-927.5 1392.76,-927.5"/>
<text xml:space="preserve" text-anchor="start" x="1395.76" y="-938.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">reach services</text>
</g>
<!-- caddy&#45;&gt;hamcp -->
<g id="edge6" class="edge">
<title>caddy&#45;&gt;hamcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1608.83,-751.84C1683.38,-777.4 1769.86,-807.03 1845.37,-832.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1844.19,-835.29 1852.13,-835.23 1845.89,-830.32 1844.19,-835.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1689.62,-815.63 1689.62,-848.43 1713.62,-848.43 1713.62,-815.63 1689.62,-815.63"/>
<text xml:space="preserve" text-anchor="start" x="1697.73" y="-828.83" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1716.62,-815.63 1716.62,-848.43 1791.86,-848.43 1791.86,-815.63 1716.62,-815.63"/>
<text xml:space="preserve" text-anchor="start" x="1719.62" y="-826.43" font-family="Arial" font-size="14.00" fill="#c9c9c9">MCP proxy</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};