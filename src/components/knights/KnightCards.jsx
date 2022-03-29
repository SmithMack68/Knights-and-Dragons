import React, { useState } from 'react'

const KnightCards = ({ knight }) => {
    const { name, type, image, powers } = knight
    const [favorite, setFavorite] = useState(true)
    const [inArmy, setInArmy] = useState(true)

    function handleFavoriteClick(){
      setFavorite(!favorite)
    }
    function addToArmy(){
      setInArmy(!inArmy)
    }

    return (
      <div className='card' style={{textAlign: "center"}}>
          <h2 style={{fontFamily: "fantasy", color: "darkgrey"}}>{name}</h2>
          <img src={image} alt={name} height={250} width={400} quality={.05}/>
          <p style={{fontFamily: "fantasy", color: "darkgrey"}}>Class: {type} Powers: {powers}</p>
        <button onClick={addToArmy} style={{fontFamily: "fantasy", color: "darkgrey", backgroundColor: "rgb(59, 55, 55)"}}>{inArmy ? "Add to Army" : "Remove from Army"}</button>
        <button onClick={handleFavoriteClick} style={{fontFamily: "fantasy", color: "darkgrey", backgroundColor: "rgb(59, 55, 55)"}}>{favorite ? "Favorite" : "🗡"  }</button>
      </div>
    )
  }

export default KnightCards


