import styled from "styled-components";
import lockup from "../img/dacari-lockup.png";

/** dacari lockup (cursor mark + wordmark), from the brand pack. */
export default function Logo({ className }: { className?: string }) {
  return <Img src={lockup} alt="dacari" className={className} draggable={false} />;
}

const Img = styled.img`
  display: block;
  height: 30px;
  width: auto;
  user-select: none;
`;
