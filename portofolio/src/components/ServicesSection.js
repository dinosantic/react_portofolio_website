import React from "react";
//icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//img
import home2 from "../img/home2.png";
//style
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
//animation
import { scrollReveal } from "../animation";
import { UseScroll } from "./UseScroll";

const ServicesSection = () => {
  const [element, controls] = UseScroll();

  return (
    <Services
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden">
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    p {
      width: 100%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    display: block;
  }
`;
const Card = styled.div`
  //flex-basis: 15rem;
  width: 50%;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1300px) {
    .icon {
      justify-content: center;
    }
  }
  @media (max-width: 1024px) {
    .icon {
      justify-content: center;
      display: block;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    .icon {
      display: block;
      h3 {
        margin-left: 0;
        width: 60%;
        text-align: center;
        margin: 0 auto;
      }
      img {
        margin-bottom: 1rem;
      }
    }
  }
`;
export default ServicesSection;
