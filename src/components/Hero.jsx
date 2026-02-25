import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Hero = () => {

    const heroData = [
        {
            id: 1,
            dishName: "Spicy delicious chicken wings",
            dishDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
            prepMin: "30",
            dishType: "Chicken",
            img: "Hero/Hero-1.png",
            cookName: "John Smith",
            cookImg: "Users/1.jpg",
            dishDate: "10 Mar 2022",
        },
        {
            id: 2,
            dishName: "Big and Juicy Cheeseburger",
            dishDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
            prepMin: "45",
            dishType: "Snack",
            img: "Hero/Hero-2.png",
            cookName: "Will Smith",
            cookImg: "Users/2.jpg",
            dishDate: "21 Jan 2021",
        },
        {
            id: 3,
            dishName: "Fresh and Healthy Mixed Salad",
            dishDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
            prepMin: "25",
            dishType: "Healthy",
            img: "Hero/Hero-3.jpg",
            cookName: "Jack Doe",
            cookImg: "Users/3.jpg",
            dishDate: "05 Jan 2024",
        },
        {
            id: 4,
            dishName: "Fruity Pancake with Blueberry",
            dishDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
            prepMin: "40",
            dishType: "Dessert",
            img: "Hero/Hero-4.jpg",
            cookName: "Alex Carey",
            cookImg: "Users/4.jpg",
            dishDate: "10 Aug 2023",
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        fade: true,
        waitForAnimate: true,
        arrows: false,
      };

  return (
    <>
    <div className="slider-main-parent mx-auto">
        <Slider {...settings}>
            {heroData.map((d)=> (
                <div key={d.id}>
                    <div className="static main-slider-div flex my-8 md:rounded-[40px] rounded-[20px] overflow-hidden">
                        <div className="absolute left-[45%] top-16 lg:block hidden">
                            <img className="lg:h-[100px] md:h-[90px]" src="Hero/Badge.png" alt="Badge" />
                        </div>
                        <div className="lg:w-1/2 md:w-3/4 w-full bg-[#E7FAFE] lg:p-10 md:p-7 p-4">
                            <div className="w-fit lg:flex md:flex hidden items-center gap-2.5 bg-white rounded-3xl py-2.5 px-4 shadow shadow-gray-400">
                                <img src="Hero/Hot Recepies.png" alt="Icon" />
                                <h6 className="font-medium text-[14px]">Hot Recipes</h6>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl lg:text-5xl md:text-4xl font-bold mt-0 md:mt-4">{d.dishName}</h1>
                                <p className="text-gray-500 md:mt-4 mt-2 md:text-[16px] text-[14px]">{d.dishDesc}</p>
                            </div>
                            <div className="flex gap-5 mt-6 lg:mt-7">
                                <div className="flex items-center justify-center lg:gap-3 gap-2 rounded-3xl lg:py-2.5 py-1 lg:px-4 px-3.5 bg-[#d7e9ec]">
                                    <i className="ri-timer-fill md:text-[17px] text-[15px]"></i>
                                    <p className="md:text-[17px] text-[14px]">{d.prepMin} Minutes</p>
                                </div>
                                <div className="flex items-center justify-center gap-3 rounded-3xl py-2.5 px-4 bg-[#d7e9ec]">
                                    <i className="ri-restaurant-fill md:text-[17px] text-[15px]"></i>
                                    <p className="md:text-[17px] text-[14px]">{d.dishType}</p>
                                </div>
                            </div>
                            <div className="flex md:flex-row sm:flex-row flex-col-reverse md:gap-0 gap-5 justify-between user-box">
                                <div className="flex items-center lg:gap-4 gap-3">
                                    <img src="Users/John-Smith.png" alt="User" className="h-[50px] w-[50px] rounded-full" />
                                    <div className="flex flex-col justify-center items-center">
                                        <h5 className="font-bold">{d.cookName}</h5>
                                        <p className="text-gray-500 font-medium text-[14px]">{d.dishDate}</p>
                                    </div>
                                </div>
                                <Link to="/recipes" className="flex md:w-auto w-fit items-center justify-center lg:gap-3 gap-2.5 lg:py-4 py-3 lg:px-5 px-3.5 rounded-2xl bg-black text-white cursor-pointer">View All Recipes < i className="ri-arrow-right-long-line text-[18px]"></i></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:block md:block hidden">
                            <img src={d.img} alt="Dish 1" className="h-full lg:object-fill md:object-cover w-full" loading="lazy" />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    </>
  )
}

export default Hero