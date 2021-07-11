import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Athlete from "../assets/img/athlete-small.png";
import Racer from "../assets/img/theracer-small.png";
import Goodtimes from "../assets/img/goodtimes-small.png";

function OurWork() {
  return (
    <Work>
      <Movie>
        <Link to="/work/the-athlete">
          <h2>The Athlete</h2>
          <div className="line"></div>
          <img src={Athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <Link to="/work/the-racer">
          <h2>The Racer</h2>
          <div className="line"></div>
          <img src={Racer} alt="racer" />
        </Link>
      </Movie>
      <Movie>
        <Link to="/work/good-times">
          <h2>Good Times</h2>
          <div className="line"></div>
          <img src={Goodtimes} alt="" />
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;
const Movie = styled.div`
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

export default OurWork;
