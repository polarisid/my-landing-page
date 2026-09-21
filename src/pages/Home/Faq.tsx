import { useState } from "react";
import styled from "styled-components";
import { Container, Section, Eyebrow, SectionTitle } from "../../components/ui";
import Reveal from "../../components/Reveal";

const FAQS = [
  {
    q: "Como começa um projeto?",
    a: "Começa com uma conversa de diagnóstico, sem compromisso. Eu entendo o seu problema e o processo atual antes de propor qualquer coisa — e só então apresento escopo, prazo e tecnologia com clareza.",
  },
  {
    q: "Quanto custa?",
    a: "Cada sistema é sob medida, então o valor depende do escopo. Depois do diagnóstico você recebe uma proposta fechada, sem surpresa. Trabalho tanto com projetos fechados quanto com evolução contínua.",
  },
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Varia com a complexidade, mas trabalho com entregas frequentes: você acompanha o sistema evoluindo desde as primeiras semanas, não só no final. Nada de sumir por meses e reaparecer com uma caixa-preta.",
  },
  {
    q: "Como funciona a implementação de IA?",
    a: "Integro modelos modernos ao seu fluxo real — atendimento, automação, análise de dados — sempre para resolver um problema concreto. IA como ferramenta de resultado, não enfeite.",
  },
  {
    q: "Você dá suporte depois de entregar?",
    a: "Sim. Ofereço acompanhamento, correções e evolução contínua. O sistema não morre na entrega: ele cresce e se adapta junto com a sua empresa.",
  },
  {
    q: "Meus dados e minha ideia ficam seguros?",
    a: "Ficam. Trato tudo com sigilo e posso assinar NDA. Seus dados, suas regras de negócio e a sua ideia são seus — do começo ao fim.",
  },
  {
    q: "Atende empresas de outras cidades?",
    a: "Sim, trabalho remoto e atendo empresas de qualquer lugar. Você fala direto comigo, sem intermediário e sem ruído entre o problema e quem escreve o código.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container>
        <Reveal>
          <Eyebrow $tone="signal">Perguntas frequentes</Eyebrow>
          <SectionTitle>
            Antes de <em>conversar</em>.
          </SectionTitle>
        </Reveal>

        <List>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div className={`item ${isOpen ? "open" : ""}`}>
                  <button
                    className="q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="ico" aria-hidden="true" />
                  </button>
                  <div className="a">
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </List>
      </Container>
    </Section>
  );
}

const List = styled.div`
  margin-top: clamp(36px, 6vw, 56px);
  max-width: 820px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .item {
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--panel);
    overflow: hidden;
    transition: border-color 0.25s ease, background 0.25s ease;
  }
  .item.open {
    border-color: var(--line-bright);
    background: var(--panel-2);
  }

  .q {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 22px;
    background: none;
    border: 0;
    cursor: pointer;
    text-align: left;
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(1rem, 2.2vw, 1.16rem);
    color: var(--text);
  }

  .ico {
    position: relative;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
  }
  .ico::before,
  .ico::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 13px;
    height: 2px;
    border-radius: 2px;
    background: var(--signal);
    transform: translate(-50%, -50%);
    transition: transform 0.28s ease, opacity 0.2s ease;
  }
  .ico::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .item.open .ico::after {
    transform: translate(-50%, -50%) rotate(0);
    opacity: 0;
  }

  /* smooth open/close via grid-rows trick */
  .a {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .item.open .a {
    grid-template-rows: 1fr;
  }
  .a p {
    overflow: hidden;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.6;
    padding: 0 22px;
    max-width: 68ch;
  }
  .item.open .a p {
    padding-bottom: 22px;
  }
`;
