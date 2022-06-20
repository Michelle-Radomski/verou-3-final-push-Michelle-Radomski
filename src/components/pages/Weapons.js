import React from "react";
import Cards from "../Cards";

function Weapons() {
    return (
        <main>
            <section className="info-container">
                <h1>Weapons</h1>
                <p>
                Weapons in DYSMANTLE are crafted when you reach the requirements needed per weapon such as a specific level to which you must gather 
                the required materials to then craft it.
                </p>
                <p>
                Weapons do not have a durability and once crafted, last forever. You have a select amount of weapon slots and can only carry a maximum of 4 
                Weapons/Tools (Late Game) at once that you can switch between mid game before having to pause and change out if a different weapons is required. 
                Many objects in Dysmantle require specific Tools/Weapons to destroy them based on the weapon type, slash, explosive, blunt etc.
                </p>
                <p>
                Weapons are used as the main source of damage, from fending off enemies to dysmantling your surrounding. 
                All weapons have a base start damage and can be upgraded to increase the damage. As the weapons increase in damage it allows 
                you to dysmantle more of your surrounding, gaining new materials to craft better items.
                </p>
            </section>

            <section className="info-container">
                <h1>Weapon List</h1>
                <Cards />
            </section>
        </main>
    );
}

export default Weapons;
