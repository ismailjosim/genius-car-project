import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { AuthContext } from '../Contexts/AuthProvider';

const Nav = () => {
    const { user, userLogout } = useContext(AuthContext);

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    const handleUserRemove = () => {
        userLogout().then(result => { }).catch(error => console.log(error.message))
    }


    return (
        <div className="navbar bg-base-100 h-20 mb-5 font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-16 h-16' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <div className='flex gap-3 items-center'>
                        <li className='list-none'><Link to='/orders'>Orders</Link></li>
                        <div className="tooltip tooltip-primary tooltip-bottom" data-tip={user.displayName}>
                            <img className='rounded-full w-12' alt={user.displayName} src={user.photoURL} />
                        </div>
                        <button onClick={handleUserRemove} className="btn btn-md rounded-md btn-outline btn-primary">Logout</button>
                    </div>
                    :
                    <Link to='/login' className="btn btn-md rounded-md btn-outline btn-primary">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Nav;
