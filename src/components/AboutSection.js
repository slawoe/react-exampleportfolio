import home1 from "../assets/img/home1.png";
import { BasicLayout, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <BasicLayout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </BasicLayout>
  );
};

export default AboutSection;
