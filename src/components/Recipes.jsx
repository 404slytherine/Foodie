import { useCallback, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard.jsx";
import Newsletter from "./Newsletter.jsx";
import { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeContext";
import { useLocation } from "react-router-dom";


const Recipes = () => {

  const {recipe} = useContext(RecipeContext);
  const location = useLocation();

  const [category, setCategory] = useState("All");
  const [searchVal, setSearchVal] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  useEffect(()=> {
    if(location.state?.category) {
      setCategory(location.state.category);
      setCurrentPage(1);
      // console.log(location);
    }
  }, [location.state]);

  const Categorywise = useCallback((e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  }, [setCategory]);

  const handleSearch = (e)=> {
    setSearchVal(e.target.value);
    setCurrentPage(1);
  }

  const filteredCards = recipe.filter((recipe)=> category == "All" || recipe.type == category).filter((recipe)=> recipe.name.toLowerCase().includes(searchVal.toLowerCase()));

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredCards.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(filteredCards.length / recipesPerPage);

  return (
    <>
    <div className='max-w-7xl mx-auto mt-5 lg:px-8 px-6 flex flex-col'>
      <div className="flex md:flex-row flex-col justify-between items-center sm:items-start gap-2.5 mt-2.5">
        <input type="search" value={searchVal} onInput={handleSearch} className="sm:w-96 w-[90%] max-w-3xl md:py-2.5 py-2 md:px-4 px-2.5 border border-gray-300 rounded-[10px]" placeholder="Search Recipe By Name..." />
        <select name="category" id="category" className="sm:w-60 w-[90%] max-w-3xl md:py-2.5 py-2 md:px-4 px-2.5 border border-gray-300 rounded-[10px]" value={category} onChange={Categorywise}>
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Vegan">Vegan</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Dessert">Dessert</option>
          <option value="Lunch">Lunch</option>
          <option value="Chocolate">Chocolate</option>
        </select>
      </div>
      <div className='flex flex-wrap md:justify-start justify-between recipes-parent md:gap-5 gap-2.5 md:mt-10 mt-3'>
        {currentRecipes.length > 0 ? (
            currentRecipes.map((recipe) => (
              <RecipeCard key={recipe.name} {...recipe} />
            ))
          ) : (
            <h2 className="text-2xl font-semibold w-full mt-10 sm:text-start text-center">No Recipes Found</h2>
          )}
      </div>

      {filteredCards.length > recipesPerPage && (
          <div className="flex justify-center items-center gap-3 sm:mt-10 mt-7">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded-lg border ${currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:bg-[#000] hover:text-white cursor-pointer"}`}
            >Prev</button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`cursor-pointer px-4 py-2 border rounded-lg ${currentPage === i + 1 ? "bg-[#FF7426] border text-white font-semibold" : "hover:bg-[#000] hover:text-white"}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded-lg border ${currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:bg-[#000] hover:text-white cursor-pointer"}`}
            >Next</button>
          </div>
        )}

    </div>
    <Newsletter />
    </>
  )
}

export default Recipes