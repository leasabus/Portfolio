import React from 'react'

export const ProyectsSection = () => {
    return (
        <>
            <section id='proyects'>
                <h1 className='proyects-tittle'>Mis Proyectos</h1>
                <div className='proyects-container'>


                    <div className='card'>
                        <img src="./assets/scaloneta.png" alt="" />
                        <div className='card-info'>
                            <h4>Single Page Aplication</h4>
                            <p>Este proyecto es una SPA del seleccionado argentino.
                                <br />
                                Herramientas: CSS,React,React-Router
                            </p>
                        </div>
                        <a href="https://github.com/leasabus/Scaloneta-app" target="_blank"> <button>Ver Repositorio</button> </a>
                        <a href="https://leasabus.github.io/Scaloneta-app/" target="_blank"><button>Ver proyecto</button> </a>
                    </div>

                    <div className='card'>
                        <img src="./assets/shoesapp.png" alt="" />
                        <div className='card-info'>
                            <h4>Mini e-commerce</h4>
                            <p>Pequeño sitio e-commerce de calzado.
                                <br />
                                Herramientas: Bootstrap,React,React-Router,Animations
                            </p>
                        </div>
                        <a href="https://github.com/leasabus/Shoes-App-SPA" target="_blank"> <button>Ver Repositorio</button> </a>
                        <a href="https://shoesappspa.netlify.app/" target="_blank"><button>Ver proyecto</button> </a>
                    </div>
                    <div className='card'>
                        <img src="./assets/giftexpert.png" alt="" />
                        <div className='card-info'>
                            <h4>Buscador de Gifs</h4>
                            <p>Creado con una solicitud a la API de giphy
                                <br />
                                Herramientas: Fetch-API,React,CSS
                            </p>
                        </div>
                        <a href="https://github.com/leasabus/GifExpertApp-React" target="_blank"> <button>Ver Repositorio</button> </a>
                        <a href="https://giftexpertapp-leasabus.netlify.app/" target="_blank"><button>Ver proyecto</button></a>
                    </div>

                    <div className='card'>
                        <img src="./assets/weatherapp.jpg" />
                        <div className='card-info'>
                            <h4>WeatherApp</h4>
                            <p>Widget del clima utilizando la API de openweather
                                <br />
                                Herramientas: TailwindCss,React, Fetch
                            </p>
                        </div>
                        <a href="https://github.com/leasabus/Weather-app-react" target="_blank"> <button >Ver Repositorio</button></a>
                        <a href="https://weather-app-leasabus.netlify.app/" target="_blank"> <button>Ver proyecto</button></a>
                    </div>

                    <div className='card'>
                        <img src="./assets/e-shop-app.jpg" />
                        <div className='card-info'>
                            <h4>E-shop</h4>
                            <p>E-commerce utilizando la API de fakestore
                                <br />
                                Herramientas: TailwindCss,React, Fetch, Redux
                            </p>
                        </div>
                        <a href="https://github.com/leasabus/e-commerce-app" target="_blank"> <button >Ver Repositorio</button></a>
                        <a href="https://e-shop-app.netlify.app/" target="_blank"> <button>Ver proyecto</button></a>
                    </div>

                    <div className='card'>
                        <img src="./assets/aerolab.jpg" />
                        <div className='card-info'>
                            <h4>Aerolab Challenge</h4>
                            <p>Sitio web para la empresa donde se muestran productos digitales
                                <br />
                                Herramientas: ChakraUI,React, Axios, Typescript
                            </p>
                        </div>
                        <a href="https://github.com/leasabus/aerolab-challenge" target="_blank"> <button >Ver Repositorio</button></a>
                        <a href="https://aerolab-challenge-ts.netlify.app/" target="_blank"> <button>Ver proyecto</button></a>
                    </div>




                </div>
            </section>

        </>
    )
}
