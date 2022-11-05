import React, { useEffect, useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
const TableRow = ({ order, handleDelete, handleUpdateStatus }) => {
    const [orderService, setOrderService] = useState({});
    const { _id, customer, serviceName, price, phoneNumber, service, status } = order;


    useEffect(() => {
        fetch(`https://genius-car-server-khaki-five.vercel.app/services/${ service }`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service]);



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn-primary bg-black p-1 rounded-full'>
                    <BsPlusLg className='transform rotate-45 text-xl  text-white' />
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded">
                            {orderService?.img &&
                                <img src={orderService.img} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phoneNumber}</div>
                    </div>
                </div>
            </td>
            <td className='text-xl font-bold text-secondary'>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">ID: {_id}</span>
            </td>
            <td className='text-primary font-semibold'>${price}</td>
            <th>
                <button onClick={() => handleUpdateStatus(_id)} className="btn btn-sm btn-ghost">{status ? status : "Pending"}</button>
            </th>
        </tr>
    );
};

export default TableRow;
