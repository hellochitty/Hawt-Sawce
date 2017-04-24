import React from 'react';
import Slider from 'react-slick';

const Carousel = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };



  return (
    <Slider {...settings}>
      <div><img className="sauce-thumbnail" src={props.images[0]}/></div>
      <div><img className="sauce-thumbnail"  src={props.images[1]}/></div>
      <div><img className="sauce-thumbnail"  src={props.images[2]}/></div>
      <div><img className="sauce-thumbnail"  src={props.images[4]}/></div>
      <div><img className="sauce-thumbnail"  src={props.images[5]}/></div>
    </Slider>
  );


};

export default Carousel;
