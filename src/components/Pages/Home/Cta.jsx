import React from 'react';

import calender from '../../../assets/icons/calender.svg';
import call from '../../../assets/icons/call.svg';
import location from '../../../assets/icons/location.svg';

const Cta = () => {
    return (
        <section className="p-20 my-6 bg-[#151515] rounded-lg dark:text-gray-100">
            <div className="container flex justify-between items-center">
                <div className="flex gap-3 items-start">
                    <div>
                        <img src={calender} alt="calender" />
                    </div>
                    <div>
                        <p className="text-base font-semibold leading-none">We are open Monday-Friday</p>
                        <p className="text-2xl font-semibold mt-1">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className="flex gap-3 items-start">
                    <div>
                        <img src={call} alt="calender" />
                    </div>
                    <div>
                        <p className="text-base font-semibold leading-none">Have a question?</p>
                        <p className="text-2xl font-semibold mt-1">+2546 251 2658</p>
                    </div>
                </div>
                <div className="flex gap-3 items-start">
                    <div>
                        <img src={location} alt="calender" />
                    </div>
                    <div>
                        <p className="text-base font-semibold leading-none">Need a repair? our address</p>
                        <p className="text-2xl font-semibold mt-1">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
