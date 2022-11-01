import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";


const ProductCard = ({ product }) => {
    const { name, price, img } = product
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md ">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-[#F3F3F3]" />
            <div className="mt-6 mb-2 text-center">
                <div className='flex gap-2 text-[#FF912C] justify-center'>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarHalf></BsStarHalf>
                </div>
                <h2 className="text-2xl font-semibold my-3 text-[#444444]">{name}</h2>
                <p className="text-primary text-xl font-bold">Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
