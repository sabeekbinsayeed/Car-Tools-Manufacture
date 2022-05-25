import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingInfo, refetch, setDeletingInfo }) => {
    const { name, email, productName } = deletingInfo;
    const handleDelete = () => {
        fetch(`http://localhost:5000/purchase/${email}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log('hosce delete successfully', data);
                if (data.deletedCount) {
                    // toast.success(`Doctor: ${name} is deleted.`)
                    setDeletingInfo(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete your Order for {productName}!</h3>
                    <p class="py-4">Once you delete you cannot get it back</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;