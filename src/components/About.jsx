import CTACard2 from './CTACard2.jsx'
import Newsletter from './Newsletter'

const About = () => {
  return (
    <>
      <div className="max-w-7xl lg:mx-auto md:mx-5 mx-2.5 sm:mt-7 mt-5 px-5">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold text-center">About Us</h1>
        <img src="/About/About Main.png" className="about-image w-full sm:mt-10 mt-5 rounded-2xl" alt="About Main" />
        <div className="flex flex-wrap justify-between">
          <div className="lg:w-[65%] md:w-[60%] sm:w-[70%] w-[100%]">
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Cooking Made Simple, Delicious & Fun</h2>
              <p className='sm:mt-5 mt-2.5'>At Foodieland, we believe that anyone can be a chef. Whether you're just starting out or a seasoned home cook, our goal is to make cooking a joyful and fulfilling experience. Our easy-to-follow recipes are designed for real life balanced, beautiful, and packed with flavor.</p>
              <p className='sm:mt-2.5 mt-1.5'>From quick 30-minute meals to wholesome vegan dishes and indulgent desserts, we bring diverse tastes from around the world into your kitchen.</p>
            </div>
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Why We Do What We Do</h2>
              <img src="/About/Why We Do What We Do.avif" className='about-image sm:mt-5 mt-2.5 rounded-2xl w-full' alt="About-1" />
              <p className='sm:mt-5 mt-1.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere vel quam in vulputate. Nullam varius lacus et nunc facilisis, a accumsan neque sollicitudin. Nunc efficitur, nisi ut tincidunt tincidunt, felis nisi scelerisque nunc, eget sollicitudin erat ante ut nisl.</p>
              <p className='sm:mt-5 mt-1.5'>We strive to promote healthier eating habits without compromising on taste. Our team of passionate food lovers, chefs, and photographers curates every dish with love and creativity.</p>
            </div>
            <div className='sm:mt-10 mt-6'>
              <h2 className="sm:text-3xl text-2xl font-semibold">Join the Foodieland Community</h2>
              <img src="/About/Join the Foodieland Community.jpg" className='about-image sm:mt-5 mt-2.5 rounded-2xl w-full' alt="About-2" />
              <p className='sm:mt-5 mt-1.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non viverra elit, nec sagittis turpis. Quisque accumsan orci nec sem volutpat, non feugiat tellus gravida.</p>
              <p className='sm:mt-2.5 mt-1.5'>Follow us on social media, sign up for our newsletter, or explore our newest collections whether it’s a new breakfast idea, weekend dinner, or holiday treat, you’ll find something special here every day.</p>
            </div>
          </div>
          <div className='lg:w-[30%] md:w-[35%] sm:w-[35%] w-[100%] sm:mt-8 mt-3 relative'>
            <CTACard2 />
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  )
}

export default About