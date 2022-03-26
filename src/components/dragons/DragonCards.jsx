import React from 'react'

const DragonCards = ({ dragon }) => {
  const { name, type, image, powers } = dragon

  return (
    <div className='card' style={{textAlign: "center"}}>
        <h2>{name}</h2>
        <img src={image} alt={name} height={300} width={450} quality={.05}/>
        <p>Type: {type} Powers: {powers}</p>
      <button>Add to Army</button>
    </div>
  )
}

export default DragonCards;