import Newsletter from './Newsletter.jsx'
import CTACard2 from './CTACard2.jsx'
import Popular from './Popular.jsx'
import { useParams } from 'react-router-dom'
import { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeContext";

const RecipeDetails = () => {

    const {recipe} = useContext(RecipeContext);

    const { slug } = useParams();
    const selectedRecipe = recipe.find((r) => r.slug === slug)

    const handleCheck = (e) => {
        e.target.classList.toggle("checked");
    }

    return (
        <>
            <div className='max-w-7xl mx-auto md:mt-15 sm:mt-5 mt-2.5 px-5'>
                <div className='flex flex-col sm:gap-8 gap-3.5'>
                    <h1 className='md:text-[40px] sm:text-3xl text-[26px] font-bold'>{selectedRecipe.name}</h1>
                    <div className='flex flex-wrap sm:gap-10 gap-5'>
                        <div className='flex justify-center  mt-4items-center gap-3.5 '>
                            <img src={selectedRecipe.cookImg} alt="User" />
                            <div>
                                <h4 className='text-[16px] font-bold'>{selectedRecipe.cookName}</h4>
                                <p>{selectedRecipe.date}</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap sm:3.5 gap-7'>
                            <div className='flex justify-center items-center gap-3.5 sm:px-7 sm:border-s-2 border-gray-400'>
                                <i className="ri-timer-fill text-2xl"></i>
                                <div>
                                    <p className='font-bold'>PREP TIME</p>
                                    <p>{selectedRecipe.prepTime} Minutes</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-3.5 sm:px-7 sm:border-x-2 border-gray-400'>
                                <i className="ri-timer-fill text-2xl"></i>
                                <div>
                                    <p className='font-bold'>COOK TIME</p>
                                    <p>{selectedRecipe.cookTime} Minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3.5 '>
                            <i className="ri-restaurant-fill text-2xl"></i>
                            <p>{selectedRecipe.category}</p>
                        </div>
                    </div>
                </div>
                <div className='ingredients-main flex flex-wrap justify-between sm:gap-y-10 gap-y-5 md:mt-15 sm:mt-10 mt-7'>
                    <div className='md:w-[67%] w-[100%]'>
                        <iframe width="100%" className='rounded-2xl md:h-[100%] h-[400px]' src={selectedRecipe.video} title={selectedRecipe.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='md:w-[30%] sm:w-[55%] rounded-2xl bg-[#E7FAFE] py-4 px-5'>
                        <h3 className='text-2xl font-semibold mb-5'>Nutrition Information</h3>
                        {selectedRecipe.nutritions.map((n) => (
                            <div className='flex justify-between mt-4 border-b-2 border-gray-300 pb-2' key={n.name}>
                                <p className='text-gray-600 font-semibold'>{n.name}</p>
                                <p className='font-semibold'>{n.count}</p>
                            </div>
                        ))}
                        <p className='text-gray-600 text-center sm:mt-20 mt-5'>Lorem ipsum adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. </p>
                    </div>
                    <div className='md:w-[100%] sm:w-[40%]'>
                        <p>{selectedRecipe.desc}</p>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto md:mt-8 sm:mt-5 mt-3.5 px-5 flex justify-between sm:flex-nowrap flex-wrap'>
                <div className='lg:w-[67%] md:w-[60%] sm:w-[60%] w-[100%]'>
                    <h2 className='text-[28px] font-semibold'>Ingredients</h2>
                    <h3 className='text-[22px] font-semibold mt-5'>For main dish</h3>
                    <div>
                        <ul className='ingredients-list mt-2.5' onClick={handleCheck}>
                            {selectedRecipe.ingredients_for_dish.map((i) => (
                                <li key={i.name}>{i.name}</li>
                            ))}
                        </ul>
                    </div>
                    <h3 className='text-[22px] font-semibold mt-7'>For the sauce</h3>
                    <div>
                        <ul className='ingredients-list mt-2.5' onClick={handleCheck}>
                            {selectedRecipe.ingredients_for_sauce.map((i) => (
                                <li key={i.name}>{i.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-8 pb-5 border-b border-[#d1d5dc]'>
                        <h2 className='text-[28px] font-semibold'>Directions</h2>
                        {selectedRecipe.directions.map((d)=> (
                        <div className='mt-5'>
                            <h3 className='text-[20px] font-semibold'>{d.step}</h3>
                            {d.stepDetails.map((sd)=> (
                                <>
                                <p className='mt-2.5'>{sd.details}</p>
                                {sd.img ? <img src={sd.img} className='rounded-2xl w-full mt-4' alt="User" /> : ""}
                                </>
                            ))}
                        </div>
                        ))}
                    </div>
                </div>
                <div className='lg:w-[30%] md:w-[35%] sm:w-[35%] w-full relative'>
                    <CTACard2 />
                </div>
            </div>
            {/* Popular Recipies */}
            <div className='max-w-7xl mx-auto text-center lg:text-[32px] sm:text-3xl text-[21px] font-semibold px-5 lg:mt-15 sm:mt-10 mt-5'>
                <h2>You may like these recipe too</h2>
            </div>
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-5 sm:mt-10 mt-7 px-5">
                {recipe.slice(6, 10).map((p) => (
                    <Popular key={p.name} {...p}></Popular>
                ))}
            </div>
            {/* Popular Recipies End */}

            <Newsletter />
        </>
    )
}

export default RecipeDetails