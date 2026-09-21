import styled from "styled-components";
import { Container, Section, Eyebrow, SectionTitle } from "../../components/ui";
import Reveal from "../../components/Reveal";

const TRAITS = [
  { k: "Dois mundos", v: "Eletrotécnica de campo e desenvolvimento web, no mesmo profissional." },
  { k: "Liderança", v: "Supervisor técnico — coordeno equipes e compartilho conhecimento." },
  { k: "Rigor", v: "A disciplina de quem trabalha com energia, aplicada ao código." },
  { k: "Curiosidade", v: "Aprendizado constante; sempre atrás do próximo desafio." },
];

export default function About() {
  return (
    <Section id="sobre">
      <Container>
        <Grid>
          <Reveal className="lead">
            <Eyebrow $tone="signal">01 / Sobre</Eyebrow>
            <SectionTitle>
              Do quadro de energia à <em>interface</em>.
            </SectionTitle>
          </Reveal>

          <div className="body">
            <Reveal delay={80}>
              <p>
                Minha história começa no mundo físico: como técnico
                eletrotécnico, aprendi a lidar com sistemas de energia, medições
                e a responsabilidade de manter tudo funcionando em campo. Hoje
                curso Engenharia Elétrica e sigo aprofundando esse lado.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                A curiosidade me levou ao software. A formação Full Stack na
                Driven — mais de 1200 horas e 20 projetos — completou a ponte
                entre os dois mundos. Do TypeScript ao PostgreSQL, construo
                aplicações web de ponta a ponta, com a mesma exigência que trago
                do trabalho técnico.
              </p>
            </Reveal>

            <div className="traits">
              {TRAITS.map((t, i) => (
                <Reveal key={t.k} delay={120 + i * 70} className="trait">
                  <span className="k">{t.k}</span>
                  <span className="v">{t.v}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(28px, 5vw, 64px);

  .lead {
    position: sticky;
    top: 110px;
    align-self: start;
  }

  .body p {
    color: var(--muted);
    font-size: clamp(1rem, 2.1vw, 1.1rem);
    margin-bottom: 20px;
  }

  .traits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    margin-top: 12px;
    background: var(--line);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    overflow: hidden;
  }
  .trait {
    background: var(--panel);
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: background 0.25s ease;
  }
  .trait:hover {
    background: var(--panel-2);
  }
  .trait .k {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--live);
  }
  .trait .v {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.5;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    .lead {
      position: static;
    }
  }
  @media (max-width: 480px) {
    .traits {
      grid-template-columns: 1fr;
    }
  }
`;
