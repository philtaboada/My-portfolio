import React from 'react'
import perfil from '../assets/perfil.png'

const Main = () => {
    return (
        <div className='main-container'>
            <div className='container-main-h1'>
                <h1 className='title-h1'>Hello, I'm Phil Taboada</h1>
            </div>
            <div className='photo-perfil'>
                <img className='perfil' src={perfil} alt="photo-phil" />
            </div>
            <div className='main-info'>
                <p className='sub-title'>I'm a Front <span className='color-dev'>Developer</span></p>
                <ul className='social-medias'>
                    <li className='icon-li'><a className='media-i' href="https://www.linkedin.com/in/phil-taboada-6b2a07174/"><i class="fa-brands fa-linkedin fa-3x"></i></a></li>
                    <li className='icon-li'><a className='media-i' href="https://github.com/philtaboada"><i class="fa-brands fa-github fa-3x"></i></a></li>
                    <li className='icon-li'><a className='media-i' href="#"><i class="fa-brands fa-behance-square fa-3x"></i></a></li>
                </ul>
                <button></button>
            </div>
        </div>
    )
}

export default Main