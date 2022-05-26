import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role, name } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                // refetch();
                // toast.success(`Successfully made an admin`);

                if (data.modifiedCount > 0) {
                    refetch();
                    // toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th></th>

            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn bg-blue-600 btn-xs">Make Admin</button>}</td>
            {/* <td><button class="btn btn-xs">Remove User</button></td> */}
        </tr>
    );
};

export default UserRow;