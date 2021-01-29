import React from "react";
import "./Pokecard.css";

function Pokecard({ id, name, type, base_experience }) {
    const imageStr = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <h4 className="Pokecard-header">{name}</h4>
            <img src={imageStr} alt="Pokemon"/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>  
        </div>
    )
}

export default Pokecard