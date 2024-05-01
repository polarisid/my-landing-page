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
    height: ${px2vw(200)};
    width: auto;
  }
  background-color: #3d3e42;
  color: white;
  border-radius: 20px;
  margin: 5px;
`;

export { SkillCard };
