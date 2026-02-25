import { Link } from "react-router-dom"

const CTACard = () => {
  return (
    <Link to="/contact" className="cta-card">
        <h3 className="text-white text-center font-semibold">Don’t forget to eat <br />
        healthy food</h3>
        <img src="/CTA/Plate.png" alt="Plate" />
        <p className="text-white opacity-60">www.foodieland.com</p>
    </Link>
  )
}

export default CTACard