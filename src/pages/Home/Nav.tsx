import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Bar className={scrolled ? "scrolled" : ""}>
      <div className="inner">
        <button className="brand" onClick={() => go("topo")} aria-label="Início">
          <Logo tagline="sistemas · ia" />
        </button>

        <nav className="links">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>
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
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? "x" : ""} />
          </button>
        </div>
      </div>

      {open && (
        <div className="drawer">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Vamos conversar →
          </a>
        </div>
      )}
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
    box-shadow: inset 0 0 0 1px rgba(255, 176, 32, 0.08),
      0 0 18px rgba(255, 176, 32, 0.12);
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
    box-shadow: 0 0 0 0 rgba(55, 224, 200, 0.6);
    animation: pulse 2.4s ease-out infinite;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(55, 224, 200, 0.55);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(55, 224, 200, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(55, 224, 200, 0);
    }
  }

  .cta {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #1a1200;
    background: var(--live);
    padding: 10px 16px;
    border-radius: 10px;
    transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s;
    box-shadow: 0 6px 20px -6px rgba(255, 176, 32, 0.5);
  }
  .cta:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
    box-shadow: 0 10px 26px -8px rgba(255, 176, 32, 0.6);
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
    transition: transform 0.25s ease, opacity 0.2s;
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

  .drawer {
    display: none;
    flex-direction: column;
    gap: 4px;
    padding: 8px clamp(20px, 5vw, 40px) 20px;
    background: rgba(10, 11, 15, 0.94);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
  }
  .drawer button,
  .drawer a {
    text-align: left;
    background: none;
    border: 0;
    cursor: pointer;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 0.95rem;
    padding: 12px 8px;
    border-bottom: 1px solid var(--line);
  }
  .drawer a {
    color: var(--live);
  }

  @media (max-width: 900px) {
    .links,
    .status {
      display: none;
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
      display: flex;
    }
  }
`;
