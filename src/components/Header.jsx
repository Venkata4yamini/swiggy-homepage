import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { RxCaretDown } from "react-icons/rx";
import { TbSearch } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { BiBookmarkHeart } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";


export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        console.log("hii");
        setToggle(true);
    };

    const hiddenSideMenu = () => {
        setToggle(false);
    };

    const links = [
        {
            icon: <TbSearch />,
            name: "Search"
        },
        {
            icon: <TbRosetteDiscount />,
            name: "offers",
            sup: "New"
        },
        {
            icon: <FaHandsHelping />,
            name: "Help"
        },
        {
            icon: <BiBookmarkHeart />,
            name: "faourites"
        },
        {
            // Use Link component to navigate to the Signin page
            icon:<FiUser />,
            name: "sign in"
        },
        {
            icon: <IoCartOutline />,
            name: "cart",
            sup: 2
        }
    ];

    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hiddenSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
                transition: "opacity 0.5s ease"
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }}
                    className="w-[400px] bg-white h-full absolute duration-[400ms] "
                    style={{
                        right: toggle ? '0%' : '-100%',
                        transition: "opacity 0.5s ease"
                    }}
                >
                </div>
            </div>
            <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[50px] '>
                        <img src='images/logo.png' className="w-full" alt="" />
                    </div>
                    <div className=' '>
                        <span className='font-bold hover:text-[#fc8019]  border-b-[3px] border-[black] ml-6'>
                            Maddilapalem </span> P8QH+6PC, A.P.G.O Colony <RxCaretDown onClick={showSideMenu} fontsize={15} className='inline text-[#fc8019]' />
                    </div>

                    <nav className='flex list-none gap-8  ml-auto text-[17px] forced-color-adjust-auto'>
                        {links.map((link, index) => (
                            <li className=' cursor-pointer flex hover:text-[#fc8019] item-center gap-1' style={{ display: 'flex', alignItems: 'center' }} key={index}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>{link.icon}</span>
                                    <span style={{ marginLeft: '8px' }}>{link.name}
                                        <sup style={{ color: "#fc8019", fontWeight: "bold", marginLeft: 5 }}>{link.sup}</sup></span>
                                </div>
                            </li>
                        ))}
                    </nav>

                </div>


            </header>
        </>
    )
}
