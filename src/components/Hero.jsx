import { Link } from "react-router"




function Hero(){

    return (<section className="hero">
        <div className="hero-content">
            <span className="eyebrow">YOUR FAVOURITE FOOD SPOT</span>

            <h1>
                Delicious food,
                <br />
                <span>delivered to you.</span>
            </h1>

            <p>
                From tasty burgers to your favourite local meals,
                discover delicious food for every craving.
            </p>

            <Link to="/menu" className="primary-button">
                Explore Our Menu →
            </Link>

            <div className="hero-note">
                <span><i className="fa-solid fa-star"></i> 4.9/5</span>
                <span>Loved by food lovers</span>
            </div>
        </div>

        <div className="hero-image-wrapper">
            <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
                alt="Delicious burger with fresh ingredients"
                className="hero-image"
            />

            <div className="floating-note">
                <span><i className="fa-solid fa-fire"></i></span>
                <div>
                    <strong>Fresh & Tasty</strong>
                    <p>Made for your cravings</p>
                </div>
            </div>
        </div>
    </section>)
}

export default Hero