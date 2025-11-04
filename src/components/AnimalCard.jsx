export default function AnimalCard({ name, image, info }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition">
      <img src={image} alt={name} className="rounded-xl h-48 w-full object-cover" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600 text-sm">{info}</p>
    </div>
  );
}