import React, { useEffect, useState } from 'react'
import DragonList from './DragonList'

const DragonPage = () => {
    const [dragons, setDragons] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/dragons")
    .then(resp => resp.json())
    .then(dragons => setDragons(dragons))
}, [])

  return (
    <div>
        <DragonList dragons={dragons}/>
    </div>
  )
}

export default DragonPage;
