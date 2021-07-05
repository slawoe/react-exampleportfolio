import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <Navigation>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About us</a>
        </li>
        <li>
          <a href="#">2. Our work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
        </li>
      </ul>
    </Navigation>
  );
}

const Navigation = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  margin: auto;
  background: #282828;
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
