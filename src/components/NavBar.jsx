import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <>
            <h1 className='title'> Ecommerce ClickShop </h1>
            <span className='title'>Tu tienda de confianza</span>
            <nav>
                <ul>
                    <li>
                        <a>Inicio</a>
                    </li>
                    <li>
                        <a>Categorias</a>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                    <CartWidget></CartWidget>
                </ul>
            </nav>
        </>

    )
}

export default NavBar