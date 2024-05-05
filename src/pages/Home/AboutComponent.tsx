import styled from "styled-components";
import px2vw from "../../utils/px2vw";
export default function AboutSection({ ...props }) {
  return (
    <>
      <AboutBoxStyled>
        <h1 id="sobre" ref={props.reference}>
          Sobre
        </h1>
        <div className="abouttext">
          <div className="divider"></div>
          <p>{props.description}</p>
        </div>
      </AboutBoxStyled>
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
    margin-top: ${px2vw(50)};
  }
  .abouttext {
    display: grid;
  }
  .divider {
    margin-top: ${px2vw(30)};
    height: ${px2vw(10)};
    width: 30%;
    background-color: #ffc86b;
    margin-right: ${px2vw(5)};
    margin: ${px2vw(50)} 0;
  }

  @media (min-width: 720px) {
    .abouttext {
      display: flex;
    }
    font-size: 1rem;
    h1 {
      margin: ${px2vw(10)} 0;
    }
    .divider {
      margin-top: ${px2vw(10)};
      height: ${px2vw(3)};
      width: 10%;
      background-color: #ffc86b;
      margin-right: ${px2vw(5)};
    }
  }

  //animation
  -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
