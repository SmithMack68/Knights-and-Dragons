import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')


  return (
    <div style={{fontFamily: "fantasy", textAlign: "center", fontSize: 45, color: "whitesmoke"}}>
        <h1>Login</h1>
        <form>
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
