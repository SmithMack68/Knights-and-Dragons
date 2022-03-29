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
        navigate('/home')
        setUsername(data)
      })
  }


  return (
    <div style={{fontFamily: "fantasy", textAlign: "center", fontSize: 45, color: "whitesmoke"}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Choose your Warrior Name:</label>
            <input type="text" name="username" id="username" value={ username } onChange={(e) => setUsername(e.target.value) }></input>
          </div>
          <input type="submit" value="Enter the Order of Dragons"></input>
        </form>
    </div>
  )
}

export default Login
