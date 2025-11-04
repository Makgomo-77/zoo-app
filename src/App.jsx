
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Places from "./pages/Places";
import MapPage from "./pages/MapPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/places" element={<Places />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}
