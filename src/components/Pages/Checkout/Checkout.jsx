import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-toastify';


const Checkout = () => {
    const { user } = useContext(AuthContext);
    const { _id, service_id, title, img, price } = useLoaderData();

    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;
        const name = ` ${ form.firstName.value } ${ form.lastName.value }`;
        const phoneNumber = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        // creating Object
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phoneNumber,
            email,
            message
        }
        // console.log(order);

        // --------------------------- Form validation optional -----------------------
        // if (phoneNumber.length >= 10) {
        //     toast.error("Please Enter a Valid Phone Number", { autoClose: 3000 });
        // }
        // if (!name) {
        //     toast.error("Please Enter Your Full Name", { autoClose: 3000 });
        // }
        // if (!message) {
        //     toast.error("Write Something about your order", { autoClose: 3000 });
        // }
        // ----------------------------------------------------------------------------

        // send data --> server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Your Order Is Placed Successfully!", { autoClose: 1000 });
                    form.reset();
                }

            })
            .catch(error => {
                toast.error("Something we wrong. Please check console!", { autoClose: 1000 });
                console.log(error.message);
            })



    }


    return (
        <section className=" body-font relative">
            <div className="container py-24 mx-auto bg-slate-200 shadow-md rounded-md my-32">
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={handleCheckout} className="flex flex-wrap">
                        <div className="p-8 w-full rounded-md dark:bg-gray-100">
                            <h3 className='text-xl pb-3 text-center underline font-bold uppercase text-primary'>Order Details</h3>
                            <div className=' sm:flex sm:space-x-6 '>
                                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                    <img src={img} alt={title} className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <div>
                                        <h2 className="text-2xl font-semibold">Service: {title}</h2>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="flex items-center space-x-2">
                                            <span className="dark:text-gray-400 text-xl">Price: <strong className='text-primary font-bold'>{price}</strong></span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <span className="dark:text-gray-400">Product ID: <strong className='text-primary'>{service_id}</strong></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">First Name</label>
                                <input type="text" name="firstName" className="w-full bg-slate rounded border border-gray-200 focus:border-primary  focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">Last Name</label>
                                <input type="text" defaultValue={user?.displayName} required name="lastName" className="w-full bg-slate rounded border border-gray-200 focus:border-primary  focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                                <input type="phone" defaultValue={user?.phoneNumber} required name="phone" className="w-full bg-slate rounded border border-gray-200 focus:border-primary  focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" readOnly defaultValue={user?.email} className="w-full bg-slate rounded border border-gray-200 focus:border-primary  focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea name="message" placeholder='Your Comments' className="w-full bg-slate rounded border border-gray-200 focus:border-primary  focus:ring-1 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-32"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="w-full text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:opacity-100 opacity-80 rounded text-lg font-bold">Place Order Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
