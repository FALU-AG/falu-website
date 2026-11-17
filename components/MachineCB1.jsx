/* global React, FaluHeader, FaluFooter, ImageSlot, MachineHeroVideo */

// ============================================================
// CB1 4.1, MACHINE DETAIL PAGE
// The most important page on the site. Procurement-grade.
// ============================================================

window.MachineCB1 = function MachineCB1() {
  return (
    <div style={{ background: "var(--surface)" }}>
      <FaluHeader active="machinery" />

      {/* Breadcrumb */}
      <div style={crumb.wrap}>
        <div className="container" style={crumb.inner}>
          <a href="#machinery" style={crumb.link}>Machinery</a>
          <span style={crumb.sep}>/</span>
          <a href="#cotton-swab-machinery" style={crumb.link}>Cotton Swab Machinery</a>
          <span style={crumb.sep}>/</span>
          <span style={crumb.current}>CB1 4.1</span>
        </div>
      </div>

      {/* HERO */}
      <section style={hero.wrap}>
        <div className="container" style={hero.inner}>
          <div style={hero.left}>
            <h1 style={{ fontSize: "var(--fs-xxl)", lineHeight: 1.02 }}>
              CB1 4.1<br />
              <span style={{ color: "var(--ink-soft)", fontWeight: 500 }}>
                Cotton swab production machine
              </span>
            </h1>
            <p style={hero.lede}>
              Versatile high-speed swab former designed to integrate with the PRX paper stick
              machine upstream and any of six FALU packaging machines downstream. Engineered for
              decades of operation.
            </p>

            <div style={{ display: "flex", gap: "var(--space-1-5)", marginTop: "var(--space-6)" }}>
              <a className="btn btn--primary btn--lg" href="#contact">Request a quotation<span className="arrow" /></a>
              <a className="btn btn--ghost btn--lg" href="#contact">Download datasheet (PDF)<span className="arrow" /></a>
            </div>
          </div>

          <div style={hero.right}>
            <MachineHeroVideo id="CB1-VIDEO" label="CB1 4.1 cotton swab machine, hero video" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "start", marginBottom: "var(--space-8)" }}>
            <h2>Engineered for higher throughput<br />and lower maintenance.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>
              The 4.1 generation introduces a redesigned stick magazine with greater tolerance to
              raw-material variation, a primary belt transfer system replacing the legacy chain
              drive, and full encapsulation for noise and dust control. Net effect: faster lines,
              cleaner product, less time on maintenance.
            </p>
          </div>

          <div style={features.grid}>
            {[
            ["Speed", "Mechanical speed in excess of 3'100 swabs/min. Operational production speed approximately 2'800 swabs/min depending on package type and size."],
            ["Stick magazine", "New design with increased tolerance to raw material variations. Ergonomic stacking allows reloading at a comfortable height by the machine operator."],
            ["Cotton feeding", "Automatic up-and-down movement of the cotton feeder. Vacuum extraction unit removes loose fibres."],
            ["Forming", "Precise control of swab forming through pneumatic pressure adjustment. Most parameters adjustable on the operator panel."],
            ["Process monitoring", "Automatic monitoring of each cotton sliver strand and stick feeding from the magazine. Machine stops on failure to prevent waste."],
            ["Belt transfer system", "Primary belt transfer replaces chain drive, longer lifetime, reduced cleaning effort, no contamination risk from grease."],
            ["Packaging interface", "Continuous moving transfer system ensures fast and smooth cycles into any of six FALU packaging machines."],
            ["Encapsulation", "Full encapsulation reduces noise and cotton dust emissions. Improved guide rail system design throughout."]].
            map(([title, body]) =>
            <div key={title} style={features.cell}>
                <h4 style={{ fontSize: "var(--fs-body)" }}>{title}</h4>
                <p style={{ marginTop: "var(--space-1-5)", color: "var(--ink-soft)", fontSize: "var(--fs-ui)", lineHeight: 1.6 }}>{body}</p>
              </div>
            )}
          </div>

          {/* LIFETIME COMMITMENT: closing band of the features section, surfaced as a full-bleed dark slab */}
          <div style={{ marginTop: "var(--section-y)", background: "var(--navy)", color: "var(--on-blue)", padding: "var(--space-8) var(--space-8) var(--space-8)", display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-8)", alignItems: "end", position: "relative", overflow: "hidden" }}>
            <div>
              <h3 style={{ fontSize: "var(--fs-xl)", color: "var(--on-blue)", letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 880 }}>
                Spare parts guaranteed for the entire lifecycle of the machine.
              </h3>
              <p style={{ marginTop: "var(--space-3)", color: "var(--on-blue-muted)", fontSize: "var(--fs-body)", lineHeight: 1.65, maxWidth: 760 }}>
                FALU commits to manufacturing spare parts for every CB1 throughout its entire service
                life, independent of installation date. Your line will keep running on the day the
                original engineer retires, and on the day the one after them retires too.
              </p>
            </div>
            <a href="#services" className="btn btn--inverse" style={{ whiteSpace: "nowrap" }}>
              Spare parts service<span className="arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* SWAB FORMATS */}
      <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)", background: "var(--bg-band)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "start", marginBottom: "var(--space-8)" }}>
            <h2>One machine,<br />every swab format.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>
              All swabs can be dimensioned according to customer requirements. Each swab type comes
              with its own tooling kit, one of which is included in every CB1 order.
            </p>
          </div>

          <div style={swabFormats.grid}>
            {[
            ["Standard cotton swabs", "Round cotton head on both ends. The universal everyday swab format."],
            ["Baby / safety swabs", "Enlarged cotton head up to 10 mm in diameter for baby care. Cotton sliver 4.0 g/m. Capacity up to 1'000 swabs/min."],
            ["Cosmetic swabs", "One pointed tip + one flat tip per swab for precision cosmetics. Sliver 3.0 g/m flat / 1.2 g/m pointed. Capacity up to 1'000 swabs/min."],
            ["Medical swabs", "Swab formats for medical and diagnostic applications. Heads up to 10 mm in diameter and up to 150 mm in length."]].
            map(([title, body], i) =>
            <div key={title} style={swabFormats.card}>
              <ImageSlot id={`CB1-0${i + 5}`} label={title} ratio="3 / 4" />
              <h4 style={{ marginTop: "var(--space-2)", fontSize: "var(--fs-body)", color: "var(--navy)" }}>{title}</h4>
              <p style={{ marginTop: "var(--space-1)", color: "var(--ink-soft)", fontSize: "var(--fs-label)", lineHeight: 1.55 }}>{body}</p>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA */}
      <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-6)" }}>
            <h2>Specifications.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>
              Complete specifications for the CB1 4.1 base configuration. Custom configurations
              available, contact your FALU representative for site-specific specifications.
            </p>
          </div>

          <div style={techTable.wrap}>
            {[
            ["Speed", "Mechanical speed", "> 3'100 swabs/min"],
            ["", "Recommended production speed", "~ 2'800 swabs/min (depending on packaging)"],
            ["Applicators", "Materials", "Paper, wood or plastic sticks"],
            ["", "Length", "72.5 ± 0.5 mm"],
            ["", "Diameter", "2.5 ± 0.1 mm"],
            ["", "Weight", "min. 160 g / 1'000 polypropylene applicators"],
            ["Cotton head", "Diameter", "5.0 mm"],
            ["", "Form", "FALU shape or customer-specific"],
            ["Cotton string", "Composition", "100% cotton or cotton/rayon (max. 50% rayon)"],
            ["", "Weight", "1.4 g/m"],
            ["", "Fibre length", "max. 22 mm"],
            ["", "Consumption", "approx. 60,70 g / 1'000 swabs"],
            ["Dimensions", "Length × Width × Height", "4'280 × 1'076 × 2'103 mm"],
            ["Electrical", "Voltage", "400 V / 50 Hz (transformer required for other voltages)"],
            ["", "Control system", "PLC controlled electrical system"],
            ["Certification", "Compliance", "CE certified, European machinery safety standards"],
            ["Delivery", "Tooling", "Complete standard tooling for one box size"],
            ["", "Documentation", "Instruction manual and spare parts documentation"]].
            map(([group, key, value], i, arr) => {
              const showGroup = group && (i === 0 || arr[i - 1][0] !== group);
              return (
                <div key={i} style={{ ...techTable.row, ...(showGroup ? techTable.rowGrouped : {}) }}>
                  <div className="mono" style={techTable.group}>{showGroup ? group : ""}</div>
                  <div style={techTable.key}>{key}</div>
                  <div className="mono" style={techTable.value}>{value}</div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* OPTIONS & RETROFITS */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--bg-band)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          {/* AVAILABILITY STATEMENT: applies to every option and retrofit below */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "start", marginBottom: "var(--space-8)" }}>
            <h2>Configure for your<br />product, market and line.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>
              <strong style={{ color: "var(--navy)", fontWeight: 600 }}>Everything below is available for the CB1.</strong>{" "}
              Every option and retrofit listed here can be specified when configuring a new CB1,
              fitted to an existing CB1 as a field retrofit, and is fully compatible with the machine.
            </p>
          </div>

          {/* FEATURED RETROFITS: fact-sheet level detail */}
          <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)", marginBottom: "var(--space-3)" }}>
            FEATURED RETROFITS
          </div>
          <div style={featuredRetro.grid}>
            <RetroCard
              title="Hot Melt System"
              lede="High-precision adhesive application that replaces heating bars and mechanical cold gluing. Speed-independent, fully metered, closed-loop."
              bullets={[
              "Gear-pump metered glue, adjustable quantity, constant at any speed",
              "No glue build-up, no cleaning cycles, cleaner machine interior",
              "No changeover when switching plastic to paper sticks",
              "Plastic sticks down to 130 g / 1'000"]}
              imgId="CB1-09"
              mediaLabel="Hot melt unit + glue applicator head" />

            <RetroCard
              title="Camera-based Quality Management"
              lede="Industrial-grade camera + centralised evaluation unit. Inspects swabs at up to 3'000 / min from a defined distance, replacing fibre-optic light guides."
              bullets={[
              "Reliable detection of missing heads and visible defects",
              "Unaffected by dust and mechanical tolerances",
              "Image memory for review of rejected swabs and root-cause analysis",
              "Waste Reduction Mode: set a legal underfill threshold so near-full packs aren't rejected. The line tops up only when needed to keep the declared average"]}
              imgId="CB1-10"
              mediaLabel="Camera inspection module + HMI image review" />

            <RetroCard
              title="Belt Drive System"
              lede="Replaces the lubricated primary chain with a dry-running belt. Eliminates oil and grease entirely from the machine enclosure."
              bullets={[
              "No product contamination from oil or grease",
              "No chain cleaning, degreasing or regreasing",
              "Extended drive component service life, higher uptime",
              "Less internal contamination means significantly lower required maintenance standstill time"]}
              imgId="CB1-11"
              mediaLabel="Belt drive carrier on dry-running primary belt" />

            <RetroCard
              title="Dust Extraction System"
              lede="Four extraction modules that remove airborne fibres and heavier particles at the points where they are generated."
              bullets={[
              "Cotton Feeder Module: Captures fibres at source, local dust bin",
              "Secondary Belt Module: Dust removal in transition to pickup",
              "Airflow Dust Removal: Controlled draft inside enclosed housing",
              "Belt & Chain Blow-Off: Four directed nozzles, adjustable timing"]}
              imgId="CB1-12"
              mediaLabel="Extraction nozzle at cotton feeder + airflow housing" />
          </div>

          {/* SECONDARY OPTIONS: compact reference */}
          <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)", margin: "var(--space-8) 0 var(--space-3)" }}>
            FURTHER OPTIONS
          </div>
          <div style={options.grid}>
            <OptionGroup
              title="Cotton head fixation"
              items={[
              ["Sticks heating device", "Polypropylene sticks. Four grooved guide rails with integrated heating cartridges. Auto-opens on machine stop to prevent uncontrolled melting."],
              ["Cold glue device", "Paper, wooden or polystyrene sticks. Reliable cotton head fixation using cold glue."]]
              } />

            <OptionGroup
              title="Swab drying"
              items={[
              ["Swab heating unit", "Pre-dries the cotton swabs before packaging. Guide rails, tubes, heating coil and fan mounted on the secondary chain."],
              ["Industrial drying system", "Inline drying for immediate packaging in airtight packages. Compact line design, full encapsulation, internal air circulation, lower energy and operating costs."]]
              } />

            <OptionGroup
              title="Diagnostics"
              items={[
              ["Remote access system", "Modem-based remote access for FALU technicians. Fast diagnostics and support, typically eliminates the need for on-site service visits."],
              ["Cotton feeding drive", "Stable cotton feeding process. Helps prevent sliver breakage."]]
              } />
          </div>

          <div style={retrofitBanner.wrap}>
            <div>
                            <h3 style={{ marginTop: "var(--space-1)", color: "var(--on-blue)", fontSize: "var(--fs-l)", maxWidth: 720 }}>Already running a CB1? Any of the retrofits above can be installed on your existing line to lift output, quality and uptime. Reach out for a tailored quotation or a more detailed technical discussion.</h3>
            </div>
            <a href="#contact" className="btn btn--inverse">Reach out to our specialist team<span className="arrow" /></a>
          </div>
        </div>
      </section>

      {/* LINE INTEGRATION */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--navy)", borderTop: "1px solid var(--navy)", color: "var(--on-blue)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "var(--space-8)", alignItems: "end", marginBottom: "var(--space-6)" }}>
            <h2 style={{ color: "var(--on-blue)", maxWidth: 720 }}>The CB1 sits at the centre of a complete swab production line.</h2>
            <p style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-body)", lineHeight: 1.65 }}>
              From paper stick production to final pack format: every machine in the line is
              engineered and serviced by FALU. Click any model below to see its product page.
            </p>
          </div>

          <div style={lineInt.video}>
            <MachineHeroVideo id="CB1-LINE-VIDEO" label="Complete CB1 production line, video walkthrough" />
          </div>

          <div style={lineInt.wrap}>
            <div style={lineInt.col}>
              <div className="mono" style={lineInt.colHeader}>Upstream</div>
              <a href="#prx" style={lineInt.machineLink}>
                <div style={lineInt.machine}>
                  <div className="mono" style={lineInt.machineCode}>PRX <span style={lineInt.linkArrow}>↗</span></div>
                  <div style={lineInt.machineLabel}>Paper stick production</div>
                  <p style={lineInt.machineNote}>Wound paper sticks fed directly into the CB1 stick magazine.</p>
                </div>
              </a>
            </div>
            <div style={lineInt.arrow}>→</div>
            <div style={lineInt.col}>
              <div className="mono" style={lineInt.colHeader}>Core</div>
              <div style={{ ...lineInt.machine, ...lineInt.machineFeatured }}>
                <div className="mono" style={{ ...lineInt.machineCode, color: "var(--on-blue)" }}>CB1 4.1</div>
                <div style={lineInt.machineLabel}>Cotton swab forming</div>
                <p style={lineInt.machineNote}>Forms swabs from cotton string and applicator sticks at up to 3'100/min.</p>
                <div className="mono" style={lineInt.youAreHere}>You are here</div>
              </div>
            </div>
            <div style={lineInt.arrow}>→</div>
            <div style={lineInt.col}>
              <div className="mono" style={lineInt.colHeader}>Downstream · 6 machines</div>
              <div style={lineInt.machineList}>
                {[
                ["SV-2X", "Cardboard boxes", "#sv2x"],
                ["BV-2M", "Polybag (semi-auto)", "#polybag"],
                ["ABS-2", "Polybag (auto)", "#polybag"],
                ["RB-30A", "Round boxes", "#rb30a"],
                ["SQB-2A", "Square boxes", "#sqb2a"],
                ["BL-12", "Blister packaging", "#bl12"]].
                map(([code, label, href]) =>
                <a key={code} href={href} style={lineInt.machineRow}>
                    <span className="mono" style={{ color: "var(--on-blue)", fontWeight: 600 }}>{code} <span style={lineInt.linkArrow}>↗</span></span>
                    <span style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-label)" }}>{label}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* COMPLETE INLINE PRODUCTION: benefits */}
          <div style={lineInt.benefits}>
            <h2 style={lineInt.benefitsLabel}>Why a complete inline FALU line.</h2>
            <p style={lineInt.benefitsLede}>
              When the PRX feeds sticks directly into the CB1, the cardboard box and the operator who handles it disappear from the process. The result is a measurably better business case: less standstill, lower material cost, less waste.
            </p>
            <div style={lineInt.benefitsGrid}>
              {[
              ["Less standstill, more output", "The CB1 is fed continuously. The line never stops because an operator failed to top up the stick magazine in time, and never stalls on a fragile box-onto-machine refill."],
              ["Lower material cost", "No finished sticks need to be purchased from a third party. The line produces its own sticks at the cost of raw paper, on the same factory floor."],
              ["Less material waste", "Sticks no longer have to survive shipping in cardboard boxes and a manual transfer onto the machine. The hand-off losses common in that step disappear entirely."],
              ["Less manual labour", "Operators no longer load sticks. No more cardboard handling, no more box-onto-magazine refills: freeing labour for line supervision and quality work."],
              ["Better OEE, lower TCO", "Continuous inline feed eliminates the buffer step between stick production and swab assembly. Higher overall equipment effectiveness and a lower total cost of ownership across the line."],
              ["Single point of accountability", "One supplier for the entire line. No interface disputes between vendors when something goes wrong; one phone number for commissioning, retrofits and service."]].
              map(([t, b]) =>
              <div key={t} style={lineInt.benefit}>
                  <h4 style={lineInt.benefitTitle}>{t}</h4>
                  <p style={lineInt.benefitBody}>{b}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section style={cta.wrap}>
        <div className="container" style={cta.inner}>
          <div>
            <h2 style={{ color: "var(--on-blue)", maxWidth: 720 }}>
              Tell us your output target, package format and stick material. We'll respond with a configured CB1 specification and a quotation.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-end" }}>
            <a href="#contact" className="btn btn--inverse btn--lg">Request a quotation<span className="arrow" /></a>
            <div className="mono" style={{ color: "var(--on-blue-muted)", fontSize: "var(--fs-label)" }}>
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

const featuredRetro = {
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)", alignItems: "stretch", gridAutoRows: "1fr" },
  card: { border: "1px solid var(--rule)", background: "var(--surface)", display: "flex", flexDirection: "column" },
  media: { borderBottom: "1px solid var(--rule)" },
  title: { fontSize: "var(--fs-m)", marginTop: "var(--space-4)", color: "var(--navy)", letterSpacing: "-0.01em", padding: "0 var(--space-4)" },
  lede: { marginTop: "var(--space-1-5)", marginBottom: "var(--space-4)", fontSize: "var(--fs-ui)", color: "var(--ink-soft)", lineHeight: 1.6, padding: "0 var(--space-4)" },
  bullets: { marginTop: 0, marginBottom: 0, padding: "var(--space-2) var(--space-4) var(--space-4)", listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-1-5)", borderTop: "1px solid var(--rule-soft)" },
  bullet: { fontSize: "var(--fs-label)", color: "var(--ink)", lineHeight: 1.55, paddingLeft: "var(--space-2)", position: "relative" }
};

function RetroCard({ title, lede, bullets, imgId, mediaLabel }) {
  return (
    <div style={featuredRetro.card}>
      <div style={featuredRetro.media}>
        <ImageSlot id={imgId} label={mediaLabel || title} ratio="16 / 9" />
      </div>
      <h3 style={featuredRetro.title}>{title}</h3>
      <p style={featuredRetro.lede}>{lede}</p>
      <ul style={featuredRetro.bullets}>
        {bullets.map((b) =>
        <li key={b} style={featuredRetro.bullet}>
            <span style={{ position: "absolute", left: 0, top: 10, width: 8, height: 1, background: "var(--muted)" }} />
            {b}
          </li>
        )}
      </ul>
    </div>);

}

function OptionGroup({ title, items }) {
  return (
    <div style={options.group}>
      <div style={options.groupHeader}>
        <h3 style={{ fontSize: "var(--fs-m)" }}>{title}</h3>
      </div>
      <div style={options.itemList}>
        {items.map(([t, b], i) =>
        <div key={t} style={{ ...options.item, borderTop: i === 0 ? "none" : "1px solid var(--rule-soft)" }}>
            <div style={options.itemTitle}>{t}</div>
            <p style={options.itemBody}>{b}</p>
          </div>
        )}
      </div>
    </div>);

}

// styles
const crumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "var(--space-1-5) var(--gutter)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", color: "var(--ink-muted)", display: "flex", gap: "var(--space-1-5)" },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--muted)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const hero = {
  wrap: { padding: "var(--space-8) 0 var(--section-y)" },
  inner: { display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "var(--space-8)", alignItems: "center" },
  left: {},
  eyebrow: { fontSize: "var(--fs-label)" },
  lede: { marginTop: "var(--space-4)", fontSize: "var(--fs-lead)", color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 580 },
  headlineSpec: { marginTop: "var(--space-6)", padding: "var(--space-4) var(--space-4)", border: "1px solid var(--rule)", display: "inline-block" },
  specNum: { fontSize: "var(--fs-xxl)", color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 },
  specUnit: { fontSize: "var(--fs-body)", color: "var(--ink-soft)" },
  specLabel: { fontSize: "var(--fs-label)", color: "var(--ink-muted)", fontFamily: "var(--font-mono)" },
  right: {}
};

const features = {
  grid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" },
  cell: { padding: "var(--space-4) var(--space-3)", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }
};

const techTable = {
  wrap: { background: "var(--surface)", border: "1px solid var(--rule)" },
  row: { display: "grid", gridTemplateColumns: "180px 1fr 1.5fr", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--rule-soft)", alignItems: "center", fontSize: "var(--fs-ui)" },
  rowGrouped: { borderTop: "1px solid var(--rule)", paddingTop: "var(--space-2)" },
  group: { fontSize: "var(--fs-label)", color: "var(--ink)", fontWeight: 500 },
  key: { color: "var(--ink-soft)" },
  value: { color: "var(--navy)", fontSize: "var(--fs-ui)", fontWeight: 500 }
};

const options = {
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", alignItems: "stretch" },
  group: { border: "1px solid var(--rule)", background: "var(--surface)", display: "flex", flexDirection: "column" },
  groupHeader: { padding: "var(--space-3) var(--space-3)", borderBottom: "1px solid var(--rule)", background: "var(--bg-alt)" },
  itemList: { display: "flex", flexDirection: "column", flex: 1 },
  item: { padding: "var(--space-3) var(--space-3)", flex: 1 },
  itemTitle: { color: "var(--navy)", fontSize: "var(--fs-body)", fontWeight: 600 },
  itemBody: { marginTop: "var(--space-1)", color: "var(--ink-soft)", fontSize: "var(--fs-label)", lineHeight: 1.6 }
};

const swabFormats = {
  grid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-3)" },
  card: { display: "flex", flexDirection: "column" }
};

const retrofitBanner = {
  wrap: { marginTop: "var(--space-6)", padding: "var(--space-4) var(--space-6)", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }
};

const lineInt = {
  video: { marginBottom: "var(--space-4)", border: "1px solid var(--on-blue-line)" },
  wrap: { display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1.4fr", gap: 0, alignItems: "stretch" },
  col: { background: "var(--on-blue-fill)", border: "1px solid var(--on-blue-line)", padding: "var(--space-4)" },
  colHeader: { fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", marginBottom: "var(--space-3)" },
  arrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "var(--on-blue-line)", fontSize: "var(--fs-l)" },
  machine: { padding: "var(--space-3) 0" },
  machineLink: { display: "block", textDecoration: "none", color: "inherit" },
  machineFeatured: { borderTop: "3px solid var(--falu-red)", paddingTop: "var(--space-2)" },
  machineCode: { fontSize: "var(--fs-m)", color: "var(--on-blue)", fontWeight: 600, letterSpacing: "-0.01em", display: "flex", alignItems: "baseline", gap: "var(--space-1)" },
  machineLabel: { color: "var(--on-blue)", marginTop: "var(--space-half)", fontSize: "var(--fs-ui)", fontWeight: 500 },
  machineNote: { marginTop: "var(--space-1-5)", color: "var(--on-blue-muted)", fontSize: "var(--fs-label)", lineHeight: 1.55 },
  machineList: { display: "flex", flexDirection: "column" },
  machineRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-1-5) 0", borderBottom: "1px solid var(--on-blue-line)", fontSize: "var(--fs-label)", textDecoration: "none" },
  linkArrow: { fontSize: "var(--fs-label)", color: "var(--on-blue-muted)", fontWeight: 400 },
  youAreHere: { marginTop: "var(--space-2)", fontSize: "var(--fs-label)", color: "var(--on-blue-muted)" },
  benefits: { marginTop: "var(--space-8)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--on-blue-line)" },
  benefitsLabel: { fontSize: "var(--fs-xl)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--on-blue)", maxWidth: 760, marginTop: 0, marginBottom: "var(--space-3)" },
  benefitsLede: { color: "var(--on-blue-muted)", fontSize: "var(--fs-body)", lineHeight: 1.65, maxWidth: 820, marginBottom: "var(--space-4)" },
  benefitsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)" },
  benefit: { paddingTop: "var(--space-3)", borderTop: "1px solid var(--on-blue-muted)" },
  benefitTitle: { color: "var(--on-blue)", fontSize: "var(--fs-body)", fontWeight: 600, lineHeight: 1.3, marginBottom: "var(--space-1-5)" },
  benefitBody: { color: "var(--on-blue-muted)", fontSize: "var(--fs-label)", lineHeight: 1.6 }
};

const downloads = {
  wrap: {},
  list: { marginTop: "var(--space-3)", border: "1px solid var(--rule)" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--rule-soft)", background: "var(--surface)" }
};

const sparePromise = {
  wrap: { padding: "var(--space-6)", background: "var(--bg-band)", border: "1px solid var(--rule)", alignSelf: "start", marginTop: "var(--space-8)" }
};

const cta = {
  wrap: { background: "var(--navy)", padding: "var(--section-y) 0" },
  inner: { display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-6)", alignItems: "center" }
};