import React from 'react'

export const ProyectsSection = () => {
    return (
        <>
            <section id='proyects'>
                <h1 className='proyects-tittle'>Mis Proyectos</h1>
                <div className='proyects-container'>


                    <div className='card'>
                        <img src="./assets/scaloneta.png" alt="" />
                        <h4>Single Page Aplication</h4>
                        <p>Este proyecto es una SPA del seleccionado argentino.
                            <br />
                            Herramientas: CSS,React,React-Router
                        </p>
                        <a href="https://github.com/leasabus/Scaloneta-app" target="_blank"> <button>Ver Repositorio</button> </a>
                        <a href="https://leasabus.github.io/Scaloneta-app/" target="_blank"><button>Ver proyecto</button> </a>
                    </div>

                    <div className='card'>
                        <img src="./assets/shoesapp.png" alt="" />
                        <h4>Mini e-commerce</h4>
                        <p>Pequeño sitio e-commerce de calzado.
                            <br />
                            Herramientas: Bootstrap,React,React-Router,Animations
                        </p>
                        <a href="https://github.com/leasabus/Shoes-App-SPA" target="_blank"> <button>Ver Repositorio</button> </a>
                        <a href="https://shoes-app-spa.netlify.app/shoeslist" target="_blank"><button>Ver proyecto</button> </a>
                    </div>
                    <div className='card'>
                        <img src="./assets/giftexpert.png" alt="" />
                        <h4>Buscador de Gifs</h4>
                        <p>Creado con una solicitud a la API de giphy
                            <br />
                            Herramientas:Fetch-API,React,CSS
                        </p>
                        <a href="https://github.com/leasabus/GifExpertApp-React" target="_blank"> <button>Ver Repositorio</button> </a>
                        <a href="https://giftexpertapp-leasabus.netlify.app/" target="_blank"><button>Ver proyecto</button></a>
                    </div>

                    <div className='card'>
                        <img src="./assets/porfolio.jpg" alt="" />
                        <h4>Portfolio web</h4>
                        <p>Mi sitio web creado con React.
                            <br />
                            Herramientas:Boostrap,React
                        </p>
                        <a href="https://github.com/leasabus/Portfolio" target="_blank"> <button >Ver Repositorio</button> </a>
                        <button>Ver proyecto</button>
                    </div>




                </div>
            </section>

        </>
    )
}
