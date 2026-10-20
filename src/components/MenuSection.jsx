import FoodCard from "../components/FoodCard";
import { Link } from "react-router";
import foods from "../data/foods";




function MenuSection({ onAddToCart }) {

    const popularFoods = foods.slice(0, 3);

    return (
        <section className="menu-section">
            <div className="section-heading">
                <span className="eyebrow">OUR FAVOURITES</span>
                <h2>Popular meals</h2>
                <p>Some delicious options to get you started.</p>
            </div>

            <div className="food-grid">
                {popularFoods.map((food) => (
                    <FoodCard
                        key={food.id}
                        food={food}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>

            <div className="center-button">
                <Link to="/menu" className="secondary-button">
                    View Full Menu →
                </Link>
            </div>
        </section>
    )
}

export default MenuSection;