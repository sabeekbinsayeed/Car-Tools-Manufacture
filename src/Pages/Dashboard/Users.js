import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import UserRow from './UserRow';
// import Loading from '../../Pages/Loading';
// import UserRow from './UserRow';
const Users = () => {

    const { data: users, isLoading, error, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (error) {
        return <div><h1>token expire</h1></div>
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>users</h2>
            <h2 className='text-2xl'>All users {users.length}</h2>

            <div class="lg:overflow-x-auto">
                <table class="table lg:w-full table-compact">

                    <thead>
                        <tr>
                            <th></th>

                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            users.map(user =>
                                <UserRow refetch={refetch} user={user} ></UserRow>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;