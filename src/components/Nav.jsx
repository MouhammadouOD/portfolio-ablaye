import { useEffect, useState } from "react";

export default function Nav({ t, lang, toggleLang, profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["about", t.nav.about],
    ["experience", t.nav.experience],
    ["education", t.nav.education],
    ["skills", t.nav.skills],
    ["languages", t.nav.languages],
    ["contact", t.nav.contact],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          <span className="nav__monogram">{profile.name.initials}</span>
          <span className="nav__name">{profile.name.full}</span>
        </a>

        <nav
          className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}
          aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__lang"
            onClick={toggleLang}
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
          >
            {t.langSwitch}
          </button>
          <button
            className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={
              menuOpen
                ? lang === "fr"
                  ? "Fermer le menu"
                  : "Close menu"
                : lang === "fr"
                ? "Ouvrir le menu"
                : "Open menu"
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
