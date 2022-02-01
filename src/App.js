import "./App.css";
import Home from "./Screens/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import MultipleWinners from "./Screens/MultipleWinners/MultipleWinners";
// Dependencies
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="app">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multiple-winners" element={<MultipleWinners />} />
      </Routes>
    </div>
  );
}

export default App;
