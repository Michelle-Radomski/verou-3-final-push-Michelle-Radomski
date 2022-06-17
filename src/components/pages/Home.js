import React from "react";
import Hero from "../Hero";

function Home() {
    return (
        <main>
            <Hero />
            <section className="info-container">
                <p>DYSMANTLE is a post-apocalyptic game with RPG elements, where players can break down almost every object (except those which are needed for interaction).
                Basically, players come from the safety of a vault on an island full with dangerous creatures.
                </p>
            </section>
        </main>
    );
}

export default Home;
