import styled from "styled-components";

function Loading() {
  return (
    <LoaderContainer>
      <h2>Loading...</h2>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  h2 {
    color: white;
  }
`;

export default Loading;
