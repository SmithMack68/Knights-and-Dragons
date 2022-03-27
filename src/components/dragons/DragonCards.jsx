import React from 'react'

const DragonCards = ({ dragon }) => {
  const { name, type, image, powers } = dragon

  return (
    <div className='card' style={{textAlign: "center"}}>
        <h2 style={{fontFamily: "fantasy", color: "orangered"}}>{name}</h2>
        <img src={image} alt={name} height={300} width={400} quality={.05}/>
        <p style={{fontFamily: "fantasy", color: "orangered"}}>Class: {type} Powers: {powers}</p>
      <button style={{fontFamily: "fantasy", color: "orangered", backgroundColor: "rgb(59, 55, 55)"}}>Add to Army</button>
      <button style={{fontFamily: "fantasy", color: "orangered", backgroundColor: "rgb(59, 55, 55)"}}>Favorite  </button>
    </div>
  )
}

export default DragonCards;