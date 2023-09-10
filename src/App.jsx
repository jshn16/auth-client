import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
//Components
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Weather from "./components/Weather";

function userData() {
  const data = sessionStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function App() {
  const [user, setUser] = useState(userData());
  



  return (
    <HashRouter>
      {user.length === 0 ? (
        <Routes>
          
          <Route path="/" element={<Home user={user} />}></Route>
        </Routes>
      ) : (
        
        <Routes>
          <Route path="/weather" element={<Weather user={user} />}></Route>
        </Routes>
      )}
     

      <Routes>
        
        <Route path="/home" element={<Home user={user} />}></Route>
      </Routes>

      <Routes>
        <Route path="/register" element={<Register user={user} />}></Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
