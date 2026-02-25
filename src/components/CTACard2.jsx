import React from 'react'
import { Link } from 'react-router-dom'

const CTACard2 = () => {
  return (
    <Link to="/contact" className="cta-card cta-card-1">
        <h3 className="text-white text-center font-semibold">Don’t forget to eat <br />
        healthy food</h3>
        <img src="/CTA/Plate.png" alt="Plate" />
        <p className="text-white opacity-60">www.foodieland.com</p>
    </Link>
  )
}

export default CTACard2