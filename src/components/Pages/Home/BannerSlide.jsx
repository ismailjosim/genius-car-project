import React from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const BannerSlide = ({ slide }) => {
    const { id, prev, next, image } = slide;
    return (
        <div id={`slide${ id }`} className="carousel-item relative w-full max-h-[600px] overflow-hidden">
            <div className="slide-img">
                <img src={image} alt={`Slide ${ id }`} />
            </div>
            <div className="absolute flex flex-col sm:gap-5 gap-3 sm:top-20 top-5 sm:left-24 left-5 text-white sm:text-left text-center">
                <h2 className="text-4xl sm:text-6xl font-bold sm:leading-20 leading-10 sm:w-2/3">
                    Affordable Price For Car Servicing
                </h2>
                <p className='sm:text-xl sm:w-3/5 w-11/12 sm:mx-0 mx-auto'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-3 sm:mx-0 mx-auto'>
                    <button className="btn btn-md btn-primary rounded-sm font-bold">Discover More</button>
                    <button className="btn btn-md btn-outline border-white text-white rounded-sm font-bold hover:btn-primary">Latest Project</button>
                </div>
            </div>
            <div className="absolute sm:flex hidden justify-end gap-5 transform -translate-y-1/2 right-5 bottom-0">
                <a href={`#slide${ prev }`} className="btn btn-circle text-xl hover:bg-primary hover:border-primary transition-all duration-500">
                    <BsFillCaretLeftFill />
                </a>
                <a href={`#slide${ next }`} className="btn btn-circle text-xl hover:bg-primary hover:border-primary transition-all duration-500">
                    <BsFillCaretRightFill />
                </a>
            </div>
        </div>
    );
};

export default BannerSlide;
