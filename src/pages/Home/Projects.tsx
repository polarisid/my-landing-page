import styled from "styled-components";
import { Container, Section, Eyebrow, SectionTitle, Lead } from "../../components/ui";
import Reveal from "../../components/Reveal";
import SitePreview from "../../components/SitePreview";

const ICONS: Record<string, JSX.Element> = {
  smartos: (
    <path d="M9 3h6a1 1 0 011 1v1h2a1 1 0 011 1v13a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h2V4a1 1 0 011-1zM9 5v1h6V5M8.5 12l2 2 4-4" />
  ),
  leadtrack: (
    <path d="M3 5h18l-7 8v5l-4 2v-7L3 5zM9 9h.01M12 9h.01" />
  ),
  tracking: (
    <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
  ),
  stockgo: (
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9M8 5.2l8 4.6" />
  ),
};

type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  kind: string;
  tone: "live" | "signal";
  href?: string;
  preview?: { url: string; host: string };
};

const PROJECTS: Project[] = [
  {
    id: "leadtrack",
    name: "LeadTrack",
    tagline: "Transforme leads em vendas",
    description:
      "Plataforma de aceleração de vendas: organiza leads num funil 360°, alerta oportunidades esfriando e dispara WhatsApp com templates — com dashboards e ranking para vendedores e admin. Sem planilha.",
    tags: ["CRM", "WhatsApp", "Dashboards", "CSV"],
    kind: "SaaS de vendas",
    tone: "signal",
    href: "https://leadtrack.online",
    preview: { url: "https://www.leadtrack.online/", host: "leadtrack.online" },
  },
  {
    id: "stockgo",
    name: "StockGo",
    tagline: "Cada posição contada, cada divergência exposta",
    description:
      "Auditoria de estoque por localização em tempo real: percorra o galpão posição a posição, bipe pela câmera do celular e apure as divergências no fechamento — contagem colaborativa, mapa da rota e exportação com valor por peça.",
    tags: ["Tempo real", "Leitura por câmera", "Colaborativo", "CSV"],
    kind: "Auditoria de estoque",
    tone: "live",
    href: "https://stockgo-lake.vercel.app",
    preview: {
      url: "https://stockgo-lake.vercel.app/",
      host: "stockgo-lake.vercel.app",
    },
  },
  {
    id: "smartos",
    name: "SmartOS",
    tagline: "Ordens de serviço, sem papel",
    description:
      "Gestão de ordens de serviço para equipes técnicas: abertura de chamados, acompanhamento de status e histórico de atendimentos centralizados — do pedido à conclusão.",
    tags: ["React", "Node.js", "PostgreSQL"],
    kind: "Sistema de gestão",
    tone: "signal",
  },
  {
    id: "tracking",
    name: "Tracking Online",
    tagline: "Onde está, agora",
    description:
      "Rastreamento em tempo real: acompanhe status e localização com atualização ao vivo e histórico de eventos, acessível de qualquer dispositivo.",
    tags: ["React", "API", "Tempo real"],
    kind: "Rastreamento",
    tone: "live",
  },
];

export default function Projects() {
  return (
    <Section id="projetos">
      <Container>
        <Reveal>
          <Eyebrow $tone="signal">Projetos</Eyebrow>
          <SectionTitle>
            Sistemas que eu já <em>coloquei no ar</em>.
          </SectionTitle>
          <Lead>
            Soluções reais para problemas de operação — gestão, vendas e
            rastreamento — construídas de ponta a ponta.
          </Lead>
        </Reveal>

        <Grid>
          {PROJECTS.map((p, i) => {
            const Card = (p.href ? "a" : "div") as any;
            return (
              <Reveal key={p.id} delay={i * 80}>
                <Card
                  className={`card ${p.tone}`}
                  {...(p.href
                    ? {
                        href: p.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                >
                  <div className="head">
                    <span className="idx">
                      P-{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="kind">{p.kind}</span>
                  </div>

                  {p.preview ? (
                    <SitePreview url={p.preview.url} host={p.preview.host} />
                  ) : (
                    <div className="thumb">
                      <span className="mark">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          {ICONS[p.id]}
                        </svg>
                      </span>
                      <span className="wordmark">{p.name}</span>
                    </div>
                  )}

                  <div className="meta">
                    <h3>
                      {p.name}
                      {p.href && <span className="arrow">↗</span>}
                    </h3>
                    <span className="tagline">{p.tagline}</span>
                    <p>{p.description}</p>
                    <ul className="tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: clamp(36px, 6vw, 56px);

  & > [data-reveal] {
    display: flex;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--panel);
    padding: 18px;
    overflow: hidden;
    transition: border-color 0.28s ease, transform 0.28s ease,
      box-shadow 0.28s ease;
  }
  .card::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: radial-gradient(
      420px circle at 50% 0%,
      var(--signal),
      transparent 42%
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  .card.live::before {
    background: radial-gradient(
      420px circle at 50% 0%,
      var(--live),
      transparent 42%
    );
  }
  .card:hover {
    transform: translateY(-4px);
    border-color: var(--line-bright);
    box-shadow: 0 24px 50px -24px rgba(0, 0, 0, 0.75);
  }
  .card:hover::before {
    opacity: 0.75;
  }

  /* Pan the live site preview down on hover — "navigating" the page */
  .card:hover .shot {
    transform: scale(var(--k, 0.42)) translateY(-52%);
  }
  @media (prefers-reduced-motion: reduce) {
    .card:hover .shot {
      transform: scale(var(--k, 0.42));
    }
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }
  .idx {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    color: var(--faint);
  }
  .kind {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 4px 10px;
    border: 1px solid var(--line-bright);
    border-radius: 999px;
  }

  /* System tile: icon + wordmark, no screenshot */
  .thumb {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    height: 150px;
    border-radius: 12px;
    border: 1px solid var(--line);
    background: radial-gradient(
        120% 120% at 50% 0%,
        rgba(255, 255, 255, 0.05),
        transparent 60%
      ),
      var(--panel-2);
    overflow: hidden;
  }
  .thumb::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        var(--line) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, var(--line) 1px, transparent 1px);
    background-size: 26px 26px;
    opacity: 0.35;
    mask-image: radial-gradient(circle at 50% 40%, #000, transparent 72%);
  }
  .mark {
    position: relative;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: var(--panel);
    border: 1px solid var(--line-bright);
    color: var(--signal);
  }
  .card.live .mark {
    color: var(--live);
  }
  .mark svg {
    width: 26px;
    height: 26px;
  }
  .wordmark {
    position: relative;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.15rem;
    letter-spacing: -0.01em;
    color: var(--text);
  }

  .meta {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px 4px 4px;
  }
  .meta h3 {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.28rem;
    letter-spacing: -0.01em;
  }
  .arrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
    transition: color 0.2s;
  }
  .card:hover .arrow {
    color: var(--signal);
  }
  .card.live:hover .arrow {
    color: var(--live);
  }
  .tagline {
    color: var(--signal-soft);
    font-size: 0.88rem;
    margin-top: 4px;
  }
  .card.live .tagline {
    color: var(--live-soft);
  }
  .meta p {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.55;
    margin-top: 12px;
  }
  .tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: auto;
    padding-top: 16px;
  }
  .tags li {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
    padding: 4px 9px;
    background: var(--panel-2);
    border: 1px solid var(--line);
    border-radius: 7px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
