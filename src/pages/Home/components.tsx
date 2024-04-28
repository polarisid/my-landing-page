import React from "react";
import styled from "styled-components";
function TopBar({ ...props }) {
  return (
    <>
      <Topbarstyled>
        {props.items ? (
          props.items.map((item: any, key: any) => <p key={key}>{item}</p>)
        ) : (
          <></>
        )}
      </Topbarstyled>
    </>
  );
}

function PhotoContainer({ ...props }) {
  return (
    <>
      <PhotoContainerStyled>
        <img src={props.photo} alt="Foto de Perfil" title="Foto de perfil" />
        <h1>
          Eu sou <h2>{props.name}</h2> {props.atribbute}
        </h1>
      </PhotoContainerStyled>
    </>
  );
}

function Divider() {
  return (
    <>
      <DividerStyled></DividerStyled>
    </>
  );
}
const DividerStyled = styled.div`
  background-color: #ffc86b;
  height: 5px;
  width: 100vh;
`;

const PhotoContainerStyled = styled.div`
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
`;
const Topbarstyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vh;
  color: white;
  font-size: 30px;
  font-weight: 900;
`;

export { TopBar, PhotoContainer, Divider };
