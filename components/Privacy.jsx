/* global React, FaluHeader, FaluFooter */

// ============================================================
// PRIVACY POLICY / DATENSCHUTZERKLÄRUNG
// Reflects the actual data flows of this site: the contact form,
// Google Maps (consent-gated), Google Fonts, CDN-hosted libraries,
// and GitHub Pages hosting. Written for the Swiss FADP/nFADP with
// GDPR-aware language for EU visitors.
//
// NOTE: This is a good-faith draft based on the site's technical
// behaviour, not legal advice. Have it reviewed by counsel before
// relying on it.
// ============================================================

window.Privacy = function Privacy() {
  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <FaluHeader active="privacy" />

      {/* Breadcrumb */}
      <div style={cCrumb.wrap}>
        <div className="container" style={cCrumb.inner}>
          <a href="#home" style={cCrumb.link}>Home</a>
          <span style={cCrumb.sep}>/</span>
          <span style={cCrumb.current}>Privacy</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--section-y) 0 var(--section-y)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-12)", alignItems: "end" }}>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>Privacy.</h1>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--ink-soft)" }}>
              How FALU AG handles personal data on this website, under the Swiss Federal Act on
              Data Protection (FADP) and, for visitors in the EU, the GDPR.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "0 0 var(--section-y)", borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ maxWidth: 860, margin: "0 auto", borderLeft: "1px solid var(--rule)", borderRight: "1px solid var(--rule)", padding: "var(--card-pad)" }}>

            <div style={{ marginTop: "var(--space-4)" }}>
              <p style={cBody.para}>
                The controller responsible for the processing of personal data on this website is:
              </p>
              <p style={{ ...cBody.addr, marginTop: "var(--space-2)" }}>
                FALU AG<br />
                Joweid Zentrum 5<br />
                8630 Rüti<br />
                Switzerland
              </p>
              <div style={{ marginTop: "var(--space-2)" }}>
                <a href="mailto:sales@falu.com" style={cBody.value}>sales@falu.com</a>
                <a href="tel:+41552255151" style={cBody.value}>+41 55 225 51 51</a>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <div>
                  <h3 style={cBody.h3}>Server log data (hosting)</h3>
                  <p style={cBody.para}>
                    This website is hosted on GitHub Pages, a service of GitHub, Inc. (a Microsoft
                    company), with servers that may be located outside Switzerland and the EU. When
                    you visit the site, the hosting provider automatically processes technical data
                    such as your IP address, the requested page, the date and time, and your browser
                    and operating system. This is necessary to deliver the website securely and
                    reliably (legitimate interest).
                  </p>
                </div>

                <div>
                  <h3 style={cBody.h3}>Contact and quotation form</h3>
                  <p style={cBody.para}>
                    When you use our contact form, we process the data you provide, namely company
                    name, contact name, email address, phone number, country, your message, and any
                    files you choose to attach. We use this data solely to handle your enquiry and to
                    take steps at your request prior to entering into a contract. We keep it for as
                    long as needed to process your enquiry and to meet legal retention obligations,
                    then delete it.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <div>
                  <p style={cBody.para}>
                    This website does not set tracking or advertising cookies and does not use web
                    analytics. We store a single technical entry in your browser's local storage to
                    remember whether you have agreed to load the embedded Google Map (see below). You
                    can clear it at any time through your browser settings.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <div>
                  <h3 style={cBody.h3}>Google Maps</h3>
                  <p style={cBody.para}>
                    On our contact page we offer an embedded map from Google Maps, a service of Google
                    LLC. The map only loads after you actively consent. Once loaded, Google may set
                    cookies and process your IP address, and data may be transferred to the United
                    States. Your consent is the legal basis and you can withdraw it by clearing your
                    browser storage. You can always reach us using the address above without loading
                    the map.
                  </p>
                </div>

                <div>
                  <h3 style={cBody.h3}>Google Fonts</h3>
                  <p style={cBody.para}>
                    This website loads fonts from Google Fonts (Google LLC). When a page loads, your
                    browser requests the fonts from Google's servers, which transmits your IP address
                    to Google. This is used only to display the website's typography correctly.
                  </p>
                </div>

                <div>
                  <h3 style={cBody.h3}>Content delivery networks</h3>
                  <p style={cBody.para}>
                    Some software libraries used by this site are loaded from public content delivery
                    networks (jsDelivr and unpkg). As with any external request, your IP address is
                    transmitted to the relevant provider so the files can be delivered.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <div style={{ marginTop: "var(--space-4)" }}>
                <p style={cBody.para}>
                  Subject to the applicable law, you have the right to access the personal data we
                  hold about you, to have inaccurate data corrected, to request deletion or
                  restriction of processing, to object to processing, and to data portability. EU
                  visitors also have the right to lodge a complaint with a supervisory authority; in
                  Switzerland, the competent authority is the Federal Data Protection and Information
                  Commissioner (FDPIC). To exercise any of these rights, contact us at{" "}
                  <a href="mailto:sales@falu.com" style={cBody.inlineLink}>sales@falu.com</a>.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <div style={{ marginTop: "var(--space-4)" }}>
                <p style={cBody.para}>
                  We may update this privacy policy to reflect changes to our website or to legal
                  requirements. The current version published on this page applies.
                </p>
              </div>
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
  label: { fontSize: "var(--fs-label)", color: "var(--ink)", marginBottom: "var(--space-1-5)" },
  value: { display: "block", fontSize: "var(--fs-body)", color: "var(--navy)", fontWeight: 500, textDecoration: "none", marginBottom: "var(--space-half)", letterSpacing: "-0.005em" },
  addr: { fontSize: "var(--fs-body)", color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 },
  h3: { fontSize: "var(--fs-body)", color: "var(--navy)", fontWeight: 600, margin: "0 0 var(--space-1)", letterSpacing: "-0.01em" },
  para: { fontSize: "var(--fs-body)", color: "var(--ink-soft)", lineHeight: 1.7, margin: 0 },
  inlineLink: { color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: 3 }
};
