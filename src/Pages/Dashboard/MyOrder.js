import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';




const MyOrder = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // const [orders, setOrders] = useState([])

    const [deletingInfo, setDeletingInfo] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('doctors', () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        console.log('res', res);
        console.log('response success jwt')
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/');
        }
        return res.json()
    })


    );

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/order?email=${user.email}`).then(res => res.json()).then(data => setOrders(data))
    // }, [])

    //     fetch(`http://localhost:5000/order?email=${user.email}`, {
    //         method: 'GET',
    //         // headers: {
    //         //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         // }
    //     }).then(res => res.json())
    //         .then(data => {

    //             console.log(data);
    //         });

    // })
    return (

        <div>
            <h2 className="text-2xl">Orders Length: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Ordered</th>
                            <th>Total Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._key}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeletingInfo={setDeletingInfo}

                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingInfo && <DeleteConfirmModal
                deletingInfo={deletingInfo}
                refetch={refetch}
                setDeletingInfo={setDeletingInfo}
            ></DeleteConfirmModal>}
        </div>


    );
};

export default MyOrder;