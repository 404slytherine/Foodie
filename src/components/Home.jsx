import { useContext } from 'react'
import Hero from './Hero.jsx'
import RecipeCard from './RecipeCard.jsx'
import CTACard from './CTACard.jsx'
import Popular from './Popular.jsx'
import Newsletter from './Newsletter.jsx'
import { Link } from "react-router-dom"
import { RecipeContext } from '../Contexts/RecipeContext.jsx'

const Home = () => {

    const {recipe} = useContext(RecipeContext);

    const categories = [
        {
            bgColor: 'rgba(112,130,70,0.1)',
            img: '/Categories/Breakfast.png',
            name: 'Breakfast',
        },
        {
            bgColor: 'rgba(108, 198, 63, 0.1)',
            img: '/Categories/Vegan.png',
            name: 'Vegan',
        },
        {
            bgColor: 'rgba(204, 38, 27, 0.1)',
            img: '/Categories/Meat.png',
            name: 'Non-Veg',
        },
        {
            bgColor: 'rgba(240, 158, 0, 0.1)',
            img: '/Categories/Dessert.png',
            name: 'Dessert',
        },
        {
            bgColor: 'rgba(0, 0, 0, 0.05',
            img: '/Categories/Lunch.png',
            name: 'Lunch',
        },
        {
            bgColor: 'rgba(0, 0, 0, 0.05)',
            img: '/Categories/Chocolate.png',
            name: 'Chocolate',
        },
    ]

    return (
        <>

            <Hero></Hero>

            {/* Categories */}
            <div className='lg:mt-20 mt-12 max-w-7xl mx-auto lg:px-8 px-6'>
                <div className='flex md:flex-row sm:flex-row justify-between items-start gap-5'>
                    <h2 className='md:text-3xl text-2xl font-bold'>Categories</h2>
                </div>

                <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2  lg:gap-10 md:gap-7 gap-4 md:mt-10 mt-8'>
                    {categories.map((c) => (
                        <Link to="recipes" state={{ category: c.name }} className='flex flex-col justify-center items-center gap-5 py-5 px-10 rounded-2xl cursor-pointer' style={{ background: c.bgColor }} key={c.name}>
                            <img className='lg:w-[80px] w-[60px]' src={c.img} alt={c.name} />
                            <h4 className='font-bold'>{c.name}</h4>
                        </Link>
                    ))}
                </div>
            </div>
            {/* Categories End */}

            {/* Recipes */}
            <div className='max-w-7xl mx-auto md:mt-25 mt-15 lg:px-8 px-6 flex flex-col'>
                <div className='flex flex-col items-center md:gap-5 gap-2.5 text-center'>
                    <h2 className='md:text-5xl text-3xl font-semibold'>Simple and tasty recipes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.</p>
                </div>
                <div className='flex flex-wrap justify-between recipes-parent md:gap-5 gap-2.5 md:mt-10 mt-3'>
                    {recipe.slice(0, 5).map((recipe) => (
                        <RecipeCard key={recipe.name}
                            {...recipe}></RecipeCard>
                    ))}

                    <CTACard></CTACard>

                    {recipe.slice(5, 8).map((recipe) => (
                        <RecipeCard key={recipe.name}
                            {...recipe}></RecipeCard>
                    ))}
                </div>
                <Link to="/recipes" className="w-max mx-auto btn-submit sm:mt-8 mt-5">View All Recipes</Link>
            </div>
            {/* Recipes End */}

            {/* Learn More */}
            <div className='learn-more max-w-7xl mx-auto px-5 flex flex-col lg:flex-row justify-center items-center sm:gap-15 gap-5 md:mt-20 mt-10'>
                <div className='lg:w-1/2 w-full lg:text-left text-center lg:p-0 sm:px-10 px-0'>
                    <h2>Everyone can be a chef in their own kitchen</h2>
                    <p className='mt-3 mb-2.5'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.</p>
                    <button className='btn-1 md:mt-8 mt-3'><Link to="contact" >Learn More <i className="ri-arrow-right-long-line ms-1"></i></Link></button>
                </div>
                <div className='lg:w-1/2'>
                    <img src="Learn More.png" alt="Learn More" />
                </div>
            </div>
            {/* Learn More End */}

            {/* Popular Recipies */}
            <div className='popular-parent max-w-7xl mx-auto flex lg:flex-row flex-col items-center justify-between lg:text-left text-center px-5 lg:mt-25 sm:mt-15 mt-10'>
                <h2>Try this delicious recipe to make your day</h2>
                <p className='lg:mt-0 mt-2.5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae maxime quibusdam quas eligendi voluptatibus id non illo, sunt nostrum vero.</p>
            </div>
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-5 sm:mt-10 mt-7 px-5">
                {recipe.slice(6, 10).map((p) => (
                    <Popular key={p.name} {...p}></Popular>
                ))}
            </div>
            {/* Popular Recipies End */}

            {/* Newsletter */}
            <Newsletter></Newsletter>
            {/* Newsletter End */}

        </>
    )
}

export default Home