import React from 'react'
import Image from 'next/image'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="itemFooter">
        <Image src="/img/bg.png" objectFit='cover' layout='fill' alt=''/>
      </div>
{      <div className="itemFooter">
        <div className="cardFooter">
          <h2 className="motto">
          OH YES, WE DID. THE PIZZAZZ EXPRESS, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className="cardFooter">
          <h1 className="titleFooter">FIND OUR RESTAURANTS</h1>
          <p className="textFooter">
            1654 R. Don Road #304
            <br />Singapore, 123456
            <br />+65 9874 5612
          </p>
          <p className="textFooter">
          2356 K. Laquie Rd #235
          <br />Singapore, 123457
            <br />+65 9561 8742
          </p>
          <p className="textFooter">
          1614 E. Erwin St #104
          <br />Singapore, 457123
            <br />+65 9561 1012
          </p>
          <p className="textFooter">
          1614 W. Caroll St #125
          <br />Singapore, 850223
            <br />+65 9561 1013
          </p>
        </div>
        <div className="cardFooter">
          <h1 className="titleFooter">WORKING HOURS</h1>
          <p className="textFooter">
            Monday - Sunday
            <br /> 9:00 - 22:00
          </p>
        </div>
      </div>}
    </div>
  )
}

export default Footer