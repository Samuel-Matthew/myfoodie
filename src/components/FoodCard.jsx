
function FoodCard({ food, onAddToCart }) {
    return (
        <article className="food-card">
            <img
                src={food.image}
                alt={food.name}
                className="food-image"
            />

            <div className="food-details">
                <span className="food-category">{food.category}</span>

                <h3>{food.name}</h3>

                <p>{food.description}</p>

                <div className="food-card-bottom">
                    <strong>₦{food.price.toLocaleString()}</strong>

                    <button
                        className="add-button"
                        onClick={() => onAddToCart(food)}
                    >
                        + Add
                    </button>
                </div>
            </div>
        </article>
    );
}

export default FoodCard;
