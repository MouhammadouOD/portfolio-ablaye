import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact({ t, lang, profile }) {
  return (
    <section className="section section--dark" id="contact">
      <div className="container">
        <SectionHeader index="VI" kicker={t.contact.kicker} title={t.contact.title} />

        <div className="contact__grid">
          <Reveal className="contact__text">
            <p className="contact__lead">{t.contact.lead}</p>
            <a className="btn btn--warm" href={`mailto:${profile.email}`}>
              {t.contact.ctaEmail}
            </a>
          </Reveal>

          <Reveal className="contact__details" delay={120}>
            <dl>
              <div className="contact__row">
                <dt>{t.contact.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>{t.contact.phoneLabel}</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>{t.contact.locationLabel}</dt>
                <dd>{profile.location[lang]}</dd>
              </div>
              <div className="contact__row">
                <dt>{t.contact.linkedinLabel}</dt>
                <dd>
                  {profile.linkedin ? (
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      {profile.linkedin}
                    </a>
                  ) : (
                    <span className="contact__soon">{t.contact.linkedinSoon}</span>
                  )}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
