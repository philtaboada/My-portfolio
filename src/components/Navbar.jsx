import React, { useState } from 'react'
import Index from './Index'
import white from '../assets/logophilwhite.png'

const Navbar = () => {

    const [isBool, setIsBool] = useState(true)

    const toggle = () => {
        setIsBool(!isBool)
    }

    return (
        <>
            <div className='Nav'>
                <div className='NavLink'>
                    <h1 className='logo-title'><a href="#"><img className='logo-icon' src={white} alt="" /></a></h1>
                </div>
                <div className='container-icon'>
                    <span><a onClick={toggle} href="#">{isBool ? <i class="color-icon fa-solid fa-xmark fa-2x"></i> : <i class="color-icon fa-solid fa-bars fa-2x"></i>}</a></span>
                </div>
                <nav className='Navegation'>
                    <ul className='NavMenu'>
                        <li className='NavLink'><a href="#">Home</a></li>
                        <li className='NavLink'><a href="#">About me</a></li>
                        <li className='NavLink'><a href="#">My habilities</a></li>
                        <li className='NavLink'><a href="#">Portfolio</a></li>
                        <li className='NavLink'><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <Index
                isBool={isBool}
            />
        </>
    )
}


export default Navbar