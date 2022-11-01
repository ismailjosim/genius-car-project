import React from 'react';
import product1 from '../../../assets/images/products/1.png';
import product2 from '../../../assets/images/products/2.png';
import product4 from '../../../assets/images/products/3.png';
import product5 from '../../../assets/images/products/4.png';
import product6 from '../../../assets/images/products/5.png';
import product3 from '../../../assets/images/products/6.png';
import ProductCard from './ProductCard';


const productData = [
    {
        id: 1,
        name: "Car Engine Plug",
        price: 20.00,
        img: product1
    },
    {
        id: 2,
        name: "Car Air Filter",
        price: 60.00,
        img: product2
    },
    {
        id: 3,
        name: "Cools Led Light",
        price: 25.00,
        img: product3
    },
    {
        id: 4,
        name: "Cools Led Light",
        price: 45.00,
        img: product4
    },
    {
        id: 5,
        name: "Cools Led Light",
        price: 30.00,
        img: product5
    },
    {
        id: 6,
        name: "Cools Led Light",
        price: 50.00,
        img: product6
    },
]

const Products = () => {

    return (
        <div className='my-10'>
            <div className='text-center mb-10'>
                <h4 className="text-xl font-bold text-primary">Popular Products</h4>
                <h2 className="text-5xl font-bold sm:leading-snug">Browse Our Products</h2>
                <p className="text-base font-[#737373] font-normal leading-snug w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-11/12 md:w-11/12 lg:w-full mx-auto'>
                {
                    productData.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
            <div className='mt-10 flex justify-center'>
                <button className="btn btn-md btn-outline border-primary text-primary rounded-sm font-bold hover:btn-primary">More Products</button>
            </div>
        </div>
    );
};

export default Products;
