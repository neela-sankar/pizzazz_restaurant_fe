import React from 'react'
import '../styles/PizzaCard.css'
import Image from 'next/image'

const PizzaCard = () => {

  return (
    
    <div className="wrapper-list">
      <div className="containerCard">
        <Image src="/img/cheese-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Quattro Formaggi Pizza</h1>
        <span className="price">$20.50</span>
        <p className="desc">
        Savor the rich symphony of cheeses on our Quattro Formaggio Supreme, where mozzarella, parmesan, asiago, and provolone unite in a divine fusion, creating a pizza experience that transcends ordinary indulgence.
        </p>
      </div>
      <div className="containerCard">
      <Image src="/img/veggie-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Garden Symphony Pizza</h1>
        <p className="desc">
        Savor the Garden Symphony Pizza: a vibrant medley of farm-fresh vegetables dancing on a perfect crust. Indulge in this stylish, veggie-packed delight, where every bite is a celebration of nature's bounty.
        </p>
      </div>
      <div className="containerCard">
      <Image src="/img/pepproni-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Zesty Pepperoni Royale Pizza</h1>
        <p className="desc">
        Savor the bold and zesty symphony of flavors with our 'Zesty Pepperoni Royale'—a pizza masterpiece featuring premium pepperoni slices atop a canvas of melted cheese and our signature sauce, delivering an unrivaled taste experience.
        </p>
      </div>
      <div className="containerCard">
      <Image src="/img/meat-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Meat Symphony Pizza</h1>
        <p className="desc">
        Embark on a flavor journey with our 'Savory Meat Symphony Pizza,' a tantalizing masterpiece harmonizing premium cuts for a carnivorous delight that will leave your taste buds singing in satisfaction.
        </p>
      </div>
      <div className="containerCard">
      <Image src="/img/margherita-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Bella Margherita Eleganza</h1>
        <p className="desc">
        Indulge in pure pizza perfection with 'Bella Margherita Eleganza.' This classic masterpiece showcases the finest ingredients, offering a symphony of fresh tomatoes, creamy mozzarella, and fragrant basil on a golden crust for an exquisite taste experience.
        </p>
      </div>
      <div className="containerCard">
      <Image src="/img/bbq-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Smokey BBQ Chicken Bliss</h1>
        <p className="desc">
        Savor the bold flavors of our 'Smokey BBQ Chicken Bliss' pizza, where succulent grilled chicken meets tangy barbecue sauce, topped with a melty blend of cheeses. A delectable journey of smokiness and savory goodness awaits in every bite.
        </p>
      </div>
      <div className="containerCard">
      <Image src="/img/hawaiian-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Tropical Luau Delight</h1>
        <p className="desc">
        Transport your taste buds to a tropical paradise with our 'Tropical Luau Delight' Hawaiian pizza. Experience a harmonious blend of sweet pineapple, savory ham, and a burst of flavors atop a golden crust for a true island-inspired indulgence.
        </p>
      </div>
      <div className="containerCard">
      <Image src="/img/buffalo-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Blazing Buffalo Temptation Pizza</h1>
        <p className="desc">
        Ignite your taste buds with our 'Blazing Buffalo Temptation Pizza.' Featuring fiery buffalo sauce, tender chicken, and a medley of cheeses, this bold creation is a flavor explosion that brings the heat to every delicious slice.
        </p>
      </div>
      <div className="containerCard">
      <Image src="/img/supreme-pizza.png" alt='' width={250} height={250} />
        <h1 className="title">Ultimate Supreme Extravaganza</h1>
        <p className="desc">
        Dive into a culinary spectacle with our 'Ultimate Supreme Extravaganza' pizza. Packed with a medley of premium toppings, it's a symphony of flavors, textures, and culinary perfection that will satisfy even the most discerning palates.
        </p>
      </div>
    </div>
    


    
  )
}

export default PizzaCard