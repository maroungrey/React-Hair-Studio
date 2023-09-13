import React from 'react'
import Hero from "../assets/banner-1.webp"

export default function Banner() {
  return (
    <div>
        <section> 
            <img
                className="d-block w-100"
                src={Hero}
                alt='Hero Image'
            />
        </section>
    </div>
  )
}
