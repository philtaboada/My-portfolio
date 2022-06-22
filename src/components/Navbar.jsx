import React, { useState } from 'react'
import Index from './Index'

const Navbar = () => {

    const [isBool, setIsBool] = useState(false)

    const toggle = () => {
        setIsBool(!isBool)
    }

    return (
        <>
            <div className='Nav'>
                <div className='NavLink-logo'>
                    <a href="#main"><i className="fa-brands fa-padlet fa-2x"></i></a>
                </div>
                <div className='container-icon'>
                    <span><a onClick={toggle} href="#">{isBool ? <i class="color-icon fa-solid fa-xmark fa-2x"></i> : <i class="color-icon fa-solid fa-bars fa-2x"></i>}</a></span>
                </div>
                <nav className='Navegation'>
                    <ul className='NavMenu'>
                        <li className='NavLink'><a href='#main'>Home</a></li>
                        <li className='NavLink'><a href="#about-me">About me</a></li>
                        <li className='NavLink'><a href="#my-skills">My habilities</a></li>
                        <li className='NavLink'><a href="#my-portfolio">Portfolio</a></li>
                        <li className='NavLink'><a href="#contact-me">Contact Me</a></li>
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