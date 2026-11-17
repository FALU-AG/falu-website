/* global React, FaluHeader, FaluFooter, MachineHeroVideo */

// ============================================================
// PRX, PAPER STICK PRODUCTION MACHINE, DETAIL PAGE
// Mirrors the CB1 template. Hard specs are PLACEHOLDERS until
// the PRX fact sheet is supplied. Marked [TBC] in the table.
// ============================================================

window.MachinePRX = function MachinePRX() {
  return (
    <div style={{ background: "var(--surface)" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={prxCrumb.wrap}>
        <div className="container" style={prxCrumb.inner}>
          <a href="#machinery" style={prxCrumb.link}>Machinery</a>
          <span style={prxCrumb.sep}>/</span>
          <a href="#machinery" style={prxCrumb.link}>Paper Stick Machinery</a>
          <span style={prxCrumb.sep}>/</span>
          <span style={prxCrumb.current}>PRX</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--space-8) 0 var(--section-y)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "var(--space-8)", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "var(--fs-xxl)", lineHeight: 1.02 }}>
              PRX<br />
              <span style={{ color: "var(--ink-soft)", fontWeight: 500 }}>
                Paper stick production machine
              </span>
            </h1>
            <p style={{ marginTop: "var(--space-4)", fontSize: "var(--fs-lead)", color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 580 }}>
              Fully automatic production of biodegradable, compostable paper sticks. Runs as a
              standalone stick line, or feeds a FALU cotton swab machine inline, removing the
              carton, the operator who loads it, and the standstill time from missing sticks
              from the process entirely.
            </p>
            <div style={{ display: "flex", gap: "var(--space-1-5)", marginTop: "var(--space-6)" }}>
              <a className="btn btn--primary btn--lg" href="#contact">Request a quotation<span className="arrow" /></a>
              <a className="btn btn--ghost btn--lg" href="#contact">Request the datasheet<span className="arrow" /></a>
            </div>
          </div>
          <div>
            <MachineHeroVideo id="PRX-VIDEO" label="PRX paper stick machine, hero video" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "start", marginBottom: "var(--space-8)" }}>
            <h2>From paper rolls<br />to finished sticks.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>
              The PRX runs forming, drying, buffering and packaging as one integrated system. It can
              supply other downstream processes, or sit directly upstream of a FALU swab machine so
              finished sticks never have to be cartoned, shipped or hand-loaded.
            </p>
          </div>

          <div style={prxFeatures.grid}>
            {[
            ["Minimal paper waste", "FALU's optimised forming process uses nearly the entire paper web, so material loss stays far below what conventional paper stick lines produce."],
            ["Biodegradable & compostable", "Produces biodegradable, compostable paper sticks for cotton swabs, cosmetic and safety (baby) swabs, and lollipops."],
            ["Standalone or integrated", "Operates as a stand-alone stick line, or connects directly to FALU CT and CB series swab machines for fully automated stick supply."],
            ["Eliminates manual loading", "Produces, buffers and feeds sticks directly to the swab machine, removing manual carton loading and the operator errors that come with it."],
            ["Integrated buffer", "A buffer of 75'000 sticks harmonises stick and swab line speeds, around 30 minutes of swab production at 2'800 swabs/min."],
            ["Forming, drying, buffering, packaging", "Paper is shaped, dried to remove excess humidity, buffered, then packed or fed onward, all in one machine."]].
            map(([title, body]) =>
            <div key={title} style={prxFeatures.cell}>
              <h4 style={{ fontSize: "var(--fs-body)" }}>{title}</h4>
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
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>Layout dimensions vary by configuration, FALU provides a layout plan on request based on your production requirements and available space.


            </p>
          </div>

          <div style={prxTable.wrap}>
            {[
            ["Output", "Production speed", "Up to 3'000 sticks/min"],
            ["", "Operating mode", "Standalone or integrated with CT / CB swab machines"],
            ["Buffer", "Capacity", "75'000 sticks"],
            ["", "Equivalent runtime", "~30 min of swab production at 2'800/min"],
            ["Paper roll", "Roll diameter", "max. 1'100 mm (including core)"],
            ["", "Roll width", "max. 900 mm"],
            ["Stick carton", "Dimensions (standalone)", "230 × 80 × 800 mm"],
            ["", "Carton capacity", "~30'000 paper sticks"],
            ["", "Filling time", "up to 5 min, including handling"],
            ["Dimensions", "Layout", "Configurable, layout plan on request"],
            ["Electrical", "Voltage", "400 V / 50 Hz (transformer required for other voltages)"],
            ["", "Control system", "PLC controlled electrical system"],
            ["Certification", "Compliance", "CE certified, European machinery safety standards"],
            ["Delivery", "Tooling", "Complete standard tooling for one stick configuration"],
            ["", "Documentation", "Instruction manual and spare parts documentation"]].
            map(([group, key, value], i, arr) => {
              const showGroup = group && (i === 0 || arr[i - 1][0] !== group);
              return (
                <div key={i} style={{ ...prxTable.row, ...(showGroup ? prxTable.rowGrouped : {}) }}>
                  <div className="mono" style={prxTable.group}>{showGroup ? group : ""}</div>
                  <div style={prxTable.key}>{key}</div>
                  <div className="mono" style={{ ...prxTable.value, color: "var(--navy)" }}>{value}</div>
                </div>);
            })}
          </div>
        </div>
      </section>

      {/* LINE INTEGRATION */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--navy)", color: "var(--on-blue)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-6)", marginTop: "var(--space-4)" }}>
            <h2 style={{ color: "var(--on-blue)", maxWidth: 720 }}>The PRX is the first stage of a complete swab line.</h2>
            <p style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>Sticks can be fed straight into CB or CT swab machine stick magazines. Click a downstream machine to see its product page.


            </p>
          </div>

          <div style={prxLine.wrap}>
            <div style={prxLine.col}>
              <div className="mono" style={prxLine.colHeader}>01 · Stick production</div>
              <div style={{ ...prxLine.machine, ...prxLine.featured }}>
                <div className="mono" style={{ ...prxLine.code, color: "var(--on-blue)" }}>PRX</div>
                <div style={prxLine.label}>Paper stick production</div>
                <p style={prxLine.note}>Forms paper sticks straight from the paper roll and feeds the swab machine magazine directly.</p>
                <div className="mono" style={prxLine.here}>You are here</div>
              </div>
            </div>
            <div style={prxLine.arrow}>→</div>
            <div style={prxLine.col}>
              <div className="mono" style={prxLine.colHeader}>02 · Swab production</div>
              <a href="#cb1" style={prxLine.link}>
                <div style={prxLine.machine}>
                  <div className="mono" style={prxLine.code}>CB1 4.1 <span style={prxLine.linkArrow}>↗</span></div>
                  <div style={prxLine.label}>Cotton swab forming</div>
                  <p style={prxLine.note}>Forms swabs from cotton string and the applicator sticks at up to 3'100/min.</p>
                </div>
              </a>
            </div>
            <div style={prxLine.arrow}>→</div>
            <div style={prxLine.col}>
              <div className="mono" style={prxLine.colHeader}>03 · Packaging · 7 options</div>
              <div style={prxLine.list}>
                {[
                ["SV-2X", "Cardboard boxes", "#sv2x"],
                ["BV-2M", "Polybag (semi-auto)", "#polybag"],
                ["ABS-2", "Polybag (auto)", "#polybag"],
                ["RB-30A", "Round boxes", "#rb30a"],
                ["SQB-2A", "Square boxes", "#sqb2a"],
                ["BL-12", "Blister packaging", "#bl12"],
                ["Round table", "Manual placing (semi-auto)", "#packing"]].
                map(([code, l, href]) =>
                <a key={code} href={href} style={prxLine.row}>
                  <span className="mono" style={{ color: "var(--on-blue)", fontWeight: 600 }}>{code} <span style={prxLine.linkArrow}>↗</span></span>
                  <span style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-label)" }}>{l}</span>
                </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--surface)", padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-6)", alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>
            Planning a swab line, or adding stick production to an existing one?
          </h2>
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

// ============ STYLES ============
const prxCrumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "var(--space-1-5) var(--gutter)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", color: "var(--ink-muted)", display: "flex", gap: "var(--space-1-5)" },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--muted)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const prxFeatures = {
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" },
  cell: { padding: "var(--space-4) var(--space-3)", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }
};

const prxTable = {
  wrap: { background: "var(--surface)", border: "1px solid var(--rule)" },
  row: { display: "grid", gridTemplateColumns: "180px 1fr 1.5fr", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--rule-soft)", alignItems: "center", fontSize: "var(--fs-ui)" },
  rowGrouped: { borderTop: "1px solid var(--rule)", paddingTop: "var(--space-2)" },
  group: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 500 },
  key: { color: "var(--ink-soft)" },
  value: { fontSize: "var(--fs-ui)", fontWeight: 500 }
};

const prxLine = {
  wrap: { display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1.4fr", gap: 0, alignItems: "stretch" },
  col: { background: "var(--on-blue-fill)", border: "1px solid var(--on-blue-line)", padding: "var(--space-4)" },
  colHeader: { fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", marginBottom: "var(--space-3)" },
  arrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "var(--on-blue-line)", fontSize: "var(--fs-l)" },
  link: { display: "block", textDecoration: "none", color: "inherit" },
  machine: { padding: "var(--space-3) 0" },
  featured: { borderTop: "3px solid var(--falu-red)", paddingTop: "var(--space-2)" },
  code: { fontSize: "var(--fs-m)", color: "var(--on-blue)", fontWeight: 600, letterSpacing: "-0.01em", display: "flex", alignItems: "baseline", gap: "var(--space-1)" },
  label: { color: "var(--on-blue)", marginTop: "var(--space-half)", fontSize: "var(--fs-ui)", fontWeight: 500 },
  note: { marginTop: "var(--space-1-5)", color: "var(--on-blue-muted)", fontSize: "var(--fs-label)", lineHeight: 1.55 },
  here: { marginTop: "var(--space-2)", fontSize: "var(--fs-label)", color: "var(--on-blue-muted)" },
  list: { display: "flex", flexDirection: "column" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-1-5) 0", borderBottom: "1px solid var(--on-blue-line)", fontSize: "var(--fs-label)", textDecoration: "none" },
  linkArrow: { fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", fontWeight: 400 }
};