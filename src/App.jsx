import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Components
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Private from "./components/private";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(userData());

  function userData() {
    const data = sessionStorage.getItem("users");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  useEffect(() => {
    console.log(user);
  });

  return (
    <BrowserRouter>
      {user.length === 0 ? (
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Private />}></Route>
        </Routes>
      )}

      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
