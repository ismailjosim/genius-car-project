import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <section className="my-20">
            <div className="container flex gap-16 flex-col-reverse mx-auto lg:flex-row md:flex-row">
                <div className='sm:w-1/2 relative sm:mx-0 mx-5 md:mx-5'>
                    <img src={person} alt="" className="rounded-lg w-4/5" />
                    <img src={parts} alt="" className="rounded-lg w-80 absolute bottom-0 right-0 border-8 border-white shadow-md" />
                </div>
                <div className="sm:w-1/2 sm:mx-0 mx-5 md:mx-5">
                    <div className="space-y-2">
                        <h4 className="text-xl font-bold text-primary">About Us</h4>
                        <h2 className="text-5xl font-bold sm:leading-snug py-5">We are qualified & of experience in this field</h2>
                        <div>
                            <p className="text-base font-[#737373] font-normal leading-snug">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                            </p>
                            <p className="text-base font-[#737373] font-normal my-3">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                            </p>
                        </div>
                        <button className="btn btn-md btn-primary rounded-sm font-bold">Discover More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
