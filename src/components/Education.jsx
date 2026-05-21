import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";

export default function Education({ t, lang, profile }) {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <SectionHeader index="III" kicker={t.education.kicker} title={t.education.title} />

        <div className="edu__grid">
          {profile.education.map((item, i) => (
            <Reveal className="edu__card" key={i} delay={i * 90}>
              <span className="edu__year">{item.period}</span>
              <h3 className="edu__degree">{item.degree[lang]}</h3>
              {item.school && <p className="edu__school">{item.school}</p>}
              {item.note && <p className="edu__note">{item.note[lang]}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
