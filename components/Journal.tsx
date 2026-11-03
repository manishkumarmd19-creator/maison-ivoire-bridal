"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { journalEntries, type JournalEntry } from "@/lib/content";

export default function Journal() {
  const [activeEntry, setActiveEntry] = useState<JournalEntry | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeEntry && !dialog.open) {
      dialog.showModal();
      document.body.classList.add("dialog-open");
    }

    if (!activeEntry && dialog.open) {
      dialog.close();
    }

    if (!activeEntry) {
      document.body.classList.remove("dialog-open");
    }

    return () => {
      document.body.classList.remove("dialog-open");
    };
  }, [activeEntry]);

  const closeDialog = () => setActiveEntry(null);

  return (
    <>
      <div className="journal-grid">
        {journalEntries.map((entry, index) => (
          <button
            key={entry.title}
            type="button"
            className="journal-card"
            aria-haspopup="dialog"
            aria-label={`Read ${entry.title}`}
            onClick={() => setActiveEntry(entry)}
            data-reveal
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <span className="journal-card__media">
              <Image
                src={entry.image}
                alt={entry.alt}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 360px"
              />
              <span className="journal-card__read">
                Read the note
                <ArrowUpRight size={14} strokeWidth={1.3} aria-hidden="true" />
              </span>
            </span>
            <span className="journal-card__meta">
              <span>{entry.category}</span>
              <span>{entry.readTime}</span>
            </span>
            <span className="journal-card__title">{entry.title}</span>
            <span className="journal-card__excerpt">{entry.excerpt}</span>
            <span className="journal-card__footer">
              <span>{entry.date}</span>
              <span className="journal-card__index">Nº {entry.number}</span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="detail-dialog journal-dialog"
        aria-labelledby="journal-dialog-title"
        onClose={closeDialog}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        {activeEntry ? (
          <div className="detail-dialog__panel detail-dialog__panel--journal">
            <button
              type="button"
              className="dialog-close"
              onClick={closeDialog}
              aria-label="Close journal entry"
            >
              <X size={20} strokeWidth={1.3} aria-hidden="true" />
            </button>

            <div className="detail-dialog__media detail-dialog__media--journal">
              <Image
                src={activeEntry.image}
                alt={activeEntry.alt}
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
              />
              <span className="detail-dialog__media-label">
                Journal Nº {activeEntry.number}
              </span>
            </div>

            <div className="detail-dialog__content detail-dialog__content--journal">
              <p className="eyebrow">
                {activeEntry.category} · {activeEntry.date}
              </p>
              <h2 id="journal-dialog-title" className="detail-dialog__title">
                {activeEntry.title}
              </h2>
              <p className="journal-dialog__meta">{activeEntry.readTime}</p>
              <div className="journal-dialog__body">
                {activeEntry.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="detail-dialog__actions">
                <a
                  href="#appointment"
                  className="text-link"
                  onClick={closeDialog}
                >
                  Book a private appointment
                  <ArrowUpRight size={14} strokeWidth={1.4} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
