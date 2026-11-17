/* global React, FaluHeader, FaluFooter, MachineHeroVideo */

// ============================================================
//  Generic, data-driven MACHINE DETAIL page.
//  Each machine is a data object in window.FALU_MACHINES.
//  Mirrors the CB1 / PRX template: breadcrumb, hero, features,
//  technical data, line context, CTA.
// ============================================================

window.MachineDetail = function MachineDetail({ id }) {
  const m = (window.FALU_MACHINES || {})[id];
  // Placeholder shot numbers are namespaced per machine: RB2-01, RB2-02, ...
  const imgPrefix = String(id || "").toUpperCase();

  if (!m) {
    return (
      <div style={{ background: "var(--surface)", padding: "var(--space-12)", fontFamily: "var(--font-mono)", color: "var(--ink-muted)" }}>
        Unknown machine id: {id}
      </div>);
  }

  const FAMILY_HREF = {
    "Cotton Swab Machinery": "#cotton-swab-machinery",
    "Cotton Pad Machinery": "#cotton-pad-machinery",
    "Paper Stick Machinery": "#machinery"
  };
  const familyHref = FAMILY_HREF[m.family] || "#machinery";

  return (
    <div style={{ background: "var(--surface)" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={md.crumbWrap}>
        <div className="container" style={md.crumbInner}>
          <a href="#machinery" style={md.crumbLink}>Machinery</a>
          <span style={md.crumbSep}>/</span>
          <a href={familyHref} style={md.crumbLink}>{m.family}</a>
          <span style={md.crumbSep}>/</span>
          {/* Machines that live under an overview page, e.g. the packaging machines. */}
          {m.parent &&
          <React.Fragment>
              <a href={m.parent.href} style={md.crumbLink}>{m.parent.label}</a>
              <span style={md.crumbSep}>/</span>
            </React.Fragment>
          }
          <span style={md.crumbCurrent}>{m.code}</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--space-8) 0 var(--section-y)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "var(--space-8)", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "var(--fs-xxl)", lineHeight: 1.02 }}>
              {m.code}<br />
              <span style={{ color: "var(--ink-soft)", fontWeight: 500 }}>{m.name}</span>
            </h1>
            <p style={{ marginTop: "var(--space-4)", fontSize: "var(--fs-lead)", color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 580 }}>
              {m.lede}
            </p>
            {m.headlineStat &&
            <div style={md.statBox}>
                <div style={md.statLabel}>{m.headlineStat.label}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-1-5)", marginTop: "var(--space-2)" }}>
                  <span className="mono" style={md.statNum}>{m.headlineStat.value}</span>
                  <span className="mono" style={md.statUnit}>{m.headlineStat.unit}</span>
                </div>
              </div>
            }
            <div style={{ display: "flex", gap: "var(--space-1-5)", marginTop: "var(--space-6)" }}>
              <a className="btn btn--primary btn--lg" href="#contact">Request a quotation<span className="arrow" /></a>
              <a className="btn btn--ghost btn--lg" href="#contact">Download datasheet (PDF)<span className="arrow" /></a>
            </div>
          </div>
          <div>
            <MachineHeroVideo id={`${imgPrefix}-VIDEO`} src={m.heroVideo} label={`${m.code}, hero video`} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "start", marginBottom: "var(--space-8)" }}>
            <h2>{m.featuresHeadline}</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>{m.featuresLede}</p>
          </div>
          <div style={md.featGrid(m.features.length)}>
            {m.features.map(([title, body], i) =>
            <div key={title} style={md.featCell}>
                <div className="mono" style={md.featNum}>F · {String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ marginTop: "var(--space-1-5)", fontSize: "var(--fs-body)" }}>{title}</h4>
                <p style={{ marginTop: "var(--space-1-5)", color: "var(--ink-soft)", fontSize: "var(--fs-ui)", lineHeight: 1.6 }}>{body}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-6)" }}>
            <h2>Specifications.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>{m.techLede}</p>
          </div>
          <div style={md.tableWrap}>
            {m.tech.map(([group, key, value], i, arr) => {
              const showGroup = group && (i === 0 || arr[i - 1][0] !== group);
              return (
                <div key={i} style={{ ...md.tableRow, ...(showGroup ? md.tableRowGrouped : {}) }}>
                  <div className="mono" style={md.tableGroup}>{showGroup ? group : ""}</div>
                  <div style={md.tableKey}>{key}</div>
                  <div className="mono" style={{ ...md.tableValue, color: "var(--navy)" }}>{value}</div>
                </div>);
            })}
          </div>
        </div>
      </section>

      {/* LINE CONTEXT */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--navy)", color: "var(--on-blue)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-6)", marginTop: "var(--space-4)" }}>
            <h2 style={{ color: "var(--on-blue)", maxWidth: 760 }}>{m.lineHeadline}</h2>
            <p style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>{m.lineLede}</p>
          </div>
          <div className="md-line-row" style={md.lineRow}>
            {m.line.map((node, i) =>
            <React.Fragment key={node.code}>
                {i > 0 && <div style={md.lineArrow}>→</div>}
                <a href={node.href || "#"} style={{ ...md.lineCol, ...(node.current ? md.lineColCurrent : {}), textDecoration: "none" }}>
                  <div className="mono" style={md.lineColHeader}>{node.stage}</div>
                  <div className="mono" style={{ ...md.lineCode, color: "var(--on-blue)" }}>
                    {node.code}{!node.current && node.href ? <span style={md.lineArrowMark}> ↗</span> : null}
                  </div>
                  <div style={md.lineLabel}>{node.label}</div>
                  {node.current && <div className="mono" style={md.lineHere}>You are here</div>}
                </a>
              </React.Fragment>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--surface)", padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-6)", alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>{m.ctaHeadline}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-end" }}>
            <a href="#contact" className="btn btn--primary btn--lg">Request a quotation<span className="arrow" /></a>
            <div className="mono" style={{ color: "var(--ink-muted)", fontSize: "var(--fs-label)" }}>
              <a href="mailto:sales@falu.com" style={{ color: "inherit" }}>sales@falu.com</a>
              {" · "}
              <a href="tel:+41552255151" style={{ color: "inherit" }}>+41 55 225 51 51</a>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);
};

const md = {
  crumbWrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  crumbInner: { padding: "var(--space-1-5) var(--gutter)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", color: "var(--ink-muted)", display: "flex", gap: "var(--space-1-5)" },
  crumbLink: { color: "var(--ink-soft)" },
  crumbSep: { color: "var(--muted)" },
  crumbCurrent: { color: "var(--navy)", fontWeight: 600 },

  statBox: { marginTop: "var(--space-6)", padding: "var(--space-3) var(--space-4)", border: "1px solid var(--rule)", display: "inline-block" },
  statLabel: { fontSize: "var(--fs-label)", color: "var(--ink-muted)", fontFamily: "var(--font-mono)" },
  statNum: { fontSize: "var(--fs-xl)", color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 },
  statUnit: { fontSize: "var(--fs-body)", color: "var(--ink-soft)" },

  featGrid: (n) => ({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" }),
  featCell: { padding: "var(--space-4) var(--space-3)", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" },
  featNum: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 500 },

  tableWrap: { background: "var(--surface)", border: "1px solid var(--rule)" },
  tableRow: { display: "grid", gridTemplateColumns: "180px 1fr 1.5fr", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--rule-soft)", alignItems: "center", fontSize: "var(--fs-ui)" },
  tableRowGrouped: { borderTop: "1px solid var(--rule)", paddingTop: "var(--space-2)" },
  tableGroup: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 500 },
  tableKey: { color: "var(--ink-soft)" },
  tableValue: { fontSize: "var(--fs-ui)", fontWeight: 500 },

  lineRow: { display: "flex", alignItems: "stretch", gap: 0 },
  lineCol: { flex: 1, background: "var(--on-blue-fill)", border: "1px solid var(--on-blue-line)", padding: "var(--space-4)", display: "block", color: "inherit" },
  lineColCurrent: {},
  lineColHeader: { fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", marginBottom: "var(--space-3)" },
  lineCode: { fontSize: "var(--fs-m)", color: "var(--on-blue)", fontWeight: 600, letterSpacing: "-0.01em" },
  lineArrowMark: { fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", fontWeight: 400 },
  lineLabel: { color: "var(--on-blue)", marginTop: "var(--space-half)", fontSize: "var(--fs-ui)", fontWeight: 500 },
  lineHere: { marginTop: "var(--space-2)", fontSize: "var(--fs-label)", color: "var(--on-blue-muted)" },
  lineArrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "var(--on-blue-line)", fontSize: "var(--fs-l)", width: 40 }
};