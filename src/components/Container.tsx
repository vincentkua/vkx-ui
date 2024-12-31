import React from "react";
import styled from "styled-components";

type Childprops = {
  children: React.ReactNode;
};

const StyledContainerDiv = styled.div`
  max-width: 1200px;
  margin: auto;
  @media (max-width: 1200px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const Container = ({ children }: Childprops) => {
  return (
    <>
      <StyledContainerDiv>{children}</StyledContainerDiv>
    </>
  );
};

export default Container;
