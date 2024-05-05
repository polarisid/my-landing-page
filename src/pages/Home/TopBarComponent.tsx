import React from "react";
import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export default function TopBarSection({ ...props }) {
  return (
    <>
      <Topbarstyled>
        {props.items ? (
          props.items.map((item: any, key: any) => (
            <p
              onClick={() => {
                props.reference[item].current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              key={key}
            >
              {item}
            </p>
          ))
        ) : (
          <></>
        )}
      </Topbarstyled>
    </>
  );
}

const Topbarstyled = styled.div`
  cursor: pointer;
  margin-top: ${px2vw(100)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 2.4rem;
  font-weight: 900;

  @media (min-width: 720px) {
    font-size: 1rem;
    margin-top: ${px2vw(40)};
    width: 50%;
  }
`;
