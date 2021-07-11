import React from "react";
import styled from "styled-components";

function Award({ title, description }) {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
}

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

export default Award;
