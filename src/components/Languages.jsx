import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";

export default function Languages({ t, lang, profile }) {
  return (
    <section className="section section--alt" id="languages">
      <div className="container">
        <SectionHeader index="V" kicker={t.languages.kicker} title={t.languages.title} />

        <div className="lang__grid">
          {profile.languages[lang].map((item, i) => (
            <Reveal className="lang__card" key={item.name} delay={i * 80}>
              <span className="lang__level">{item.level}</span>
              <h3 className="lang__name">{item.name}</h3>
              <p className="lang__tag">{item.tag}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
