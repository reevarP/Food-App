import React from "react";

const FoodCard = (props) => {
    return(
        <>
            <div className="foodcard">
                <h1>{props.name}</h1>
                <p>This is a {props.iden}.</p>
            </div>
        </>
    );
}

export default FoodCard;