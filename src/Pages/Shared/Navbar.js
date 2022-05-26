import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const user = useAuthState(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        navigate(from, { replace: true })
    };

    const menuItems = <>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li>{(user[0]) ?
            <>
                <Link to='/dashboard'>Dashboard</Link>
                <button onClick={logout} className="menu menu-horizontal">Sign Out</button>
            </>
            : <Link to="/login">Log In</Link>}</li>
    </>

    return (
        <div className="navbar bg-secondary text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-info rounded-box w-52 text-primary-content">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Car Parts</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;