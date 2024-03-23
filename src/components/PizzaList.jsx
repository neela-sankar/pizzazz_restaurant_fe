import React from 'react'
import '../styles/PizzaList.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className="container-list">
        <h1 className="title">Discover the Artistry of Pizzazz Express's Signature Pies!</h1>
        <p className="descList">
        Indulge in a culinary adventure at Pizzazz Express, where our pizza menu boasts a symphony of flavors. From timeless classics to innovative delights, each slice is a masterpiece crafted for your enjoyment. Experience the perfect blend of premium ingredients and culinary passion in every bite.
        </p>
            <PizzaCard />
    </div>
  )
}

export default PizzaList