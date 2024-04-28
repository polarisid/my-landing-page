import React from "react";
import styled from "styled-components";
import Perfil from "../../img/fotoperfil.png";
import NodeLogo from "../../img/nodejs.png";
import ReactLogo from "../../img/reactjs.png";
import DockerLogo from "../../img/docker.png";
import SkillCard from "../../components/SkillCard";
import px2vw from "../../utils/px2vw";
import { TopBar, PhotoContainer, Divider, Certifications } from "./components";

export default function HomePage() {
  const Skills = {
    NodeJS: NodeLogo,
    ReactJS: ReactLogo,
    Docker: DockerLogo,
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
        <Certifications></Certifications>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #34353a;
  min-height: 100vh;
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

const AboutBox = styled.div`
  padding-left: ${px2vw(80)};
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  text-align: justify;
  h1 {
    font-size: 1.7rem;
  }
  width: ${px2vw(320, 350)};
  color: white;
  font-size: 1.1rem;
  margin-bottom: 5px;

  @media (max-width: 720px) {
    width: ${px2vw(320, 720)};
    min-height: ${px2vw(200, 720)};
    height: 100%;
  }
`;

const SkillBox = styled.div`
  color: white;
  h1 {
    font-size: 1.7rem;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: ${px2vw(320)};
  }
  width: 90%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;
