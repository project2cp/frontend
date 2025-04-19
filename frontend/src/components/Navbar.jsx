import React from "react";
import logo from "../assets/logo.png" ;

export const Navbar =  ({ navItems = [] }) => {
  // Default items if none provided
  const defaultItems = [
    { text: "About", href: "#about", className: "underline-effect" },
    { text: "Gallery", href: "#gallery", className: "underline-effect" },
    { text: "Host Event", href: "/signup", className: "underline-effect" },
    { text: "Login", href: "/login", className: "btn-effect" },
    { text: "Sign up", href: "/signup", className: "btn-effect" },
  ];

  // Use provided items or fallback to defaults
  const itemsToRender = navItems.length > 0 ? navItems : defaultItems;

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
            {itemsToRender.map((item, index) => (
              <li key={index}>
                <a href={item.href} className={item.className}>
                  {item.text}
                </a>
              </li>
            ))}
            </ul>

                </div>
            </div>
        </nav>
    );
};