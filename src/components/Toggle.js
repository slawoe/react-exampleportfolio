import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <QuestionContainer layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <FaqLine />
    </QuestionContainer>
  );
};

export default Toggle;

const QuestionContainer = styled(motion.div)`
  padding: 0 0 2rem;
  cursor: pointer;
`;

const FaqLine = styled.div`
  background: #ccc;
  height: 0.2rem;
  margin: 1rem 0;
  width: 100%;
`;
