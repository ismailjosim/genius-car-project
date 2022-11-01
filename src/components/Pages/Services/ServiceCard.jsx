import React from 'react';
import { BsArrowRightShort } from "react-icons/bs";
const ServiceCard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-[#444444]">{title}</h2>
                <div className="card-actions justify-between items-end pt-5">
                    <span className="badge badge-outline text-primary py-2 font-semibold">Price: ${price}</span>
                    <button className="text-3xl text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500 rounded-full">
                        <BsArrowRightShort />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
