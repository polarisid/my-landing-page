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
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  line-height: 350%;
  margin: 0 ${px2vw(50)};
  img {
    border-radius: 30%;
    height: ${px2vw(1300)};
  }
  h2 {
    color: #ffc86b;
  }
  h1,
  h2 {
    animation-duration: 1.5s;
    animation-name: slidein;
    @keyframes slidein {
      from {
        margin-left: 100%;
        width: 300%;
      }

      to {
        margin-left: 0%;
        width: 100%;
      }
    }
  }

  @media (min-width: 720px) {
    img {
      height: ${px2vw(600)};
    }
    font-size: 0.9rem;
    margin: 0 ${px2vw(10)};
  }
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

  @media (min-width: 720px) {
    font-size: 1rem;
    margin-top: ${px2vw(40)};
    width: 50%;
  }
`;

function AboutBox({ ...props }) {
  return (
    <>
      <AboutBoxStyled> {props.children}</AboutBoxStyled>
    </>
  );
}
const AboutBoxStyled = styled.div`
  margin: 0 ${px2vw(50)};
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  text-align: justify;
  color: white;
  font-size: 2rem;
  line-height: 150%;
  h1 {
    margin: ${px2vw(50)} 0;
  }
  @media (min-width: 720px) {
    font-size: 0.9rem;
    h1 {
      margin: ${px2vw(10)} 0;
    }
  }

  //animation
  -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export { TopBar, PhotoContainer, Divider, Certifications, AboutBox };
