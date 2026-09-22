import styled from "styled-components";
import { Container, Section, Eyebrow, SectionTitle, Lead } from "../../components/ui";
import Reveal from "../../components/Reveal";
import AnimatedTextCycle from "../../components/AnimatedTextCycle";

const CYCLE = [
  "problema de empresa",
  "trabalho manual",
  "gargalo de processo",
  "atraso na entrega",
  "perda de vendas",
  "caos na planilha",
];

const ICONS: Record<string, JSX.Element> = {
  ai: (
    <path d="M9 3h6M9 21h6M3 9v6M21 9v6M7 7h10v10H7zM12 2v1M12 21v1M2 12h1M21 12h1M10 10.5l1.2 2.8L14 14.5l-2.8 1.2L10 18.5l-1.2-2.8L6 14.5l2.8-.2L10 10.5z" />
  ),
  systems: (
    <path d="M3 5h18v14H3zM3 9h18M7 7h.01M9.5 7h.01M7 13h6M7 16h4" />
  ),
  web: (
    <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.4 3.8 5.5 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.5-3.8-9S9.5 5.4 12 3z" />
  ),
  automation: (
    <path d="M4 12a8 8 0 0113.7-5.6M20 4v4h-4M20 12a8 8 0 01-13.7 5.6M4 20v-4h4" />
  ),
  support: (
    <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5C8 19.3 5 15.4 5 11V6l7-3zM9.5 11.5l1.8 1.8 3.5-3.6" />
  ),
};

type Service = {
  id: string;
  title: string;
  desc: string;
  points: string[];
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    id: "ai",
    title: "Inteligência Artificial aplicada",
    desc: "Coloco IA para trabalhar dentro do seu negócio: assistentes que atendem, automações que leem e classificam documentos, análise inteligente de dados e geração de conteúdo — com os modelos mais atuais.",
    points: ["Assistentes & chatbots", "Automação com IA", "Análise de dados"],
    featured: true,
  },
  {
    id: "systems",
    title: "Sistemas sob medida",
    desc: "Aplicações web, dashboards e ferramentas internas que se encaixam no seu processo — não o contrário.",
    points: ["Web apps", "Dashboards", "Ferramentas internas"],
  },
  {
    id: "web",
    title: "Sites & landing pages",
    desc: "Presença digital rápida, responsiva e feita para converter. Do design ao deploy.",
    points: ["Alta performance", "Responsivo", "Foco em conversão"],
  },
  {
    id: "automation",
    title: "Automação de processos",
    desc: "Elimino trabalho manual e repetitivo integrando suas ferramentas e automatizando fluxos.",
    points: ["Integrações", "APIs", "Fluxos automáticos"],
  },
  {
    id: "support",
    title: "Suporte & evolução",
    desc: "Acompanhamento contínuo: seu sistema cresce e se adapta junto com a empresa.",
    points: ["Manutenção", "Novas features", "Monitoramento"],
  },
];

export default function Services() {
  return (
    <Section id="servicos">
      <Container>
        <Reveal>
          <Eyebrow $tone="live">O que eu faço</Eyebrow>
          <SectionTitle>
            Tecnologia que resolve{" "}
            <AnimatedTextCycle words={CYCLE} className="hl-amber" />.
          </SectionTitle>
          <Lead>
            Não entrego código solto — entrego solução. Traduzo o problema do seu
            negócio em software que funciona, escala e economiza tempo.
          </Lead>
        </Reveal>

        <Grid>
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 70}
              className={s.featured ? "rev-featured" : ""}
            >
              <article className={`card ${s.featured ? "featured" : ""}`}>
                <span className="ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[s.id]}
                  </svg>
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: clamp(36px, 6vw, 56px);

  & > [data-reveal] {
    display: flex;
  }
  & > [data-reveal].rev-featured {
    grid-column: span 2;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 26px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--panel);
    overflow: hidden;
    transition: border-color 0.28s ease, transform 0.28s ease,
      box-shadow 0.28s ease;
  }
  .card:hover {
    transform: translateY(-4px);
    border-color: var(--line-bright);
    box-shadow: 0 24px 50px -24px rgba(0, 0, 0, 0.75);
  }

  .featured {
    background: radial-gradient(
        120% 140% at 0% 0%,
        rgba(255, 176, 32, 0.09),
        transparent 55%
      ),
      var(--panel);
    border-color: rgba(255, 176, 32, 0.28);
  }
  .featured::after {
    content: "IA em destaque";
    position: absolute;
    top: 20px;
    right: 22px;
    font-family: var(--font-mono);
    font-size: 0.66rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--live);
    border: 1px solid rgba(255, 176, 32, 0.4);
    padding: 4px 10px;
    border-radius: 999px;
  }

  .ico {
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    border-radius: 13px;
    background: var(--panel-2);
    border: 1px solid var(--line);
    color: var(--signal);
    margin-bottom: 18px;
  }
  .featured .ico {
    color: var(--live);
    border-color: rgba(255, 176, 32, 0.35);
  }
  .ico svg {
    width: 24px;
    height: 24px;
  }

  .card h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.15rem, 2.4vw, 1.4rem);
    letter-spacing: -0.01em;
    max-width: 22ch;
  }
  .featured h3 {
    font-size: clamp(1.3rem, 2.8vw, 1.7rem);
  }
  .card p {
    color: var(--muted);
    font-size: 0.96rem;
    line-height: 1.6;
    margin-top: 12px;
    max-width: 54ch;
  }

  .points {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
    padding-top: 20px;
  }
  .points li {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    color: var(--text);
    padding: 6px 11px;
    border: 1px solid var(--line-bright);
    border-radius: 8px;
    background: var(--panel-2);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    & > [data-reveal].rev-featured {
      grid-column: span 2;
    }
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    & > [data-reveal].rev-featured {
      grid-column: span 1;
    }
  }
`;
