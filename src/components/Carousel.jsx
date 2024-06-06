// Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from './images/P2.jpg';
import img3 from './images/P5.jpg';
import img4 from './images/P4.jpg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="full-width-carousel">
            <Slider {...settings}>
                <div className="full-width-slide">
                    <img src={img2} alt="Scenic view of nature" className="slide-image" />
                    <div className="slide-text">Meeco</div>
                </div>
                <div className="full-width-slide">
                    <img src={img3} alt="City skyline at sunset" className="slide-image" />
                    <div className="slide-text">Meeco</div>
                </div>
                <div className="full-width-slide">
                    <img src={img4} alt="Mountain landscape" className="slide-image" />
                    <div className="slide-text">Meeco</div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
