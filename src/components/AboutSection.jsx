
const benefits = [
    {
        id: 1,
        icon: <i className="fa-solid fa-truck-fast" aria-hidden="true" />,
        title: "Fresh Ingredients",
        description: "We prepare meals with quality ingredients."
    },
    {
        id: 2,
        icon: "✔",
        title: "Fast Delivery",
        description: "Get your favourite meals delivered quickly."
    },
    {
        id: 3,
        icon: <i className="fa-solid fa-dollar-sign" aria-hidden="true" />,
        title: "Affordable Prices",
        description: "Enjoy delicious meals without overspending."
    }
];

function AboutSection() {
    return (
        <section className="about-section">
            <div className="section-heading">
                <span className="eyebrow">WHY FOODIE HUB?</span>
                <h2>Good food, good mood.</h2>
                <p>
                    We make enjoying your favourite meals easy,
                    convenient, and affordable.
                </p>
            </div>

            <div className="benefits-grid">
                {benefits.map((benefit) => (
                    <div className="benefit-card" key={benefit.id}>
                        <span className="benefit-icon">{benefit.icon}</span>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AboutSection;
