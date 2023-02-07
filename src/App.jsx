import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Bonuses from "./Pages/Bonuses";

function App() {
  return (
    <div className="text-black bg-black h-full">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bonuses" element={<Bonuses />} />
      </Routes>
    </div>
  );
}

export default App;
