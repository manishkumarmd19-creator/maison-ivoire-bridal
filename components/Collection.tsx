"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { gowns, type Gown } from "@/lib/content";

export default function Collection() {
  const [activeGown, setActiveGown] = useState<Gown | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeGown && !dialog.open) {
      dialog.showModal();
      document.body.classList.add("dialog-open");
    }

    if (!activeGown && dialog.open) {
      dialog.close();
    }

    if (!activeGown) {
      document.body.classList.remove("dialog-open");
    }

    return () => {
      document.body.classList.remove("dialog-open");
    };
  }, [activeGown]);

  const closeDialog = () => setActiveGown(null);

  return (
    <>
      <div className="gowns">
        {gowns.map((gown, index) => (
          <button
            key={gown.name}
            type="button"
            className="gown-card"
            aria-haspopup="dialog"
            aria-label={`View ${gown.name}, ${gown.subtitle}`}
            onClick={() => setActiveGown(gown)}
            data-reveal
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <span className="gown-card__media">
              <Image
                src={gown.image}
                alt={gown.alt}
                fill
                sizes="(max-width: 900px) 78vw, (max-width: 1200px) 33vw, 420px"
                style={{ objectPosition: gown.objectPosition }}
              />
              <span className="gown-card__veil" aria-hidden="true" />
              <span className="gown-card__number">Nº {gown.number}</span>
              <span className="gown-card__discover">
                Discover the gown
                <ArrowUpRight size={15} strokeWidth={1.3} aria-hidden="true" />
              </span>
            </span>
            <span className="gown-card__info">
              <span className="gown-card__text">
                <span className="gown-card__name">{gown.name}</span>
                <span className="gown-card__subtitle">{gown.subtitle}</span>
              </span>
              <span className="gown-card__order">Made to order</span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="detail-dialog gown-dialog"
        aria-labelledby="gown-dialog-title"
        onClose={closeDialog}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        {activeGown ? (
          <div className="detail-dialog__panel">
            <button
              type="button"
              className="dialog-close"
              onClick={closeDialog}
              aria-label="Close gown details"
            >
              <X size={20} strokeWidth={1.3} aria-hidden="true" />
            </button>

            <div className="detail-dialog__media">
              <Image
                src={activeGown.image}
                alt={activeGown.alt}
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                style={{ objectPosition: activeGown.objectPosition }}
              />
              <span className="detail-dialog__media-label">
                Nº {activeGown.number} / 03
              </span>
            </div>

            <div className="detail-dialog__content">
              <p className="eyebrow">The collection</p>
              <h2 id="gown-dialog-title" className="detail-dialog__title">
                {activeGown.name}
              </h2>
              <p className="detail-dialog__subtitle">{activeGown.subtitle}</p>
              <p className="detail-dialog__description">
                {activeGown.description}
              </p>

              <dl className="detail-dialog__facts">
                {activeGown.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="detail-dialog__actions">
                <a
                  href="#appointment"
                  className="button button--dark"
                  onClick={closeDialog}
                >
                  Book a private fitting
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={`mailto:hello@maisonivoire.in?subject=Enquiry — ${activeGown.name}`}
                  className="text-link"
                >
                  Enquire about this gown
                </a>
              </div>

              <p className="detail-dialog__note">
                Price on request · Hand-finished in New Delhi · Made to your
                measurements
              </p>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
