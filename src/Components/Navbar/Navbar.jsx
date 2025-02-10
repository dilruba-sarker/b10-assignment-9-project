import React from 'react';
import { FaDonate } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
const items= < div className='text-xl flex font-bold '>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/donations'>Donation Campaigns</NavLink></li>
<li><NavLink to='/help'>How to Help</NavLink></li>
       
       

</div>


    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
{items}
      </ul>
    </div>
   <FaDonate />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {items}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login'><a className="btn">Login</a></Link>
  </div>
</div>
    );
};

export default Navbar;