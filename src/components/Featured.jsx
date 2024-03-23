'use client'

import React, { useState } from 'react'
import '../styles/Featured.css'
import Image from 'next/image'

const Featured = () => {
  const [index,setIndex] = useState(0)
    const images = [
        "/img/featured.jpg",
        "/img/featured-1.jpg",
        "/img/featured-2.jpg",
    ]

    const handleArrow = (direction) => {
      if(direction === "l"){
        setIndex(index !==0 ? index-1 : 2)
      }
      if(direction === "r"){
        setIndex(index !==2 ? index+1 : 0)
      }
    }

  return (
    <div className="container-feature">
      <div className="arrowContainer" style={{left: 0}} onClick={() =>handleArrow("l")}>
        <Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain'/>
      </div>
        <div className="wrapper" style={{transform: `translateX(${-100*index}vw)`}}>
        {images.map((img,i) => (
            <div className="imgContainer" key={i}>
                <Image src={img} alt='' layout='fill' objectFit='cover' />
            </div>
              ))}
        </div>
        <div className="arrowContainer" style={{right: 0}} onClick={() =>handleArrow("r")}>
        <Image src="/img/arrowr.png" alt='' layout='fill' objectFit='contain'/>
        </div>
    </div>
  )
}

export default Featured