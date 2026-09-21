import styled from "styled-components";
import { Container } from "../../components/ui";
import Logo from "../../components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Wrap>
      <Container>
        <div className="inner">
          <div className="brand">
            <Logo />
            <span className="tagline">
              Daniel Carvalho — onde suas ideias se transformam em resultados.
            </span>
          </div>

          <nav className="nav">
            <a href="#servicos">Soluções</a>
            <a href="#processo">Processo</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <div className="base">
          <span>© {year} Daniel Carvalho Ribeiro</span>
          <a href="#topo" className="top">
            Voltar ao topo ↑
          </a>
        </div>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.footer`
  border-top: 1px solid var(--line);
  background: var(--void-2);
  padding: clamp(44px, 7vw, 64px) 0 32px;
  position: relative;
  z-index: 1;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 32px;
    flex-wrap: wrap;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--line);
  }

  .brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .brand .tagline {
    color: var(--muted);
    font-size: 0.9rem;
    max-width: 34ch;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 20px;
  }
  .nav a {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--muted);
    transition: color 0.2s;
  }
  .nav a:hover {
    color: var(--signal);
  }

  .base {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding-top: 24px;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--faint);
  }
  .base .top {
    color: var(--muted);
    transition: color 0.2s;
  }
  .base .top:hover {
    color: var(--live);
  }

  @media (max-width: 560px) {
    .built {
      display: none;
    }
  }
`;
