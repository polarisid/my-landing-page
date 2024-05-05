import styled from "styled-components";

export default function ProjetosSection() {
  return (
    <>
      <ProjetosSectionStyled>
        <h1>Projetos</h1>
        <div className="wrapper">
          <div>sdd</div>
          <div>sdd</div>
          <div>sdd</div>
        </div>
      </ProjetosSectionStyled>
    </>
  );
}

const ProjetosSectionStyled = styled.div`
  color: white;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
