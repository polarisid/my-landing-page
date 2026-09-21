import styled from "styled-components";
import { Container, Section, Eyebrow, SectionTitle } from "../../components/ui";
import Reveal from "../../components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Entendo o seu problema e o processo atual. Antes de propor tecnologia, eu entendo o negócio.",
  },
  {
    n: "02",
    title: "Proposta",
    text: "Escopo, prazo e tecnologia definidos com clareza — sem surpresa e sem promessa vazia.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    text: "Construção com entregas frequentes. Você acompanha a evolução e ajusta o rumo comigo.",
  },
  {
    n: "04",
    title: "Entrega & suporte",
    text: "Deploy, treinamento e acompanhamento. O sistema continua evoluindo com a sua empresa.",
  },
];

export default function Process() {
  return (
    <Section id="processo">
      <Container>
        <Reveal>
          <Eyebrow $tone="signal">Como funciona</Eyebrow>
          <SectionTitle>
            Do problema à <em>solução no ar</em>.
          </SectionTitle>
        </Reveal>

        <Steps>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="step">
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </Steps>
      </Container>
    </Section>
  );
}

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: clamp(36px, 6vw, 56px);
  counter-reset: step;

  .step {
    position: relative;
    padding: 26px 22px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--panel);
    transition: border-color 0.25s ease, transform 0.25s ease;
  }
  .step:hover {
    border-color: var(--line-bright);
    transform: translateY(-3px);
  }
  /* connecting conductor line between steps */
  .step::after {
    content: "";
    position: absolute;
    top: 46px;
    right: -16px;
    width: 16px;
    height: 1px;
    background: linear-gradient(90deg, var(--line-bright), transparent);
  }
  .step:last-child::after {
    display: none;
  }

  .n {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--signal);
    letter-spacing: 0.1em;
  }
  .step h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.2rem;
    margin: 14px 0 8px;
  }
  .step p {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.55;
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    .step:nth-child(2)::after {
      display: none;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    .step::after {
      display: none;
    }
  }
`;
