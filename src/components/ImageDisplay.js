import React from "react";
import styled from "styled-components";

function ImageDisplay({ img }) {
  return (
    <ImgDisplay>
      <img src={img} alt="movie" />
    </ImgDisplay>
  );
}

const ImgDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default ImageDisplay;
