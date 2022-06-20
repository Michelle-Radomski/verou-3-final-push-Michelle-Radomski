import React from "react";
import CardItem from "./CardItem";
import level0 from "./Level0";
import level1 from "./Level1";

function Cards() {
    return (
        <>
            {level0.map((weapon) => {
                return <CardItem weapon={weapon} />;
            })}
        </>
    );
}

export default Cards;
