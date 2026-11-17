/* global React, FaluHeader, FaluFooter, ImageSlot */

// ============================================================
// SERVICES & LIFECYCLE SUPPORT
// Consolidates the promises made across the site: spare parts,
// retrofits (the 4 fact-sheet upgrades), training, commissioning,
// consultation. Procurement-facing.
// ============================================================

window.Services = function Services() {
  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <FaluHeader active="services" />

      {/* Breadcrumb */}
      <div style={svcCrumb.wrap}>
        <div className="container" style={svcCrumb.inner}>
          <a href="#home" style={svcCrumb.link}>Home</a>
          <span style={svcCrumb.sep}>/</span>
          <span style={svcCrumb.current}>Services</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--section-y) 0 var(--section-y)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-12)", alignItems: "end" }}>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Services.
            </h1>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--ink-soft)" }}>
              A FALU machine is a multi-decade investment. We support it for the whole of that life,
              from line planning and commissioning through training, spare parts, and retrofits that
              keep an installed machine current.
            </p>
          </div>
        </div>
      </section>

      {/* LIFECYCLE SERVICES */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <h2 style={{ fontSize: "var(--fs-xl)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "var(--space-4)", marginBottom: "var(--space-8)" }}>
            One partner, from concept<br />to decades of operation.
          </h2>

          <div style={svc.grid}>
            {[
              ["S-01", "Consultation & production planning", "Line specification, capacity modelling and factory layout before a machine is ordered. We size the line to your output target and footprint."],
              ["S-02", "Commissioning & ramp-up", "Installation, integration with upstream and downstream equipment, and supervised production start-up until the line runs to specification."],
              ["S-03", "Operator training", "On-site or at Rüti. Operators and maintenance staff are trained on running, changeover, cleaning and first-line fault finding."],
              ["S-04", "Spare parts", "We guarantee spare part availability for the entire lifecycle of your machine, independent of installation date. Critical wear parts are held and shipped fast."],
              ["S-05", "Retrofits & upgrades", "Add capability to an installed machine: gluing, inspection, drive, and dust-control upgrades engineered to fit machines built decades ago."],
              ["S-06", "Remote diagnostics & support", "Modem-based remote access lets FALU technicians diagnose and often resolve issues without a site visit, reducing downtime."]
            ].map(([num, title, body]) => (
              <div key={num} style={svc.cell}>
                <div className="mono" style={svc.num}>{num}</div>
                <h3 style={{ marginTop: "var(--space-2)", fontSize: "var(--fs-m)" }}>{title}</h3>
                <p style={{ marginTop: "var(--space-1-5)", color: "var(--ink-soft)", fontSize: "var(--fs-ui)", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPARE PARTS COMMITMENT: navy slab */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--navy)", color: "var(--on-blue)" }}>
        <div className="container">
          <div>
            <h2 style={{ fontSize: "var(--fs-xl)", color: "var(--on-blue)", letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 820 }}>
              Spare parts guaranteed for the entire lifecycle of the machine.
            </h2>
            <p style={{ marginTop: "var(--space-3)", color: "var(--on-blue-muted)", fontSize: "var(--fs-body)", lineHeight: 1.65, maxWidth: 720 }}>
              Not a warranty window. FALU continues to manufacture parts for machines installed
              decades ago, which is why so many are still in service. Your line keeps running on the
              day the original engineer retires, and on the day the one after them retires too.
            </p>
          </div>
        </div>
      </section>

      {/* RETROFITS */}
      <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-8)", marginTop: "var(--space-4)" }}>
            <h2 style={{ fontSize: "var(--fs-xl)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
              Add new capability to a<br />machine you already own.
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>
              The core retrofit programme. Each upgrade is available on new machines and as a field
              retrofit on existing installations, including machines built decades ago.
            </p>
          </div>

          <div style={svcRetro.grid}>
            <RetroLine
              code="R-01"
              title="Hot Melt System"
              body="High-precision adhesive application that replaces heating bars and mechanical cold gluing. Speed-independent, fully metered, closed-loop."
              compat="All FALU cotton swab machine models"
            />
            <RetroLine
              code="R-02"
              title="Camera-based Quality Management"
              body="Industrial camera and centralised evaluation unit inspect swabs at up to 3'000 swabs/min from a defined distance, replacing fibre-optic light guides. Detects missing heads and visible defects, with image memory for root-cause analysis."
              compat="All FALU swab machines, all swab variants incl. baby and cosmetic"
            />
            <RetroLine
              code="R-03"
              title="Belt Drive System"
              body="Replaces the lubricated primary chain with a dry-running belt. Eliminates oil and grease from the enclosure, reduces contamination risk, and lowers maintenance standstill time. Standard on new CB1 4.1."
              compat="Standard on new CB1 4.1. Retrofit available for all existing FALU swab machines."
            />
            <RetroLine
              code="R-04"
              title="Dust Extraction System"
              body="Four extraction modules remove airborne fibres and heavier particles where they are generated: cotton feeder, secondary belt, airflow housing, and a belt-and-chain blow-off."
              compat="All FALU machine models featuring a closable machine housing"
            />
          </div>

          <div style={svcRetro.banner}>
            <div>
                            <h3 style={{ marginTop: "var(--space-1)", color: "var(--on-blue)", fontSize: "var(--fs-l)", maxWidth: 720 }}>
                Tell us your machine and serial number. We'll tell you which upgrades fit and what they change.
              </h3>
            </div>
            <a href="#contact" className="btn btn--inverse" style={{ whiteSpace: "nowrap" }}>Request a retrofit quotation<span className="arrow" /></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-6)", alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>
            Already running a FALU machine, or planning your first line?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-end" }}>
            <a href="#contact" className="btn btn--primary btn--lg">Get in touch with our specialists<span className="arrow" /></a>
            <div className="mono" style={{ color: "var(--ink-muted)", fontSize: "var(--fs-label)" }}>
              <a href="mailto:sales@falu.com" style={{ color: "inherit" }}>sales@falu.com</a>
              {" · "}
              <a href="tel:+41552255151" style={{ color: "inherit" }}>+41 55 225 51 51</a>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>
  );
};

function RetroLine({ code, title, body, compat, status, statusTone }) {
  return (
    <div style={svcRetro.row}>
      <div style={svcRetro.left}>
        <div className="mono" style={svcRetro.code}>{code}</div>
        <div style={status ? (statusTone === "navy" ? svcRetro.statusNavy : svcRetro.status) : { display: "none" }}>{status}</div>
      </div>
      <div style={svcRetro.mid}>
        <h3 style={{ fontSize: "var(--fs-m)", color: "var(--navy)", letterSpacing: "-0.01em" }}>{title}</h3>
        <p style={{ marginTop: "var(--space-1-5)", color: "var(--ink-soft)", fontSize: "var(--fs-ui)", lineHeight: 1.6 }}>{body}</p>
        <div className="mono" style={svcRetro.compat}>
          <span style={{ color: "var(--ink)", marginRight: "var(--space-1)" }}>Compatibility</span>
          {compat}
        </div>
      </div>
      <a href="#contact" className="mono" style={svcRetro.link}>Details →</a>
    </div>
  );
}

const svcCrumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "var(--space-1-5) var(--gutter)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", color: "var(--ink-muted)", display: "flex", gap: "var(--space-1-5)" },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--muted)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const svc = {
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" },
  cell: { padding: "var(--space-4) var(--space-4) var(--space-4)", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", background: "var(--surface)" },
  num: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 500 }
};

const svcRetro = {
  grid: { border: "1px solid var(--rule)", borderBottom: "none" },
  row: { display: "grid", gridTemplateColumns: "160px 1fr auto", gap: "var(--space-4)", padding: "var(--space-4)", borderBottom: "1px solid var(--rule)", alignItems: "start", background: "var(--surface)" },
  left: { display: "flex", flexDirection: "column", gap: "var(--space-1-5)" },
  code: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 600 },
  status: { fontSize: "var(--fs-label)", color: "var(--ink-muted)", fontWeight: 500, fontFamily: "var(--font-mono)", padding: "var(--space-half) var(--space-1)", border: "1px solid var(--rule)", alignSelf: "start" },
  statusNavy: { fontSize: "var(--fs-label)", color: "var(--on-blue)", fontWeight: 500, fontFamily: "var(--font-mono)", padding: "var(--space-half) var(--space-1)", background: "var(--navy)", alignSelf: "start" },
  mid: {},
  compat: { marginTop: "var(--space-2)", paddingTop: "var(--space-2)", borderTop: "1px solid var(--rule-soft)", fontSize: "var(--fs-label)", color: "var(--ink-muted)", lineHeight: 1.5 },
  link: { fontSize: "var(--fs-label)", color: "var(--navy)", textDecoration: "none", whiteSpace: "nowrap", paddingTop: "var(--space-1)" },
  banner: { marginTop: "var(--space-6)", padding: "var(--space-4) var(--space-6)", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }
};
