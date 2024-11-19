import React, { useEffect, useState } from 'react'
import { themeItems } from '../data'
import './Theme.css'
import ThemeItem from './ThemeItem'
import { FaCog } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { MdOutlineInvertColors } from "react-icons/md";

// To store the Color in Local Storage
const getStorageColor = () => {
    let color = 'hsl(271,76%,53%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }
    return color;
}

// To store the Theme in the Local Stroage
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
}
const Theme = () => {

    const [showSwitcher, setSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());
    // To change color of portfolio   
    const changeColor = (color) => {
        setColor(color)
    }

    //   To change the Theme
    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color])

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        // Theme Section for both color and theme
        <div className='Theme'>
            <div className={`${showSwitcher ? 'show_switcher' : ''} style_switcher`}>
                {/* Theme Toggle */}
                <div className="style_switcher_toggle" onClick={() => setSwitcher(!showSwitcher)}>
                    <FaCog />
                </div>
                <div className="theme_toggle" onClick={() => toggleTheme()}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                <div className="style_switch_close" onClick={() => setSwitcher(!showSwitcher)}>&times;</div>
                <div className="style_switcher_title">Style Switcher</div>
                <div className="style_switcher_item">
                    {themeItems.map((theme, index) => {
                        return (
                            <ThemeItem key={index} {...theme} changeColor={changeColor} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Theme