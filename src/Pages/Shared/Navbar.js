// import { signOut } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// import auth from '../../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const signout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    const menuItems = <>
        <li><Link className='lg:text-white' to="/">Home</Link></li>

        <li><Link className='lg:text-white' to="/review">Review</Link></li>
        <li><Link className='lg:text-white' to="/blogs">Blogs</Link></li>
        <li><Link className='lg:text-white' to="/portfolio">Portfolio</Link></li>
        {
            user && <li><Link className='lg:text-white' to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost text-white" onClick={signout} >Sign Out</button> : <Link className='lg:text-white' to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-blue-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        {user ? <button className="btn btn-ghost" onClick={signout}>Log out</button> : <li><Link to="/login">Login</Link></li>}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white lg:ml-12">Car Tools BD</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="lg:hidden navbar-end">
                <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>


            </div>


        </div>
    );
};

export default Navbar;