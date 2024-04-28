import React from "react";
import styled from "styled-components";
import Perfil from "./img/fotoperfil.png";
function App() {
  return (
    <div>
      <Container>
        <TopContent>
          <p>Sobre</p>
          <p>Projetos</p>
          <p>Contatos</p>
        </TopContent>
        <MidContent>
          <img src={Perfil} alt="Foto de Perfil" title="Foto de perfil" />
          <h1>
            Eu sou <h2>Daniel Carvalho</h2> Desenvolver Web e Líder Técnico
          </h1>
        </MidContent>
        <AboutBox>
          <h1>Sobre</h1>
          <p>
            Daniel Carvalho personifica a convergência entre eletricidade e
            tecnologia, com uma formação sólida como técnico eletrotécnico e sua
            atual graduação em engenharia elétrica. Além disso, ele é um
            desenvolvedor web full stack. Sua mente criativa e habilidades
            analíticas o capacitam a enfrentar desafios tanto no mundo físico
            quanto no virtual. Como colega dedicado, ele compartilha seu
            conhecimento e colabora em equipe. Seu nome é sinônimo de
            excelência, dedicação e busca constante por novos desafios.
          </p>
        </AboutBox>

        <SkillBox>
          <h1>Minhas habilidades</h1>

          <div className="wrapper">
            <div>NodeJS</div>
            <div>ReactJS</div>
            <div>Typescript</div>
            <div>PostgreSQL</div>
            <div>Git</div>
            <div>Docker</div>
            <div>Treinamento</div>
            <div>Liderança</div>
            <div>Supervisão</div>
          </div>
        </SkillBox>
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #34353a;
  min-height: 100vh;
  text-align: center;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
const MidContent = styled.div`
  display: flex;
  align-items: center;
  color: white;
  h2 {
    color: #ffc86b;
  }
  justify-content: space-around;
  img {
    border-radius: 40%;
    height: 800px;
  }
  button {
    height: 20px;
  }
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
`;
export default App;
