import React, { useState } from 'react';
import logo from '../../assets/logo/movie.png';
import { TiThMenu } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-between items-center relative z-50">

            {/* Logo Section */}
            <div className="flex order-2 xl:order-1 items-center justify-between w-full xl:w-auto">
                <div className="flex items-center gap-4">
                    <img className="h-20 w-20" src={logo} alt="logo" />
                    <h4 className="text-xl font-serif font-semibold">
                        Star Cineplex
                    </h4>
                </div>

                {/* Menu Icon */}
                <span
                    className="text-3xl cursor-pointer xl:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <AiOutlineClose /> : <TiThMenu />}
                </span>
            </div>

            {/* Menu */}
            <ul
                className={`order-1 xl:order-2 xl:flex items-center gap-6 bg-sky-500 xl:bg-transparent absolute xl:static px-10 py-4 xl:w-auto left-0 transition-all duration-500 ease-in
        ${open ? 'top-[80px] opacity-100' : 'top-[-400px] opacity-0'}
        xl:opacity-100`}
            >
                <Link><li className="font-serif font-semibold mx-4 my-2 rounded">
                    Home
                </li></Link>
                <Link>
                    <li className="font-serif font-semibold mx-4 my-2  rounded">
                        Schedule
                    </li>
                </Link>
                <Link>
                    <li className="font-serif font-semibold mx-4 my-2  rounded">
                        Movie
                    </li>
                </Link>
                <Link>
                    <li className="font-serif font-semibold mx-4 my-2  rounded">
                        News
                    </li>
                </Link>

                <button className="bg-red-500 px-7 py-2 text-xl font-semibold text-white rounded mx-4">
                    Login
                </button>
            </ul>
        </div>
    );
};

export default Navbar;
