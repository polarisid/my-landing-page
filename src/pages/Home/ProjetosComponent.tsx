import styled from "styled-components";
import px2vw from "../../utils/px2vw";

import {
  ACreports,
  ProduappLogo,
  MyWalletLogo,
  CineflexLogo,
  TrackitLogo,
} from "../../img";
import { Fade } from "react-awesome-reveal";

export default function ProjetosSection({ ...props }) {
  return (
    <>
      <ProjetosSectionStyled>
        <h1 id="projetos" ref={props.reference}>
          Projetos
        </h1>
        <div className="wrapper">
          <Fade cascade duration={500}>
            <CardProject>
              <img src={TrackitLogo} alt="" />
            </CardProject>
            <CardProject>
              <img src={CineflexLogo} alt="" />
            </CardProject>
            <CardProject>
              <img src={MyWalletLogo} alt="" />
            </CardProject>
            <CardProject>
              <img src={ProduappLogo} alt="" />
            </CardProject>
            <CardProject>
              <img src={ACreports} alt="" />
            </CardProject>
          </Fade>
        </div>
      </ProjetosSectionStyled>
    </>
  );
}

const ProjetosSectionStyled = styled.div`
  margin-top: ${px2vw(50)};

  width: 80%;
  color: white;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 720px) {
    width: 100%;
    font-size: 1.5rem;
    .wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const CardProject = styled.div`
  box-shadow: 0px 1px 8px #20202063;

  img {
    height: ${px2vw(150)};
    width: auto;
  }
  margin: 5px;
  background-color: #3d3e42;

  border-radius: 10%;
  @media (max-width: 720px) {
    img {
      height: ${px2vw(350)};
    }
  }
`;
