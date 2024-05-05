import React from "react";
import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export default function PhotoSection({ ...props }) {
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
