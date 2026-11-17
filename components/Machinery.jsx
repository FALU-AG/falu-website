/* global React, FaluHeader, FaluFooter, ImageSlot */

// ============================================================
//  /machinery: Machinery family index page
//  Adapted from /solutions wireframe: 3 grouped machinery blocks,
//  planning visually separate. Bulleted, simple, scannable.
// ============================================================
window.Machinery = function Machinery() {
  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "var(--space-1-5) var(--gutter)" }}>
          <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)" }}>
            <a href="#home" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 var(--space-1-5)", opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--navy)" }}>Machinery</span>
          </div>
        </div>
      </div>

      {/* HERO: above the fold */}
      <section style={{ padding: "var(--section-y) 0 var(--section-y)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-12)", alignItems: "end" }}>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 0.96, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Machinery.
            </h1>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--ink-soft)" }}>FALU supports manufacturers with machinery and complete production lines for cotton-based hygiene products.



            </p>
          </div>
        </div>
      </section>

      {/* MACHINERY BLOCKS: grouped */}
      <section style={{ padding: "0 0 var(--section-y)", background: "var(--bg-band)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ paddingTop: "var(--section-y)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)", marginTop: "var(--space-8)" }}>
            <FamilyCard
              num="01"
              title="Cotton swab production"
              imgId="MACH-01"
              image="Cotton swab production line, CB1 4.1"
              bullets={[
              "Single machines or complete lines",
              "Integrated packaging options",
              "Semi-automatic and fully automatic options"]
              }
              ctaLabel="View Cotton Swab Machinery"
              href="#cotton-swab-machinery" />
            
            <FamilyCard
              num="02"
              title="Cotton pad production"
              imgId="MACH-02"
              image="Cotton pad production line, WR-2100 + VP"
              bullets={[
              "Single machines or complete lines",
              "Integrated packaging options",
              "Semi-automatic and fully automatic options"]
              }
              ctaLabel="View Cotton Pad Machinery"
              href="#cotton-pad-machinery" />
            
            <FamilyCard
              num="03"
              title="Paper stick production"
              imgId="MACH-03"
              image="Paper stick production machine, PRX"
              bullets={[
              "Fully automatic systems",
              "Integration into swab production lines",
              "Available for food applications"]
              }
              ctaLabel="View Paper Stick Machinery"
              href="#prx" />
            
          </div>
        </div>
      </section>

      {/* PRODUCTION PLANNING: visually separate */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-12)", alignItems: "start", marginTop: "var(--space-4)" }}>
            <div>
              <h2 style={{ fontSize: "var(--fs-xxl)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--navy)" }}>
                We help you plan<br />your production line around your needs.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.65, color: "var(--ink-soft)" }}>
                Before machines are specified, FALU engineers help define the right line for your
                output target, footprint and product mix. Production planning covers production
                flow and capacity definition, factory layout and space planning, and line concept
                creation.
              </p>
              <div style={{ marginTop: "var(--space-6)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--rule)" }}>
                {[
                ["Production flow & capacity", "Output forecasts by shift pattern, format and downtime assumptions, matched to your business plan."],
                ["Factory layout & space", "CAD layout for your factory floor, including service zones, utilities and material flow."],
                ["Line concept creation", "End-to-end line concept covering stick supply, swab production, packaging and inspection."],
                ["Capital sequencing", "Phased investment plan, retrofit-first paths where appropriate to spread capital expenditure."]].
                map(([t, b]) =>
                <div key={t}>
                    <h4 style={{ fontSize: "var(--fs-body)", fontWeight: 600, color: "var(--navy)", marginBottom: "var(--space-1)" }}>{t}</h4>
                    <p style={{ fontSize: "var(--fs-ui)", lineHeight: 1.6, color: "var(--ink-soft)" }}>{b}</p>
                  </div>
                )}
              </div>
              <a href="#contact" style={{ marginTop: "var(--space-6)", display: "inline-flex", alignItems: "center", gap: "var(--space-1)", color: "var(--ink)", fontSize: "var(--fs-body)", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--falu-blue)", paddingBottom: "var(--space-half)", alignSelf: "flex-start" }}>Request a quotation<span className="arrow" style={{ borderColor: "var(--falu-red)" }} /></a>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);

};

// ============ FAMILY CARD ============
function FamilyCard({ num, title, imgId, image, bullets, ctaLabel, href }) {
  return (
    <a href={href} style={{ display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "var(--radius)", overflow: "hidden", "--slot-radius": "0px" }}>
      <ImageSlot id={imgId} label={image} ratio="4 / 3" />
      <div style={{ padding: "var(--space-4) var(--space-4) var(--space-4)", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: "var(--fs-l)", lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--navy)" }}>
          {title}
        </h3>
        <ul style={{ marginTop: "var(--space-3)", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-1-5)", flex: 1 }}>
          {bullets.map((b) =>
          <li key={b} style={{ position: "relative", paddingLeft: "var(--space-2)", fontSize: "var(--fs-ui)", lineHeight: 1.55, color: "var(--ink-soft)" }}>
              <span style={{ position: "absolute", left: 0, top: 9, width: 8, height: 1, background: "var(--falu-red)" }} />
              {b}
            </li>
          )}
        </ul>
        <div style={{ marginTop: "var(--space-4)" }}>
          <span className="btn btn--primary" style={{ width: "100%", justifyContent: "space-between" }}>{ctaLabel}<span className="arrow" /></span>
        </div>
      </div>
    </a>);

}