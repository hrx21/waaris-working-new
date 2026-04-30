/**
 * WaarisLogo — accurate SVG recreation of the official logo
 *
 * The logo mark is a circle containing:
 *  - A crown at the top
 *  - A tree-of-life whose trunk is a key (bow at top, shaft going down, cross-guard, bit at bottom)
 *  - Branches spreading left and right from the key shaft
 *  - Roots spreading below
 *
 * color="currentColor" so it inherits the parent's text color —
 * works for both light (navy) and dark (white) modes.
 */

interface WaarisLogoProps {
  size?: number;
  className?: string;
}

const WaarisLogo = ({ size = 48, className }: WaarisLogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Waaris Legacy logo mark"
  >
    {/* ── Outer circle ── */}
    <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="4" fill="none" />

    {/* ── Crown ── */}
    {/* Crown base band */}
    <rect x="68" y="46" width="64" height="7" rx="2" fill="currentColor" />
    {/* Crown points: left, centre-left, centre, centre-right, right */}
    <path
      d="M68 46 L68 28 L80 40 L88 22 L100 36 L112 22 L120 40 L132 28 L132 46 Z"
      fill="currentColor"
    />
    {/* Crown jewel dots */}
    <circle cx="100" cy="26" r="3"   fill="currentColor" opacity="0.7" />
    <circle cx="85"  cy="33" r="2.2" fill="currentColor" opacity="0.6" />
    <circle cx="115" cy="33" r="2.2" fill="currentColor" opacity="0.6" />
    {/* Small bead row on band */}
    <circle cx="78"  cy="49.5" r="1.8" fill="currentColor" opacity="0.5" />
    <circle cx="88"  cy="49.5" r="1.8" fill="currentColor" opacity="0.5" />
    <circle cx="100" cy="49.5" r="1.8" fill="currentColor" opacity="0.5" />
    <circle cx="112" cy="49.5" r="1.8" fill="currentColor" opacity="0.5" />
    <circle cx="122" cy="49.5" r="1.8" fill="currentColor" opacity="0.5" />

    {/* ── Key shaft (trunk) ── */}
    <rect x="97" y="53" width="6" height="90" rx="3" fill="currentColor" />

    {/* ── Key bow (ring at top of key / top of trunk) ── */}
    <circle cx="100" cy="68" r="13" stroke="currentColor" strokeWidth="4" fill="none" />
    {/* Inner link ring — the chain-link / infinity motif */}
    <circle cx="100" cy="68" r="6.5" stroke="currentColor" strokeWidth="2.5" fill="none" />

    {/* ── Key cross-guard ── */}
    <rect x="82" y="116" width="36" height="5" rx="2" fill="currentColor" />

    {/* ── Key bit (bottom teeth) ── */}
    <rect x="100" y="140" width="12" height="4" rx="1.5" fill="currentColor" />
    <rect x="100" y="148" width="8"  height="4" rx="1.5" fill="currentColor" />
    <rect x="100" y="156" width="12" height="4" rx="1.5" fill="currentColor" />

    {/* ── Tree branches LEFT ── */}
    {/* Main left branch */}
    <path d="M100 85 Q80 80 62 68" stroke="currentColor" strokeWidth="3"   strokeLinecap="round" fill="none" />
    {/* Secondary left */}
    <path d="M100 96 Q76 92 56 84" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Upper-left twig off main */}
    <path d="M78 75 Q70 64 64 54"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M78 75 Q66 70 58 67"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Lower-left twig */}
    <path d="M70 88 Q60 80 52 76"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M70 88 Q64 96 58 100" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />

    {/* ── Tree branches RIGHT ── */}
    <path d="M100 85 Q120 80 138 68" stroke="currentColor" strokeWidth="3"   strokeLinecap="round" fill="none" />
    <path d="M100 96 Q124 92 144 84" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M122 75 Q130 64 136 54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M122 75 Q134 70 142 67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M130 88 Q140 80 148 76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M130 88 Q136 96 142 100" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />

    {/* ── Roots ── */}
    <path d="M100 143 Q90 152 80 162"  stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none" />
    <path d="M100 143 Q94 155 92 168"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M100 143 Q100 158 100 170" stroke="currentColor" strokeWidth="2"  strokeLinecap="round" fill="none" />
    <path d="M100 143 Q106 155 108 168" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M100 143 Q110 152 120 162" stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none" />
  </svg>
);

export default WaarisLogo;
