import Reveal from "./Reveal.jsx";

// En-tête de section : numéro romain + sur-titre + titre.
export default function SectionHeader({ index, kicker, title }) {
  return (
    <Reveal className="section-header">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  );
}
