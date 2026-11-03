import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta" data-reveal>
          <div>
            <p className="eyebrow eyebrow--light">By appointment</p>
            <h2 className="footer-cta__title">
              Begin with a<br />
              <em>quiet conversation.</em>
            </h2>
          </div>
          <div className="footer-cta__actions">
            <a className="button button--light" href="#appointment">
              Book a private fitting
              <ArrowUpRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </a>
            <a
              className="footer-cta__email"
              href="mailto:hello@maisonivoire.in"
            >
              hello@maisonivoire.in
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Brand light className="brand--footer" />
            <p className="footer-brand__copy">
              Bridal couture, cut by hand in New Delhi. For the day itself — and
              every anniversary after.
            </p>
          </div>

          <div className="footer-column">
            <p className="footer-label">Visit</p>
            <address>
              42 Sunder Nagar
              <br />
              New Delhi 110003
              <br />
              India
            </address>
            <a
              className="footer-map"
              href="https://maps.google.com/?q=42+Sunder+Nagar+New+Delhi"
              target="_blank"
              rel="noreferrer"
            >
              Find the atelier
              <ArrowUpRight size={12} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>

          <div className="footer-column">
            <p className="footer-label">Enquiries</p>
            <a href="mailto:hello@maisonivoire.in">hello@maisonivoire.in</a>
            <a href="tel:+911141062288">+91 11 4106 2288</a>
            <p className="footer-hours">
              Tuesday — Saturday
              <br />
              11:00 — 18:00
            </p>
          </div>

          <div className="footer-newsletter">
            <p className="footer-label">The list</p>
            <p className="footer-newsletter__copy">
              Occasional notes on dressing, ritual, and life inside the atelier.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          Maison Ivoire
        </div>

        <div className="footer-bottom">
          <p>© 2026 Maison Ivoire. All rights reserved.</p>
          <p>New Delhi · India</p>
          <div className="footer-social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Maison Ivoire on Instagram"
            >
              Instagram
              <ArrowUpRight size={11} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Maison Ivoire on Pinterest"
            >
              Pinterest
              <ArrowUpRight size={11} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
