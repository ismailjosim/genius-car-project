import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import TableRow from './TableRow';
import { toast } from 'react-toastify';


const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);


    // const url = `http://localhost:5000/orders?email=${ user.email }`;

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${ user?.email }`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure!");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${ id }`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Product Removed", { autoClose: 1000 });
                        const remaining = orders.filter(pd => pd._id !== id);
                        setOrders(remaining);
                    }

                })
                .catch(error => {
                    toast.error("Something went wrong! 😢😢", { autoClose: 1000 });
                    console.log(error.message);
                })
        }
    }

    // handle update status
    const handleUpdateStatus = id => {
        fetch(`http://localhost:5000/orders/${ id }`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approve = orders.find(odr => odr._id === id);
                    approve.status = 'Approved';
                    const newOrders = [approve, ...remaining];
                    setOrders(newOrders)
                }

            })
    }


    return (
        <div>
            <h3 className='text-3xl my-5 text-center font-bold'>You have Total {orders.length} Orders.</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full my-16">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Products Details</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <TableRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdateStatus={handleUpdateStatus}
                            ></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
