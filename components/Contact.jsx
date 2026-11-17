/* global React, FaluHeader, FaluFooter, ImageSlot */
const { useState: useStateC } = React;

// ============================================================
// CONTACT / REQUEST A QUOTATION
// Destination for every primary CTA on the site.
// Quotation form + direct contact + Rüti location.
// ============================================================

// Consent-gated Google Maps embed. The iframe (which sets Google cookies and
// transfers data to Google) is only loaded after the visitor actively agrees.
// The choice is remembered in localStorage so it is asked only once.
const MAPS_CONSENT_KEY = "falu-maps-consent";
function MapEmbed() {
  const [consented, setConsented] = useStateC(() => {
    try { return localStorage.getItem(MAPS_CONSENT_KEY) === "yes"; } catch (e) { return false; }
  });
  const allow = () => {
    try { localStorage.setItem(MAPS_CONSENT_KEY, "yes"); } catch (e) { /* storage blocked */ }
    setConsented(true);
  };

  if (consented) {
    return (
      <div style={{ aspectRatio: "4 / 3", border: "1px solid var(--rule)" }}>
        <iframe
          title="FALU AG location, Joweid Zentrum 5, 8630 Rüti, Switzerland"
          src="https://maps.google.com/maps?q=FALU%20AG%2C%20Joweid%20Zentrum%205%2C%208630%20R%C3%BCti%2C%20Switzerland&z=15&output=embed"
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div style={{ aspectRatio: "4 / 3", border: "1px solid var(--rule)", background: "var(--bg-alt)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "var(--space-3)", gap: "var(--space-2)" }}>
      <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)" }}>
        Location map
      </div>
      <p style={{ fontSize: "var(--fs-label)", color: "var(--ink-soft)", lineHeight: 1.6, margin: 0, maxWidth: 320 }}>
        The map is loaded from Google Maps. Loading it may set cookies and transfer data to Google.
        See our <a href="#privacy" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: 3 }}>privacy policy</a>.
      </p>
      <button type="button" onClick={allow} className="btn btn--primary">
        Load map<span className="arrow" />
      </button>
    </div>
  );
}

window.Contact = function Contact() {
  const [form, setForm] = useStateC({
    company: "",
    name: "",
    email: "",
    dialCode: "",
    phone: "",
    country: "",
    message: ""
  });
  const [files, setFiles] = useStateC([]);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onFiles = (e) => {
    const incoming = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...incoming].slice(0, 5));
    e.target.value = "";
  };
  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));
  const fmtSize = (b) => b < 1024 ? b + " B" : b < 1048576 ? (b / 1024).toFixed(0) + " KB" : (b / 1048576).toFixed(1) + " MB";
  const required = ["company", "name", "email", "dialCode", "phone", "country", "message"];
  const complete = required.every((k) => form[k].trim() !== "");

  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <FaluHeader active="contact" />

      {/* Breadcrumb */}
      <div style={cCrumb.wrap}>
        <div className="container" style={cCrumb.inner}>
          <a href="#home" style={cCrumb.link}>Home</a>
          <span style={cCrumb.sep}>/</span>
          <span style={cCrumb.current}>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "var(--section-y) 0 var(--section-y)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-12)", alignItems: "end" }}>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--navy)" }}>Get in touch.

            </h1>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--ink-soft)" }}>
              Whatever you need, our dedicated team is happy to help. Ask us about a new line, a
              single machine, spare parts, or servicing an installation that has been running for
              decades. We reply within two working days.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + CONTACT RAIL */}
      <section style={{ padding: "0 0 var(--section-y)", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 0, borderLeft: "1px solid var(--rule)", borderRight: "1px solid var(--rule)" }}>

          {/* FORM */}
          <div style={{ padding: "var(--card-pad)", borderRight: "1px solid var(--rule)" }}>

            {/* Two-up: company / name */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <div>
                <div className="mono" style={cForm.label}>Company <span style={cForm.req}>*</span></div>
                <input value={form.company} onChange={set("company")} placeholder="Company name" style={cForm.input} required />
              </div>
              <div>
                <div className="mono" style={cForm.label}>Contact name <span style={cForm.req}>*</span></div>
                <input value={form.name} onChange={set("name")} placeholder="Full name" style={cForm.input} required />
              </div>
            </div>

            {/* Two-up: email / phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <div>
                <div className="mono" style={cForm.label}>Email <span style={cForm.req}>*</span></div>
                <input type="email" value={form.email} onChange={set("email")} placeholder="name@company.com" style={cForm.input} required />
              </div>
              <div>
                <div className="mono" style={cForm.label}>Phone <span style={cForm.req}>*</span></div>
                <div style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 0 }}>
                  <select value={form.dialCode} onChange={set("dialCode")} style={{ ...cForm.input, borderRight: "none", paddingRight: "var(--space-4)", minWidth: 0, appearance: "none", WebkitAppearance: "none", MozAppearance: "none", backgroundImage: "linear-gradient(45deg, transparent 50%, var(--ink-muted) 50%), linear-gradient(135deg, var(--ink-muted) 50%, transparent 50%)", backgroundPosition: "calc(100% - 18px) 19px, calc(100% - 13px) 19px", backgroundSize: "5px 5px, 5px 5px", backgroundRepeat: "no-repeat" }} required>
                    <option value="">Code</option>
                    {DIAL_CODES.map((d) => (
                      <option key={d.code + d.iso} value={d.code}>{d.iso} {d.code}</option>
                    ))}
                  </select>
                  <input type="tel" value={form.phone} onChange={set("phone")} placeholder="79 123 45 67" style={cForm.input} required />
                </div>
              </div>
            </div>

            {/* Country */}
            <div style={{ marginTop: "var(--space-4)" }}>
              <div className="mono" style={cForm.label}>Country <span style={cForm.req}>*</span></div>
              <input value={form.country} onChange={set("country")} placeholder="Country" style={cForm.input} required />
            </div>

            {/* Message */}
            <div style={{ marginTop: "var(--space-4)" }}>
              <div className="mono" style={cForm.label}>Your message <span style={cForm.req}>*</span></div>
              <textarea
                value={form.message}
                onChange={set("message")}
                rows={5}
                placeholder="Your message"
                style={{ ...cForm.input, resize: "vertical", lineHeight: 1.55 }}
                required />
            </div>

            {/* Attachments */}
            <div style={{ marginTop: "var(--space-4)" }}>
              <div className="mono" style={cForm.label}>Attachments <span style={{ color: "var(--ink-muted)" }}>(optional)</span></div>
              <label style={cForm.dropzone}>
                <input type="file" multiple onChange={onFiles} style={{ display: "none" }}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.dwg,.step,.stp" />
                <span className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--navy)" }}>
                  + Attach files
                </span>
                <span style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)" }}>
                  Drawings, specs or RFQs. PDF, DOC, XLS, images, CAD. Up to 5 files.
                </span>
              </label>
              {files.length > 0 &&
              <div style={{ marginTop: "var(--space-1-5)", border: "1px solid var(--rule)" }}>
                {files.map((f, idx) =>
                <div key={idx} style={cForm.fileRow}>
                    <span className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink)", width: 36 }}>
                      {(f.name.split(".").pop() || "").toUpperCase().slice(0, 4)}
                    </span>
                    <span style={{ flex: 1, fontSize: "var(--fs-label)", color: "var(--navy)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
                    <span className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)" }}>{fmtSize(f.size)}</span>
                    <button onClick={() => removeFile(idx)} style={cForm.fileRemove} aria-label="Remove">×</button>
                  </div>
                )}
              </div>
              }
            </div>

            <div style={{ marginTop: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <a
                href="#"
                className="btn btn--primary btn--lg"
                style={complete ? undefined : { opacity: 0.4, pointerEvents: "none" }}>
                Send enquiry<span className="arrow" />
              </a>
              <span style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)" }}>All fields required. We reply within two working days.</span>
            </div>
          </div>

          {/* CONTACT RAIL */}
          <div style={{ padding: "var(--card-pad)" }}>

            <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div>
                <div className="mono" style={cRail.label}>Sales</div>
                <a href="mailto:sales@falu.com" style={cRail.value}>sales@falu.com</a>
                <a href="tel:+41552255151" style={cRail.value}>+41 55 225 51 51</a>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "var(--space-4)" }}>
                <div className="mono" style={cRail.label}>Factory &amp; head office</div>
                <p style={cRail.addr}>
                  FALU AG<br />
                  Joweid Zentrum 5<br />
                  8630 Rüti<br />
                  Switzerland
                </p>
                <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)", marginTop: "var(--space-1-5)" }}>
                  UID CHE-105.813.399
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "var(--space-4)" }}>
                <div className="mono" style={cRail.label}>Hours</div>
                <p style={cRail.addr}>
                  Monday to Friday<br />
                  08:00 to 17:00 CET
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 0 }}>
                <MapEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaluFooter />
    </div>);

};

const DIAL_CODES = [
  { iso: "CH", code: "+41" },
  { iso: "DE", code: "+49" },
  { iso: "AT", code: "+43" },
  { iso: "FR", code: "+33" },
  { iso: "IT", code: "+39" },
  { iso: "ES", code: "+34" },
  { iso: "GB", code: "+44" },
  { iso: "NL", code: "+31" },
  { iso: "BE", code: "+32" },
  { iso: "PL", code: "+48" },
  { iso: "SE", code: "+46" },
  { iso: "US", code: "+1" },
  { iso: "BR", code: "+55" },
  { iso: "TR", code: "+90" },
  { iso: "AE", code: "+971" },
  { iso: "IN", code: "+91" },
  { iso: "CN", code: "+86" },
  { iso: "JP", code: "+81" },
  { iso: "KR", code: "+82" }
];

const cCrumb = {
  wrap: { background: "var(--bg-alt)", borderBottom: "1px solid var(--rule)" },
  inner: { padding: "var(--space-1-5) var(--gutter)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", color: "var(--ink-muted)", display: "flex", gap: "var(--space-1-5)" },
  link: { color: "var(--ink-soft)" },
  sep: { color: "var(--muted)" },
  current: { color: "var(--navy)", fontWeight: 600 }
};

const cForm = {
  label: { fontSize: "var(--fs-label)", color: "var(--ink-muted)", marginBottom: "var(--space-1-5)" },
  req: { color: "var(--ink)" },
  dropzone: { display: "flex", flexDirection: "column", gap: "var(--space-1)", padding: "var(--space-2) var(--space-3)", border: "1px dashed var(--rule)", background: "var(--surface)", cursor: "pointer", transition: "border-color 120ms ease" },
  fileRow: { display: "flex", alignItems: "center", gap: "var(--space-1-5)", padding: "var(--space-1-5) var(--space-2)", borderBottom: "1px solid var(--rule-soft)", background: "var(--surface)" },
  fileRemove: { border: "none", background: "transparent", color: "var(--ink-muted)", fontSize: "var(--fs-lead)", lineHeight: 1, cursor: "pointer", padding: "0 var(--space-half)" },
  input: {
    width: "100%",
    padding: "var(--space-1-5) var(--space-2)",
    border: "1px solid var(--rule)",
    background: "var(--surface)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-ui)",
    color: "var(--ink)",
    outline: "none",
    boxSizing: "border-box"
  }
};

const cRail = {
  label: { fontSize: "var(--fs-label)", color: "var(--ink)", marginBottom: "var(--space-1-5)" },
  value: { display: "block", fontSize: "var(--fs-body)", color: "var(--navy)", fontWeight: 500, textDecoration: "none", marginBottom: "var(--space-half)", letterSpacing: "-0.005em" },
  addr: { fontSize: "var(--fs-body)", color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }
};