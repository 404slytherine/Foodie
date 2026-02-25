import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="lg:h-[80vh] h-auto text-center flex flex-col justify-center items-center lg:p-0 py-7">
        <h3 className="w-full font-bold text-2xl bg-red-400 py-2.5">Error 404!</h3>
        <h2 className="font-bold md:text-4xl text-3xl mt-12">Page Not Found</h2>
        <p className="mt-3.5 sm:p-0 px-3">The Page You're Looking For Is Not Available.</p>
        <Link to="/" className="btn-1 sm:mt-12 mt-5"><i className="ri-home-7-fill me-1"></i> Back To Home</Link>
    </div>
  )
}

export default PageNotFound