/* global React, FaluHeader, FaluFooter */

// ============================================================
// TERMS OF USE
// Governs use of the FALU AG website. These terms cover the
// website only; the commercial sale of machinery is governed
// by FALU's separate general terms and order confirmations.
// Liability wording is kept within the bounds of Art. 100 CO
// (no exclusion for unlawful intent or gross negligence).
// ============================================================

window.Terms = function Terms() {
  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <FaluHeader active="terms" />

      {/* Breadcrumb */}
      <div style={cCrumb.wrap}>
        <div className="container" style={cCrumb.inner}>
          <a href="#home" style={cCrumb.link}>Home</a>
          <span style={cCrumb.sep}>/</span>
          <span style={cCrumb.current}>Terms of use</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--section-y) 0 var(--section-y)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-12)", alignItems: "end" }}>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>Terms of use.</h1>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--ink-soft)" }}>
              The conditions under which you may use this website. These terms govern the website
              only, not the sale of machinery, which is subject to FALU AG's separate contractual
              terms.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "0 0 var(--section-y)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ maxWidth: 860, margin: "0 auto", borderLeft: "1px solid var(--rule)", borderRight: "1px solid var(--rule)", padding: "var(--card-pad)" }}>

            <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <div>
                <h3 style={cBody.h3}>1. Scope and acceptance</h3>
                <p style={cBody.para}>
                  These terms of use govern your access to and use of the website operated by
                  FALU AG, Joweid Zentrum 5, 8630 Rüti, Switzerland ("FALU", "we"). By accessing or
                  using this website, you accept these terms. If you do not agree, please do not use
                  the website. These terms apply to the website only and do not govern the sale,
                  delivery, or servicing of machinery, which is subject to FALU's separate
                  contractual terms.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>2. Permitted use</h3>
                <p style={cBody.para}>
                  This website is provided for information purposes and to allow you to contact us.
                  You may not use it unlawfully or in any way that could damage, disable, or impair
                  it. Automated data collection, scraping, or any attempt to gain unauthorised
                  access to the website or its underlying systems is not permitted.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>3. Intellectual property</h3>
                <p style={cBody.para}>
                  All content on this website, including text, images, graphics, machine designs,
                  layouts, logos, and trademarks, is the property of FALU AG or its licensors and is
                  protected by copyright and other intellectual property rights. You may view and
                  print content for your own information. Any other use, including reproduction,
                  distribution, or modification, requires our prior written consent.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>4. No warranty on content</h3>
                <p style={cBody.para}>
                  Technical information on this website, including specifications, throughput
                  figures, dimensions, and illustrations, is indicative, non-binding, and may be
                  changed at any time without notice. It does not constitute an offer or a binding
                  representation of performance. Binding specifications are set out only in a written
                  quotation or order confirmation issued by FALU.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>5. External links</h3>
                <p style={cBody.para}>
                  This website may contain links to third-party websites. We have no control over
                  their content and accept no responsibility for them. Accessing linked websites is
                  at your own risk.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>6. Limitation of liability</h3>
                <p style={cBody.para}>
                  To the extent permitted by law, FALU AG accepts no liability for any damage arising
                  from the use or inability to use this website, including in relation to its
                  availability, accuracy, or freedom from errors or malware. This limitation does not
                  apply to liability for unlawful intent or gross negligence, or to any other
                  liability that cannot be excluded under mandatory Swiss law.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>7. Enquiries and quotations</h3>
                <p style={cBody.para}>
                  Submitting the enquiry or quotation form is a request for information and does not
                  create a binding contract. A contract is formed only upon a written order
                  confirmation issued by FALU AG. Please do not submit confidential information
                  through the website unless requested.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>8. Data protection</h3>
                <p style={cBody.para}>
                  Personal data submitted through this website is processed in accordance with the
                  Swiss Federal Act on Data Protection (FADP). For details, please contact us at{" "}
                  <a href="mailto:sales@falu.com" style={cBody.inlineLink}>sales@falu.com</a>.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>9. Changes to these terms</h3>
                <p style={cBody.para}>
                  FALU AG may amend these terms of use at any time. The version published on this
                  website at the time of your visit applies.
                </p>
              </div>

              <div>
                <h3 style={cBody.h3}>10. Governing law and jurisdiction</h3>
                <p style={cBody.para}>
                  These terms are governed by Swiss law, excluding its conflict-of-law rules. The
                  exclusive place of jurisdiction for any disputes arising from or in connection with
                  this website is the registered seat of FALU AG in Rüti, Canton of Zurich,
                  Switzerland, subject to any mandatory legal venue.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--rule)" }}>
              <div className="mono" style={cBody.eff}>Effective June 2026</div>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>
  );
};

const cCrumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "var(--space-1-5) var(--gutter)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", color: "var(--ink-muted)", display: "flex", gap: "var(--space-1-5)" },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--muted)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const cBody = {
  h3: { fontSize: "var(--fs-body)", color: "var(--navy)", fontWeight: 600, margin: "0 0 var(--space-1)", letterSpacing: "-0.01em" },
  para: { fontSize: "var(--fs-body)", color: "var(--ink-soft)", lineHeight: 1.7, margin: 0 },
  inlineLink: { color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: 3 },
  eff: { fontSize: "var(--fs-label)", color: "var(--ink-muted)" }
};
