import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import DeleteRow from './DeleteRow';
import DeleteToolModal from './DeleteToolModal';

const DeleteProducts = () => {
    const [deleting, setDeleting] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('doctors', () => fetch(`http://localhost:5000/tools`, {
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => {
        // console.log('res', res);
        // console.log('response success jwt')
        // if (res.status === 401 || res.status === 403) {
        //     signOut(auth);
        // 
        //     localStorage.removeItem('accessToken')
        //     navigate('/');
        // }
        return res.json()
    })


    );

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table lg:w-full table-compact">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <DeleteRow
                                key={tool._key}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                                setDeleting={setDeleting}

                            ></DeleteRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleting && <DeleteToolModal
                deleting={deleting}
                refetch={refetch}
                setDeleting={setDeleting}
            ></DeleteToolModal>}

        </div>
    );
};

export default DeleteProducts;