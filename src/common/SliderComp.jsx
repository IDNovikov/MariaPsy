import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import q from "../assets/1.jpg";
import w from "../assets/2.jpg";
import e from "../assets/3.jpg";
import r from "../assets/4.jpg";
import t from "../assets/5.jpg";

const Arrow = styled.div`
  cursor: pointer;
  color: black;
  display: block;
  width: 20px;
  height: 40px;
  font-size: 40px;
  &:hover {
    color: white;
  }
`;
const Img = styled.img`
  width: 300px;
  height: 200px;
`;

function SampleNextArrow(props) {
  return <Arrow onClick={props.onClick}>{">"}</Arrow>;
}

function SamplePrevArrow(props) {
  return <Arrow onClick={props.onClick}>{"<"}</Arrow>;
}

function SliderComp() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Img src={q} />
        </div>
        <div>
          <Img src={q} />
        </div>
        <div>
          <Img src={q} />
        </div>
        <div>
          <Img src={q} />
        </div>
        <div>
          <Img src={q} />
        </div>
      </Slider>
    </div>
  );
}
export default SliderComp;
