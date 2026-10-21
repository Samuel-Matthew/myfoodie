
import FoodCard from "../components/FoodCard";
import foods from "../data/foods";

function Menu({ onAddToCart }) {
    return (
        <main className="page-container">
            <div className="section-heading page-heading">
                <span className="eyebrow">MADE WITH LOVE</span>
                <h1>Explore Our Menu</h1>
                <p>
                    Find something delicious for your next meal.
                </p>
            </div>

            <div className="food-grid">
                {foods.map((in_food) => (
                    <FoodCard
                        key={in_food.id}
                        food={in_food}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </main>
    );
}

export default Menu;
