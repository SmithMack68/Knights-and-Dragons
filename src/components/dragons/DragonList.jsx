import React from 'react'
import DragonCards from './DragonCards'

const DragonList = ({ dragons }) => {

  return (
    <ul className='cards'>
      {dragons.map((dragon) => {
        return (
          <DragonCards 
          key={dragon.id}
          dragon={dragon}
          />
        )
      })}
    </ul>
  )
}

export default DragonList;