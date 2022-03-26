import React from 'react'
import KnightCards from './KnightCards'

const Knightlist = ({ knights }) => {
    return (
        <ul className='cards'>
          {knights.map((knight) => {
            return (
              <KnightCards 
              key={knight.id}
              knight={knight}
              />
            )
          })}
        </ul>
      )
    }

export default Knightlist