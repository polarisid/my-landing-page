import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export default function Container({ ...props }) {
  return (
    <>
      <ContainerStyled>{props.children}</ContainerStyled>
    </>
  );
}

const ContainerStyled = styled.div`
  .FormationBox {
    margin: 0 ${px2vw(50)};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 1rem;
    @media (max-width: 720px) {
      h2 {
        font-size: 3rem;
      }
      p {
        font-size: 2rem;
      }
      h1 {
        font-size: 3rem;
      }
    }
    .formation .title {
      margin: ${px2vw(10)};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .formation {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      text-align: justify;
    }
  }
  background-color: #34353a;
  flex-wrap: wrap;
  margin: ${px2vw(0)};
  max-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  //animmation
  @-webkit-keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
