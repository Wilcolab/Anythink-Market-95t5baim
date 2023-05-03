import React from "react";
import logo from "../../imgs/logo.png";
import styled from "styled-components";
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Banner = () => {
const themeContext = useContext(ThemeContext)
// console.log('Current theme: ', themeContext)

const Wrapper = styled.section`
background-color: ${themeContext.dark};
`;

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <Wrapper>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </Wrapper>
      </div>
    </div>
  );
};

export default Banner;
