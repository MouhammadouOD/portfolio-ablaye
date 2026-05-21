import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills({ t, lang, profile }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader index="IV" kicker={t.skills.kicker} title={t.skills.title} />

        <div className="skills__grid">
          {profile.skills[lang].map((cat, i) => (
            <Reveal className="skills__card" key={cat.group} delay={i * 90}>
              <h3 className="skills__group">{cat.group}</h3>
              <ul className="skills__tags">
                {cat.items.map((item) => (
                  <li key={item} className="skills__tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
