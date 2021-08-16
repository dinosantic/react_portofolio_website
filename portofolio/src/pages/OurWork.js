import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnim,
  lineAnim,
  fade,
  slider,
  sliderContainer,
  scrollReveal,
} from "../animation";
import { UseScroll } from "../components/UseScroll";
//location
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show">
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/the-athlete">
          <ImageWrapper>
            <motion.img src={athlete} variants={photoAnim} alt="athlete" />
          </ImageWrapper>
        </Link>
      </Movie>
      <Movie
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden">
        <h2>The Racer</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/the-racer">
          <ImageWrapper>
            <img src={theracer} variants={photoAnim} alt="theracer" />
          </ImageWrapper>
        </Link>
      </Movie>
      <Movie
        variants={scrollReveal}
        ref={element2}
        animate={controls2}
        initial="hidden">
        <h2>Good Times</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/good-times">
          <ImageWrapper>
            <img src={goodtimes} variants={photoAnim} alt="goodtimes" />
          </ImageWrapper>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1024px) {
    padding: 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const ImageWrapper = styled.div`
  overflow: hidden;
`;

//Frame animation
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
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
