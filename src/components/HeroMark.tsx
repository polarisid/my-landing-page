import { useRef } from "react";
import styled from "styled-components";

/**
 * Large dacari mark for the hero: the "d" and "i" assemble, the lime
 * terminal cursor drops in and keeps blinking. Pieces drift at different
 * depths following the pointer. Construction guides sit faintly behind it.
 */
export default function HeroMark({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--px", "0");
    ref.current?.style.setProperty("--py", "0");
  };

  return (
    <Wrap
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-hidden="true"
    >
      <div className="glow" />
      <svg viewBox="-20 -24 134 134" overflow="visible">
        {/* construction guides */}
        <g className="guides">
          <circle cx="32" cy="66" r="24" />
          <line x1="-20" y1="90" x2="114" y2="90" />
          <line x1="-20" y1="42" x2="114" y2="42" />
          <line x1="62" y1="-24" x2="62" y2="110" />
          <line x1="86" y1="-24" x2="86" y2="110" />
        </g>
        <g className="p d">
          <path fill="#ECEAE4" d="M56 42 H32 A24 24 0 0 0 32 90 H56 Z" />
        </g>
        <g className="p i">
          <rect fill="#ECEAE4" x="62" y="28" width="24" height="62" />
        </g>
        <g className="p cur">
          <rect fill="#C8F23C" x="62" y="4" width="24" height="18" />
        </g>
      </svg>
    </Wrap>
  );
}

const Wrap = styled.div`
  --px: 0;
  --py: 0;
  position: relative;
  pointer-events: auto;

  svg {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
  }

  .glow {
    position: absolute;
    left: 50%;
    top: 22%;
    width: 60%;
    aspect-ratio: 1;
    transform: translate(-10%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 242, 60, 0.28), transparent 62%);
    filter: blur(30px);
    animation: glow-pulse 2.2s ease-in-out infinite;
  }

  .guides {
    fill: none;
    stroke: rgba(236, 234, 228, 0.09);
    stroke-width: 0.35;
    stroke-dasharray: 1.2 1.6;
    opacity: 0;
    animation: fade-in 1.2s ease 0.2s forwards;
  }

  .p {
    transition: transform 0.35s ease-out;
  }
  .d {
    transform: translate(calc(var(--px) * -4px), calc(var(--py) * -3px));
  }
  .i {
    transform: translate(calc(var(--px) * 3px), calc(var(--py) * 2px));
  }
  .cur {
    transform: translate(calc(var(--px) * 7px), calc(var(--py) * 6px));
  }

  .d path {
    animation: in-left 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
  }
  .i rect {
    animation: in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
  }
  .cur rect {
    animation: in-drop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both;
  }
  /* Blink lives on the group so it never fights the entrance animation */
  .cur {
    animation: blink 1.1s linear 1.6s infinite;
  }

  @keyframes in-left {
    from {
      opacity: 0;
      transform: translateX(-14px);
    }
  }
  @keyframes in-up {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
  }
  @keyframes in-drop {
    from {
      opacity: 0;
      transform: translateY(-18px);
    }
  }
  @keyframes blink {
    0%,
    54% {
      opacity: 1;
    }
    55%,
    100% {
      opacity: 0;
    }
  }
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }
  @keyframes glow-pulse {
    50% {
      opacity: 0.55;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .p {
      transform: none;
    }
    .glow,
    .cur,
    .d path,
    .i rect,
    .cur rect {
      animation: none;
    }
    .guides {
      animation: none;
      opacity: 1;
    }
  }
`;
