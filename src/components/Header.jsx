import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [darkTheme, setDarkTheme] = useState(false);
  const changeTheme = ()=> {
    setDarkTheme((prev) => !prev);
    document.body.classList.toggle("dark-theme");
  }

  return (
    <header className="bg-white shadow shadow-gray-300 navSticky">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 h-auto w-[150px]">
            <span className="sr-only">Your Company</span>
            <img src="/Logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-8 text-[#FF7426]" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="" className="text-[16px] font-semibold text-gray-900 hover:text-[#FF7426]">
            Home
          </Link>
          <Link to="recipes" className="text-[16px] font-semibold text-gray-900 hover:text-[#FF7426]">
            Recipes
          </Link>
          <Link to="contact" className="text-[16px] font-semibold text-gray-900 hover:text-[#FF7426]">
            Contact
          </Link>
          <Link to="about" className="text-[16px] font-semibold text-gray-900 hover:text-[#FF7426]">
            About us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6">
          <Link to="/favourites" className="text-[20px] font-semibold text-black hover:text-[#FF7426] cursor-pointer" title='Favourites'>
            <i className="ri-bookmark-line"></i>
          </Link>
          <button className="text-[20px] font-semibold text-black hover:text-[#FF7426] cursor-pointer" title='Theme' onClick={changeTheme}>
            <i className={darkTheme ? "ri-sun-line" : "ri-moon-line"}></i>
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src="/Logo.svg" alt="Logo" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-8 text-[#FF7426]" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to=""
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-[#FF7426]"
                >
                  Home
                </Link>
                <Link
                  to="recipes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-[#FF7426]"
                >
                  Recipes
                </Link>
                <Link
                  to="contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-[#FF7426]"
                >
                  Contact
                </Link>
                <Link
                  to="about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-[#FF7426]"
                >
                  About us
                </Link>
              </div>
              <div className="py-6 flex gap-5">
                <Link to="favourites" 
                onClick={() => setMobileMenuOpen(false)} className="text-[20px] font-semibold text-black hover:text-[#FF7426]" title='Whishlist'>
                  <i className="ri-heart-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header