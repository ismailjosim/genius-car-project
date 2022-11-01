import React from 'react';
import img01 from '../../../assets/images/featured/peoples.svg';
import img02 from '../../../assets/images/featured/clock.svg';
import img03 from '../../../assets/images/featured/support.svg';
import img04 from '../../../assets/images/featured/Wrench.svg';
import img05 from '../../../assets/images/featured/sheild.svg';
import img06 from '../../../assets/images/featured/delivery.svg';


const FeaturedData = [
    {
        id: 1,
        title: "Expert Team",
        image: img01,
    },
    {
        id: 2,
        title: "Timely Delivery",
        image: img02,
    },
    {
        id: 3,
        title: "24/7 Support",
        image: img03,
    },
    {
        id: 4,
        title: "Best Equipment",
        image: img04,
    },
    {
        id: 5,
        title: "100% Guaranty",
        image: img05,
    },
    {
        id: 6,
        title: "Timely Delivery",
        image: img06,
    },
]

const Featured = () => {
    return (
        <div>
            <div className='text-center mb-10'>
                <h4 className="text-xl font-bold text-primary">Core Features</h4>
                <h2 className="text-5xl font-bold sm:leading-snug">Why Choose Us</h2>
                <p className="text-base font-[#737373] font-normal leading-snug w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                </p>
            </div>
            <div className='sm:flex grid grid-cols-3 my-10 justify-center gap-5'>
                {
                    FeaturedData.map(item => <div key={item.id} className="flex p-4 space-x-4 rounded-lg md:space-x-6">
                        <div className="flex flex-col justify-center items-center gap-5 border-2 p-5 rounded-md hover:bg-primary cursor-pointer transition-all duration-500 hover:text-white hover:border-primary">
                            <img src={item.image} alt={item.title} width={50} />
                            <p className="font-semibold leading-none">{item.title}</p>
                        </div>
                    </div>


                    )
                }
            </div>
        </div>
    );
};

export default Featured;
