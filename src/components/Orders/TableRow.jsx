import React, { useEffect, useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
const TableRow = ({ order, handleDelete }) => {
    const [orderService, setOrderService] = useState({});
    const { _id, customer, serviceName, price, phoneNumber, service } = order;


    useEffect(() => {
        fetch(`http://localhost:5000/services/${ service }`)
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
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Crimson</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default TableRow;
