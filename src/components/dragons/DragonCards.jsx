import React, { useState } from 'react'

const DragonCards = ({ dragon }) => {
  const { name, type, image, powers } = dragon
  const [favorite, setFavorite] = useState(true)
  const [inArmy, setInArmy] = useState(true)

  function handleFavoriteClick (){
    setFavorite(!favorite)
  }

  const addToArmy = () => {
    setInArmy(!inArmy)
  }

  return (
    <div className='card' style={{textAlign: "center"}}>
        <h2 style={{fontFamily: "fantasy", color: "orangered"}}>{name}</h2>
        <img src={image} alt={name} height={300} width={400} quality={.05}/>
        <p style={{fontFamily: "fantasy", color: "orangered"}}>Class: {type} Powers: {powers}</p>
      <button onClick={addToArmy} style={{fontFamily: "fantasy", color: "orangered", backgroundColor: "rgb(59, 55, 55)"}}>{inArmy ? "Add to Army" : "Remove from Army"}</button>
      <button onClick={handleFavoriteClick} style={{fontFamily: "fantasy", color: "orangered", backgroundColor: "rgb(59, 55, 55)"}}>{favorite ? "Favorite": " 🔥 " }</button>
    </div>
  )
}

export default DragonCards;