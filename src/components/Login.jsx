import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, SetUser] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/login", { username, password })
      .then((responce) => {
        console.log(responce.data.username)
        SetUser(responce.data.username);
        
        // navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });

    
  }

  
useEffect(()=>{
  if(user!==""){
    alert(`hi ${user}`)
    console.log(user)
    sessionStorage.setItem("users",JSON.stringify(user))
  }
})
  

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name</label>
          <input
            name="username"
            type="text"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>

   
    </div>
  );
}

export default Login;
