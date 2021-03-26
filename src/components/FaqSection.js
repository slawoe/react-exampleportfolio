import styled from "styled-components";
import { BasicLayout } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            aliquam.
          </p>
        </div>
        <FaqLine />
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            aliquam.
          </p>
        </div>
        <FaqLine />
      </div>
      <div className="question">
        <h4>Payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            aliquam.
          </p>
        </div>
        <FaqLine />
      </div>
      <div className="question">
        <h4>What Products Do You Offer</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            aliquam.
          </p>
        </div>
        <FaqLine />
      </div>
    </Faq>
  );
};

const Faq = styled(BasicLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

const FaqLine = styled.div`
  background: #ccc;
  height: 0.2rem;
  margin: 2rem 0;
  width: 100%;
`;

export default FaqSection;
