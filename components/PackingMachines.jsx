/* global React, FaluHeader, FaluFooter, ImageSlot */

// ============================================================
//  /machinery/cotton-swab-machinery/packing
//  Overview of all cotton swab packaging machines. Each card links
//  to its machine detail page. Format-led, scannable.
// ============================================================
window.PackingMachines = function PackingMachines() {
  const machines = [
  {
    code: "SV-2X",
    name: "Cardboard box packaging",
    desc: "Fully automatic cardboard box packaging. Erects, fills, closes and seals flat cartons, replacing plastic packaging with cardboard.",
    automation: ["full"],
    href: "#sv2x",
    img: "SV-2X cardboard box packaging machine"
  },
  {
    code: "BV-2M / ABS-2",
    name: "Polybag packaging",
    desc: "Semi-automatic (BV-2M) or fully automatic (ABS-2) polybag packaging. Polyethylene or paper bags, optional zipper-lock closure.",
    automation: ["semi", "full"],
    href: "#polybag",
    img: "ABS-2 polybag packaging machine"
  },
  {
    code: "RB-30A",
    name: "Round box packaging",
    desc: "Fully automatic round box filling. Dispenses boxes, fills a predefined swab count, and closes them with their lids.",
    automation: ["full"],
    href: "#rb30a",
    img: "RB-30A round box packaging machine"
  },
  {
    code: "SQB-2A",
    name: "Square box packaging",
    desc: "Fully automatic square box packaging. Erects, fills and closes square folding cartons for retail distribution.",
    automation: ["full"],
    href: "#sqb2a",
    img: "SQB-2A square box packaging machine"
  },
  {
    code: "BL-12",
    name: "Blister packaging",
    desc: "Fully automatic blister packaging. Thermoforms cavities, fills a counted set of swabs, and seals with card or foil for tamper-evident packs.",
    automation: ["full"],
    href: "#bl12",
    img: "BL-12 blister packaging machine"
  }];

  const automationLabel = { full: "Fully automatic", semi: "Semi-automatic" };


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
            <a href="#cotton-swab-machinery" style={{ color: "inherit", textDecoration: "none" }}>Cotton swab machinery</a>
            <span style={{ margin: "0 var(--space-1-5)", opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--navy)" }}>Packaging</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--section-y) 0 var(--section-y)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-12)", alignItems: "end" }}>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Swab packaging machines.
            </h1>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--ink-soft)" }}>Six packaging machines across five formats combine with cotton swab production to match any retail or bulk format. Each one connects to FALU CB and CT swab lines.


            </p>
          </div>
        </div>
      </section>

      {/* MACHINE LIST */}
      <section style={{ padding: "0 0 var(--section-y)", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ paddingTop: "var(--section-y)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)", marginTop: "var(--space-6)" }}>
            {machines.map((m, i) =>
            <a key={m.code} href={m.href} style={pack.card}>
                <ImageSlot id={`PACK-0${i + 1}`} label={m.img} ratio="16 / 9" />
                <div style={pack.body}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-1-5)", flexWrap: "wrap" }}>
                    <div className="mono" style={pack.code}>{m.code}</div>
                    <div style={{ display: "flex", gap: "var(--space-1)", flexWrap: "wrap" }}>
                      {m.automation.map((a) =>
                      <span key={a} className="mono" style={pack.pill}>{automationLabel[a]}</span>
                      )}
                    </div>
                  </div>
                  <h3 style={{ fontSize: "var(--fs-l)", marginTop: "var(--space-1-5)", lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--navy)" }}>{m.name}</h3>
                  <p style={{ marginTop: "var(--space-2)", fontSize: "var(--fs-ui)", lineHeight: 1.6, color: "var(--ink-soft)", flex: 1 }}>{m.desc}</p>
                </div>
              </a>
            )}

            {/* Round table packaging card */}
            <div style={pack.card}>
              <ImageSlot id="PACK-06" label="Round table semi-automatic packaging" ratio="16 / 9" />
              <div style={pack.body}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-1-5)", flexWrap: "wrap" }}>
                  <div className="mono" style={pack.code}>Round table</div>
                  <div style={{ display: "flex", gap: "var(--space-1)", flexWrap: "wrap" }}>
                    <span className="mono" style={pack.pill}>Semi-automatic</span>
                  </div>
                </div>
                <h3 style={{ fontSize: "var(--fs-l)", marginTop: "var(--space-1-5)", lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--navy)" }}>Round table packaging</h3>
                <p style={{ marginTop: "var(--space-2)", fontSize: "var(--fs-ui)", lineHeight: 1.6, color: "var(--ink-soft)", flex: 1 }}>
                  The swab machine places finished swabs onto a rotating round table. Factory workers
                  pick them up and place them into the container by hand. Lower investment, full
                  format flexibility for low to mid volumes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL SOLUTIONS */}
      <section style={{ padding: "var(--section-y) 0 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "var(--fs-xl)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--navy)", marginTop: "var(--space-4)", marginBottom: "var(--space-3)", maxWidth: 760 }}>
            Special and custom formats.
          </h2>
          <p style={{ fontSize: "var(--fs-body)", lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 760 }}>
            Two further packaging options are available in combination with the cotton swab machines, and additional formats can be developed on request.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--space-3)", marginTop: "var(--space-6)" }}>
            <div style={pack.ghost}>
              <div className="mono" style={pack.ghostLabel}>Special format</div>
              <h3 style={pack.ghostTitle}>Flip-top boxes</h3>
              <p style={pack.ghostDesc}>Hinged-lid retail box packaging, available in combination with FALU cotton swab machines.</p>
            </div>
            <div style={pack.ghost}>
              <div className="mono" style={pack.ghostLabel}>Special format</div>
              <h3 style={pack.ghostTitle}>Flow packs</h3>
              <p style={pack.ghostDesc}>Horizontal flow-wrap packaging for individual swabs or counted multipacks.</p>
            </div>
            <a href="#contact" style={pack.ghostCta}>
              <div className="mono" style={pack.ghostLabel}>Custom solution</div>
              <h3 style={pack.ghostTitle}>Tell us your requirements</h3>
              <p style={pack.ghostDesc}>Further packaging solutions are developed on request. Get in touch to discuss your specific format.</p>
              <span style={pack.ghostArrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "var(--section-y) 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-6)", alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>
            Not sure which format fits your market? We will help you choose.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-end" }}>
            <a href="#contact" className="btn btn--primary btn--lg">Request a quotation<span className="arrow" /></a>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);
};

const pack = {
  card: { display: "flex", flexDirection: "column", background: "var(--surface)", border: "1px solid var(--rule)", textDecoration: "none", color: "inherit" },
  body: { padding: "var(--space-4) var(--space-4) var(--space-3)", display: "flex", flexDirection: "column", flex: 1 },
  code: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 600 },
  pill: { fontSize: "var(--fs-label)", color: "var(--navy)", background: "var(--bg-alt)", padding: "var(--space-half) var(--space-1-5)", borderRadius: 999, fontWeight: 600, whiteSpace: "nowrap" },
  foot: { marginTop: "var(--space-3)", paddingTop: "var(--space-2)", borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "flex-end", alignItems: "center" },
  ghost: { padding: "var(--space-4) var(--space-4)", background: "var(--surface)", border: "1px dashed var(--rule)", display: "flex", flexDirection: "column" },
  ghostCta: { padding: "var(--space-4) var(--space-4)", background: "var(--surface)", border: "1px solid var(--navy)", display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", position: "relative" },
  ghostLabel: { fontSize: "var(--fs-label)", color: "var(--ink-muted)", marginBottom: "var(--space-2)" },
  ghostTitle: { fontSize: "var(--fs-m)", lineHeight: 1.2, letterSpacing: "-0.015em", color: "var(--navy)" },
  ghostDesc: { marginTop: "var(--space-1-5)", fontSize: "var(--fs-ui)", lineHeight: 1.6, color: "var(--ink-soft)", flex: 1 },
  ghostArrow: { position: "absolute", right: 28, bottom: 24, color: "var(--ink)", fontSize: "var(--fs-m)", fontWeight: 600 }
};