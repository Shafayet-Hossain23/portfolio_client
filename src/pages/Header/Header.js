import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css'

const Header = () => {
    const listItmes = <>
        <li><Link to='/' className='h1'>Home</Link></li>
        <li><Link to='/education' className='h1'>Education</Link></li>
        <li><Link to='/skill' className='h1'>Skills</Link></li>
        <li><Link to='/project' className='h1'>Projects</Link></li>
        <li><Link to='/contact' className='h1'>Contact</Link></li>
        <li><Link to='/resume' className='h1'>Resume</Link></li>


    </>
    return (
        <div className="navbar headerStyle text-white ">
            <div className="lg:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-compact dropdown-content bg-black mt-3 p-2 shadow  rounded-box w-52">
                        {listItmes}
                    </ul>
                </div>
                <div className=''>
                    <Link className="buttonStyle lg:ml-10 ">MD. SHAFAYET HOSSAIN</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {listItmes}
                </ul>
            </div>

        </div>
    );
};

export default Header;