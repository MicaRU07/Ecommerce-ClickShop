import React from 'react'
import carro from '../../public/carrito.jpg'



const CartWidget = () => {
  return (
    <>
    <img className='img' src={carro}></img>
    <span>10</span>
    </>
  )
}

export default CartWidget