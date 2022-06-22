import React from 'react';

const Index = ({ isBool }) => {

    return (
        <div style={{ display: isBool ? '' : 'none' }} className='Container-mobil-menu' >
            <nav className='Nav-Movil'>
                <ul className='List-movil'>
                    <li className='list'><a href="#main">Home</a></li>
                    <li className='list'><a href="#about-me">About me</a></li>
                    <li className='list'><a href="#my-skills">My habilities</a></li>
                    <li className='list'><a href="#my-portfolio">Portfolio</a></li>
                    <li className='list'><a href="#contact-me">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}



export default Index