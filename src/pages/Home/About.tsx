import styled from "styled-components";
import { Container, Section, Eyebrow, SectionTitle } from "../../components/ui";
import Reveal from "../../components/Reveal";
import { Perfil } from "../../img";

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
            <Eyebrow $tone="signal">01 / Sobre mim</Eyebrow>
            <SectionTitle>
              Prazer, eu sou o <em>Daniel</em>.
            </SectionTitle>

            <figure className="portrait">
              <div className="frame">
                <img src={Perfil} alt="Daniel Carvalho" loading="lazy" />
                <span className="corner tl" />
                <span className="corner br" />
              </div>
              <figcaption>
                <span className="name">Daniel Carvalho</span>
                <span className="role">Full stack · Engenharia elétrica</span>
              </figcaption>
            </figure>
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

  .portrait {
    margin-top: 32px;
    max-width: 360px;
  }
  .frame {
    position: relative;
    aspect-ratio: 4 / 5;
    border-radius: var(--radius);
    border: 1px solid var(--line-bright);
    overflow: hidden;
    background: var(--panel);
  }
  .frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 54% 25%;
    filter: grayscale(0.85) contrast(1.05) brightness(0.95);
    transform: scale(1.02);
    transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .frame::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(10, 11, 15, 0.7));
    pointer-events: none;
  }
  .portrait:hover .frame img {
    filter: none;
    transform: scale(1.06);
  }
  /* lime viewfinder corners */
  .corner {
    position: absolute;
    z-index: 1;
    width: 22px;
    height: 22px;
    border-color: var(--live);
    border-style: solid;
    border-width: 0;
    transition: transform 0.4s ease;
  }
  .corner.tl {
    top: 12px;
    left: 12px;
    border-top-width: 2px;
    border-left-width: 2px;
  }
  .corner.br {
    right: 12px;
    bottom: 12px;
    border-right-width: 2px;
    border-bottom-width: 2px;
  }
  .portrait:hover .corner.tl {
    transform: translate(-4px, -4px);
  }
  .portrait:hover .corner.br {
    transform: translate(4px, 4px);
  }
  figcaption {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 14px;
  }
  figcaption .name {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--text);
  }
  figcaption .role {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
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
    .portrait {
      max-width: 300px;
    }
  }
  @media (max-width: 480px) {
    .traits {
      grid-template-columns: 1fr;
    }
  }
`;
