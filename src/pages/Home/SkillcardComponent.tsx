import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export default function SkillCard({ ...prop }) {
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
`;

export { SkillCard };
