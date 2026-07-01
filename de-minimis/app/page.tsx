"use client";

import { useEffect, useRef } from "react";

const TICKER_ITEMS = [
  "RARE EARTH PROCESSING",
  "MINERAL SANDS",
  "LITHIUM PROCESSING",
  "KAOLIN & INDUSTRIAL MINERALS",
  "SILICA & GLASS SAND",
  "TITANIUM DIOXIDE",
  "BATTERY RECYCLING",
  "MAGNETIC SEPARATION",
  "FILTER PRESS & DEWATERING",
  "CRITICAL MINERALS",
];

const SERVICES = [
  {
    number: "01",
    title: "Equipment Sourcing",
    body: "We identify qualified non-Chinese manufacturers whose equipment matches your specific process requirements — feedstock, particle size, throughput, and application. We do the technical vetting before you spend any time on it.",
  },
  {
    number: "02",
    title: "Import & Logistics",
    body: "Full import management: freight forwarding, customs clearance, US entry documentation, and last-mile delivery. You receive equipment as a domestic procurement with a single point of contact.",
  },
  {
    number: "03",
    title: "Test Work Coordination",
    body: "Our supplier partners offer test work programs on actual feedstock samples before any purchase commitment. We coordinate the process from sample shipment through final report and machine recommendation.",
  },
  {
    number: "04",
    title: "Compliance Verification",
    body: "For defense-adjacent buyers subject to DFARS and the January 2027 Chinese-origin material prohibitions, we document country of origin, manufacturing provenance, and supply chain compliance for every piece of equipment we source.",
  },
];



const MARKETS = [
  { label: "Rare Earth & Critical Minerals", desc: "REE concentration, monazite, mixed rare earth concentrate" },
  { label: "Heavy Mineral Sands", desc: "Ilmenite, rutile, zircon, garnet separation" },
  { label: "Lithium Processing", desc: "Spodumene and lithium clay iron removal" },
  { label: "Silica & Glass Sand", desc: "Iron contamination removal for purity spec compliance" },
  { label: "Kaolin & Industrial Minerals", desc: "Brightness improvement, paramagnetic mineral removal" },
  { label: "Battery Recycling", desc: "Black mass processing, ferromagnetic contaminant removal" },
  { label: "Titanium Dioxide", desc: "TiO2 feedstock beneficiation and mineral sands prep" },
  { label: "Ceramics & Refractory", desc: "Feldspar, talc, and alumina iron removal" },
];

export default function Home() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;
    let pos = 0;
    const speed = 0.4;
    const step = () => {
      pos -= speed;
      const half = ticker.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      ticker.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ background: "#0A0C0E", color: "#F0EDE8", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid rgba(184,190,198,0.12)", backdropFilter: "blur(12px)", background: "rgba(10,12,14,0.85)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: 22, letterSpacing: "0.08em", color: "#F0EDE8" }}>DE MINIMIS</span>
            <span style={{ fontSize: 11, color: "#B8BEC6", letterSpacing: "0.12em", textTransform: "uppercase" }}>Mining Equipment</span>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["Services", "Markets", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "#B8BEC6", textDecoration: "none", fontSize: 13, letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F0EDE8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#B8BEC6")}>{item}</a>
            ))}
            <a href="#contact" style={{ background: "#C4762A", color: "#F0EDE8", padding: "8px 20px", fontSize: 13, letterSpacing: "0.06em", textDecoration: "none", fontWeight: 600 }}>
              REQUEST INQUIRY
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1611280042849-1dc9e0f04b5e?w=1800&q=80&auto=format&fit=crop"
            alt="Industrial mineral processing facility"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.35) saturate(0.7)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0C0E 0%, rgba(10,12,14,0.3) 60%, transparent 100%)" }} />
        </div>

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 32px 80px", width: "100%" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4762A", textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>
              Non-Chinese Mining Equipment · Full Import Service · North America
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: "clamp(56px, 8vw, 108px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#F0EDE8", margin: "0 0 32px" }}>
              QUALIFIED<br />
              EQUIPMENT.<br />
              <span style={{ color: "#C4762A" }}>DELIVERED.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#B8BEC6", maxWidth: 520, margin: "0 0 40px" }}>
              De Minimis sources magnetic separation and mineral processing equipment from vetted non-Chinese manufacturers and handles the complete import process into North America.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" style={{ background: "#C4762A", color: "#F0EDE8", padding: "14px 32px", fontSize: 13, letterSpacing: "0.08em", textDecoration: "none", fontWeight: 700 }}>
                REQUEST EQUIPMENT INQUIRY
              </a>
              <a href="#services" style={{ border: "1px solid rgba(184,190,198,0.4)", color: "#B8BEC6", padding: "14px 32px", fontSize: 13, letterSpacing: "0.08em", textDecoration: "none" }}>
                HOW IT WORKS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div style={{ borderTop: "1px solid rgba(196,118,42,0.3)", borderBottom: "1px solid rgba(196,118,42,0.3)", background: "#0F1215", overflow: "hidden", padding: "14px 0" }}>
        <div ref={tickerRef} style={{ display: "flex", gap: 0, whiteSpace: "nowrap", willChange: "transform" }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#B8BEC6", padding: "0 40px", display: "inline-flex", alignItems: "center", gap: 40 }}>
              {item}
              <span style={{ color: "#C4762A", fontSize: 8 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" style={{ padding: "100px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4762A", textTransform: "uppercase", marginBottom: 16 }}>What we do</div>
          <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: 56, letterSpacing: "0.04em", color: "#F0EDE8", margin: 0 }}>
            FULL-SERVICE EQUIPMENT IMPORT
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "rgba(184,190,198,0.08)" }}>
          {SERVICES.map(s => (
            <div key={s.number} style={{ background: "#0A0C0E", padding: 40 }}>
              <div style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: 48, color: "rgba(196,118,42,0.25)", lineHeight: 1, marginBottom: 20 }}>{s.number}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: 16, margin: "0 0 16px" }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#B8BEC6", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider image */}
      <div style={{ height: 320, overflow: "hidden", position: "relative" }}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80&auto=format&fit=crop"
          alt="Magnetic separation industrial equipment"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.25) saturate(0.6)" }}
        />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "0.04em", color: "#F0EDE8" }}>
              DFARS COMPLIANT · NON-CHINESE ORIGIN · FULLY DOCUMENTED
            </div>
            <div style={{ fontSize: 13, color: "#B8BEC6", marginTop: 12, letterSpacing: "0.1em" }}>
              Supplying US rare earth and critical mineral facilities ahead of the January 2027 procurement deadline
            </div>
          </div>
        </div>
      </div>

      {/* Markets */}
      <section id="markets" style={{ padding: "100px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4762A", textTransform: "uppercase", marginBottom: 16 }}>Industries served</div>
          <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: 56, letterSpacing: "0.04em", color: "#F0EDE8", margin: 0 }}>
            MARKETS
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "rgba(184,190,198,0.08)" }}>
          {MARKETS.map(m => (
            <div key={m.label} style={{ background: "#0A0C0E", padding: "28px 32px", borderLeft: "2px solid transparent", transition: "border-color 0.2s", cursor: "default" }}
              onMouseEnter={e => (e.currentTarget.style.borderLeftColor = "#C4762A")}
              onMouseLeave={e => (e.currentTarget.style.borderLeftColor = "transparent")}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#F0EDE8", marginBottom: 8, letterSpacing: "0.02em" }}>{m.label}</div>
              <div style={{ fontSize: 13, color: "#B8BEC6", lineHeight: 1.6 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why De Minimis */}
      <section style={{ padding: "100px 32px", background: "#0F1215" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4762A", textTransform: "uppercase", marginBottom: 16 }}>Why De Minimis</div>
            <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: 52, letterSpacing: "0.04em", color: "#F0EDE8", lineHeight: 0.95, margin: "0 0 32px" }}>
              ONE CALL.<br />QUALIFIED<br />EQUIPMENT<br />AT YOUR DOOR.
            </h2>
            <p style={{ fontSize: 15, color: "#B8BEC6", lineHeight: 1.75, marginBottom: 24 }}>
              Most mineral processing facilities sourcing non-Chinese equipment face the same problem: identifying qualified manufacturers abroad is time-consuming, and managing international freight, customs, and compliance is a distraction from the real work of building a processing operation.
            </p>
            <p style={{ fontSize: 15, color: "#B8BEC6", lineHeight: 1.75 }}>
              De Minimis handles the entire process. We identify the right manufacturer, coordinate test work on your feedstock, manage freight and US customs clearance, and deliver equipment as a domestic procurement. You engage with one counterparty. We handle everything else.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop"
              alt="Industrial processing facility"
              style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", filter: "brightness(0.6) saturate(0.7)" }}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4762A", textTransform: "uppercase", marginBottom: 16 }}>Get in touch</div>
            <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: 52, letterSpacing: "0.04em", color: "#F0EDE8", lineHeight: 0.95, margin: "0 0 32px" }}>
              TELL US WHAT<br />YOU NEED
            </h2>
            <p style={{ fontSize: 15, color: "#B8BEC6", lineHeight: 1.75, marginBottom: 40 }}>
              We respond to all equipment inquiries within one business day. If you have a specific feedstock or application in mind, our supplier partners can arrange test work at no cost before any purchase commitment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="mailto:joshjackman@de-minimis.ai" style={{ color: "#C4762A", textDecoration: "none", fontSize: 15, letterSpacing: "0.04em" }}>
                joshjackman@de-minimis.ai
              </a>
              <a href="tel:5155285999" style={{ color: "#B8BEC6", textDecoration: "none", fontSize: 15, letterSpacing: "0.04em" }}>
                (515) 528-5999
              </a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(184,190,198,0.08)", padding: "40px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: 18, letterSpacing: "0.1em", color: "#B8BEC6" }}>DE MINIMIS</span>
          <span style={{ fontSize: 12, color: "rgba(184,190,198,0.4)", letterSpacing: "0.04em" }}>
            Mining Equipment Import · North America · joshjackman@de-minimis.ai
          </span>
          <span style={{ fontSize: 12, color: "rgba(184,190,198,0.4)" }}>© 2026 De Minimis</span>
        </div>
      </footer>

      {/* Bebas Neue font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        ::selection { background: rgba(196,118,42,0.3); }
      `}</style>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        window.location.href = `mailto:joshjackman@de-minimis.ai?subject=Equipment Inquiry — ${data.get("equipment")}&body=Name: ${data.get("name")}%0ACompany: ${data.get("company")}%0AEquipment needed: ${data.get("equipment")}%0AMessage: ${data.get("message")}`;
      }}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      {[
        { name: "name", label: "Your name", type: "text", required: true },
        { name: "company", label: "Company", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "equipment", label: "Equipment type / application", type: "text", required: true },
      ].map(field => (
        <div key={field.name}>
          <label style={{ display: "block", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B8BEC6", marginBottom: 8 }}>{field.label}</label>
          <input
            name={field.name}
            type={field.type}
            required={field.required}
            style={{ width: "100%", background: "#1E2329", border: "1px solid rgba(184,190,198,0.15)", color: "#F0EDE8", padding: "12px 16px", fontSize: 14, outline: "none", fontFamily: "Inter, system-ui" }}
            onFocus={e => (e.currentTarget.style.borderColor = "rgba(196,118,42,0.6)")}
            onBlur={e => (e.currentTarget.style.borderColor = "rgba(184,190,198,0.15)")}
          />
        </div>
      ))}
      <div>
        <label style={{ display: "block", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B8BEC6", marginBottom: 8 }}>Message</label>
        <textarea
          name="message"
          rows={4}
          style={{ width: "100%", background: "#1E2329", border: "1px solid rgba(184,190,198,0.15)", color: "#F0EDE8", padding: "12px 16px", fontSize: 14, resize: "vertical", outline: "none", fontFamily: "Inter, system-ui" }}
          onFocus={e => (e.currentTarget.style.borderColor = "rgba(196,118,42,0.6)")}
          onBlur={e => (e.currentTarget.style.borderColor = "rgba(184,190,198,0.15)")}
        />
      </div>
      <button
        type="submit"
        style={{ background: "#C4762A", color: "#F0EDE8", border: "none", padding: "14px 32px", fontSize: 13, letterSpacing: "0.08em", fontWeight: 700, cursor: "pointer", fontFamily: "Inter, system-ui", textAlign: "left" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#D4862A")}
        onMouseLeave={e => (e.currentTarget.style.background = "#C4762A")}
      >
        SEND INQUIRY →
      </button>
    </form>
  );
}
