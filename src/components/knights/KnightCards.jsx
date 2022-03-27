import React from 'react'

const KnightCards = ({ knight }) => {
    const { name, type, image, powers } = knight

    return (
      <div className='card' style={{textAlign: "center"}}>
          <h2 style={{fontFamily: "fantasy", color: "darkgrey"}}>{name}</h2>
          <img src={image} alt={name} height={250} width={400} quality={.05}/>
          <p style={{fontFamily: "fantasy", color: "darkgrey"}}>Class: {type} Powers: {powers}</p>
        <button style={{fontFamily: "fantasy", color: "darkgrey", backgroundColor: "rgb(59, 55, 55)"}}>Add to Army</button>
        <button style={{fontFamily: "fantasy", color: "darkgray", backgroundColor: "rgb(59, 55, 55)"}}>Favorite</button>
      </div>
    )
  }

export default KnightCards


