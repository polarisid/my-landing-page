import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import TrackitLogo from "../../img/trackit.png";
import CineflexLogo from "../../img/cineflexlogo.png";
import MyWalletLogo from "../../img/mywalletlogo.png";
export default function ProjetosSection({ ...props }) {
  return (
    <>
      <ProjetosSectionStyled>
        <h1 id="projetos" ref={props.reference}>
          Projetos
        </h1>
        <div className="wrapper">
          <CardProject>
            <img src={TrackitLogo} alt="" />
          </CardProject>
          <CardProject>
            <img src={CineflexLogo} alt="" />
          </CardProject>
          <CardProject>
            <img src={MyWalletLogo} alt="" />
          </CardProject>
        </div>
      </ProjetosSectionStyled>
    </>
  );
}

const ProjetosSectionStyled = styled.div`
  width: 80%;
  color: white;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 720px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

const CardProject = styled.div`
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
