import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Logo from "../../components/Logo";

const LINKS = [
  { id: "servicos", label: "Soluções" },
  { id: "processo", label: "Processo" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

const WHATSAPP = "https://wa.me/5598987132829";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${p})`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the link of the section crossing the viewport middle
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Bar className={scrolled || open ? "scrolled" : ""}>
      <div className="inner">
        <button className="brand" onClick={() => go("topo")} aria-label="Início">
          <Logo />
        </button>

        <nav className="links">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={active === l.id ? "on" : ""}
              aria-current={active === l.id ? "true" : undefined}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="right">
          <span className="status">
            <i /> disponível
          </span>
          <a
            className="cta"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vamos conversar
          </a>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? "x" : ""} />
          </button>
        </div>
      </div>

      <span className="progress" aria-hidden="true">
        <i ref={progressRef} />
      </span>

      {/* Always mounted so it can animate both ways; hidden from AT when closed */}
      <div
        id="mobile-menu"
        className={`drawer${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer-inner">
          {LINKS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              tabIndex={open ? 0 : -1}
              className={active === l.id ? "on" : ""}
              style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
            >
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </button>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            style={{
              transitionDelay: open ? `${60 + LINKS.length * 45}ms` : "0ms",
            }}
          >
            Vamos conversar →
          </a>
        </div>
      </div>
    </Bar>
  );
}

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s;
  border-bottom: 1px solid transparent;

  &.scrolled {
    background: rgba(10, 11, 15, 0.72);
    backdrop-filter: blur(14px) saturate(140%);
    border-bottom-color: var(--line);
  }

  .inner {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 14px clamp(20px, 5vw, 40px);
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: none;
    border: 0;
    cursor: pointer;
    color: var(--text);
  }
  .node {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    font-family: var(--font-mono);
    font-weight: 600;
    font-size: 0.86rem;
    color: var(--live);
    background: var(--panel);
    border: 1px solid var(--line-bright);
    border-radius: 11px;
    box-shadow: inset 0 0 0 1px rgba(200, 242, 60, 0.08),
      0 0 18px rgba(200, 242, 60, 0.12);
  }
  .brandText {
    display: flex;
    flex-direction: column;
    line-height: 1.15;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.98rem;
    letter-spacing: -0.01em;
    text-align: left;
  }
  .brandText em {
    font-style: normal;
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--faint);
  }

  .links {
    display: flex;
    gap: 4px;
    margin-left: auto;
  }
  .links button {
    background: none;
    border: 0;
    cursor: pointer;
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    letter-spacing: 0.02em;
    padding: 8px 12px;
    border-radius: 8px;
    transition: color 0.2s, background 0.2s;
  }
  .links button:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.04);
  }
  .links button.on {
    color: var(--live);
    background: rgba(200, 242, 60, 0.08);
  }

  .progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    pointer-events: none;
  }
  .progress i {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--live));
    transform: scaleX(0);
    transform-origin: left;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .status i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--signal);
    box-shadow: 0 0 0 0 rgba(200, 242, 60, 0.6);
    animation: pulse 2.4s ease-out infinite;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(200, 242, 60, 0.55);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(200, 242, 60, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(200, 242, 60, 0);
    }
  }

  .cta {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #10160a;
    background: var(--live);
    padding: 10px 16px;
    border-radius: 10px;
    transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s;
    box-shadow: 0 6px 20px -6px rgba(200, 242, 60, 0.5);
  }
  .cta:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
    box-shadow: 0 10px 26px -8px rgba(200, 242, 60, 0.6);
  }

  .burger {
    display: none;
    width: 42px;
    height: 42px;
    border: 1px solid var(--line-bright);
    background: var(--panel);
    border-radius: 10px;
    cursor: pointer;
    position: relative;
  }
  .burger span,
  .burger span::before,
  .burger span::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 18px;
    height: 2px;
    background: var(--text);
    transform: translate(-50%, -50%);
    transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1),
      background 0.2s, opacity 0.2s;
  }
  .burger span::before {
    transform: translate(-50%, -7px);
  }
  .burger span::after {
    transform: translate(-50%, 5px);
  }
  .burger span.x {
    background: transparent;
  }
  .burger span.x::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .burger span.x::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  /* Mobile menu: drops down over the page; grid 0fr→1fr animates height */
  .drawer {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    grid-template-rows: 0fr;
    background: rgba(10, 11, 15, 0.94);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid transparent;
    visibility: hidden;
    transition: grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.3s, visibility 0s linear 0.4s;
  }
  .drawer.open {
    grid-template-rows: 1fr;
    border-bottom-color: var(--line);
    visibility: visible;
    transition: grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.3s, visibility 0s;
  }
  .drawer-inner {
    min-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 clamp(20px, 5vw, 40px);
  }
  .drawer.open .drawer-inner {
    padding-bottom: 20px;
  }
  .drawer button,
  .drawer a {
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: left;
    background: none;
    border: 0;
    cursor: pointer;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 0.95rem;
    padding: 14px 8px;
    border-bottom: 1px solid var(--line);
    opacity: 0;
    transform: translateY(-8px);
    transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      color 0.2s;
  }
  .drawer.open button,
  .drawer.open a {
    opacity: 1;
    transform: none;
  }
  .drawer button .n {
    font-size: 0.7rem;
    color: var(--faint);
  }
  .drawer button.on {
    color: var(--live);
  }
  .drawer a {
    color: var(--live);
    border-bottom: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .drawer,
    .drawer.open,
    .drawer button,
    .drawer a {
      transition: none;
    }
  }

  @media (max-width: 900px) {
    .links,
    .status {
      display: none;
    }
    /* links carried the auto margin; without them push the actions right */
    .right {
      margin-left: auto;
    }
  }
  @media (max-width: 620px) {
    .cta {
      display: none;
    }
    .burger {
      display: block;
    }
    .drawer {
      display: grid;
    }
  }
`;
