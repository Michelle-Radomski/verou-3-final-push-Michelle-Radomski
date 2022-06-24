import React from "react";
import CardItem from "./CardItem";
import weapons from "./Weapons";

function Cards() {
    return (
        <div className="cards-container">
            {weapons.map((weapon) => {
                return <CardItem weapon={weapon} />;
            })}
        </div>
    );
}

export default Cards;
