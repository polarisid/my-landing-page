import React from "react";
import styled from "styled-components";
import px2vw from "../../utils/px2vw";

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

function Certifications() {
  return (
    <>
      <CertificationStyled>
        <h1>Master Techinical 2023</h1>
      </CertificationStyled>
    </>
  );
}

const CertificationStyled = styled.div``;

const DividerStyled = styled.div`
  background-color: #ffc86b;
  height: 5px;
  width: 100vh;
`;

const PhotoContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  line-height: 350%;
  margin: 0 ${px2vw(50)};
  img {
    border-radius: 30%;
    height: ${px2vw(1300)};
  }
  h2 {
    color: #ffc86b;
  }
  justify-content: space-around;
`;
const Topbarstyled = styled.div`
  margin-top: ${px2vw(100)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 2.4rem;
  font-weight: 900;
`;

export { TopBar, PhotoContainer, Divider, Certifications };
