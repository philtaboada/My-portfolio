import React from 'react';

const Index = ({ isBool }) => {

    return (
        <div style={{ display: isBool ? '' : 'none' }} className='Container-mobil-menu' >
            <nav className='Nav-Movil'>
                <ul className='List-movil'>
                    <li className='list'><a href="#">Home</a></li>
                    <li className='list'><a href="#">About me</a></li>
                    <li className='list'><a href="#">My habilities</a></li>
                    <li className='list'><a href="#">Portfolio</a></li>
                    <li className='list'><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}



export default Index