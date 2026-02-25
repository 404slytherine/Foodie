import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"

const Layout = () => {

  const {pathname} = useLocation()
  // console.log(pathname);

  useEffect(()=> {
    window.scrollTo(0,0)
  },[pathname])

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default Layout