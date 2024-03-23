import React from 'react'
import Image from 'next/image'
import '../../styles/Cart.css'

const Cart = () => {
  return (
    <div className="containerCart">
        <div className="leftCart">
            <table className="tableCart">
                <tr className="trTitle">
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className="tr">
                    <td>
                        <div className="imgContainerCart">
                            <Image src="/img/cheese-pizza.png" layout='fill' objectFit='cover' alt='' />
                        </div>
                    </td>
                    <td>
                        <span className="nameCart">Quattro Formaggi Pizza</span>
                    </td>
                    <td>
                        <span className="extrasCart">
                        Double ingredient, spicy sauce
                        </span>
                    </td>
                    <td>
                        <span className="priceCart">$19.90</span>
                    </td>
                    <td>
                        <span className="quantityCart">2</span>
                    </td>
                    <td>
                        <span className="totalCart">$39.80</span>
                    </td>
                </tr>
                <tr className="tr">
                    <td>
                        <div className="imgContainerCart">
                            <Image src="/img/veggie-pizza.png" layout='fill' objectFit='cover' alt='' />
                        </div>
                    </td>
                    <td>
                        <span className="nameCart">Garden Symphony Pizza</span>
                    </td>
                    <td>
                        <span className="extrasCart">Double ingredient, spicy sauce</span>
                    </td>
                    <td>
                        <span className="priceCart">$19.90</span>
                    </td>
                    <td>
                        <span className="quantityCart">2</span>
                    </td>
                    <td>
                        <span className="totalCart">$39.80</span>
                    </td>
                </tr>
            </table>
        </div>

        <div className="rightCart">
            <div className="wrapperCart">
                <h2 className="title">CART TOTAL</h2>
                <div className="totalText">
                    <b className="totalTextTitle">SubTotal:</b>$79.60
                </div>
                <div className="totalText">
                    <b className="totalTextTitle">Discount:</b>$0.60
                </div>
                <div className="totalText">
                    <b className="totalTextTitle">Total:</b>$79.00
                </div>
                <button className='buttonCart'>CHECKOUT NOW!</button>
            </div>
        </div>
    </div>
  )
}

export default Cart