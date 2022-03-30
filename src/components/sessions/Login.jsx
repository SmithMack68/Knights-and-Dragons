import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(baseUrl + '/users', {
      method: "POST",
      headers,
      body: JSON.stringify({ username })
    })
      .then(resp => resp.json())
      .then(data => {
        setUsername(data)
        navigate('/home')
      })
  }


  return (
    <div style={{fontFamily: "fantasy", textAlign: "center", fontSize: 45, color: "whitesmoke"}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Choose your Warrior Name: </label>
            <input style={{fontFamily: "fantasy", fontSize: 30, height: 45, width: 250}} 
              type="text" 
              name="username" 
              required 
              id="username" 
              value={ username } 
              placeholder="Name Required"  
              onChange={(e) => setUsername(e.target.value) }>
            </input>
          </div>
          <br></br>
          <input style={{fontFamily: "fantasy", height: 45, width: 400, fontSize: 30, color: 'rgb(59, 71, 230)'}} type="submit" value="Enter the Order of Dragons"></input>
        </form>
    </div>
  )
}

export default Login
