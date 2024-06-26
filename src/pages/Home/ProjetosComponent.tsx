import styled from "styled-components";
import px2vw from "../../utils/px2vw";

import {
  ACreports,
  ProduappLogo,
  MyWalletLogo,
  CineflexLogo,
  TrackitLogo,
  HTlogo,
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
              <a
                href="https://trackit-roan-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TrackitLogo} alt="" />
              </a>
            </CardProject>
            <CardProject>
              <a
                href="https://projeto-09-cineflex-react.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={CineflexLogo} alt="" />
              </a>
            </CardProject>
            <CardProject>
              <a
                href="https://my-wallet-front-bay.vercel.app/sign-up"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MyWalletLogo} alt="" />
              </a>
            </CardProject>
            <CardProject>
              <img src={ProduappLogo} alt="" />
            </CardProject>
            <CardProject>
              <a
                href="https://form-to-pdf-puce.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ACreports} alt="" />
              </a>
            </CardProject>
            <CardProject>
              <a
                href="https://chacklist-temp.vercel.app/?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={HTlogo} alt="" />
              </a>
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
