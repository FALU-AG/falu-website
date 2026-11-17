/* global React */
// ============================================================
//  FALU site router: hash-based navigation
//  Maps URL hash -> page component. Scrolls to top on navigate.
// ============================================================

window.FaluRouter = function FaluRouter() {
  const [hash, setHash] = React.useState(getHash());

  React.useEffect(() => {
    const onHash = () => {
      setHash(getHash());
      // Jump to top on every page change.
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  React.useEffect(() => applyPageMeta(hash), [hash]);

  const Page = resolve(hash);
  return <Page />;
};

// ---------- Per-route title and description (DESIGN.md, Page basics) ----------
const HOME_META = {
  title: "FALU · Cotton swab, cotton pad and paper stick machinery, Swiss-made since 1965",
  description: "Swiss-engineered production lines for cotton swabs, cotton pads and paper sticks. Built in Rüti since 1965 for decades of service, with spare parts for the entire machine lifecycle.",
};

const PAGE_META = {
  "machinery": ["Machinery", "FALU machinery for cotton swab, cotton pad and paper stick production, from single machines to complete lines, plus production planning and factory layout."],
  "cotton-swab-machinery": ["Cotton swab machinery", "Machines for automated cotton swab production with paper, wood and plastic sticks, from the CB1 swab machine to packaging, as single machines or complete lines."],
  "cotton-pad-machinery": ["Cotton pad machinery", "Machines for automatic cosmetic pad production in two capacity classes, for round, oval, square and baby pads, with a dedicated packaging line."],
  "packing": ["Cotton swab packaging", "Packaging machines for FALU cotton swab lines: cardboard boxes, round boxes, polybags, square boxes and blisters, synchronised with the CB1."],
  "cb1": ["CB1 cotton swab machine", "The FALU CB1 makes over 3'100 cotton swabs per minute on paper, plastic or wood sticks, and links upstream to the PRX stick machine and downstream to packaging."],
  "prx": ["PRX paper stick machine", "The FALU PRX forms paper sticks from the roll with minimal material loss. It runs standalone or feeds sticks straight into a cotton swab line."],
  "services": ["Services", "FALU supports its machines for their whole life: line planning, commissioning, operator training, spare parts and retrofits that keep installed machines current."],
  "about": ["About FALU", "FALU has designed and built machinery for cotton swabs, cotton pads and paper sticks in Rüti, Switzerland, since 1965."],
  "careers": ["Careers", "Open positions at FALU in Rüti, Switzerland, in engineering, assembly, field service and sales."],
  "contact": ["Contact", "Ask FALU about a new production line, a single machine, spare parts or servicing an existing installation. We reply within two working days."],
  "imprint": ["Imprint", "Legal information for FALU AG, Rüti, Switzerland."],
  "terms": ["Terms of use", "Terms of use for the FALU AG website."],
  "privacy": ["Privacy", "How FALU AG handles personal data on this website."],
};
PAGE_META.quote = PAGE_META.contact;
PAGE_META["about-us"] = PAGE_META.about;

function pageMeta(hash) {
  if (PAGE_META[hash]) {
    const [name, description] = PAGE_META[hash];
    return { title: `${name} · FALU`, description };
  }
  const m = window.FALU_MACHINES && window.FALU_MACHINES[hash];
  if (m) return { title: `${m.code} ${m.name.toLowerCase()} · FALU`, description: m.lede || HOME_META.description };
  return HOME_META;
}

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function applyPageMeta(hash) {
  const { title, description } = pageMeta(hash);
  document.title = title;
  setMeta('meta[name="description"]', "content", description);
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", description);
}

function getHash() {
  const h = (window.location.hash || "").replace(/^#/, "").trim();
  return h;
}

// Machine-detail ids handled by the shared <MachineDetail id> component.
const MACHINE_IDS = ["rb2", "sv2x", "rb30a", "polybag", "sqb2a", "bl12", "wr600", "wr2100", "vp2"];

function resolve(hash) {
  const {
    HomepageB, Machinery, CottonSwabMachinery, CottonPadMachinery,
    MachineCB1, MachinePRX, MachineDetail, Services, About, Contact, Careers, PackingMachines, Imprint, Terms, Privacy
  } = window;

  // Normalise a few aliases.
  let h = hash;
  if (h === "" || h === "home" || h === "/") return HomepageB;
  if (h === "quote") return Contact;
  if (h === "about-us") h = "about";

  const map = {
    "machinery": Machinery,
    "cotton-swab-machinery": CottonSwabMachinery,
    "cotton-pad-machinery": CottonPadMachinery,
    "packing": PackingMachines,
    "cb1": MachineCB1,
    "prx": MachinePRX,
    "services": Services,
    "about": About,
    "careers": Careers,
    "contact": Contact,
    "imprint": Imprint,
    "terms": Terms,
    "privacy": Privacy,
  };

  if (map[h]) return map[h];

  if (MACHINE_IDS.includes(h)) {
    return () => <MachineDetail id={h} />;
  }

  // Footer stubs and anything unrecognised fall back to home.
  // (careers, spare-parts, retrofits, financing, downloads, imprint, terms, privacy)
  return HomepageB;
}
