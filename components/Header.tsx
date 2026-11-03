"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);

    if (!isOpen) {
      return () => document.body.classList.remove("nav-open");
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-open");
    };
  }, [isOpen]);

  return (
    <>
      <div className="announcement" id="top">
        <div className="announcement__inner">
          <span className="announcement__mark" aria-hidden="true" />
          <p>
            <span className="announcement__long">
              Autumn / Winter 2026 — Private appointments now open
            </span>
            <span className="announcement__short">
              A / W 26 — Appointments open
            </span>
          </p>
          <span className="announcement__aside">New Delhi · By appointment</span>
        </div>
      </div>

      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__inner">
          <nav className="primary-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="primary-nav__link">
                {link.label}
              </a>
            ))}
          </nav>

          <Brand className="brand--header" />

          <div className="header-actions">
            <span className="header-coords" aria-hidden="true">
              28.6139° N / 77.2090° E
            </span>
            <a className="button button--dark header-cta" href="#appointment">
              Book a fitting
              <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="menu-button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? (
                <X size={22} strokeWidth={1.4} aria-hidden="true" />
              ) : (
                <Menu size={23} strokeWidth={1.4} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="mobile-menu__top">
          <Brand light />
          <button
            type="button"
            className="mobile-menu__close"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} strokeWidth={1.2} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-menu__link"
            >
              <span className="mobile-menu__number">0{index + 1}</span>
              <span>{link.label}</span>
              <ArrowUpRight
                size={22}
                strokeWidth={1.1}
                aria-hidden="true"
                className="mobile-menu__arrow"
              />
            </a>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <div>
            <p className="mobile-menu__label">Atelier</p>
            <p>
              42 Sunder Nagar
              <br />
              New Delhi 110003
            </p>
          </div>
          <div>
            <p className="mobile-menu__label">Enquiries</p>
            <a href="mailto:hello@maisonivoire.in">hello@maisonivoire.in</a>
            <a href="tel:+911141062288">+91 11 4106 2288</a>
          </div>
          <a
            className="button button--light"
            href="#appointment"
            onClick={() => setIsOpen(false)}
          >
            Book a private appointment
            <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
