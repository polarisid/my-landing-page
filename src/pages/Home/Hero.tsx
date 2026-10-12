import styled from "styled-components";
import { Container } from "../../components/ui";
import SignalTrace from "../../components/SignalTrace";
import Typewriter from "../../components/Typewriter";
import HeroMark from "../../components/HeroMark";

const STATS = [
  { value: "Full Stack", label: "front + back" },
  { value: "IA aplicada", label: "ao seu negócio" },
  { value: "Sob medida", label: "do diagnóstico ao deploy" },
  { value: "20+", label: "projetos construídos" },
];

const PHRASES = [
  "Sistemas que resolvem problemas reais.",
  "Software sob medida pra sua empresa.",
  "Automação que economiza o seu tempo.",
  "IA que trabalha pelo seu negócio.",
  "Ideias que viram resultado.",
  "Do diagnóstico ao sistema no ar.",
];

export default function Hero() {
  return (
    <Wrap id="topo">
      <HeroMark className="hero-mark" />

      <Container>
        <div className="copy">
          <span className="kicker">
            <i />
            <span>Software sob medida</span>
            <span className="sep">·</span>
            <span>IA para empresas</span>
          </span>

          <h1 aria-label="Sistemas que resolvem problemas reais">
            <Typewriter phrases={PHRASES} />
          </h1>

          <p className="thesis">
            Onde a <b className="amp">engenharia</b> encontra o{" "}
            <b className="sig">código</b>.
          </p>

          <p className="blurb">
            Sou o Daniel — desenvolvedor full stack com base em engenharia.
            Construo sistemas sob medida e implemento IA para a sua empresa
            automatizar processos, decidir com dados e crescer. Do diagnóstico
            técnico ao software rodando em produção.
          </p>

          <div className="actions">
            <a
              href="https://wa.me/5598987132829"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Agendar conversa
            </a>
            <a href="#servicos" className="btn btn--ghost">
              Ver soluções ↓
            </a>
          </div>
        </div>
      </Container>

      <div className="trace">
        <SignalTrace color="var(--signal)" />
      </div>

      <Container>
        <dl className="stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.section`
  position: relative;
  padding-top: clamp(48px, 8vw, 96px);
  overflow: hidden;

  /* Big animated dacari mark on the right of the copy */
  .hero-mark {
    position: absolute;
    top: clamp(40px, 6vw, 80px);
    right: max(4vw, calc((100vw - var(--maxw)) / 2 + 20px));
    width: min(36vw, 440px);
    z-index: 0;
  }
  .copy {
    position: relative;
    z-index: 2;
    max-width: 680px;
  }

  .kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 8px 14px;
    border: 1px solid var(--line-bright);
    border-radius: 999px;
    background: rgba(12, 14, 19, 0.55);
    backdrop-filter: blur(4px);
  }
  .kicker {
    white-space: nowrap;
  }
  .kicker i {
    flex-shrink: 0;
  }
  .kicker .sep {
    color: var(--live);
  }
  .kicker i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--live);
    box-shadow: 0 0 10px var(--live);
  }

  h1 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(2.2rem, 5.6vw, 3.6rem);
    line-height: 1.08;
    letter-spacing: -0.03em;
    margin: 22px 0 0;
    display: flex;
    align-items: center;
    min-height: 2.45em;
    background: linear-gradient(180deg, #ffffff, #b9c0cc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  h1 .tw-caret {
    display: inline-block;
    width: 4px;
    height: 0.92em;
    margin-left: 0.08em;
    transform: translateY(0.12em);
    border-radius: 1px;
    background: var(--live);
    -webkit-text-fill-color: var(--live);
    animation: caret-blink 1.05s steps(1) infinite;
  }
  @keyframes caret-blink {
    50% {
      opacity: 0;
    }
  }

  .thesis {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(1.35rem, 3.4vw, 2rem);
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin-top: 18px;
    color: var(--text);
  }
  .thesis b {
    font-weight: 600;
  }
  .thesis .amp {
    color: var(--live);
  }
  .thesis .sig {
    color: var(--signal);
  }

  .blurb {
    color: var(--muted);
    font-size: 1.05rem;
    max-width: 52ch;
    margin-top: 22px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 32px;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 500;
    padding: 14px 24px;
    border-radius: 12px;
    transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s,
      border-color 0.2s, color 0.2s;
  }
  .btn--primary {
    color: #10160a;
    background: var(--live);
    box-shadow: 0 10px 30px -10px rgba(200, 242, 60, 0.6);
  }
  .btn--primary:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
  }
  .btn--ghost {
    color: var(--text);
    border: 1px solid var(--line-bright);
    background: rgba(12, 14, 19, 0.55);
    backdrop-filter: blur(4px);
  }
  .btn--ghost:hover {
    border-color: var(--signal);
    color: var(--signal);
    transform: translateY(-2px);
  }

  .trace {
    position: relative;
    z-index: 1;
    height: clamp(70px, 12vw, 120px);
    margin: clamp(40px, 7vw, 70px) 0 0;
    opacity: 0.9;
  }

  .stats {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: rgba(12, 14, 19, 0.6);
    backdrop-filter: blur(4px);
    overflow: hidden;
    margin-top: clamp(30px, 5vw, 44px);
  }
  .stats > div {
    padding: 22px 24px;
    border-right: 1px solid var(--line);
  }
  .stats > div:last-child {
    border-right: 0;
  }
  .stats dt {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.2rem, 2.6vw, 1.7rem);
    letter-spacing: -0.01em;
    color: var(--text);
  }
  .stats dd {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 6px;
  }

  @media (max-width: 860px) {
    h1 {
      min-height: 3.3em;
    }
    /* On narrow screens the mark becomes a faint watermark behind the copy */
    .hero-mark {
      top: 24px;
      right: -12%;
      width: 78%;
      opacity: 0.12;
      pointer-events: none;
    }
    .stats {
      grid-template-columns: repeat(2, 1fr);
    }
    .stats > div:nth-child(2) {
      border-right: 0;
    }
    .stats > div:nth-child(1),
    .stats > div:nth-child(2) {
      border-bottom: 1px solid var(--line);
    }
  }
  @media (max-width: 440px) {
    .kicker {
      font-size: 0.66rem;
      letter-spacing: 0.06em;
      gap: 7px;
      padding: 7px 12px;
    }
    .stats {
      grid-template-columns: 1fr;
    }
    .stats > div {
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }
    .stats > div:last-child {
      border-bottom: 0;
    }
  }
`;
