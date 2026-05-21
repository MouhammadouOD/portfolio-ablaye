import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";

export default function About({ t, lang, profile }) {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <SectionHeader index="I" kicker={t.about.kicker} title={t.about.title} />

        <div className="about__grid">
          <Reveal className="about__text">
            <p>{profile.about[lang]}</p>
          </Reveal>

          <Reveal className="about__aside" delay={120}>
            <h3 className="about__aside-title">{t.about.interestsTitle}</h3>
            <ul className="about__interests">
              {profile.interests[lang].map((item) => (
                <li key={item}>
                  <span className="about__interest-mark" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
