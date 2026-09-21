import React from "react";
import styled from "styled-components";

const TRACE_D =
  "M0 60 H110 C150 60 162 20 205 20 S262 100 305 100 S360 20 405 60 H460 " +
  "L492 60 L492 22 L548 22 L548 98 L604 98 L604 60 H672 C712 60 734 34 772 60 " +
  "S840 86 884 60 H980 Q1022 60 1044 38 Q1066 16 1090 60 H1200";

type Props = {
  /** CSS color for the trace */
  color?: string;
  className?: string;
  /** show the travelling pulse dot */
  pulse?: boolean;
};

/**
 * The signature: an oscilloscope reading of a mixed electrical signal.
 * Draws itself in on mount; an energized pulse rides along the trace.
 */
export default function SignalTrace({
  color = "var(--signal)",
  className,
  pulse = true,
}: Props) {
  const gid = React.useId().replace(/:/g, "");
  return (
    <Svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      style={{ color }}
    >
      <defs>
        <linearGradient id={`grad-${gid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.12" stopColor="currentColor" stopOpacity="1" />
          <stop offset="0.88" stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <filter id={`glow-${gid}`} x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        id={`trace-${gid}`}
        className="trace"
        d={TRACE_D}
        fill="none"
        stroke={`url(#grad-${gid})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#glow-${gid})`}
      />

      {pulse && (
        <circle r="4.5" fill="currentColor" filter={`url(#glow-${gid})`}>
          <animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#trace-${gid}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.12;0.88;1"
            dur="4.2s"
            repeatCount="indefinite"
          />
        </circle>
      )}
    </Svg>
  );
}

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;

  .trace {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw-trace 2.4s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards;
  }

  @keyframes draw-trace {
    to {
      stroke-dashoffset: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .trace {
      animation: none;
      stroke-dashoffset: 0;
    }
    circle {
      display: none;
    }
  }
`;
