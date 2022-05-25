import React from 'react';
import { Link, Outlet } from 'react-router-dom';


import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle " />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-primary font-bold'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/review'>Add Review</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    {/* <li><Link to='/dashboard/users'>All Users</Link></li> */}
                    {/* <li><Link to='/dashboard/users'>All Users</Link></li> */}
                    {admin &&
                        <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            {/* <li><Link to='/dashboard/addDoctor'>All Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li> */}
                        </>


                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;