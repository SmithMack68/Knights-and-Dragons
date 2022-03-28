import React, { useState } from 'react'

const KnightCards = ({ knight }) => {
    const { name, type, image, powers } = knight
    const [favorite, setFavorite] = useState(true)

    function handleFavoriteClick(){
      setFavorite(!favorite)
    }

    return (
      <div className='card' style={{textAlign: "center"}}>
          <h2 style={{fontFamily: "fantasy", color: "darkgrey"}}>{name}</h2>
          <img src={image} alt={name} height={250} width={400} quality={.05}/>
          <p style={{fontFamily: "fantasy", color: "darkgrey"}}>Class: {type} Powers: {powers}</p>
        <button style={{fontFamily: "fantasy", color: "darkgrey", backgroundColor: "rgb(59, 55, 55)"}}>Add to Army</button>
        <button onClick={handleFavoriteClick} style={{fontFamily: "fantasy", color: "darkgrey", backgroundColor: "rgb(59, 55, 55)"}}>{favorite ? "Favorite" : "🗡"  }</button>
      </div>
    )
  }

export default KnightCards


