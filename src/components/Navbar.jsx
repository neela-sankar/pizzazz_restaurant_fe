import React from 'react'
import '../styles/Navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="container">
        <div className="item">
            <div className="callButton">
                <Image src="/img/telephone.png" alt='telephone' width={32} height={32} />
            </div>
            <div className="texts">
                <div className="text">ORDER NOW!</div>
                <div className="text">012 345 678</div>
            </div>
        </div>
        <div className="item">
            <ul className="list">
                <li className="listItem">
                    <Link href='/'>
                    Homepage
                    </Link>
                    </li>
                <li className="listItem">
                <Link href='product/1'>
                    Products
                </Link>
                    </li>
                <li className="listItem">
                    <Link href='/orders/1'>
                    Menu
                    </Link>
                    </li>
                <Image src='/img/logo.png' alt='logo' width={180} height={90} className='logo' />
                <li className="listItem">Events</li>
                <li className="listItem">Blog</li>
                <li className="listItem">Contact</li>
            </ul>
        </div>
        <div className="item">
            <div className="cart">
                <Link href='/cart'>
                <Image src="/img/cart.png" alt='cart' width={30} height={30} />
                <div className="counter">2</div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar