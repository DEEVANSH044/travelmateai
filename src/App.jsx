
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { Route, Routes } from "react-router-dom";
import Destinations from "./pages/Destinations.jsx";
import Destination from "./pages/Destination";


function App() {
  return (
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destination/:name" element={<Destination />}/>
      <Route path="/about" element={<About />}/>
     </Routes>
  )
}

export default App
