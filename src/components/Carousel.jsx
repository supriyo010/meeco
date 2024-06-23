// Carousel.jsx
import React from 'react';
import img4 from './images/good.mp4';
import './Carousel.css';

const Carousel = () => {
    return (
        <div className="full-width-carousel">
            <div className="full-width-slide">
                <div className="slide-content">
                    <video 
                        src={img4} 
                        alt="Mountain landscape" 
                        className="slide-image" 
                        autoPlay 
                        loop 
                        muted
                    />
                    <div className="slide-text">
                        <h1>
                            <span>TECH MEECO</span>
                            <span> INFRA PVT. LTD.</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
