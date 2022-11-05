import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import TableRow from './TableRow';
import { toast } from 'react-toastify';


const Orders = () => {
    const { user, userLogout } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);


    // const url = `https://genius-car-server-khaki-five.vercel.app/orders?email=${ user.email }`;

    useEffect(() => {
        fetch(`https://genius-car-server-khaki-five.vercel.app/orders?email=${ user?.email }`, {
            headers: {
                authorization: `Bearer ${ localStorage.getItem('genius-token') }`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userLogout()
                }
                return res.json()
            })
            .then(data => setOrders(data))

    }, [user?.email, userLogout])


    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure!");
        if (proceed) {
            fetch(`https://genius-car-server-khaki-five.vercel.app/orders/${ id }`, {
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
        fetch(`https://genius-car-server-khaki-five.vercel.app/orders/${ id }`, {
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
