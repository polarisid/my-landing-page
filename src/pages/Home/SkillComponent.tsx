import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { Fade } from "react-awesome-reveal";

export default function SkillSection({ ...props }) {
  return (
    <SkillBox>
      <h1>Minhas habilidades</h1>
      <div className="wrapper">
        <Fade cascade duration={500}>
          {props.skills ? (
            props.skills.map((item: any, key: any) => (
              <SkillCard skillName={item[0]} image={item[1]}>
                {item[0]}
              </SkillCard>
            ))
          ) : (
            <></>
          )}
        </Fade>
      </div>
    </SkillBox>
  );
}

function SkillCard({ ...prop }) {
  return (
    <>
      <GenericSkillCard>
        <img src={prop.image} alt={prop.alt} />
        <p>{prop.skillName}</p>
      </GenericSkillCard>
    </>
  );
}

const GenericSkillCard = styled.div`
  img {
    height: ${px2vw(170)};
    width: auto;
    margin-bottom: ${px2vw(4)};
  }
  padding: ${px2vw(20)};
  background-color: #3d3e42;
  color: white;
  border-radius: 20px;
  margin: ${px2vw(10)};
  font-weight: 500;
  font-size: 1.5rem;

  @media (min-width: 720px) {
    img {
      height: ${px2vw(90)};
    }
    font-size: 0.9rem;
  }

  //

  //
`;

const SkillBox = styled.div`
  color: white;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: ${px2vw(320)}; */
  }
  font-size: 2rem;
  width: 90%;
  margin: ${px2vw(50)} 0;
  @media (min-width: 720px) {
    font-size: 0.9rem;
  }
`;
