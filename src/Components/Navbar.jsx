import React, { useState } from 'react'
import { links } from '../data'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { IoMdClose } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
    // To show menu or not
    const [showMenu, setShowMenu] = useState(false);
    return (
        // Navigation Section
        <div className="nav">
            {/* Nav Items */}
            <div className={`${showMenu ? 'nav_menu show_menu' : 'nav_menu'}`}>
                <div className="nav_items">
                    {links.map(({ id, name, icon, path }) => {
                        return (
                            <div className="nav_list" id={id}>
                                <NavLink to={path} className={({ isActive }) => isActive ? 'nav_link active_link' : 'nav_link'}>
                                    <div className="nav_icon">{icon}</div>
                                    <h3 className='nav_name'>{name}</h3>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
                {/* Nav Toggle */}
                <div className="nav_toggle" onClick={() => setShowMenu(!showMenu)} >
                    {showMenu ?
                        (<IoMdClose className='nav_toggle_icon' />)
                        :
                        (<IoReorderThreeOutline className='nav_toggle_icon' />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar