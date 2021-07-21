import home1 from "../assets/img/home1.png";
import { BasicLayout, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <BasicLayout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt="guy with a camera"
          variants={photoAnimation}
        />
      </Image>
    </BasicLayout>
  );
};
export default AboutSection;
