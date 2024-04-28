import React from "react";
import styled from "styled-components";
import Perfil from "../../img/fotoperfil.png";
import NodeLogo from "../../img/nodejs.png";
import ReactLogo from "../../img/reactjs.png";
import DockerLogo from "../../img/docker.png";
import SkillCard from "../../components/SkillCard";
import { TopBar, PhotoContainer, Divider } from "./components";

export default function HomePage() {
  const Skills = {
    NodeJS: NodeLogo,
    ReactJS: ReactLogo,
    Docker: DockerLogo,
  };
  const skillNamed = Object.entries(Skills);

  return (
    <div>
      <Container>
        <TopBar items={["Sobre", "Projetos", "Contatos"]} />

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
        <Divider></Divider>

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

        <div>
          <p>Projetos</p>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #34353a;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutBox = styled.div`
  padding-left: 80px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  text-align: justify;
  h1 {
    font-size: 50px;
  }
  width: 80%;
  color: white;
  font-size: 25px;
`;

const SkillBox = styled.div`
  color: white;
  h1 {
    font-size: 50px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
  }
  width: 90%;
`;
