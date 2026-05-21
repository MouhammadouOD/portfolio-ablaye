import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";

function pick(value, lang) {
  return typeof value === "string" ? value : value[lang];
}

export default function Experience({ t, lang, profile }) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader index="II" kicker={t.experience.kicker} title={t.experience.title} />

        <ol className="timeline">
          {profile.experience.map((item, i) => (
            <Reveal as="li" className="timeline__item" key={i} delay={i * 90}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <h3 className="timeline__role">{pick(item.role, lang)}</h3>
                  <span className="timeline__period">{pick(item.period, lang)}</span>
                </div>
                <p className="timeline__org">{pick(item.org, lang)}</p>
                <span className="timeline__type">{pick(item.type, lang)}</span>
                <ul className="timeline__bullets">
                  {item.bullets[lang].map((bullet, b) => (
                    <li key={b}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
