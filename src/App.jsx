import { useState } from "react";
import { profile } from "./data/profile.js";
import { ui } from "./i18n/translations.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Languages from "./components/Languages.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [lang, setLang] = useState("fr");
  const t = ui[lang];

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  return (
    <>
      <Nav t={t} lang={lang} toggleLang={toggleLang} profile={profile} />
      <main>
        <Hero t={t} lang={lang} profile={profile} />
        <About t={t} lang={lang} profile={profile} />
        <Experience t={t} lang={lang} profile={profile} />
        <Education t={t} lang={lang} profile={profile} />
        <Skills t={t} lang={lang} profile={profile} />
        <Languages t={t} lang={lang} profile={profile} />
        <Contact t={t} lang={lang} profile={profile} />
      </main>
      <Footer t={t} profile={profile} />
    </>
  );
}
