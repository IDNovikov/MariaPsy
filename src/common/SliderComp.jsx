import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import q from "../assets/1.jpg";
import w from "../assets/2.jpg";
import e from "../assets/3.jpg";
import r from "../assets/4.jpg";
import t from "../assets/5.jpg";

const Container = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width * 1.3}px;
  margin: ${(props) => props.margin};
`;
const Item = styled.div`
  width: ${(props) => props.width + 5}px;
  height: ${(props) => props.width * 1.3}px;
`;
const Img = styled.img`
  border: 2px solid #1d1d1d;
  border-radius: 30px;
  width: 99%;
  height: 99%;
`;
const ArrowBack = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -30px;
  width: 30px;
  height: ${(props) => props.width * 1.3}px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #000000;
  opacity: 0.8;
  border-radius: 25px 0 0 25px;
  color: white;
  font-size: 30px;
`;
const ArrowNext = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -29px;
  height: ${(props) => props.width * 1.3}px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  background-color: #000000;
  opacity: 0.8;
  border-radius: 0 25px 25px 0;
  color: white;
  font-size: 30px;
`;
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowNext width={props.width} onClick={onClick}>
      {">"}
    </ArrowNext>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowBack width={props.width} onClick={onClick}>
      {"<"}
    </ArrowBack>
  );
}
export default function SimpleSlider({ width, margin }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow width={width} />,
    prevArrow: <SamplePrevArrow width={width} />,
  };
  return (
    <Container width={width} margin={margin} className="slider-container">
      <Slider {...settings}>
        <Item>
          <Img src={w} />
        </Item>
        <Item>
          <Img src={e} />
        </Item>
        <Item>
          <Img src={q} />
        </Item>
        <Item>
          <Img src={r} />
        </Item>
        <Item>
          <Img src={t} />
        </Item>
      </Slider>
    </Container>
  );
}
