import RecipeCard from "./RecipeCard.jsx"
import Newsletter from "./Newsletter.jsx";
import { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeContext";

const Favourites = () => {

    const {recipe, setRecipe} = useContext(RecipeContext);
    
    const handleLike = (slug)=> {
        const likedRecipes = recipe.map((r)=> r.slug === slug ? { ...r, isLiked: !r.isLiked,  } : r );
        setRecipe(likedRecipes);
    }

    const likedRecipes = recipe.filter((r)=> r.isLiked);

  return (
    <>
    <div className="max-w-7xl lg:mx-auto md:mx-5 mx-2.5 sm:mt-7 mt-5 px-5">
        <h1 className="text-3xl sm:text-left text-center font-bold">Favourites</h1>
        { likedRecipes.length === 0 ? (
          <h2 className="md:mt-20 mt-10 sm:text-left text-center text-2xl font-semibold">No favorite items added yet.</h2>
        ) : (
            <div className="flex flex-wrap justify-start recipes-parent md:gap-8 gap-2.5 md:mt-10 mt-3">
                {likedRecipes.map((recipe) => (
                    <RecipeCard key={recipe.name}
                        {...recipe}></RecipeCard>
                ))}
            </div>
        ) }
    </div>
    <Newsletter />
    </>
  )
}

export default Favourites