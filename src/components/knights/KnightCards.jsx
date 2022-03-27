import React from 'react'

const KnightCards = ({ knight }) => {
    const { name, type, image, powers } = knight

    return (
      <div className='card' style={{textAlign: "center"}}>
          <h2 style={{fontFamily: "fantasy"}}>{name}</h2>
          <img src={image} alt={name} height={250} width={400} quality={.05}/>
          <p style={{fontFamily: "fantasy"}}>Class: {type} Powers: {powers}</p>
        <button style={{fontFamily: "fantasy", backgroundColor: "darkgrey"}}>Add to Army</button>
        <button style={{fontFamily: "fantasy", backgroundColor: "darkgrey"}}>Favorite</button>
      </div>
    )
  }

export default KnightCards


