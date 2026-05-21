export default function Footer({ t, profile }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">{profile.name.full}</span>
        <span className="footer__meta">
          © {year} · {t.footer.rights}
        </span>
        <span className="footer__built">{t.footer.built}</span>
      </div>
    </footer>
  );
}
