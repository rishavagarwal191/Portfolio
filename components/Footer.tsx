'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <span className="logo-name">Rishav Agrawal</span>
          <p>Continuous learner building intelligent data systems and scalable code.</p>
        </div>
        <div className="footer-center">
          <p>&copy; {currentYear} Rishav Agrawal. Designed with passion for Data Science &amp; AI.</p>
        </div>
        <div className="footer-right">
          <a href="#hero" className="back-to-top" title="Back to top">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
