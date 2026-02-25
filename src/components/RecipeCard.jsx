import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../Contexts/RecipeContext";
import Swal from 'sweetalert2';


const RecipeCard = ({ slug, name, img, prepTime, type, isLiked }) => {

    const {recipe, setRecipe} = useContext(RecipeContext);
    const navigate = useNavigate();

    const handleLike = (slug)=> {
        const likedRecipes = recipe.map((r)=> r.slug === slug ? { ...r, isLiked: !r.isLiked,  } : r );
        setRecipe(likedRecipes);
        if(!isLiked) {
            Swal.fire({
            icon: "success",
            title: "Recipe Added Successfully!",
            text: "This recipe is added to favourites. You can find all liked recipes in favourites.",
            confirmButtonText: "View Favourites",
            cancelButtonText: "Continue",
            showCancelButton: true,
            showCloseButton: true
        }).then((result) => {
            if(result.isConfirmed) {
                navigate("/favourites");
            }
        })} else {
            Swal.fire({
            icon: "success",
            title: "Recipe Removed Successfully!",
            text: "This recipe is removed from favourites.",
            confirmButtonText: "Explore Recipes",
            cancelButtonText: "Continue",
            showCancelButton: true,
            showCloseButton: true
        }).then((result) => {
            if(result.isConfirmed) {
                navigate("/recipes");
            }
        })};
    }

    return (
        <>
            <div className="recipeCard">
                <Link to={`/recipes/${slug}`}>
                    <img className="rounded-2xl" src={img} alt={name} loading="lazy" />
                    <h3 className="font-medium md:mt-2.5 mt-3">{name}</h3>
                    <div className="flex items-center time-to-prep gap-8 mt-5">
                        <div className="flex items-center justify-center gap-2"><i className="ri-timer-fill md:text-[17px] text-[15px]"></i><p className="md:text-[16px] text-[14px]">{prepTime} Minutes</p></div>
                        <div className="flex items-center justify-center gap-2"><i className="ri-restaurant-fill md:text-[17px] text-[15px]"></i><p className="md:text-[16px] text-[14px]">{type}</p></div>
                    </div>
                </Link>
                <div className="wishlist flex justify-center items-center bg-white rounded-full shadow shadow-black" onClick={()=> handleLike(slug)}>
                {isLiked ? <i className="ri-heart-fill text-red-500"></i> : <i className="ri-heart-add-line"></i>}
                </div>
            </div>
        </>
    )
}

export default RecipeCard