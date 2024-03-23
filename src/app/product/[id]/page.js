"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import '../../../styles/Product.css'

const Product = () => {
  const[size,setSize] = useState(0)
  const pizza = {
    id:1,
    img:"/img/cheese-pizza.png",
    name:"Quattro Formaggi Pizza",
    price:[19.9,23.9,27.9],
    desc:"Savor the rich symphony of cheeses on our Quattro Formaggio Supreme, where mozzarella, parmesan, asiago, and provolone unite in a divine fusion, creating a pizza experience that transcends ordinary indulgence."
  }

  return (
    <div className="containerProduct">
      <div className="leftProduct">
        <div className="imgContainer">
          <Image src={pizza.img} objectFit='contain' layout='fill' alt='' />
        </div>
      </div>

      <div className="rightProduct">
        <h1 className="titleProduct">{pizza.name}</h1>
        <span className="priceProduct">${pizza.price[size]}</span>
        <p className="descProduct">{pizza.desc}</p>
        <h3 className="choose">Choose the Size</h3>
        <div className="sizes">
          <div className="size" onClick={() => setSize(0)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className="number">Small</span>
          </div>
          <div className="size" onClick={() => setSize(1)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className="number">Medium</span>
          </div>
          <div className="size" onClick={() => setSize(2)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className="number">Large</span>
          </div>
        </div>
        <h3 className="choose">Choose additional ingredients</h3>
        <div className="ingredients">
          <div className="option">
            <input type="checkbox" id='double' name='double' className='checkbox' />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="option">
            <input type="checkbox" id='cheese' name='cheese' className='checkbox' />
            <label htmlFor="cheese">Extra cheese</label>
          </div>
          <div className="option">
            <input type="checkbox" id='spicy' name='spicy' className='checkbox' />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className="option">
            <input type="checkbox" id='garlic' name='garlic' className='checkbox' />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className="add">
          <input type="number" defaultValue={1} className='quantityProduct' />
          <button className='buttonProduct'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product