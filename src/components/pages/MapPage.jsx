import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
  const position = [-26.2041, 28.0473]; // Johannesburg for example

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-800">Zoo Map</h1>
      <MapContainer center={position} zoom={13} className="h-96 rounded-xl shadow-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>WildLife Zoo - Welcome!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}