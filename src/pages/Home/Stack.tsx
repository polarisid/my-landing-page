import styled from "styled-components";
import { Container, Section, Eyebrow, SectionTitle } from "../../components/ui";
import Reveal from "../../components/Reveal";
import {
  ReactLogo,
  NodeLogo,
  DockerLogo,
  PostgreSqlLogo,
  GitLogo,
  AWSLogo,
} from "../../img";

const CORE = [
  { name: "React", img: ReactLogo },
  { name: "Node.js", img: NodeLogo },
  { name: "PostgreSQL", img: PostgreSqlLogo },
  { name: "Docker", img: DockerLogo },
  { name: "Git", img: GitLogo },
  { name: "AWS", img: AWSLogo },
];

const GROUPS = [
  {
    title: "Front-end",
    tone: "signal" as const,
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Styled-Components"],
  },
  {
    title: "Back-end",
    tone: "signal" as const,
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "JWT"],
  },
  {
    title: "DevOps & Infra",
    tone: "live" as const,
    items: ["Docker", "AWS", "Git / GitHub", "Vercel", "Linux"],
  },
  {
    title: "Base técnica",
    tone: "live" as const,
    items: ["Eletrotécnica", "Eng. Elétrica", "Supervisão", "Automação"],
  },
];

export default function Stack() {
  return (
    <Section id="stack">
      <Container>
        <Reveal>
          <Eyebrow $tone="signal">02 / Capacidades</Eyebrow>
          <SectionTitle>
            A stack que uso para <em>construir</em>.
          </SectionTitle>
        </Reveal>
      </Container>

      <Marquee aria-hidden="true">
        <div className="track">
          {[...CORE, ...CORE].map((t, i) => (
            <span className="chip" key={i}>
              <img src={t.img} alt="" />
              {t.name}
            </span>
          ))}
        </div>
      </Marquee>

      <Container>
        <Groups>
          {GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 80} className="group">
              <h3>
                <i className={g.tone} />
                {g.title}
              </h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </Groups>
      </Container>
    </Section>
  );
}

const Marquee = styled.div`
  margin: clamp(32px, 5vw, 48px) 0;
  padding: 4px 0;
  border-block: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.012);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 8%,
    #000 92%,
    transparent
  );
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);

  .track {
    display: flex;
    gap: 14px;
    width: max-content;
    padding: 16px 7px;
    animation: scroll 26s linear infinite;
  }
  &:hover .track {
    animation-play-state: paused;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border: 1px solid var(--line-bright);
    border-radius: 999px;
    background: var(--panel);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--text);
    white-space: nowrap;
  }
  .chip img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .track {
      animation: none;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const Groups = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  .group {
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--panel);
    padding: 22px 20px;
    transition: border-color 0.25s ease, transform 0.25s ease;
  }
  .group:hover {
    border-color: var(--line-bright);
    transform: translateY(-3px);
  }
  .group h3 {
    display: flex;
    align-items: center;
    gap: 9px;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
  }
  .group h3 i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
  .group h3 i.signal {
    background: var(--signal);
    box-shadow: 0 0 8px var(--signal);
  }
  .group h3 i.live {
    background: var(--live);
    box-shadow: 0 0 8px var(--live);
  }
  .group ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .group li {
    font-size: 0.95rem;
    color: var(--text);
    padding-left: 16px;
    position: relative;
  }
  .group li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.62em;
    width: 6px;
    height: 1px;
    background: var(--faint);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;
