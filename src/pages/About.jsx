
import AboutSection from "../components/AboutSection";

function About() {
    return (
        <main className="page-container about-page">
            <div className="section-heading page-heading">
                <span className="eyebrow">OUR STORY</span>
                <h1>We believe good food brings people together.</h1>
                <p>
                    Foodie Hub makes it easier to discover meals you love.
                    Our goal is to make ordering food simple, enjoyable,
                    and convenient for everyone.
                </p>
            </div>

            <AboutSection />

            <section className="about-message">
                <h2>Every meal deserves to be special.</h2>
                <p>
                    Whether you are having lunch, sharing dinner with
                    friends, or treating yourself, there is something
                    delicious waiting for you.
                </p>
            </section>
        </main>
    );
}

export default About;
