import React from "react";
import {
  NodeLogo,
  ReactLogo,
  DockerLogo,
  PostgreSqlLogo,
  Perfil,
  GitLogo,
  AWSLogo,
} from "../../img";
import { useRef } from "react";
import Container from "./ContainerComponent";
import AboutSection from "./AboutComponent";
import ProjetosSection from "./ProjetosComponent";
import SkillSection from "./SkillComponent";
import TopBarSection from "./TopBarComponent";
import PhotoSection from "./PhotoComponent";

export default function HomePage() {
  const Skills = {
    NodeJS: NodeLogo,
    ReactJS: ReactLogo,
    Docker: DockerLogo,
    PostgreSQL: PostgreSqlLogo,
    GitHub: GitLogo,
    "AWS Server": AWSLogo,
  };
  const aboutText =
    "Daniel Carvalho personifica a convergência entre eletricidade e     tecnologia, com uma formação sólida como Técnico Eletrotécnico e     sua atual graduação em Engenharia Elétrica. Além disso, ele é umdesenvolvedor web Full Stack. Sua mente criativa e habilidades     analíticas o capacitam a enfrentar desafios tanto no mundo físico    quanto no virtual. Como Lider dedicado, ele compartilha seu conhecimento e colabora em equipe. Seu nome é sinônimo de    excelência, dedicação e busca constante por novos desafios";
  const skillNamed = Object.entries(Skills);
  const menuItems = ["Sobre", "Projetos", "Contatos"];
  const sobreref = useRef<HTMLDivElement | null>(null);
  const projetosref = useRef<HTMLDivElement | null>(null);
  const references = { Sobre: sobreref, Projetos: projetosref };
  return (
    <>
      <Container>
        <TopBarSection items={menuItems} reference={references} />
        <PhotoSection
          photo={Perfil}
          name="Daniel Carvalho"
          atribbute="Desenvolvedor Web e Supervisor Técnico"
        />
        <AboutSection reference={sobreref} description={aboutText} />
        <SkillSection skills={skillNamed} />

        <div className="FormationBox">
          <h1>Formação</h1>
          <div className="formation">
            <div className="title">
              <span className="material-symbols-outlined">
                expand_circle_right
              </span>
              <h2>Formação Web FullStack - Driven - 2022</h2>
            </div>
            <p>
              Experiência intensiva de aprendizado, totalizando mais de 1200
              horas, com foco em práticas hands-on e a realização de mais de 20
              projetos concretos. Desde os fundamentos essenciais de HTML e CSS
              até tecnologias avançadas como TypeScript, ReactJS, NodeJS,
              MongoDB e PostgreSQL, esta formação proporcionou uma imersão
              completa no desenvolvimento web FullStack, capacitando-me a
              enfrentar desafios complexos com confiança e competência técnica.
            </p>
            <div className="title">
              <span className="material-symbols-outlined">
                expand_circle_right
              </span>
              <h2>Tecnico em Eletrotécnica-CTEP-2023</h2>
            </div>
            <p>
              Formação técnica com ênfase prática e enfoque em projetos
              aplicados, proporcionando uma experiência sólida e abrangente.
              Destaque para a integração entre teoria e prática, permitindo a
              realização de diversos projetos e atividades que consolidaram
              habilidades técnicas essenciais.
            </p>
          </div>
        </div>
        <ProjetosSection reference={projetosref} />
      </Container>
    </>
  );
}
