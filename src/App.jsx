import "./App.css";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Landing from "../src/landing/landing";
import Menu from "../src/menu/menu";

function App() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/menu");
  }
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <main className="body" onClick={handleClick}>
              <Landing />
            </main>
          }
        />
        <Route
          path="/menu"
          element={
            <main className="body">
              <Menu />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
