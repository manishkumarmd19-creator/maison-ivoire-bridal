import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  MoveDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionController from "@/components/MotionController";
import Collection from "@/components/Collection";
import Journal from "@/components/Journal";
import AppointmentForm from "@/components/AppointmentForm";
import { processSteps } from "@/lib/content";

const marqueeItems = [
  "Made to measure",
  "Hand embroidery",
  "Private appointments",
  "Heirloom alterations",
  "New Delhi atelier",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://maisonivoire.in/#atelier",
  name: "Maison Ivoire",
  description:
    "Bridal couture atelier in New Delhi creating hand-finished, made-to-measure wedding gowns by private appointment.",
  url: "https://maisonivoire.in",
  image: "https://maisonivoire.in/images/bride-candidate-1.jpg",
  telephone: "+91-11-4106-2288",
  email: "hello@maisonivoire.in",
  priceRange: "₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42 Sunder Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6008,
    longitude: 77.2438,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "11:00",
    closes: "18:00",
  },
  sameAs: ["https://instagram.com", "https://pinterest.com"],
};

export default function Home() {
  return (
    <>
      <Header />
      <MotionController />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <div className="hero__top">
              <p className="eyebrow hero__eyebrow">
                Bridal couture · New Delhi
              </p>
              <p className="hero__edition">A / W 26</p>
            </div>

            <h1
              id="hero-title"
              className="hero-title"
              aria-label="For the bride you are becoming."
            >
              <span className="hero-title__line">
                <span style={{ animationDelay: "140ms" }}>For the bride</span>
              </span>
              <span className="hero-title__line">
                <span style={{ animationDelay: "250ms" }}>you are</span>
              </span>
              <span className="hero-title__line">
                <span style={{ animationDelay: "360ms" }}>
                  <em>becoming.</em>
                </span>
              </span>
            </h1>

            <div className="hero__bottom">
              <p className="hero__intro">
                Gowns cut for one woman, in silk, lace, and time. Made for the
                day itself — and every anniversary after.
              </p>

              <div className="hero__actions">
                <a className="button button--dark" href="#appointment">
                  Book a private fitting
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
                <a className="text-link" href="#collections">
                  Explore the collection
                  <ArrowRight
                    size={14}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="hero__footnotes">
                <span>Est. 2014</span>
                <span>By appointment only</span>
                <span>28.6139° N</span>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <Image
              src="/images/bride-candidate-1.jpg"
              alt="Bride in an ivory satin gown and gold chain belt, framed by cream drapery."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              style={{ objectPosition: "50% 32%" }}
            />
            <span className="hero__media-veil" aria-hidden="true" />
            <span className="hero__media-frame" aria-hidden="true" />

            <div className="hero__media-top">
              <span>Look 01</span>
              <span>Hand-finished</span>
            </div>

            <div className="hero__media-caption">
              <div>
                <p className="hero__media-label">The Céleste</p>
                <p className="hero__media-detail">
                  Ivory silk faille · 240 hours
                </p>
              </div>
              <a
                href="#collections"
                className="hero__media-arrow"
                aria-label="Explore the collection"
              >
                <ArrowDownRight
                  size={22}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="What the atelier offers">
          <div className="marquee__track" aria-hidden="true">
            {[0, 1].map((group) => (
              <div className="marquee__group" key={group}>
                {marqueeItems.map((item) => (
                  <span className="marquee__item" key={`${group}-${item}`}>
                    {item}
                    <span className="marquee__diamond" />
                  </span>
                ))}
              </div>
            ))}
          </div>
          <p className="sr-only">
            Made to measure, hand embroidery, private appointments, heirloom
            alterations, and a New Delhi atelier.
          </p>
        </div>

        <section className="section philosophy" id="house">
          <div className="container philosophy__grid">
            <div className="philosophy__visual" data-reveal>
              <div className="philosophy__main">
                <Image
                  src="/images/dress-detail-1.jpg"
                  alt="Ivory lace wedding gown with a long veil and train on a mannequin in a bright room."
                  fill
                  sizes="(max-width: 1024px) 100vw, 43vw"
                  style={{ objectPosition: "50% 28%" }}
                />
              </div>
              <div className="philosophy__inset">
                <Image
                  src="/images/atelier-measure-1.jpg"
                  alt="Hands adjust the lace back of a white wedding gown during a fitting."
                  fill
                  sizes="(max-width: 1024px) 38vw, 18vw"
                  style={{ objectPosition: "50% 50%" }}
                />
              </div>
              <p className="philosophy__caption">
                <span>Atelier no. 04</span>
                <span>42 Sunder Nagar</span>
              </p>
            </div>

            <div className="philosophy__copy">
              <p
                className="eyebrow"
                data-reveal
                style={{ transitionDelay: "40ms" }}
              >
                02 — The house
              </p>
              <h2
                className="section-title"
                data-reveal
                style={{ transitionDelay: "90ms" }}
              >
                An heirloom,
                <br />
                <em>before it becomes one.</em>
              </h2>

              <div
                className="philosophy__text"
                data-reveal
                style={{ transitionDelay: "150ms" }}
              >
                <p>
                  Maison Ivoire is a small bridal atelier in New Delhi, working
                  at the pace that handwork asks for. Every gown is cut for one
                  woman, finished by hand, and made to be worn long after the
                  last guest has gone home.
                </p>
                <p>
                  Nothing here is trend-led. We are interested in cloth that
                  remembers the body, in seams that disappear, and in the quiet
                  confidence of a bride who feels entirely herself.
                </p>
              </div>

              <dl
                className="stats"
                data-reveal
                style={{ transitionDelay: "210ms" }}
              >
                <div>
                  <dt>12</dt>
                  <dd>Years at the needle</dd>
                </div>
                <div>
                  <dt>600+</dt>
                  <dd>Brides dressed</dd>
                </div>
                <div>
                  <dt>40</dt>
                  <dd>Artisans &amp; karigars</dd>
                </div>
              </dl>

              <div
                className="founder"
                data-reveal
                style={{ transitionDelay: "260ms" }}
              >
                <span className="founder__signature">Ila Mehra</span>
                <span className="founder__role">
                  Founder &amp; Creative Director
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section collections" id="collections">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p
                  className="eyebrow"
                  data-reveal
                  style={{ transitionDelay: "40ms" }}
                >
                  03 — The collection
                </p>
                <h2
                  className="section-title"
                  data-reveal
                  style={{ transitionDelay: "90ms" }}
                >
                  Three studies
                  <br />
                  in <em>ivory.</em>
                </h2>
              </div>

              <div
                className="section-heading__aside"
                data-reveal
                style={{ transitionDelay: "150ms" }}
              >
                <p>
                  Each gown is made to order, one body at a time. Select a look
                  to step inside its story.
                </p>
                <a className="text-link" href="#appointment">
                  Request the lookbook
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <Collection />

            <p
              className="collections__note"
              data-reveal
              style={{ transitionDelay: "180ms" }}
            >
              Every gown begins with a conversation.
              <a className="text-link" href="#appointment">
                Book a private viewing
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </a>
            </p>
          </div>
        </section>

        <section className="atelier" id="atelier">
          <div className="atelier__media" data-reveal>
            <Image
              src="/images/atelier-sewing-portrait.jpg"
              alt="Seamstress works at a sewing machine beside a dress form in a bright atelier."
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              style={{ objectPosition: "50% 42%" }}
            />
            <span className="atelier__media-overlay" aria-hidden="true" />
            <div className="atelier__media-caption">
              <span>Atelier no. 04</span>
              <span>Hands at work</span>
            </div>
          </div>

          <div className="atelier__content">
            <div className="atelier__inner">
              <p
                className="eyebrow eyebrow--light"
                data-reveal
                style={{ transitionDelay: "40ms" }}
              >
                04 — The appointment
              </p>
              <h2
                className="section-title atelier__title"
                data-reveal
                style={{ transitionDelay: "90ms" }}
              >
                Ninety minutes,
                <br />
                <em>entirely yours.</em>
              </h2>
              <p
                className="atelier__intro"
                data-reveal
                style={{ transitionDelay: "150ms" }}
              >
                A private appointment is a quiet, unhurried conversation. No
                audience, no pressure, no rail of dresses waiting to be
                approved. Just you, the cloth, and someone who knows how to
                listen.
              </p>

              <ol className="process">
                {processSteps.map((step, index) => (
                  <li
                    className="process__step"
                    key={step.number}
                    data-reveal
                    style={{ transitionDelay: `${200 + index * 70}ms` }}
                  >
                    <span className="process__number">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div
                className="atelier__actions"
                data-reveal
                style={{ transitionDelay: "420ms" }}
              >
                <a className="button button--light" href="#appointment">
                  Reserve your appointment
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </a>
                <p className="atelier__note">
                  Tuesday — Saturday · 11:00 — 18:00
                  <br />
                  Appointments are confirmed personally.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial" aria-label="A note from a bride">
          <Image
            src="/images/bride-portrait-2.jpg"
            alt="Bride and groom embrace on a black sand beach with ocean waves behind them."
            fill
            sizes="100vw"
            style={{ objectPosition: "50% 42%" }}
          />
          <span className="testimonial__veil" aria-hidden="true" />
          <div className="container testimonial__content" data-reveal>
            <span className="testimonial__mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              I didn&apos;t want a dress that made me look like someone else. I
              wanted to look like the most certain version of myself. That is
              what they made.
            </blockquote>
            <footer className="testimonial__footer">
              <span className="testimonial__name">Amara S.</span>
              <span>Married in Goa · December 2025</span>
            </footer>
          </div>
          <span className="testimonial__index" aria-hidden="true">
            05 / 06
          </span>
        </section>

        <section className="section journal" id="journal">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p
                  className="eyebrow"
                  data-reveal
                  style={{ transitionDelay: "40ms" }}
                >
                  05 — Journal
                </p>
                <h2
                  className="section-title"
                  data-reveal
                  style={{ transitionDelay: "90ms" }}
                >
                  Notes from
                  <br />
                  <em>the atelier.</em>
                </h2>
              </div>
              <p
                className="section-heading__aside section-heading__aside--text"
                data-reveal
                style={{ transitionDelay: "150ms" }}
              >
                Observations on dress, ritual, and the art of taking time.
              </p>
            </div>

            <Journal />
          </div>
        </section>

        <section className="section appointment" id="appointment">
          <div className="container appointment__grid">
            <div className="appointment__info">
              <p
                className="eyebrow"
                data-reveal
                style={{ transitionDelay: "40ms" }}
              >
                06 — Appointments
              </p>
              <h2
                className="section-title"
                data-reveal
                style={{ transitionDelay: "90ms" }}
              >
                Come as you are.
                <br />
                <em>We&apos;ll take it from there.</em>
              </h2>
              <p
                className="appointment__intro"
                data-reveal
                style={{ transitionDelay: "150ms" }}
              >
                First appointments last ninety minutes and are held in the
                atelier, over tea. Bring two guests at most, a pair of heels
                you love, and an open mind about what suits you.
              </p>

              <dl
                className="appointment__details"
                data-reveal
                style={{ transitionDelay: "210ms" }}
              >
                <div>
                  <dt>The atelier</dt>
                  <dd>
                    42 Sunder Nagar
                    <br />
                    New Delhi 110003
                  </dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>
                    Tuesday — Saturday
                    <br />
                    11:00 — 18:00
                  </dd>
                </div>
                <div>
                  <dt>Write or call</dt>
                  <dd>
                    <a href="mailto:hello@maisonivoire.in">
                      hello@maisonivoire.in
                    </a>
                    <br />
                    <a href="tel:+911141062288">+91 11 4106 2288</a>
                  </dd>
                </div>
              </dl>

              <div
                className="appointment__aside"
                data-reveal
                style={{ transitionDelay: "260ms" }}
              >
                <MoveDown
                  size={18}
                  strokeWidth={1.2}
                  aria-hidden="true"
                  className="appointment__aside-icon"
                />
                <p>
                  Appointments are confirmed personally. If your date is
                  sooner than our calendar allows, write to us anyway — we
                  will always try.
                </p>
              </div>
            </div>

            <div
              className="appointment__form-wrap"
              data-reveal
              style={{ transitionDelay: "140ms" }}
            >
              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
