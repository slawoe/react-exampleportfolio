import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

function ContactUs() {
  return (
    <ContactContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <TitleContainer>
        <Hide>
          <Title variants={titleAnimation}>
            Get in <span>touch</span>.
          </Title>
        </Hide>
      </TitleContainer>
      <div>
        <Hide>
          <SocialContainer variants={titleAnimation}>
            <Circle />
            <a href="#">Send us a message</a>
          </SocialContainer>
        </Hide>
        <Hide>
          <SocialContainer variants={titleAnimation}>
            <Circle />
            <a href="#">Send an email</a>
          </SocialContainer>
        </Hide>
        <Hide>
          <SocialContainer variants={titleAnimation}>
            <Circle />
            <a href="#">Social media</a>
          </SocialContainer>
        </Hide>
      </div>
    </ContactContainer>
  );
}

export default ContactUs;

const ContactContainer = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled(motion.h2)`
  color: white;
`;

const TitleContainer = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: white;
`;

const SocialContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  a {
    font-size: 2rem;
    text-decoration: none;
    margin: 2rem;
    color: white;
    cursor: pointer;
  }
`;
