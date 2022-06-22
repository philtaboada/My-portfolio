import React from 'react'
import perfil from '../assets/programming.png'

const Main = () => {
    return (
        <div className='main-container'>
            <a name='main'></a>
            <div className='photo-perfil'>
                <img className='perfil' src={perfil} alt="photo-phil" />
            </div>
            <div className='main-info'>
                <h1 className='title-h1'>Hello, I'm Phil Taboada</h1>
                <p className='sub-title'>I'm a Front <span className='color-dev'>Developer</span></p>
                <ul className='social-medias'>
                    <li className='icon-li'><a className='media-i' href="https://www.linkedin.com/in/phil-taboada-6b2a07174/"><i className="fa-brands fa-linkedin fa-3x"></i></a></li>
                    <li className='icon-li'><a className='media-i' href="https://github.com/philtaboada"><i className="fa-brands fa-github fa-3x"></i></a></li>
                    <li className='icon-li'><a className='media-i' href="#"><i className="fa-brands fa-behance-square fa-3x"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Main