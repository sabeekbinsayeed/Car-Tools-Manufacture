import React from 'react';
import { Link } from 'react-router-dom';

const DeleteRow = ({ tool, index, refetch, setDeleting }) => {
    const { name, price } = tool;
    // const totalPrice = quantity * pricePrice

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>

            <td>
                <label onClick={() => setDeleting(tool)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>


        </tr>
    );
};
export default DeleteRow;