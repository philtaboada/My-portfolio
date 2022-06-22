import React from 'react'
import crud from '../assets/crud-hmtl-css-js.png'
import crudreact from '../assets/crud-with-rreact.png'
import rickmorty1 from '../assets/rick&mortyapp.png'
import weatherapp from '../assets/weatherApp.png'
import quotes from '../assets/quotes-apps.png'
import nftalone from '../assets/only-css-html.png'


const MyPortfolio = () => {
    return (
        <div>
            <a name='my-portfolio'></a>
            <div className='title-h1-portfolio'>
                <h1 className='my-portfolio-title'>My Portfolio</h1>
            </div>
            <div className='card-portfolio'>
                <div className="card-container-my-portfolio">
                    <img className='portfolio-img' src={crud} alt="" />
                    <h3 className='title-of-card-portfolio'>CRUD</h3>
                    <p className='colorp'>Primer proyecto realizado se use las tecnologias basicas, es un CRUD, para una tienda en linea, puedes añadir, quitar productos, o editar un producto que se subio mal. Se conecto por medio de una API rest.</p>
                    <p className='colorp size-font'>Tecnologias que se usaron <i className="fa-brands fa-js"></i>,<i className="fa-brands fa-html5 color-tecnology-used"></i>,<i className="fa-brands fa-css3 color-tecnology-used"></i>.</p>
                    <div className='container-myportfolio-icon-link'>
                        <div className='box-portfolio-links'>
                            <a href="https://github.com/philtaboada/CRUD-frontend"><i class="fa-brands fa-github-square fa-4x color-icon-portfolio-link"></i></a>
                            <p>My code</p>
                        </div>
                        <div className='box-portfolio-links'>
                            <a href="https://first-crud-html-css-js.netlify.app/"><i class="fa-solid fa-link fa-4x color-icon-portfolio-link"></i></a>
                            <p>Visit my works</p>
                        </div>
                    </div>
                </div>
                <div className="card-container-my-portfolio">
                    <img className='portfolio-img' src={crudreact} alt="" />
                    <h3 className='title-of-card-portfolio'>CRUD with React js</h3>
                    <p className='colorp'>Proyecto realizado para la administración de personas, usuarios. Puedes añadir un nuevo trabajador, eliminar a los que ya no trabajaran, editar, etc. Se conecto por medio de una API rest</p>
                    <p className='colorp size-font'>Tecnologias que se usaron <i className="fa-brands fa-js"></i>,<i className="fa-brands fa-html5 color-tecnology-used"></i>,<i className="fa-brands fa-css3 color-tecnology-used"></i>,<i className="fa-brands fa-react color-tecnology-used"></i>.</p>
                    <div className='container-myportfolio-icon-link'>
                        <div className='box-portfolio-links'>
                            <a href="https://github.com/philtaboada/CRUD"><i class="fa-brands fa-github-square fa-4x color-icon-portfolio-link"></i></a>
                            <p>My code</p>
                        </div>
                        <div className='box-portfolio-links'>
                            <a href="https://crud-with-react.netlify.app/"><i class="fa-solid fa-link fa-4x color-icon-portfolio-link"></i></a>
                            <p>Visit my works</p>
                        </div>
                    </div>
                </div>
                <div className="card-container-my-portfolio">
                    <img className='portfolio-img' src={rickmorty1} alt="" />
                    <h3 className='title-of-card-portfolio'>API with Rick & Morty</h3>
                    <p className='colorp'>Usando el API de Ricky&Morty se despleagaron los datos y creamos un fronted llamativo. se le añadio un buscador y algunos diseños extras.</p>
                    <p className='colorp size-font'>Tecnologias que se usaron <i className="fa-brands fa-js"></i>,<i className="fa-brands fa-html5 color-tecnology-used"></i>,<i className="fa-brands fa-css3 color-tecnology-used"></i>,<i className="fa-brands fa-react color-tecnology-used"></i>.</p>
                    <div className='container-myportfolio-icon-link'>
                        <div className='box-portfolio-links'>
                            <a href="https://github.com/philtaboada/Ricky-Morty-API"><i class="fa-brands fa-github-square fa-4x color-icon-portfolio-link"></i></a>
                            <p>My code</p>
                        </div>
                        <div className='box-portfolio-links'>
                            <a href="https://rickandmorty-api-2022.netlify.app/"><i class="fa-solid fa-link fa-4x color-icon-portfolio-link"></i></a>
                            <p>Visit my works</p>
                        </div>
                    </div>
                </div>
                <div className="card-container-my-portfolio">
                    <img className='portfolio-img' src={weatherapp} alt="" />
                    <h3 className='title-of-card-portfolio'>Weather App</h3>
                    <p className='colorp'>Una app muy interesante, aunque con un diseño no tan bueno, se uso un API para desplegar los datos, esta App toma tu ubicación y te indica la temperatura de tu ciudad, puedes calcularla en Kelvin y Celcius</p>
                    <p className='colorp size-font'>Tecnologias que se usaron <i className="fa-brands fa-js"></i>,<i className="fa-brands fa-html5 color-tecnology-used"></i>,<i className="fa-brands fa-css3 color-tecnology-used"></i>,<i className="fa-brands fa-react color-tecnology-used"></i>.</p>
                    <div className='container-myportfolio-icon-link'>
                        <div className='box-portfolio-links'>
                            <a href="https://github.com/philtaboada/Weather"><i class="fa-brands fa-github-square fa-4x color-icon-portfolio-link"></i></a>
                            <p>My code</p>
                        </div>
                        <div className='box-portfolio-links'>
                            <a href="https://gorgeous-tulumba-5fe6be.netlify.app/"><i class="fa-solid fa-link fa-4x color-icon-portfolio-link"></i></a>
                            <p>Visit my works</p>
                        </div>
                    </div>
                </div>
                <div className="card-container-my-portfolio">
                    <img className='portfolio-img' src={nftalone} alt="" />
                    <h3 className='title-of-card-portfolio'>NFT-card</h3>
                    <p className='colorp'>Esta es un Card muy sencilla, fue un reto de Frontend Mentor.</p>
                    <p className='colorp size-font'>Tecnologias que se usaron <i className="fa-brands fa-html5 color-tecnology-used"></i>,<i className="fa-brands fa-css3 color-tecnology-used"></i>.</p>
                    <div className='container-myportfolio-icon-link'>
                        <div className='box-portfolio-links'>
                            <a href="https://github.com/philtaboada/NFT-project"><i class="fa-brands fa-github-square fa-4x color-icon-portfolio-link"></i></a>
                            <p>My code</p>
                        </div>
                        <div className='box-portfolio-links'>
                            <a href="https://lustrous-daifuku-8c5433.netlify.app/"><i class="fa-solid fa-link fa-4x color-icon-portfolio-link"></i></a>
                            <p>Visit my works</p>
                        </div>
                    </div>
                </div>
                <div className="card-container-my-portfolio">
                    <img className='portfolio-img' src={quotes} alt="" />
                    <h3 className='title-of-card-portfolio'>Quotes-app</h3>
                    <p className='colorp'>Una de mis primeras Apps hecha con React, te da una frase aletoriamente.</p>
                    <p className='colorp size-font'>Tecnologias que se usaron <i className="fa-brands fa-js"></i>,<i className="fa-brands fa-html5 color-tecnology-used"></i>,<i className="fa-brands fa-css3 color-tecnology-used"></i>,<i className="fa-brands fa-react color-tecnology-used"></i>.</p>
                    <div className='container-myportfolio-icon-link'>
                        <div className='box-portfolio-links'>
                            <a href="https://github.com/philtaboada/Quotes-react"><i class="fa-brands fa-github-square fa-4x color-icon-portfolio-link"></i></a>
                            <p>My code</p>
                        </div>
                        <div className='box-portfolio-links'>
                            <a href="https://dainty-moxie-92ee2f.netlify.app/"><i class="fa-solid fa-link fa-4x color-icon-portfolio-link"></i></a>
                            <p>Visit my works</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio

