import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Bonuses from "./Pages/Bonuses";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="text-black bg-black h-full">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bonuses" element={<Bonuses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
