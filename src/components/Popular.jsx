import { Link } from 'react-router-dom';

const Popular = ({ slug, name, img, cookTime, type }) => {
    return (
        <Link to={`/recipes/${slug}`} className="popular-card" key={name}>
            <img className="rounded-2xl" src={img} alt="Polular Recipe" />
            <h3 className="font-medium mt-2.5">{name}</h3>
            <div className="flex items-center time-to-prep gap-3 sm:mt-5 mt-2.5">
                <div className="flex items-center justify-center gap-2">
                    <i className="ri-timer-fill md:text-[17px] text-[15px]"></i>
                    <p className="md:text-[16px] text-[14px]">{cookTime} Minutes</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <i className="ri-restaurant-fill md:text-[17px] text-[15px]"></i>
                    <p className="md:text-[16px] text-[14px]">{type}</p>
                </div>
            </div>
        </Link>
    )
}

export default Popular