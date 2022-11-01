import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));


    }, [])

    return (
        <div className='my-10'>
            <div className='text-center mb-10'>
                <h4 className="text-xl font-bold text-primary">Service</h4>
                <h2 className="text-5xl font-bold sm:leading-snug">Our Service Area</h2>
                <p className="text-base font-[#737373] font-normal leading-snug w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-11/12 md:w-11/12 lg:w-full mx-auto'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
