import styled from "styled-components";
import { Link } from "react-router-dom";
import Athlete from "../assets/img/athlete-small.png";
import Racer from "../assets/img/theracer-small.png";
import Goodtimes from "../assets/img/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
  sliderAnimation,
  sliderContainerAnimation,
} from "../animation";
import { useScroll } from "../hooks/useScroll";
import ScrollTop from "../components/ScrollTop";
import { Hide } from "../styles";

function OurWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainerAnimation}>
        <Frame1 variants={sliderAnimation} />
        <Frame2 variants={sliderAnimation} />
        <Frame3 variants={sliderAnimation} />
        <Frame4 variants={sliderAnimation} />
      </motion.div>
      <Movie>
        <Link to="/work/the-athlete">
          <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Hide>
            <motion.img variants={photoAnimation} src={Athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element}
        variants={fadeAnimation}
        animate={controls}
        initial="hidden"
      >
        <Link to="/work/the-racer">
          <motion.h2 variants={fadeAnimation}>The Racer</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Hide>
            <motion.img variants={photoAnimation} src={Racer} alt="racer" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fadeAnimation}
        animate={controls2}
        initial="hidden"
      >
        <Link to="/work/good-times">
          <motion.h2 variants={fadeAnimation}>Good Times</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Hide>
            <motion.img variants={photoAnimation} src={Goodtimes} alt="" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem;
  }
  h2 {
    padding: 1rem 0;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  a {
    color: white;
    text-decoration: none;
  }
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8eb2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
