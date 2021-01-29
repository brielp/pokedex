import React from "react";
import Pokecard from "./pokecard";
import "./Pokedex.css"

function Pokedex({ pokemon }) {
    
    return (
        <>
            <h2 className="Pokedex-header">Pokedex</h2>
            <div className="Pokedex">
                {pokemon.map(p => (
                    <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                    ))}
            </div>
        </>
    )
}

export default Pokedex