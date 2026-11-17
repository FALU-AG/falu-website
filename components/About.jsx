/* global React, FaluHeader, FaluFooter, ImageSlot */

// ============================================================
//  /about-us: About / Company
//  Vendor-qualification page. Heritage, Rüti, the engineering
//  approach, the long-horizon promise. Grounded in supplied facts.
// ============================================================
window.About = function About() {
  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <FaluHeader active="about" />

      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "var(--space-1-5) var(--gutter)" }}>
          <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)" }}>
            <a href="#home" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 var(--space-1-5)", opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--navy)" }}>About</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--section-y) 0 var(--section-y)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-12)", alignItems: "end" }}>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>
              Sixty years of<br />Swiss machine manufacturing.
            </h1>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--ink-soft)" }}>
              FALU has built machinery for cotton swabs, cotton pads and paper sticks in
              Switzerland since 1965, today from a single site in Rüti. We do one thing, and we
              have done it for three generations.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY FACTS */}
      <section style={{ padding: "0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderLeft: "1px solid var(--rule)" }}>
          {[
            ["1965", "Founded in Switzerland"],
            ["Rüti", "Single site, design to assembly"],
            ["70+", "Countries with installed lines"],
            ["40+ yrs", "Typical machine service life"]
          ].map(([n, l]) => (
            <div key={l} style={{ padding: "var(--space-6) var(--space-4)", borderRight: "1px solid var(--rule)" }}>
              <div style={{ fontSize: "var(--fs-l)", color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.02em" }}>{n}</div>
              <div style={{ marginTop: "var(--space-1-5)", fontSize: "var(--fs-label)", color: "var(--ink-soft)", lineHeight: 1.5 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HERITAGE NARRATIVE */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--bg-band)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "start", marginTop: "var(--space-4)" }}>
            <div>
              <h2 style={{ fontSize: "var(--fs-xl)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                A specialist, not a generalist.
              </h2>
              <p style={{ marginTop: "var(--space-3)", fontSize: "var(--fs-body)", lineHeight: 1.7, color: "var(--ink-soft)" }}>
                FALU builds production and packaging machinery for cotton swabs, cotton pads and
                paper sticks, used across the health, beauty and food industries. It is the only
                thing we make, and the depth that comes from that focus is the reason our machines
                are trusted in more than 70 countries.
              </p>
              <p style={{ marginTop: "var(--space-3)", fontSize: "var(--fs-body)", lineHeight: 1.7, color: "var(--ink-soft)" }}>
                Our engineers know cotton, sticks, glue and forming geometries the way most teams
                know spreadsheets. When a customer brings an unusual product or a difficult format,
                the answer almost always already exists somewhere in six decades of FALU machines.
              </p>
            </div>
            <ImageSlot id="ABOUT-01" label="FALU engineering team / archive photograph" ratio="4 / 3" />
          </div>
        </div>
      </section>

      {/* RÜTI / FACTORY */}
      <section style={{ padding: "var(--section-y) 0", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "center" }}>
            <ImageSlot id="ABOUT-02" label="FALU factory, Rüti, Switzerland, exterior" ratio="4 / 3" />
            <div>
              <h2 style={{ fontSize: "var(--fs-xl)", lineHeight: 1.1, letterSpacing: "-0.025em", marginTop: "var(--space-4)" }}>
                Designed, built and assembled<br />under one roof.
              </h2>
              <p style={{ marginTop: "var(--space-3)", fontSize: "var(--fs-body)", lineHeight: 1.7, color: "var(--ink-soft)" }}>
                Engineering, manufacturing, assembly and final testing all happen at our site at
                Joweid Zentrum 5 in Rüti. Keeping the whole process in one building is how we hold
                Swiss tolerances and how the same people who design a machine are the ones who see
                it run before it ships.
              </p>
              <div style={{ marginTop: "var(--space-4)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", color: "var(--navy)", letterSpacing: "0.02em", lineHeight: 1.7 }}>
                FALU AG<br />
                Joweid Zentrum 5, 8630 Rüti<br />
                Switzerland
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT GUIDES US: navy slab */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--navy)", color: "var(--on-blue)" }}>
        <div className="container">
          <h2 style={{ fontSize: "var(--fs-xl)", color: "var(--on-blue)", letterSpacing: "-0.025em", lineHeight: 1.1, maxWidth: 820, marginTop: "var(--space-4)", marginBottom: "var(--space-8)" }}>
            Manufacturing machines that outlast the people who specified them.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)" }}>
            {[
              ["Total cost of ownership", "We optimise for the cost of running a line over decades, not the price on the day it ships. Lower scrap, higher uptime, fewer operators."],
              ["Lifecycle commitment", "Spare parts guaranteed for the entire life of the machine, independent of installation date. Many FALU machines run for over forty years."],
              ["Long-term partnership", "Most of our business is with customers we have supported for decades. We sell machines, but we keep relationships."]
            ].map(([t, b]) => (
              <div key={t} style={{ paddingTop: "var(--space-3)", borderTop: "1px solid var(--on-blue-muted)" }}>
                <h4 style={{ color: "var(--on-blue)", fontSize: "var(--fs-lead)", fontWeight: 600, marginBottom: "var(--space-1-5)" }}>{t}</h4>
                <p style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-ui)", lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-6)", alignItems: "center" }}>
          <h2 style={{ color: "var(--navy)", maxWidth: 720 }}>
            Want to know whether FALU is the right partner for your line?
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
