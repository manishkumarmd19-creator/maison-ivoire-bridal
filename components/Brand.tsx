import Link from "next/link";

type BrandProps = {
  className?: string;
  href?: string;
  light?: boolean;
};

export default function Brand({
  className = "",
  href = "#top",
  light = false,
}: BrandProps) {
  return (
    <Link
      href={href}
      className={`brand ${light ? "brand--light" : ""} ${className}`.trim()}
      aria-label="Maison Ivoire — back to top"
    >
      <span className="brand__eyebrow">Maison</span>
      <span className="brand__word">Ivoire</span>
      <span className="brand__meta">Bridal Atelier</span>
    </Link>
  );
}
