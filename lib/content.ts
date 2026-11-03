export const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "The Atelier", href: "#atelier" },
  { label: "Journal", href: "#journal" },
  { label: "Visit", href: "#appointment" },
];

export type Gown = {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  objectPosition: string;
  facts: { label: string; value: string }[];
};

export const gowns: Gown[] = [
  {
    number: "01",
    name: "The Aveline",
    subtitle: "Chantilly lace · Cathedral train",
    description:
      "A study in quiet extravagance. Hand-appliquéd lace climbs from the hem to a bodice worked in seed pearls, finishing in a cathedral train that moves like water.",
    image: "/images/bride-candidate-2.jpg",
    alt: "Bride in a full lace gown with a long train on a stone staircase.",
    objectPosition: "50% 38%",
    facts: [
      { label: "Fabric", value: "Ivory Chantilly lace, silk tulle" },
      { label: "Detail", value: "Hand-appliqué, seed pearl embroidery" },
      { label: "Lead time", value: "14–16 weeks, made to order" },
    ],
  },
  {
    number: "02",
    name: "The Noor",
    subtitle: "Silver thread · Oyster tulle",
    description:
      "For the bride who arrives like light. Oyster tulle is scattered with silver thread and hand-set crystal, catching the room without ever asking for it.",
    image: "/images/bride-candidate-6.jpg",
    alt: "Bride in a sparkling white gown and long veil in a bright studio.",
    objectPosition: "50% 34%",
    facts: [
      { label: "Fabric", value: "Oyster tulle, silk lining" },
      { label: "Detail", value: "Silver thread, crystal, bias sash" },
      { label: "Lead time", value: "16–18 weeks, made to order" },
    ],
  },
  {
    number: "03",
    name: "The Margot",
    subtitle: "Silk crepe · Covered buttons",
    description:
      "Nothing more than necessary. A bias-cut column of Italian silk crepe, a low scooped back, and a row of covered buttons made to be undone by one pair of hands.",
    image: "/images/bride-candidate-3.jpg",
    alt: "Bride seen from behind in an embroidered gown beside a calm lake.",
    objectPosition: "50% 30%",
    facts: [
      { label: "Fabric", value: "Italian silk crepe, silk charmeuse" },
      { label: "Detail", value: "Bias cut, covered buttons, low back" },
      { label: "Lead time", value: "10–12 weeks, made to order" },
    ],
  },
];

export type JournalEntry = {
  number: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  alt: string;
  paragraphs: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    number: "01",
    category: "Craft",
    title: "The first pin",
    excerpt:
      "Why every Maison Ivoire gown begins with a single pin — and why we never rush the first mark.",
    readTime: "5 min read",
    date: "14 October 2026",
    image: "/images/lace-detail-1.jpg",
    alt: "White floral lace appliqué pinned with colorful sewing pins on sheer fabric.",
    paragraphs: [
      "Before a gown is cut, it is marked. A single pin is placed at the waist, then another at the shoulder, until the body and the fabric begin to agree. It is the least glamorous moment of the process, and perhaps the most important.",
      "Our pattern cutters work in silence for the first hour. There is no mood board on the table, no sketch to follow too closely. The fabric has its own opinion about gravity, and we listen. A gown that begins with a ruler rarely ends with a soul.",
      "By the time the first toile is pinned, the bride has usually forgotten what she thought she wanted. That is the point. The dress is no longer an image; it is a set of decisions made in the presence of a real body, a real afternoon, a real life.",
    ],
  },
  {
    number: "02",
    category: "Ritual",
    title: "The art of the second look",
    excerpt:
      "A gown has two lives: the one you plan, and the one you live. On dressing for both.",
    readTime: "4 min read",
    date: "2 September 2026",
    image: "/images/venue-1.jpg",
    alt: "A couple's hands clasped over a peach rose bouquet, rings and watch visible.",
    paragraphs: [
      "The ceremony asks for one kind of presence; the evening asks for another. We design with that shift in mind — a sleeve that can be removed, a train that can be lifted, a silhouette that relaxes without losing its intention.",
      "The second look is not a costume change. It is a permission slip. It says: the vows are made, the photographs are taken, and now the night belongs to you.",
      "For one bride, that meant a detachable silk organza overskirt that came off before dinner. For another, it meant a single covered button at the wrist, undone by her grandmother. The gesture is always small. The memory is not.",
    ],
  },
  {
    number: "03",
    category: "Atelier",
    title: "A bow, tied by hand",
    excerpt:
      "Inside the final fitting, where a gown stops being an idea and becomes a memory.",
    readTime: "6 min read",
    date: "18 August 2026",
    image: "/images/bridal-back-detail.jpg",
    alt: "Hands tie a satin bow on the back of a wedding gown with corset lacing.",
    paragraphs: [
      "The final fitting is always quieter than the first. The questions have been answered. The hem has found its length. What remains is a small, charged pause before the gown goes into its muslin bag.",
      "We tie the bow by hand because a machine pulls too evenly. The knot should look as though it happened, not as though it was engineered. There is a difference between precision and care, and a bride can feel it at the nape of her neck.",
      "Then she turns, and looks, and the room does not applaud. Someone exhales. The mother cries a little. The gown has stopped being a project. It is now a thing that will be remembered, which is the only kind of luxury we are interested in making.",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "The conversation",
    body: "We begin with tea, a few questions, and no rush at all. Bring images, an heirloom, or nothing but a feeling.",
  },
  {
    number: "02",
    title: "The fitting",
    body: "Toiles are adjusted on the body, not the hanger. We refine the neckline, the weight, the way the light moves.",
  },
  {
    number: "03",
    title: "The final stitch",
    body: "Your gown leaves the atelier only when it feels as though it has always belonged to you. The last fitting is entirely yours.",
  },
];

export const appointmentTypes = [
  "Bridal consultation",
  "Gown fitting",
  "Heirloom redesign",
  "Virtual appointment",
];
