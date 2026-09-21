import styled from "styled-components";
import { Container, Section, Eyebrow, SectionTitle, Lead } from "../../components/ui";
import Reveal from "../../components/Reveal";

const ICONS: Record<string, JSX.Element> = {
  modern: <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />,
  cloud: (
    <path d="M7 18a4 4 0 01-.5-7.97 5.5 5.5 0 0110.66-1.2A4.5 4.5 0 0117 18H7z" />
  ),
  secure: <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5C8 19.3 5 15.4 5 11V6l7-3zM9.5 11.5l1.8 1.8 3.7-3.8" />,
  fast: (
    <path d="M7 3h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2M13 7l-3 4h4l-3 4" />
  ),
  integrate: (
    <path d="M9 7H6a3 3 0 000 6h3M15 7h3a3 3 0 010 6h-3M8 10h8" />
  ),
  evolve: (
    <path d="M12 20V8M6 14l6-6 6 6M5 4h14" />
  ),
};

const BENEFITS = [
  {
    id: "modern",
    title: "Moderno e escalável",
    desc: "Construído com tecnologia atual e sólida, que acompanha o crescimento da sua operação sem travar.",
    tone: "signal" as const,
  },
  {
    id: "cloud",
    title: "Na nuvem, 24/7",
    desc: "Seu sistema no ar a qualquer hora, acessível de qualquer lugar e de qualquer dispositivo.",
    tone: "signal" as const,
  },
  {
    id: "secure",
    title: "Seguro e com backup",
    desc: "Dados protegidos, acessos controlados e cópias de segurança — sem dor de cabeça.",
    tone: "live" as const,
  },
  {
    id: "fast",
    title: "Rápido no celular",
    desc: "Leve e responsivo: abre rápido e funciona bem em qualquer tela, do desktop ao celular.",
    tone: "live" as const,
  },
  {
    id: "integrate",
    title: "Integra e automatiza",
    desc: "Conecta com o que você já usa — WhatsApp, planilhas, outros sistemas — e elimina trabalho manual.",
    tone: "signal" as const,
  },
  {
    id: "evolve",
    title: "Pronto para evoluir",
    desc: "Base organizada que recebe novas funções sem retrabalho, no ritmo da sua empresa.",
    tone: "live" as const,
  },
];

export default function Stack() {
  return (
    <Section id="stack">
      <Container>
        <Reveal>
          <Eyebrow $tone="signal">Tecnologia</Eyebrow>
          <SectionTitle>
            Tecnologia que trabalha <em>a seu favor</em>.
          </SectionTitle>
          <Lead>
            Você não precisa entender de código. Precisa que funcione, seja
            rápido e não te dê dor de cabeça — é isso que a tecnologia certa,
            bem aplicada, entrega.
          </Lead>
        </Reveal>

        <Grid>
          {BENEFITS.map((b, i) => (
            <Reveal key={b.id} delay={i * 60} className="cell">
              <article className={`card ${b.tone}`}>
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
                    {ICONS[b.id]}
                  </svg>
                </span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
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

  & > .cell {
    display: flex;
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--panel);
    transition: border-color 0.25s ease, transform 0.25s ease;
  }
  .card:hover {
    border-color: var(--line-bright);
    transform: translateY(-3px);
  }

  .ico {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: var(--panel-2);
    border: 1px solid var(--line);
    color: var(--signal);
    margin-bottom: 16px;
  }
  .card.live .ico {
    color: var(--live);
  }
  .ico svg {
    width: 23px;
    height: 23px;
  }

  .card h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.16rem;
    letter-spacing: -0.01em;
    margin-bottom: 8px;
  }
  .card p {
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
