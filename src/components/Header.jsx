import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function UserData() {
  let data = sessionStorage.getItem("users");
  
  if (data) {
    return JSON.parse(data);
   
  } else {
    return [];
  }
 
}


function Header() {
  let navigate = useNavigate();
  const [user, SetUser] = useState(UserData());

console.log(user)


  function logOut() {
    sessionStorage.setItem("users", []);
  
    navigate("/");
    window.location.reload();
  }



  return (
    <nav>
      <div>
        <Link to="/"><h1>Carbase</h1></Link>
        
        
      </div>
      <div>
        {user.length === 0 ? (
          <Link to="/login">Login</Link>
        ) : (
          <div>
          <span>Hi! {user}</span>
          <Link to="/weather">Weather</Link>
          <button onClick={logOut}>Logout</button>
        
         
          </div>
          
        )}
      </div>
    </nav>
  );
}

export default Header;
