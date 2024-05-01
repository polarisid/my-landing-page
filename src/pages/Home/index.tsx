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
        {/* <div className="FormationBox">
          <h1>Formação</h1>
          <div className="Formation">
            <h2>Formação Web FullStack - Driven - 2022</h2>
            <p>
              Formação intensiva com mais de 1200h e com mais de 20 projetos
              praticos partindo da base de HTML, CSS, Typescript, ReactJS,
              NodeJS, MongoDB, PostgreSQL
            </p>
          </div>
          <div className="Formation">
            <h2>Técnico em eletrotécnica - 2021</h2>
            <p>Formação técnica com muita pratica</p>
          </div>
        </div> */}
      </Container>
    </>
  );
}

const Container = styled.div`
  .FormationBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    .Formation {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }
  background-color: #34353a;
  /* min-height: 100vh; */
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
