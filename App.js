import React, { useState } from 'react'
import './App.css'

const services = [
  { number: '01', title: 'Außenreinigung', text: 'Handwäsche, Trocknung, Politur und konservierende Versiegelung – für Glanz, der bleibt.', icon: '✦' },
  { number: '02', title: 'Innenreinigung', text: 'Sitze, Teppiche, Armaturen und Scheiben werden gründlich gereinigt und aufgefrischt.', icon: '⌂' },
  { number: '03', title: 'Lackbehandlung', text: 'Kratzer reduzieren, verwitterten Lack auffrischen und Oberflächen professionell versiegeln.', icon: '◒' },
  { number: '04', title: 'Scheibentönung', text: 'Hochwertige, UV-beständige Folien in verschiedenen Tönungsstufen – sauber foliert.', icon: '▱' },
  { number: '05', title: 'Beschriftungen', text: 'Wetterfeste Folienschriftzüge und Grafiken nach Ihren Vorstellungen – für Auto und Flotte.', icon: '↗' },
]

function ServiceIcon({ type }) {
  const common = { width: 31, height: 31, viewBox: '0 0 32 32', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === '02') return <svg {...common}><path d="M7 22v-7l2-6h14l2 6v7"/><path d="M7 18h18M10 22v3M22 22v3M11 13h10"/></svg>
  if (type === '03') return <svg {...common}><path d="m20 5 7 7-12 12H8v-7L20 5Z"/><path d="m17 8 7 7M5 27h11"/></svg>
  if (type === '04') return <svg {...common}><path d="M5 8h22l-2 16H7L5 8Z"/><path d="m8 22 16-11M14 24l12-9"/></svg>
  if (type === '05') return <svg {...common}><path d="M6 8h20v16H6z"/><path d="m8 11 8 6 8-6M10 21l4-3M22 21l-4-3"/></svg>
  return <svg {...common}><path d="m16 3 2.3 8.7L27 14l-8.7 2.3L16 25l-2.3-8.7L5 14l8.7-2.3L16 3Z"/><path d="m26 23 .7 2.3L29 26l-2.3.7L26 29l-.7-2.3L23 26l2.3-.7L26 23Z"/></svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="nav-wrap"><nav className="nav container" aria-label="Hauptnavigation">
      <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">MD</span><span><strong>MD</strong><small>FAHRZEUGAUFBEREITUNG</small></span></a>
      <button className="menu-toggle" aria-label="Menü öffnen" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}><a href="#leistungen" onClick={closeMenu}>Leistungen</a><a href="#ablauf" onClick={closeMenu}>Unser Ablauf</a><a href="#ueber-uns" onClick={closeMenu}>Über uns</a><a className="nav-cta" href="#kontakt" onClick={closeMenu}>Termin anfragen <span>↗</span></a></div>
    </nav></header>

    <main id="top">
      <section className="hero container"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Fahrzeugpflege mit Anspruch · Boffzen</p><h1>Ihr Fahrzeug.<br /><em>Unser Anspruch.</em></h1><p className="hero-lead">Professionelle Fahrzeugaufbereitung für Menschen, die den Unterschied sehen – innen wie außen.</p><div className="hero-actions"><a className="button button-primary" href="#kontakt">Jetzt Termin anfragen <span>↗</span></a><a className="text-link" href="#leistungen">Leistungen entdecken <span>↓</span></a></div><div className="hero-proof"><span className="proof-line" /><span>Sauber. Sorgfältig. Persönlich.</span></div></div><div className="hero-visual" aria-label="Detailaufnahme eines aufbereiteten Fahrzeugs"><div className="hero-photo" /><div className="hero-sticker"><strong>MD</strong><span>DETAIL<br />DRIVEN</span></div><div className="hero-card"><span className="mini-label">AUFBEREITUNG</span><strong>Wie neu.<br />Nur besser.</strong><span className="card-arrow">↗</span></div></div></section>
      <section className="ticker" aria-label="Unsere Leistungen"><div className="ticker-track"><span>EXTERIOR CARE</span><b>✦</b><span>INTERIOR DETAILING</span><b>✦</b><span>PAINT CORRECTION</span><b>✦</b><span>WINDOW TINT</span><b>✦</b><span>EXTERIOR CARE</span><b>✦</b><span>INTERIOR DETAILING</span></div></section>
      <section className="section container" id="leistungen"><div className="section-intro"><p className="eyebrow">Was wir für Sie tun</p><h2>Mehr als sauber.<br /><em>Ein neues Gefühl.</em></h2></div><div className="section-aside"><p>Ob für den Alltag, den Verkauf oder einfach für das gute Gefühl: Wir bringen Ihr Fahrzeug zurück in Bestform.</p><a className="text-link" href="#kontakt">Projekt besprechen <span>↗</span></a></div><div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span className="service-number">{service.number}</span><span className="service-icon"><ServiceIcon type={service.number} /></span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#kontakt" aria-label={`${service.title} anfragen`}>Mehr erfahren <span>↗</span></a></article>)}</div></section>
      <section className="statement" id="ueber-uns"><div className="container statement-inner"><p className="eyebrow">Der MD Unterschied</p><h2>Detail ist kein Extra.<br /><em>Es ist unser Standard.</em></h2><p className="statement-copy">Wir arbeiten mit geschultem Blick, hochwertigen Produkten und viel Liebe zum Detail. Weil Ihr Fahrzeug mehr verdient als eine schnelle Wäsche.</p><div className="stat-row"><div><strong>01</strong><span>Persönlich</span></div><div><strong>100%</strong><span>Sorgfalt</span></div><div><strong>∞</strong><span>Leidenschaft</span></div></div></div></section>
      <section className="process section container" id="ablauf"><div className="section-intro"><p className="eyebrow">So läuft es ab</p><h2>Einfach zu<br /><em>glänzenden Ergebnissen.</em></h2></div><div className="process-steps"><div><span>01</span><h3>Kontakt aufnehmen</h3><p>Schreiben Sie uns kurz, was Ihr Fahrzeug braucht.</p></div><div><span>02</span><h3>Individuell beraten</h3><p>Wir schauen gemeinsam, welche Behandlung passt.</p></div><div><span>03</span><h3>Abholen & staunen</h3><p>Sie holen Ihr Fahrzeug sauber, gepflegt und bereit ab.</p></div></div></section>
      <section className="contact container" id="kontakt"><div className="contact-copy"><p className="eyebrow">Bereit für den Unterschied?</p><h2>Ihr Fahrzeug ist<br /><em>bei uns richtig.</em></h2><p>Erzählen Sie uns kurz, was wir für Sie tun dürfen. Wir melden uns persönlich bei Ihnen.</p><div className="contact-details"><a href="mailto:info@mister-glanz.de">info@mister-glanz.de <span>↗</span></a><span>Neue Str. 4 · 37691 Boffzen</span><span>Mo–Fr · 09:00–16:00 Uhr</span></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><label>Name<input required placeholder="Ihr Name" /></label><label>E-Mail<input required type="email" placeholder="ihre@email.de" /></label><label>Worum geht es?<textarea required rows={4} placeholder="Erzählen Sie uns von Ihrem Fahrzeug …" /></label><label className="consent"><input required type="checkbox" /> <span>Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu.</span></label><button className="button button-primary" type="submit">{sent ? 'Danke – Nachricht vorgemerkt' : 'Anfrage senden'} <span>↗</span></button>{sent && <p className="form-note">Wir melden uns schnellstmöglich persönlich bei Ihnen.</p>}</form></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#top"><span className="brand-mark">MD</span><span><strong>MD</strong><small>FAHRZEUGAUFBEREITUNG</small></span></a><div className="footer-links"><a href="#leistungen">Leistungen</a><a href="#ueber-uns">Über uns</a><a href="#kontakt">Kontakt</a><a href="#">Impressum</a><a href="#">Datenschutz</a></div><span className="copyright">© {new Date().getFullYear()} MD Fahrzeugaufbereitung</span></div></footer>
  </div>
}

export default App


