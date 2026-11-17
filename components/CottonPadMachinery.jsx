/* global React, FaluHeader, FaluFooter, ImageSlot */

// ============================================================
//  /machinery/cotton-pad-machinery
//  Family overview. Mirrors cotton-swab template: process blocks
//  (pad production -> packaging), complete line, benefits.
// ============================================================
window.CottonPadMachinery = function CottonPadMachinery() {
  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "var(--space-1-5) var(--gutter)" }}>
          <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)" }}>
            <a href="#home" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 var(--space-1-5)", opacity: 0.4 }}>/</span>
            <a href="#machinery" style={{ color: "inherit", textDecoration: "none" }}>Machinery</a>
            <span style={{ margin: "0 var(--space-1-5)", opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--navy)" }}>Cotton pad machinery</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--section-y) 0 var(--section-y)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-12)", alignItems: "end" }}>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Cotton pad machinery.
            </h1>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--ink-soft)" }}>
              FALU manufactures machinery for the industrial production of cosmetic cotton pads.
              Two production capacities, plus an automated packaging line, run standalone or as a
              complete inline system.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS BLOCKS */}
      <section style={{ padding: "0 0 var(--section-y)", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ paddingTop: "var(--section-y)" }}>
          <div style={{ marginTop: "var(--space-4)", marginBottom: "var(--space-8)" }}>
            <h2 style={{ fontSize: "var(--fs-xl)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--navy)" }}>
              Two connected steps.<br />Run together, or independently.
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            <PadBlock
              num="01"
              title="Cotton pad production"
              body="Cotton pads are formed and cut from raw cotton. FALU offers three machines: the compact WR-600 V and high-volume WR-2100 S form round and oval pads from a web, while the VP-2 stamps square and rectangular pads from a roll without waste."
              imgId="PAD-01"
              image="WR-2100 cotton pad production machine"
              links={[
              ["WR-2100 S", "Round / oval\n2'100 pcs/min", "#wr2100"],
              ["WR-600 V", "Round / oval\n600 pcs/min", "#wr600"],
              ["VP-2", "Square / rectangle\n1'000 pcs/min", "#vp2"]]
              } />

            <PadConnector />
            <PadBlock
              num="02"
              title="Packaging"
              body="The RB-2 fills polybags or paper bags with cotton pads, fully automatically. It connects to the WR-2100 S interface and receives pads via metal cassettes that stack them flawlessly, then pushes them through packaging molds into bags. Filled bags pass to the sealing unit and are closed by heat stamp. Up to 52 bags per minute, typically 50 to 120 pads per bag."
              imgId="PAD-02"
              image="RB-2 cotton pad polybag packaging machine"
              links={[
              ["RB-2", "Polybag & paper bag", "#rb2"]]
              } />
          </div>

          <div style={{ marginTop: "var(--space-8)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--rule)", textAlign: "center" }}>
            <p className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)" }}>
              Each step can be implemented individually with existing machinery or combined into a complete production line.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLETE LINE */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--navy)", color: "var(--on-blue)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-6)", marginTop: "var(--space-4)" }}>
            <h2 style={{ color: "var(--on-blue)", maxWidth: 760, fontSize: "var(--fs-xl)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Pad production and packaging as one inline FALU line.
            </h2>
            <p style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>
              Production and packaging, engineered and serviced by FALU. Click any model below to
              see its product page.
            </p>
          </div>

          <div style={{ marginBottom: "var(--space-4)", border: "1px solid var(--on-blue-line)", borderRadius: "var(--radius-lg)", overflow: "hidden", "--slot-radius": "0px" }}>
            <ImageSlot id="PAD-03" label="Complete WR-2100 S + RB-2 pad line, video walkthrough" ratio="16 / 9" dark />
          </div>

          <div style={padLine.wrap}>
            <div style={padLine.col}>
              <div className="mono" style={padLine.colHeader}>Pad production</div>
              <div style={padLine.list}>
                {[
                ["WR-2100 S", "Round / oval · 2'100 pcs/min", "#wr2100"],
                ["WR-600 V", "Round / oval · 600 pcs/min", "#wr600"],
                ["VP-2", "Square / rectangle · 1'000 pcs/min", "#vp2"]].
                map(([code, label, href]) =>
                <a key={code} href={href} style={padLine.row}>
                  <span className="data" style={{ color: "var(--on-blue)", fontWeight: 600 }}>{code} <span style={padLine.linkArrow}>↗</span></span>
                  <span style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-label)" }}>{label}</span>
                </a>
                )}
              </div>
            </div>
            <div style={padLine.arrow}>→</div>
            <div style={padLine.col}>
              <div className="mono" style={padLine.colHeader}>Packaging</div>
              <a href="#rb2" style={padLine.link}>
                <div style={padLine.machine}>
                  <div className="data" style={padLine.code}>RB-2 <span style={padLine.linkArrow}>↗</span></div>
                  <div style={padLine.label}>Polybag &amp; paper bag packaging</div>
                  <p style={padLine.note}>Fills and heat-seals bags at up to 52 per minute, connected to the WR-series interface.</p>
                </div>
              </a>
            </div>
          </div>

          <div style={padBenefits.wrap}>
            <h2 style={padBenefits.label}>Why a complete FALU line.</h2>
            <div style={padBenefits.grid}>
              {[
                ["Continuous inline flow", "Pads pass straight from the WR-2100 S into the RB-2 packer via metal cassettes, with no manual transfer between production and packaging."],
                ["One supplier, one contract", "Production and packaging engineered to work together, commissioned and serviced by FALU from Rüti."],
                ["Scales with demand", "Start with the WR-600 V and move to the WR-2100 S, or add the RB-2 packer to an existing WR machine as volume grows."]
              ].map(([t, b]) => (
                <div key={t} style={padBenefits.benefit}>
                  <h4 style={padBenefits.benefitTitle}>{t}</h4>
                  <p style={padBenefits.benefitBody}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);
};

const padLine = {
  wrap: { display: "grid", gridTemplateColumns: "1fr 24px 1fr", gap: 0, alignItems: "stretch" },
  col: { background: "var(--on-blue-fill)", border: "1px solid var(--on-blue-line)", borderRadius: "var(--radius)", padding: "var(--space-4)" },
  colHeader: { fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", marginBottom: "var(--space-3)" },
  arrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "var(--on-blue-line)", fontSize: "var(--fs-l)" },
  link: { display: "block", textDecoration: "none", color: "inherit" },
  machine: { padding: "var(--space-3) 0" },
  featured: { borderTop: "3px solid var(--falu-red)", paddingTop: "var(--space-2)" },
  code: { fontSize: "var(--fs-m)", color: "var(--on-blue)", fontWeight: 600, letterSpacing: "-0.01em", display: "flex", alignItems: "baseline", gap: "var(--space-1)" },
  label: { color: "var(--on-blue)", marginTop: "var(--space-half)", fontSize: "var(--fs-ui)", fontWeight: 500 },
  note: { marginTop: "var(--space-1-5)", color: "var(--on-blue-muted)", fontSize: "var(--fs-label)", lineHeight: 1.55 },
  linkArrow: { fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", fontWeight: 400 },
  list: { display: "flex", flexDirection: "column" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-2)", padding: "var(--space-2) 0", borderBottom: "1px solid var(--on-blue-line)", fontSize: "var(--fs-label)", textDecoration: "none" }
};

const padBenefits = {
  wrap: { marginTop: "var(--space-8)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--on-blue-line)" },
  label: { fontSize: "var(--fs-xl)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--on-blue)", maxWidth: 760, marginTop: 0, marginBottom: "var(--space-4)" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)" },
  benefit: { paddingTop: "var(--space-3)", borderTop: "1px solid var(--on-blue-muted)" },
  benefitTitle: { color: "var(--on-blue)", fontSize: "var(--fs-body)", fontWeight: 600, lineHeight: 1.3, marginBottom: "var(--space-1-5)" },
  benefitBody: { color: "var(--on-blue-muted)", fontSize: "var(--fs-label)", lineHeight: 1.6 }
};

function PadBlock({ num, title, body, imgId, image, links, flipped }) {
  const left =
  <div style={{ padding: "var(--space-6) var(--space-6)" }}>
      <h3 style={{ fontSize: "var(--fs-l)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--navy)" }}>
        {title}
      </h3>
      <div style={{ marginTop: "var(--space-3)", fontSize: "var(--fs-body)", lineHeight: 1.65, color: "var(--ink-soft)" }}>
        {body}
      </div>
      <div style={{ marginTop: "var(--space-4)", paddingTop: "var(--space-3)", borderTop: "1px solid var(--rule)", display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
        {links.map(([code, sub, href]) =>
        <a key={code} href={href} style={{ flex: "1 1 0", minWidth: 160, display: "flex", flexDirection: "column", gap: "var(--space-half)", padding: "var(--space-2) var(--space-3)", border: "1px solid var(--rule)", borderRadius: "var(--radius)", overflow: "hidden", "--slot-radius": "0px", borderLeft: "3px solid var(--falu-blue)", background: "var(--surface)", textDecoration: "none", transition: "background 120ms ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-1)" }}>
            <span className="data" style={{ fontSize: "var(--fs-body)", fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.01em" }}>{code}</span>
            <span className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 600 }}>→</span>
          </div>
          <span style={{ fontSize: "var(--fs-label)", color: "var(--ink-soft)", whiteSpace: "pre-line", lineHeight: 1.45 }}>{sub}</span>
        </a>
        )}
      </div>
    </div>;

  const right = <ImageSlot id={imgId} label={image} height="100%" />;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "var(--radius)", overflow: "hidden", "--slot-radius": "0px", alignItems: "stretch" }}>
      {flipped ? <>{right}{left}</> : <>{left}{right}</>}
    </div>);
}

function PadConnector() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-3) 0" }}>
      <div style={{ width: 0, height: 0, borderLeft: "32px solid transparent", borderRight: "32px solid transparent", borderTop: "20px solid var(--chart-3)" }} />
    </div>);
}
