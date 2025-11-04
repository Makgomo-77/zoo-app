import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-xl">🌿 WildLife Zoo</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/animals" className="hover:text-yellow-300">Animals</Link>
        <Link to="/places" className="hover:text-yellow-300">Places</Link>
        <Link to="/map" className="hover:text-yellow-300">Map</Link>
      </div>
    </nav>
  );
}