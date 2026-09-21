import styled from "styled-components";
import { Container, Section, Eyebrow } from "../../components/ui";
import Reveal from "../../components/Reveal";

const ICONS: Record<string, JSX.Element> = {
  linkedin: (
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.5h4V21H3V9.5Zm6 0h3.8v1.57h.05c.53-1 1.83-2.05 3.77-2.05C20.6 9 22 11.06 22 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21H9V9.5Z" />
  ),
  whatsapp: (
    <path d="M12.04 2a9.9 9.9 0 0 0-8.48 15l-1.4 5.1 5.24-1.37A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.13 15.06l-.3-.18-3.1.81.83-3.02-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-2.5 4.03c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.14.18 1.9 3.02 4.68 4.11 2.32.9 2.8.72 3.3.68.5-.05 1.61-.66 1.84-1.3.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.53-.31-.27-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.8-.72-1.35-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.28-.46.09-.18.04-.34-.02-.48-.07-.14-.6-1.48-.84-2.02-.22-.53-.44-.46-.6-.46l-.53-.01Z" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  email: (
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.5l8 5 8-5V6H4Zm16 2.8-7.47 4.67a1 1 0 0 1-1.06 0L4 8.8V18h16V8.8Z" />
  ),
};

const CHANNELS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "+55 98 98713-2829",
    href: "https://wa.me/5598987132829",
    tone: "live" as const,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "/in/danielcarvalhoribeiro",
    href: "https://www.linkedin.com/in/danielcarvalhoribeiro/",
    tone: "signal" as const,
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@polarisid",
    href: "https://github.com/polarisid",
    tone: "signal" as const,
  },
  {
    id: "email",
    label: "E-mail",
    handle: "danielcarvalhorst@gmail.com",
    href: "mailto:danielcarvalhorst@gmail.com",
    tone: "live" as const,
  },
];

export default function Contact() {
  return (
    <Section id="contato">
      <Container>
        <Reveal className="top">
          <Eyebrow $tone="live">05 / Contato</Eyebrow>
          <h2>
            Tem um problema para <em>resolver</em>?
          </h2>
          <p>
            Me conte o desafio da sua empresa. Em uma conversa rápida eu já
            aponto um caminho — sem compromisso. Escolha o canal, respondo rápido.
          </p>
        </Reveal>

        <Channels>
          {CHANNELS.map((c, i) => (
            <Reveal key={c.id} delay={i * 70}>
              <a
                className={`ch ${c.tone}`}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {ICONS[c.id]}
                  </svg>
                </span>
                <span className="txt">
                  <span className="lbl">{c.label}</span>
                  <span className="hnd">{c.handle}</span>
                </span>
                <span className="go">↗</span>
              </a>
            </Reveal>
          ))}
        </Channels>
      </Container>
    </Section>
  );
}

const Channels = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: clamp(30px, 5vw, 44px);

  .ch {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 22px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--panel);
    transition: border-color 0.25s ease, transform 0.25s ease,
      background 0.25s ease;
  }
  .ch:hover {
    transform: translateY(-3px);
    background: var(--panel-2);
  }
  .ch.signal:hover {
    border-color: var(--signal);
  }
  .ch.live:hover {
    border-color: var(--live);
  }

  .ico {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--panel-2);
    border: 1px solid var(--line);
    color: var(--muted);
    transition: color 0.25s ease, border-color 0.25s ease;
  }
  .ico svg {
    width: 22px;
    height: 22px;
  }
  .ch.signal:hover .ico {
    color: var(--signal);
    border-color: var(--signal);
  }
  .ch.live:hover .ico {
    color: var(--live);
    border-color: var(--live);
  }

  .txt {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .lbl {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.02rem;
  }
  .hnd {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .go {
    margin-left: auto;
    font-family: var(--font-mono);
    color: var(--faint);
    transition: transform 0.2s ease, color 0.2s ease;
  }
  .ch:hover .go {
    transform: translate(2px, -2px);
    color: var(--text);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;
