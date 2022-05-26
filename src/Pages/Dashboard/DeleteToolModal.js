import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DeleteToolModal = ({ deleting, refetch, setDeleting }) => {
    const { name, price, _id } = deleting;
    const handleDelete = () => {
        console.log('eikhane dhuktese delete korte')
        fetch(`https://safe-plains-19618.herokuapp.com/tool/${_id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log('hosce delete successfully', data);
                if (data.deletedCount) {
                    toast.success('successfully deleted')
                    console.log('dhukse')
                    setDeleting(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete your product {name}!</h3>
                    <p class="py-4">Once you delete you cannot get it back</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div >
    );
};


export default DeleteToolModal;