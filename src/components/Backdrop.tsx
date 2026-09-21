import styled from "styled-components";

/** Fixed ambient layer: engineering grid + two energized aurora blooms. */
export default function Backdrop() {
  return (
    <Layer aria-hidden="true">
      <div className="grid" />
      <div className="bloom bloom--live" />
      <div className="bloom bloom--signal" />
      <div className="vignette" />
    </Layer>
  );
}

const Layer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  .grid {
    position: absolute;
    inset: -2px;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.028) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
    background-size: 58px 58px;
    mask-image: radial-gradient(
      ellipse 90% 70% at 50% 0%,
      #000 30%,
      transparent 78%
    );
  }

  .bloom {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.5;
    animation: drift 22s ease-in-out infinite alternate;
  }
  .bloom--live {
    top: -180px;
    right: -120px;
    width: 620px;
    height: 620px;
    background: radial-gradient(circle, var(--live-glow), transparent 66%);
  }
  .bloom--signal {
    top: 380px;
    left: -180px;
    width: 560px;
    height: 560px;
    background: radial-gradient(circle, var(--signal-glow), transparent 66%);
    animation-delay: -8s;
  }

  .vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 120% 80% at 50% -10%,
      transparent 40%,
      rgba(0, 0, 0, 0.55) 100%
    );
  }

  @keyframes drift {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(-40px, 60px, 0) scale(1.12);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .bloom {
      animation: none;
    }
  }
`;
