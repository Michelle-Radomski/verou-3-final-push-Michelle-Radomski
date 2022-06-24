import React from "react";
import dysmantleLogo from "../images/Dysmantle-logo.png";
import platforms from "../images/platforms.png";
import Button from "../components/Button";

function Hero() {
    return (
        <section className="hero-container">
            <img
                src={platforms}
                alt="Available platforms."
                className="platforms"
            />
            <img src={dysmantleLogo} alt="Dysmantle logo." className="logo" />
            <Button text="More info" className="button" />
        </section>
    );
}

export default Hero;
