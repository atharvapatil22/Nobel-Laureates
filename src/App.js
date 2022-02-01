import "./App.css";
import Home from "./Screens/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Screens/About/About";
import MyNavbar from "./Components/MyNavbar/MyNavbar";

function App() {
  return (
    <div className="app">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
