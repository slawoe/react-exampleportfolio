import styled from "styled-components";
import { BasicLayout, Hide } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollRevealAnimation } from "../animation";
import { useScroll } from "../hooks/useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Hide>
      <Faq
        variants={scrollRevealAnimation}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How Do I Start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                aliquam.
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                aliquam.
              </p>
            </div>
          </Toggle>
          <Toggle title="Payment methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                aliquam.
              </p>
            </div>
          </Toggle>
          <Toggle title="What Products Do You Offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                aliquam.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </Hide>
  );
};

const Faq = styled(BasicLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 4rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
