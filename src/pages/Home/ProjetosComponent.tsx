import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import TrackitLogo from "../../img/trackit.png";
import CineflexLogo from "../../img/cineflexlogo.png";
import MyWalletLogo from "../../img/mywalletlogo.png";
import ProduappLogo from "../../img/produapp.png";
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
  img {
    height: ${px2vw(150)};
    width: auto;
  }
  margin: 5px;
  background-color: #3d3e42;
  border-radius: 20%;
  @media (max-width: 720px) {
    img {
      height: ${px2vw(350)};
    }
  }
`;
