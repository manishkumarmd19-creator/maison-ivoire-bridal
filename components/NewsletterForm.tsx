"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <p className="newsletter__success" role="status">
        You&apos;re on the list. A quiet note, occasionally.
      </p>
    );
  }

  return (
    <form className="newsletter" onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Your email address"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status === "error") setStatus("idle");
        }}
        aria-invalid={status === "error"}
        aria-describedby={
          status === "error" ? "newsletter-error" : "newsletter-note"
        }
      />
      <button type="submit" aria-label="Join the mailing list">
        <ArrowRight size={16} strokeWidth={1.4} aria-hidden="true" />
      </button>
      <p id="newsletter-note" className="sr-only">
        Occasional notes from the atelier. No more than once a month.
      </p>
      {status === "error" ? (
        <p className="newsletter__error" id="newsletter-error" role="alert">
          Please enter a valid email address.
        </p>
      ) : null}
    </form>
  );
}
