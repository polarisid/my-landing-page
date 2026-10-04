import { useEffect, useState } from "react";
import styled from "styled-components";

/**
 * Quick branded splash on first load of the session: the dacari mark assembles,
 * the lime terminal-cursor blinks, a thin bar fills, then it fades out (~1.2s).
 * Skipped on reduced-motion and after the first view in the session.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("dacari_splash") === "1";
    } catch (e) {}
    if (reduce || seen) return;
    try {
      sessionStorage.setItem("dacari_splash", "1");
    } catch (e) {}

    setShow(true);
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setHide(true), 1150);
    const t2 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <Overlay className={hide ? "hide" : ""} aria-hidden="true">
      <div className="box">
        <svg className="mark" viewBox="4 2 86 90">
          <path className="d" fill="#ECEAE4" d="M56 42 H32 A24 24 0 0 0 32 90 H56 Z" />
          <rect className="i" fill="#ECEAE4" x="62" y="28" width="24" height="62" />
          <rect className="cur" fill="#C8F23C" x="62" y="4" width="24" height="18" />
        </svg>
        <span className="bar">
          <i />
        </span>
      </div>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--void);
  display: grid;
  place-items: center;
  opacity: 1;
  transition: opacity 0.45s ease;

  &.hide {
    opacity: 0;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
  }

  .mark {
    width: 84px;
    height: auto;
    overflow: visible;
    animation: splash-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .mark .d {
    opacity: 0;
    animation: splash-fade 0.4s ease 0.14s forwards;
  }
  .mark .i {
    opacity: 0;
    animation: splash-fade 0.4s ease 0.3s forwards;
  }
  .mark .cur {
    opacity: 0;
    animation: splash-fade 0.3s ease 0.46s forwards,
      splash-blink 0.6s steps(1) 0.86s 2;
  }

  .bar {
    width: 118px;
    height: 2px;
    background: var(--line);
    border-radius: 2px;
    overflow: hidden;
  }
  .bar i {
    display: block;
    height: 100%;
    width: 0;
    background: var(--live);
    box-shadow: 0 0 8px rgba(200, 242, 60, 0.5);
    animation: splash-fill 1.05s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
  }

  @keyframes splash-in {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes splash-fade {
    to {
      opacity: 1;
    }
  }
  @keyframes splash-blink {
    50% {
      opacity: 0;
    }
  }
  @keyframes splash-fill {
    to {
      width: 100%;
    }
  }
`;
