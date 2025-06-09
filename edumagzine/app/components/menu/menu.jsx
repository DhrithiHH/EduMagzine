"use client"

import './menu.css';
import React , {useState, useRef, useEffect} from 'react';
import Link from 'next/link';

const menuLinks =[
    {path:'#', label:'#'},
    {path:'#', label:'#'},
    {path:'#', label:'#'},
    {path:'#', label:'#'},
    {path:'#', label:'#'}
];


const Menu = () =>{
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };    
    return <div className='menu-container' ref={container}>
        <div className="menu-bar">
            <div className="menu-logo">
                <Link href="/" className="menu-logo-link">Codegrid</Link>
            </div>
            <div className="menu-open">
                <p>Menu</p>
            </div>
        </div>
        <div className="menu-overlay"></div>

    </div>
}

export default Menu;