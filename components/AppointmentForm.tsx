"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { appointmentTypes } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: string;
  date: string;
  notes: string;
};

type Field = keyof FormState;

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  type: "",
  date: "",
  notes: "",
};

const fieldIds: Record<Field, string> = {
  name: "appointment-name",
  email: "appointment-email",
  phone: "appointment-phone",
  type: "appointment-type",
  date: "appointment-date",
  notes: "appointment-notes",
};

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().slice(0, 10));
  }, []);

  const updateField = (field: Field, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};

    if (form.name.trim().length < 2) {
      next.name = "Please tell us your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (form.phone.trim() && form.phone.replace(/\D/g, "").length < 7) {
      next.phone = "Please enter a valid phone number.";
    }

    if (!form.type) {
      next.type = "Please choose an appointment type.";
    }

    if (!form.date) {
      next.date = "Please choose a preferred date.";
    } else if (minDate && form.date < minDate) {
      next.date = "Please choose a date from tomorrow onward.";
    }

    setErrors(next);
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    const firstError = (Object.keys(nextErrors) as Field[])[0];

    if (firstError) {
      requestAnimationFrame(() => {
        document.getElementById(fieldIds[firstError])?.focus();
      });
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  const firstName = form.name.trim().split(/\s+/)[0] || "there";
  const formattedDate = form.date
    ? new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(`${form.date}T00:00:00`))
    : "";

  if (submitted) {
    return (
      <div className="appointment-form appointment-form--success">
        <div className="appointment-success" role="status">
          <span className="appointment-success__icon" aria-hidden="true">
            <Check size={19} strokeWidth={1.4} />
          </span>
          <p className="eyebrow">Request received</p>
          <h3>Thank you, {firstName}.</h3>
          <p className="appointment-success__copy">
            Your note is with our atelier. We&apos;ll be in touch within two
            business days to confirm your private appointment.
          </p>

          <dl className="appointment-success__details">
            <div>
              <dt>Preferred date</dt>
              <dd>{formattedDate}</dd>
            </div>
            <div>
              <dt>Appointment</dt>
              <dd>{form.type}</dd>
            </div>
            <div>
              <dt>Reply to</dt>
              <dd>{form.email}</dd>
            </div>
          </dl>

          <button type="button" className="text-link" onClick={resetForm}>
            Make another request
            <RotateCcw size={13} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-form">
      <div className="appointment-form__head">
        <span className="eyebrow">Private appointment</span>
        <span className="appointment-form__count">01 / 01</span>
      </div>

      <h3 className="appointment-form__title">Request a fitting</h3>
      <p className="appointment-form__intro">
        Tell us a little about your day. We&apos;ll reply personally within two
        business days.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="field field--full">
          <label htmlFor={fieldIds.name}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldIds.name}
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "appointment-name-error" : undefined}
            placeholder="Your name"
          />
          {errors.name ? (
            <p className="field__error" id="appointment-name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor={fieldIds.email}>
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldIds.email}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "appointment-email-error" : undefined
              }
              placeholder="you@example.com"
            />
            {errors.email ? (
              <p className="field__error" id="appointment-email-error">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor={fieldIds.phone}>Phone</label>
            <input
              id={fieldIds.phone}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "appointment-phone-error" : undefined
              }
              placeholder="+91"
            />
            {errors.phone ? (
              <p className="field__error" id="appointment-phone-error">
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor={fieldIds.type}>
              Appointment <span aria-hidden="true">*</span>
            </label>
            <div className="select-wrap">
              <select
                id={fieldIds.type}
                name="appointmentType"
                value={form.type}
                onChange={(event) => updateField("type", event.target.value)}
                aria-invalid={Boolean(errors.type)}
                aria-describedby={
                  errors.type ? "appointment-type-error" : undefined
                }
              >
                <option value="" disabled>
                  Select one
                </option>
                {appointmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            {errors.type ? (
              <p className="field__error" id="appointment-type-error">
                {errors.type}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor={fieldIds.date}>
              Preferred date <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldIds.date}
              name="date"
              type="date"
              min={minDate}
              value={form.date}
              onChange={(event) => updateField("date", event.target.value)}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={
                errors.date ? "appointment-date-error" : undefined
              }
            />
            {errors.date ? (
              <p className="field__error" id="appointment-date-error">
                {errors.date}
              </p>
            ) : null}
          </div>
        </div>

        <div className="field field--full">
          <label htmlFor={fieldIds.notes}>A note for the atelier</label>
          <textarea
            id={fieldIds.notes}
            name="notes"
            rows={3}
            value={form.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            placeholder="The date, the place, the feeling you're after…"
          />
        </div>

        <button type="submit" className="button button--dark form-submit">
          Request appointment
          <ArrowUpRight size={14} strokeWidth={1.4} aria-hidden="true" />
        </button>

        <p className="form-note">
          By requesting an appointment you agree to be contacted about your
          enquiry. Your details are never shared.
        </p>
      </form>
    </div>
  );
}
