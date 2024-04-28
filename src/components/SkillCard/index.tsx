import styled from "styled-components";

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
    height: 130px;
    width: auto;
  }
  background-color: #3d3e42;
  color: white;
  border-radius: 20px;
  margin: 5px;
`;

export { GenericSkillCard };
