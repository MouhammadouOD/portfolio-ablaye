import { useEffect, useState } from "react";

// Concept Hero « minimalist-word » : typographie expressive, typewriter sobre.
function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1700 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) {
      delay = pause;
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
      delay = 280;
    }

    const timer = setTimeout(() => {
      setText((prev) => {
        if (deleting) return current.slice(0, prev.length - 1);
        return current.slice(0, prev.length + 1);
      });
      if (!deleting && text === current) setDeleting(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero({ t, lang, profile }) {
  const typed = useTypewriter(profile.headline[lang]);
  const [firstName, ...rest] = profile.name.full.split(" ");

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-line" aria-hidden="true" />
          {t.hero.eyebrow}
        </p>

        <p className="hero__intro">{t.hero.intro}</p>

        <h1 className="hero__name">
          {firstName}
          <span className="hero__name-rest"> {rest.join(" ")}</span>
        </h1>

        <p className="hero__typed" aria-live="polite">
          {typed}
          <span className="hero__caret" aria-hidden="true" />
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            {t.hero.ctaContact}
          </a>
          <a className="btn btn--ghost" href={profile.cvPath} download>
            {t.hero.ctaCv}
          </a>
        </div>

        <a className="hero__scroll" href="#about" aria-label={t.hero.scroll}>
          <span>{t.hero.scroll}</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </div>

      <span className="hero__mark" aria-hidden="true">
        §
      </span>
    </section>
  );
}
