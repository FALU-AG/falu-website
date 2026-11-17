/* global React, FaluHeader, FaluFooter, ImageSlot */

// ============================================================
// HOMEPAGE, DIRECTION B v2 · "Industrial editorial"
// Restructured around the user's wireframe + earlier feedback.
// ============================================================

window.HomepageB = function HomepageB() {
  return (
    <div style={{ background: "var(--surface)" }}>
      <FaluHeader active="home" />

      {/* 1. HERO */}
      <section style={{ background: "var(--surface)" }}>
        <div style={heroB.wrap}>
          <ImageSlot id="HOME-01" label="CB1 line, Rüti production floor wide shot" height={620} />
          <div style={heroB.overlay}>
            <div className="container" style={heroB.overlayInner}>
              <h1 style={heroB.title}>
                Production lines<br />
                for cotton swabs<br />
                & pads.
              </h1>
            </div>
          </div>
        </div>

        <div className="container hero-subrow" style={heroB.subRow}>
          <p style={heroB.lede}>Swiss-engineered machinery for long-term, industrial use. Built for decades of service, with spare parts available for the entire machine lifecycle.



          </p>
          <div className="hero-subrow__actions" style={{ display: "flex", gap: "var(--space-1-5)", flexShrink: 0 }}>
            <a className="btn btn--primary btn--lg" href="#contact">Request a quotation<span className="arrow" /></a>
            <a className="btn btn--ghost btn--lg" href="#machinery">Browse machinery<span className="arrow" /></a>
          </div>
        </div>

      </section>

      {/* 2. FEATURED CB1 */}
      {/* No borderTop here: the hero sub-row already draws the rule. */}
      <section style={{ padding: "var(--section-y) 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "var(--space-12)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "var(--fs-xxl)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>CB1: more than 3'100 cotton swabs per minute.

            </h2>
            <p style={{ marginTop: "var(--space-4)", fontSize: "var(--fs-lead)", lineHeight: 1.65, color: "var(--ink-soft)" }}>Runs on paper, plastic and wood sticks. Pairs upstream with the PRX paper-stick machine and downstream with different packaging configurations.



            </p>
            <a href="#cb1" className="btn btn--primary" style={{ marginTop: "var(--space-4)" }}>View CB1 specification<span className="arrow" /></a>
          </div>
          <ImageSlot id="HOME-02" label="CB1 4.1, front 3/4 product shot" ratio="4 / 5" />
        </div>
      </section>

      {/* 3. MACHINERY, three families */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-8)" }}>
            <h2 style={{ fontSize: "var(--fs-xxl)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Production machinery, from single machines to complete production lines.
            </h2>
          </div>

          <div style={famB.list}>
            {[
            {
              num: "01",
              title: "Cotton Swab Production",
              desc: "Machines for automated and semi-automated cotton swab manufacturing, from a single machine to a complete line. Compatible with paper, wood and plastic sticks.",
              cta: "Cotton Swab Machinery",
              href: "#cotton-swab-machinery",
              imgLabel: "Cotton swab production line"
            },
            {
              num: "02",
              title: "Cotton Pad Production",
              desc: "Machines for automatic and semi-automatic cosmetic pad manufacturing. Two capacity classes for lower- and high-volume operations, plus a dedicated automated packaging line.",
              formatsLabel: "Pad formats",
              formats: "Round pads · Oval pads · Square pads · Baby pads",
              cta: "Cotton Pad Machinery",
              href: "#cotton-pad-machinery",
              imgLabel: "Cotton pad production line"
            },
            {
              num: "03",
              title: "Paper Stick Production",
              desc: "Paper stick manufacturing built around minimal material loss. The forming process is trimmed to use nearly the entire paper web, so waste stays far below what conventional stick lines produce. Runs standalone or feeds sticks straight into a cotton swab line.",
              formatsLabel: "Stick formats",
              formats: "Various diameters & lengths on request · Also suitable for lollipop sticks",
              cta: "Paper Stick Machinery",
              href: "#prx",
              imgLabel: "PRX paper stick production machine"
            }].
            map((f, i) =>
            <div key={f.num} style={{ ...famB.row, flexDirection: i % 2 ? "row-reverse" : "row" }}>
                <div style={famB.imageCol}>
                  <ImageSlot id={`HOME-0${i + 3}`} label={f.imgLabel} ratio="4 / 3" />
                </div>
                <div style={famB.textCol}>
                  <h3 style={{ fontSize: "var(--fs-l)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>{f.title}</h3>
                  <p style={{ marginTop: "var(--space-2)", color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65, maxWidth: 520 }}>{f.desc}</p>
                  {f.formats &&
                  <div style={famB.formats}>
                      <div className="mono" style={famB.formatsLabel}>{f.formatsLabel}</div>
                      <div className="mono" style={famB.formatsList}>{f.formats}</div>
                    </div>
                  }
                  <a href={f.href} className="btn btn--minimal" style={{ marginTop: "var(--space-3)" }}>View {f.cta}<span className="arrow" /></a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION PLANNING, visually distinct */}
      <section style={planning.wrap}>
        <div className="container">
          <div style={planning.frame}>
            <div style={planning.left}>
              <h2 style={{ fontSize: "var(--fs-xl)", color: "var(--on-blue)", lineHeight: 1.05 }}>
                Production planning<br />& factory layout.
              </h2>
              <p style={{ marginTop: "var(--space-3)", color: "var(--on-blue-muted)", fontSize: "var(--fs-body)", lineHeight: 1.65, maxWidth: 520 }}>
                Engineering services covering material flow, line integration and operational
                scalability. Before a single machine is specified, our engineers help structure
                the plant around your output target, footprint and capacity roadmap.
              </p>
              <a href="#contact" className="btn btn--inverse" style={{ marginTop: "var(--space-4)" }}>Request a quotation<span className="arrow" /></a>
            </div>
            <div style={planning.right}>
              {[
              ["A", "Output targets", "Volume, mix, throughput planning"],
              ["B", "Production flow", "Material flow & line integration"],
              ["C", "Layout", "Factory footprint & expansion"],
              ["D", "Scalability", "Capacity roadmap, phased rollout"]].
              map(([k, t, d]) =>
              <div key={k} style={planning.tile}>
                  <div className="mono" style={planning.tileKey}>{k}</div>
                  <div style={planning.tileTitle}>{t}</div>
                  <div style={planning.tileDesc}>{d}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY FALU */}
      <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <h2 style={{ fontSize: "var(--fs-xxl)", maxWidth: 1000, lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            Built in Switzerland since 1965, many machines running for over 40 years.
          </h2>
          <p style={{ marginTop: "var(--space-4)", fontSize: "var(--fs-lead)", color: "var(--ink-soft)", maxWidth: 720, lineHeight: 1.65 }}>
            FALU machines are designed and assembled in Rüti, built for longevity, reliability
            and serviceability.
          </p>

          <div style={whyB.grid}>
            {[
            {
              head: "Designed for long-term value",
              body: "FALU supports manufacturers with a long-term focus on total cost of ownership and operational stability. Machines are designed for extended service lives, many installations have been operating reliably for over 40 years."
            },
            {
              head: "Engineering excellence",
              body: "Sixty years building only this category of machinery. Our technicians and engineers combine precision, deep category experience and modern engineering practice."
            },
            {
              head: "Spare parts guarantee",
              body: "FALU ensures spare parts availability across the entire machine lifecycle, independent of installation date. Long-term production security for existing and future systems, a guarantee, not a warranty window."
            },
            {
              head: "Global support",
              body: "FALU supports customers worldwide through commissioning, training and operation. On-site and remote assistance keeps production stable wherever machines are installed."
            }].
            map((v, i) =>
            <div key={i} style={whyB.cell}>
                <div className="mono" style={whyB.cellNum}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ marginTop: "var(--space-2)", fontSize: "var(--fs-l)" }}>{v.head}</h3>
                <p style={{ marginTop: "var(--space-2)", color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>{v.body}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. PROVEN WORLDWIDE */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-8)" }}>
            <h2 style={{ fontSize: "var(--fs-xxl)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              FALU machines run in more than 70 countries.
            </h2>
            <p style={{ fontSize: "var(--fs-lead)", color: "var(--ink-soft)", lineHeight: 1.65 }}>
              From single CB1 installations to fully integrated multi-line plants, FALU equipment
              is in operation across the health, beauty and food industries on six continents.
            </p>
          </div>

          <WorldMap />
        </div>
      </section>

      {/* 7. ONE PARTNER FROM CONCEPT TO OPERATION */}
      <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-8)" }}>
            <h2 style={{ fontSize: "var(--fs-xxl)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              One partner from concept to operation.
            </h2>
            <p style={{ fontSize: "var(--fs-lead)", color: "var(--ink-soft)", lineHeight: 1.65 }}>FALU delivers support across planning, commissioning and long-term production, by the same engineers who built your machine.


            </p>
          </div>

          <div style={journey.wrap}>
            {[
            {
              phase: "01",
              title: "Production concept & layout",
              items: [
              "Understanding product and output targets",
              "Defining production flow",
              "Factory layout considerations"]

            },
            {
              phase: "02",
              title: "Commissioning & ramp-up",
              items: [
              "Installation",
              "On-site and remote operator training",
              "Production start-up"]

            },
            {
              phase: "03",
              title: "Long-term operation",
              items: [
              "Spare parts",
              "Retrofits & upgrades",
              "On-site and remote support"]

            }].
            map((p, i, arr) =>
            <div key={p.phase} style={{ ...journey.col, ...(i === arr.length - 1 ? { borderRight: "1px solid var(--rule)" } : {}) }}>
                <div style={journey.head}>
                  <div className="mono" style={journey.phase}>Phase {p.phase}</div>
                  <h3 style={{ marginTop: "var(--space-2)", fontSize: "var(--fs-m)" }}>{p.title}</h3>
                </div>
                <ul style={journey.list}>
                  {p.items.map((it) =>
                <li key={it} style={journey.item}>
                      <span style={journey.itemDot} aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. CONVERSION */}
      <section style={ctaB.wrap}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--on-blue)", fontSize: "var(--fs-xxl)", maxWidth: 1100, marginLeft: "auto", marginRight: "auto", lineHeight: 1.05 }}>
            Whether you are defining a new production concept or specifying machines, we help you structure the right setup.
          </h2>
          <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "center", marginTop: "var(--space-6)" }}>
            <a href="#contact" className="btn btn--inverse btn--lg">Request a quotation<span className="arrow" /></a>
            <a href="tel:+41552255151" className="btn btn--ghost btn--lg" style={{ borderColor: "var(--on-blue-muted)", color: "var(--on-blue)" }}>
              +41 55 225 51 51
            </a>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);

};

// ============ WORLD MAP ============
const FALU_COUNTRIES = new Set([
"US", "CA", "MX", "BR", "CL", "PE", "PR", "PA", "CO", "VE", "EC", "UY", "AR",
"IS", "IE", "GB", "FR", "BE", "CH", "DE", "AT", "DK", "SE", "FI",
"UA", "RU", "GR", "BG", "RS", "RO", "HU", "CZ", "PL", "SK", "SI", "IT", "ES", "PT", "LT", "MK", "HR",
"TR", "AM", "IR", "IQ", "IL", "JO", "LB", "AE", "BH",
"EG", "LY", "TN", "DZ", "ML", "CI", "BJ", "NG", "KE", "ZW", "ZA",
"PK", "IN", "TH", "VN", "MY", "ID", "PH",
"CN", "KR", "TW", "JP",
"AU", "NZ"]
);

const NUM_TO_A2 = { "004": "AF", "008": "AL", "012": "DZ", "024": "AO", "032": "AR", "036": "AU", "040": "AT", "048": "BH", "050": "BD", "051": "AM", "056": "BE", "068": "BO", "070": "BA", "072": "BW", "076": "BR", "100": "BG", "104": "MM", "108": "BI", "112": "BY", "116": "KH", "120": "CM", "124": "CA", "140": "CF", "144": "LK", "148": "TD", "152": "CL", "156": "CN", "158": "TW", "170": "CO", "178": "CG", "180": "CD", "188": "CR", "191": "HR", "192": "CU", "196": "CY", "203": "CZ", "204": "BJ", "208": "DK", "214": "DO", "218": "EC", "222": "SV", "226": "GQ", "231": "ET", "232": "ER", "233": "EE", "242": "FJ", "246": "FI", "250": "FR", "260": "TF", "262": "DJ", "266": "GA", "268": "GE", "270": "GM", "275": "PS", "276": "DE", "288": "GH", "300": "GR", "320": "GT", "324": "GN", "328": "GY", "332": "HT", "340": "HN", "348": "HU", "352": "IS", "356": "IN", "360": "ID", "364": "IR", "368": "IQ", "372": "IE", "376": "IL", "380": "IT", "384": "CI", "388": "JM", "392": "JP", "398": "KZ", "400": "JO", "404": "KE", "408": "KP", "410": "KR", "414": "KW", "417": "KG", "418": "LA", "422": "LB", "426": "LS", "428": "LV", "430": "LR", "434": "LY", "440": "LT", "442": "LU", "450": "MG", "454": "MW", "458": "MY", "466": "ML", "478": "MR", "484": "MX", "496": "MN", "498": "MD", "499": "ME", "504": "MA", "508": "MZ", "512": "OM", "516": "NA", "524": "NP", "528": "NL", "540": "NC", "548": "VU", "554": "NZ", "558": "NI", "562": "NE", "566": "NG", "578": "NO", "586": "PK", "591": "PA", "598": "PG", "600": "PY", "604": "PE", "608": "PH", "616": "PL", "620": "PT", "624": "GW", "626": "TL", "630": "PR", "634": "QA", "642": "RO", "643": "RU", "646": "RW", "682": "SA", "686": "SN", "688": "RS", "694": "SL", "702": "SG", "703": "SK", "704": "VN", "705": "SI", "706": "SO", "710": "ZA", "716": "ZW", "724": "ES", "728": "SS", "729": "SD", "740": "SR", "748": "SZ", "752": "SE", "756": "CH", "760": "SY", "762": "TJ", "764": "TH", "768": "TG", "780": "TT", "784": "AE", "788": "TN", "792": "TR", "795": "TM", "800": "UG", "804": "UA", "807": "MK", "818": "EG", "826": "GB", "834": "TZ", "840": "US", "854": "BF", "858": "UY", "860": "UZ", "862": "VE", "887": "YE", "894": "ZM" };

function WorldMap() {
  const [paths, setPaths] = React.useState(null);
  // { name, x, y } in wrapper-relative pixels, set on hover.
  const [tip, setTip] = React.useState(null);
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    let cancelled = false;
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json").
    then((r) => r.json()).
    then((world) => {
      if (cancelled) return;
      const features = window.topojson.feature(world, world.objects.countries).features;
      const projection = window.d3.geoEqualEarth().fitSize([1200, 560], { type: "Sphere" });
      const path = window.d3.geoPath(projection);
      setPaths(features.map((f) => {
        const num = String(f.id).padStart(3, "0");
        return { d: path(f), a2: NUM_TO_A2[num], name: f.properties && f.properties.name || "" };
      }).filter((p) => p.d));
    });
    return () => {cancelled = true;};
  }, []);

  const track = (name) => (e) => {
    const box = wrapRef.current && wrapRef.current.getBoundingClientRect();
    if (!box) return;
    setTip({ name, x: e.clientX - box.left, y: e.clientY - box.top });
  };

  return (
    <div ref={wrapRef} style={{ background: "var(--falu-blue)", border: "1px solid var(--on-blue-line)", padding: "var(--space-3)", position: "relative" }}>
      <svg viewBox="0 0 1200 560" style={{ width: "100%", display: "block" }} onMouseLeave={() => setTip(null)}>
        {paths ? paths.map((p, i) => {
          const isFalu = p.a2 && FALU_COUNTRIES.has(p.a2);
          const hovered = tip && tip.name === p.name;
          return (
            <path
              key={i}
              d={p.d}
              fill={isFalu ? "var(--falu-red)" : "var(--on-blue-line)"}
              fillOpacity={hovered ? 0.75 : 1}
              stroke={hovered ? "var(--on-blue-muted)" : "var(--falu-blue)"}
              strokeWidth="0.5"
              style={{ cursor: "default" }}
              onMouseMove={track(p.name)}
              onMouseLeave={() => setTip(null)} />);


        }) :
        <text x="600" y="280" textAnchor="middle" fill="var(--on-blue-muted)" fontFamily="var(--font-mono)" fontSize="12">Loading map...</text>
        }
      </svg>

      {tip && tip.name &&
      <div style={{
        position: "absolute",
        left: tip.x + 14,
        top: tip.y + 14,
        pointerEvents: "none",
        background: "var(--falu-blue)",
        border: "1px solid var(--on-blue-line)",
        color: "var(--on-blue)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        padding: "var(--space-1) var(--space-1-5)",
        whiteSpace: "nowrap",
        zIndex: 2
      }}>
          {tip.name}
        </div>
      }

      <div style={{ marginTop: "var(--space-2)", paddingTop: "var(--space-2)", borderTop: "1px solid var(--on-blue-line)", display: "flex", gap: "var(--space-3)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", flexWrap: "wrap" }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: "var(--falu-red)", marginRight: "var(--space-1)", verticalAlign: "middle" }} />Country with FALU installations</span>
        <span style={{ marginLeft: "auto" }}>70+ countries served since 1965</span>
      </div>
    </div>);

}

// ========= STYLES =========
const heroB = {
  wrap: { position: "relative" },
  overlay: { position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", paddingBottom: "var(--space-8)", background: "var(--scrim)" },
  overlayInner: {},
  eyebrow: { color: "var(--on-blue)", fontSize: "var(--fs-label)", opacity: 0.9 },
  title: { color: "var(--on-blue)", fontSize: "var(--fs-display)", lineHeight: 0.98, marginTop: "var(--space-3)", letterSpacing: "-0.035em", fontWeight: 600 },
  subRow: { display: "flex", gap: "var(--space-8)", alignItems: "center", padding: "var(--space-8) var(--space-4)", borderBottom: "1px solid var(--rule)" },
  lede: { fontSize: "var(--fs-lead)", color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 640 },
  ribbon: { padding: "var(--space-4) 0", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", borderBottom: "1px solid var(--rule)" },
  ribbonCell: { padding: "0 var(--space-3)", borderRight: "1px solid var(--rule)" },
  ribbonNum: { fontSize: "var(--fs-l)", fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.01em" },
  ribbonLabel: { marginTop: "var(--space-1)", fontSize: "var(--fs-label)", color: "var(--ink-soft)" }
};

const featB = {
  tag: { fontSize: "var(--fs-label)" },
  specGrid: { marginTop: "var(--space-4)", display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" },
  specCell: { padding: "var(--space-2) var(--space-3)", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" },
  specKey: { fontSize: "var(--fs-label)", color: "var(--ink-muted)" },
  specVal: { marginTop: "var(--space-1)", fontSize: "var(--fs-body)", color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }
};

const famB = {
  list: { display: "flex", flexDirection: "column", gap: "var(--space-12)" },
  row: { display: "flex", gap: "var(--space-8)", alignItems: "center" },
  imageCol: { flex: "1 1 0", minWidth: 0 },
  textCol: { flex: "1 1 0", minWidth: 0 },
  num: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 500 },
  formats: { marginTop: "var(--space-3)", padding: "var(--space-1-5) 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", maxWidth: 520 },
  formatsLabel: { fontSize: "var(--fs-label)", color: "var(--ink-muted)" },
  formatsList: { marginTop: "var(--space-1)", color: "var(--navy)", fontSize: "var(--fs-label)", lineHeight: 1.6 }
};

const planning = {
  wrap: { padding: "var(--section-y) 0", background: "var(--navy)" },
  frame: { display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "var(--space-8)", alignItems: "center" },
  left: {},
  tag: { color: "var(--on-blue-muted)", fontSize: "var(--fs-label)" },
  right: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--on-blue-line)", borderLeft: "1px solid var(--on-blue-line)" },
  tile: { padding: "var(--space-4) var(--space-3)", borderRight: "1px solid var(--on-blue-line)", borderBottom: "1px solid var(--on-blue-line)" },
  tileKey: { color: "var(--on-blue-muted)", fontSize: "var(--fs-label)" },
  tileTitle: { marginTop: "var(--space-2)", color: "var(--on-blue)", fontSize: "var(--fs-lead)", fontWeight: 600 },
  tileDesc: { marginTop: "var(--space-1)", color: "var(--on-blue-muted)", fontSize: "var(--fs-label)", lineHeight: 1.55 }
};

const whyB = {
  grid: { marginTop: "var(--section-y)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)" },
  cell: { padding: "0" },
  cellNum: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 500 }
};

const mapStats = {
  row: { marginTop: "var(--space-4)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule)" },
  cell: { padding: "var(--space-3) var(--space-2) 0 0", borderRight: "1px solid var(--rule)" },
  num: { fontSize: "var(--fs-m)", fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.01em" },
  label: { marginTop: "var(--space-1)", fontSize: "var(--fs-label)", color: "var(--ink-soft)" }
};

const journey = {
  wrap: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "2px solid var(--navy)", borderLeft: "1px solid var(--rule)" },
  col: { padding: "var(--space-4) var(--space-4) var(--space-4)", borderRight: "1px solid var(--rule)", background: "var(--surface)" },
  head: {},
  phase: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 500 },
  list: { marginTop: "var(--space-3)", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-1-5)" },
  item: { display: "flex", gap: "var(--space-1-5)", alignItems: "flex-start", color: "var(--ink-soft)", fontSize: "var(--fs-body)" },
  itemDot: { width: 14, height: 1, background: "var(--falu-red)", marginTop: "var(--space-1-5)", flexShrink: 0 }
};

const ctaB = {
  wrap: { padding: "var(--section-y) 0", background: "var(--navy)" }
};