import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const [username, setUserName] = useState("");
  
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      // .post("http://localhost:4000/register", { username, password })
      .post("https://auth-server-syyz.onrender.com/register", { username, password })
      
      .then((responce) => {
        console.log(responce);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Register</h1>
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
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
