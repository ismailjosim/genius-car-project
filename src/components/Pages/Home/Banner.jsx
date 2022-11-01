import React from 'react';
import '../../../styles/custom.css';

// Import all side image
import slideImg01 from '../../../assets/images/banner/1.jpg';
import slideImg02 from '../../../assets/images/banner/2.jpg';
import slideImg03 from '../../../assets/images/banner/3.jpg';
import slideImg04 from '../../../assets/images/banner/4.jpg';
import slideImg05 from '../../../assets/images/banner/5.jpg';
import slideImg06 from '../../../assets/images/banner/6.jpg';
import BannerSlide from './BannerSlide';


// Generate Banner Data
const bannerData = [
    {
        image: slideImg01,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: slideImg02,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: slideImg03,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: slideImg04,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: slideImg05,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: slideImg06,
        prev: 5,
        id: 6,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg mb-10">
            {
                bannerData.map(slide => {
                    return <BannerSlide
                        key={slide.id}
                        slide={slide}
                    >
                    </BannerSlide>
                }
                )}
        </div>

    );
};

export default Banner;

