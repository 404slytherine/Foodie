import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="sm:py-6 pe-0 sm:mt-10 mt-5">
      <div className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="w-full flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between pb-4">
          <div className="pb-3 lg:pb-6 col-span-full md:pb-0 md:col-span-6">
            <Link to="/" className="flex justify-center space-x-3 md:justify-start">
              <img src="/Logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <ul className="flex justify-center gap-4 lg:gap-10 md:gap-8">
              <li>
                <Link to="" className="text-[16px] font-semibold text-gray-900 hover:text-[#FF7426]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="recipes" className="text-[16px] font-semibold text-gray-900 hover:text-[#FF7426]">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="contact" className="text-[16px] font-semibold text-gray-900 hover:text-[#FF7426]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="about" className="text-[16px] font-semibold text-gray-900 hover:text-[#FF7426]">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between pt-3 lg:pt-6 md:pt-4 border-t-1 border-gray-300">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span className="text-gray-900 font-semibold">©2025 All rights reserved</span>
          </div>
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6 sm:mt-0 mt-2 md:gap-0 gap-2">
            <Link to="privacy" className="text-gray-900 font-semibold">
              Privacy policy
            </Link>
            <Link to="terms" className="text-gray-900 font-semibold">
              Terms of service
            </Link>
          </div>
          <div className="flex justify-center pt-4 space-x-3.5 lg:pt-0 lg:col-end-13">
            <Link to="" className="social-media-button social-button--facebook" aria-label="Facebook">
              <span className="social-button__inner">
                <i className="ri-facebook-fill"></i>
              </span>
            </Link>
            <Link to="" className="social-media-button social-button--instagram" aria-label="Instagram">
              <span className="social-button__inner">
                <i className="ri-instagram-line"></i>
              </span>
            </Link>
            <Link to="" className="social-media-button social-button--x" aria-label="X">
              <span className="social-button__inner">
                <i className="ri-twitter-x-line"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer