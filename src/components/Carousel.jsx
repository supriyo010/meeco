// Carousel.jsx
import React, { useEffect, useRef } from 'react';
import img4 from './images/good.mp4';
import img5 from './images/video21.mp4'; // Add more video imports as needed
import './Carousel.css';

const videos = [img4, img5]; // Add more video sources to this array

const Carousel = () => {
    const videoRef = useRef(null);
    let currentVideoIndex = 0;

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleVideoEnded = () => {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            videoElement.src = videos[currentVideoIndex];
            videoElement.play();
        };

        videoElement.addEventListener('ended', handleVideoEnded);

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnded);
        };
    }, []);

    return (
        <div className="full-width-carousel">
            <div className="full-width-slide">
                <video
                    ref={videoRef}
                    src={videos[0]}
                    className="slide-image"
                    autoPlay
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
    );
};

export default Carousel;
