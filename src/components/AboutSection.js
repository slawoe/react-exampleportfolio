import home1 from "../assets/img/home1.png";
import { BasicLayout, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerAnimation = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "afterChildren",
      },
    },
  };
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <BasicLayout>
      {" "}
      <Description>
        {" "}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="title"
        >
          {" "}
          <Hide>
            {" "}
            <motion.h2 variants={titleAnimation}>
              We work to make
            </motion.h2>{" "}
          </Hide>{" "}
          <Hide>
            {" "}
            <motion.h2 variants={titleAnimation}>
              {" "}
              your <span>dreams</span> come{" "}
            </motion.h2>{" "}
          </Hide>{" "}
          <Hide>
            {" "}
            <motion.h2 variants={titleAnimation}>true.</motion.h2>{" "}
          </Hide>{" "}
        </motion.div>{" "}
        <p>
          {" "}
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.{" "}
        </p>{" "}
        <button>Contact us</button>{" "}
      </Description>{" "}
      <Image>
        {" "}
        <img src={home1} alt="guy with a camera" />{" "}
      </Image>{" "}
    </BasicLayout>
  );
};
export default AboutSection;
