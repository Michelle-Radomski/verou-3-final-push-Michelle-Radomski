import React from "react";
import CardItem from "./CardItem";
import weapons from "./Weapons";

function Cards() {
    return (
        <>
            {weapons.map((weapon) => {
                return <CardItem weapon={weapon} />;
            })}
        </>
    );
}

export default Cards;
