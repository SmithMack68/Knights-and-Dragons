import React, { useEffect, useState } from 'react'
import KnightList from './KnightList'

const KnightsPage = () => {
    const [knights, setKnights] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/knights")
          .then(resp => resp.json())
          .then(knights => setKnights(knights))
      }, [])

        return (
          <div>
              <KnightList knights={knights}/>
          </div>
        )
      }


export default KnightsPage