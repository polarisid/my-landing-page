import React from "react";
import styled from "styled-components";
import {
  NodeLogo,
  ReactLogo,
  DockerLogo,
  PostgreSqlLogo,
  Perfil,
  GitLogo,
  AWSLogo,
} from "../../img";

import SkillCard from "./SkillcardComponent";
import px2vw from "../../utils/px2vw";
import {
  TopBar,
  PhotoContainer,
  Divider,
  Certifications,
  AboutBox,
} from "./components";

export default function HomePage() {
  const Skills = {
    NodeJS: NodeLogo,
    ReactJS: ReactLogo,
    Docker: DockerLogo,
    PostgreSQL: PostgreSqlLogo,
    GitHub: GitLogo,
    "Amazon Web Services-AWS": AWSLogo,
  };
  const skillNamed = Object.entries(Skills);
  const menuItems = ["Sobre", "Projetos", "Contatos"];

  return (
    <>
      <Container>
        <TopBar items={menuItems} />

        <PhotoContainer
          photo={Perfil}
          name="Daniel Carvalho"
          atribbute="Desenvolvedor Web e Supervisor Técnico"
        />

        <AboutBox>
          <h1>Sobre</h1>
          <p>
            Daniel Carvalho personifica a convergência entre eletricidade e
            tecnologia, com uma formação sólida como Técnico Eletrotécnico e sua
            atual graduação em Engenharia Elétrica. Além disso, ele é um
            desenvolvedor web Full Stack. Sua mente criativa e habilidades
            analíticas o capacitam a enfrentar desafios tanto no mundo físico
            quanto no virtual. Como Lider dedicado, ele compartilha seu
            conhecimento e colabora em equipe. Seu nome é sinônimo de
            excelência, dedicação e busca constante por novos desafios.
          </p>
        </AboutBox>
        {/* <Divider></Divider> */}

        <SkillBox>
          <h1>Minhas habilidades</h1>

          <div className="wrapper">
            {skillNamed ? (
              skillNamed.map((item, key) => (
                <SkillCard skillName={item[0]} image={item[1]}>
                  {item[0]}
                </SkillCard>
              ))
            ) : (
              <></>
            )}
          </div>
        </SkillBox>
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
      </Container>
    </>
  );
}

const Container = styled.div`
  .FormationBox {
    margin: 0 ${px2vw(50)};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 1rem;
    @media (max-width: 720px) {
      h2 {
        font-size: 3rem;
      }
      p {
        font-size: 2rem;
      }
      h1 {
        font-size: 3rem;
      }
    }
    .formation .title {
      margin: ${px2vw(10)};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .formation {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      text-align: justify;
    }
  }
  background-color: #34353a;
  flex-wrap: wrap;
  margin: ${px2vw(0)};
  max-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  //animmation
  @-webkit-keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const SkillBox = styled.div`
  color: white;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: ${px2vw(320)}; */
  }
  font-size: 2rem;
  width: 90%;
  margin: ${px2vw(50)} 0;
  @media (min-width: 720px) {
    font-size: 0.9rem;
  }
`;
