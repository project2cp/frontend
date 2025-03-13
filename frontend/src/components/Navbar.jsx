import React from "react";
import logo from "../assets/logo.png"
export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full text-white px-6 py-2
                        mx-auto shadow-lg bg-opacity-80 backdrop-filter 
                        backdrop-blur-3xl z-50 border-b border-gray-300 ">
            <div className=" flex justify-between   mx-auto  ">
                <div className="flex items-center gap-2">
                    <div className="border-l-2 border-white  h-11 mx-2 pl-3 -ml-0.5">
                        <p >EVENT <br/> SPHERE</p>
                    </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 ">
                    <img src={logo} alt="logo" className="h-11" />
                </div>
                <div> 
                <ul className="flex space-x-5 pt-2 pr-4">
                    <li><a href="#about" className="underline-effect">About</a></li>
                    <li><a href="#gallery" className="underline-effect">Gallery</a></li>
                    <li><a href="/signup" className="underline-effect">Host Event</a></li>
                    <li><a href="/login" className="btn-effect">Login</a></li>
                    <li><a href="/signup" className="btn-effect">Sign up</a></li>
                </ul>

                </div>
            </div>
        </nav>
    );
};