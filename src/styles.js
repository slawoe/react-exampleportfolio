import styled from "styled-components";
import { motion } from "framer-motion";

export const BasicLayout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
    min-height: 80vh;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  .index h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 1500px) {
      height: 40vh;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
