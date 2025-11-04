export default function Places() {
  const attractions = [
    { name: "Reptile House", desc: "Home to snakes, crocodiles, and lizards." },
    { name: "Bird Sanctuary", desc: "A peaceful area with exotic birds." },
    { name: "Safari Trail", desc: "Walkthrough experience among herbivores." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Places to Visit</h1>
      <ul className="space-y-3">
        {attractions.map((p) => (
          <li key={p.name} className="bg-white p-4 shadow rounded-xl">
            <h2 className="font-bold text-lg">{p.name}</h2>
            <p className="text-gray-600">{p.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}