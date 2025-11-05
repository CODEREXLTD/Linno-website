import { memo, useState, useEffect } from 'react';
import Image from 'next/image';

const ArrowRight = () => (
    <svg width="29" height="14" fill="none" viewBox="0 0 29 14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M27.926 7.67c.37-.37.37-.97 0-1.34L21.892.296a.948.948 0 10-1.341 1.34L25.914 7l-5.363 5.364a.948.948 0 101.34 1.34l6.035-6.034zM.745 7v.948h26.51V6.052H.745V7z"/></svg>
);

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const images = [
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    ];

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            //setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);

    }, [isAutoPlay, images.length]);

    const normalizeOffset = (rawOffset) => {
        // normalize to the shortest circular distance
        let offset = rawOffset;
        const half = Math.floor(images.length / 2);
        while (offset > half) offset -= images.length;
        while (offset < -half) offset += images.length;
        return offset;
    };

    const goToPrevious = () => {
        setIsAutoPlay(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setIsAutoPlay(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlay(false);
        setCurrentIndex(index % images.length);
    };

    // mapping for visual positions (keeps the current placement: two left, center, two right)
    const positionMap = {
        '-2': { translateX: -60, scale: 0.6, zIndex: 20, opacity: 0.5, blur: 2 },
        '-1': { translateX: -30, scale: 0.85, zIndex: 40, opacity: 0.8, blur: 1 },
        '0': { translateX: 0, scale: 1, zIndex: 50, opacity: 1, blur: 0 },
        '1': { translateX: 30, scale: 0.85, zIndex: 40, opacity: 0.8, blur: 1 },
        '2': { translateX: 60, scale: 0.6, zIndex: 20, opacity: 0.5, blur: 2 },
    };


    return (
        <>
            <div className="linno-gallery-carousel">
                <div className="carousel-container">
                    <div className="carousel-wrapper">
                        <div className="carousel-track">
                            {images.map((image, imageIndex) => {
                                const rawOffset = imageIndex - currentIndex;
                                const offset = normalizeOffset(rawOffset);
                                const pos = positionMap[offset] || { translateX: offset > 0 ? 200 : -200, scale: 0.6, zIndex: 10, opacity: 0, blur: 4 };

                                const isEdge = Math.abs(offset) === 2;
                                const isVisible = Math.abs(offset) <= 2;

                                return (
                                    <div
                                        key={imageIndex}
                                        className={`carousel-slide pos--${offset} ${isVisible ? 'visible' : 'outside'} ${isEdge ? 'edge' : ''}`}
                                        style={{
                                            transform: `translateX(${pos.translateX}%) scale(${pos.scale})`,
                                            zIndex: pos.zIndex,
                                            opacity: pos.opacity,
                                            filter: `blur(${pos.blur}px)`,
                                        }}
                                    >
                                        <img src={image} alt={`Slide ${imageIndex + 1}`} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="linno-2d-carousel-navigation">
                        <button onClick={goToPrevious} className="carousel-button carousel-button-prev" aria-label="Previous slide" >
                            <svg width="28" height="14" fill="none" viewBox="0 0 28 14" xmlns="http://www.w3.org/2000/svg"><path fill="#5E658B" d="M.278 7.652a.948.948 0 010-1.34L6.312.278a.948.948 0 011.34 1.34L2.29 6.983l5.364 5.363a.948.948 0 01-1.341 1.341L.278 7.652zm27.18-.67v.948H.949V6.034h26.51v.948z"/></svg>
                        </button>

                        <div className="carousel-indicators">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button onClick={goToNext} className="carousel-button carousel-button-next" aria-label="Next slide" >
                            <svg width="28" height="14" fill="none" viewBox="0 0 28 14" xmlns="http://www.w3.org/2000/svg"><path fill="#5E658B" d="M27.18 7.652a.946.946 0 000-1.34L21.148.278a.948.948 0 00-1.34 1.34l5.363 5.364-5.364 5.363a.948.948 0 101.341 1.341l6.034-6.034zM0 6.982v.948h26.51V6.034H0v.948z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Gallery);