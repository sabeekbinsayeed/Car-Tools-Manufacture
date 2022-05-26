import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch, setDeletingInfo }) => {
    const { name, email, productName, pricePrice, img, quantity, paid, _id } = order;
    const totalPrice = quantity * pricePrice

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{totalPrice}</td>
            <td>{quantity}</td>
            <td>
                {!paid && <label onClick={() => setDeletingInfo(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>}
            </td>

            <td>
                {(pricePrice && !paid) && <Link to={`/dashboard/payment/${_id}`}>
                    <button className='btn btn-xs btn-success'>pay</button>
                </Link>}

                {(pricePrice && paid) && <div>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                </div>}


            </td>
        </tr>
    );
};

export default OrderRow;