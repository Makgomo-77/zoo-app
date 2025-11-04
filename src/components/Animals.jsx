import { useState } from "react";
import AnimalCard from "../components/AnimalCard";

const animalsData = [
  {
    name: "Lion",
    image: "https://images.unsplash.com/photo-1581888227599-779811939961",
    info: "The lion is known as the king of the jungle, native to Africa.",
  },
  {
    name: "Elephant",
    image: "https://images.unsplash.com/photo-1508675801601-171cfb5b418e",
    info: "Elephants are the world’s largest land animals with incredible memory.",
  },
  {
    name: "Giraffe",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    info: "Giraffes are the tallest mammals on Earth.",
  },
  {
    name: "Zebra",
    image: "https://images.unsplash.com/photo-1575411492513-13e8a8f79b2e",
    info: "Zebras are African equines known for their distinctive black-and-white stripes.",
  },
  {
    name: "Panda",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    info: "Pandas are gentle bears native to China, loved for their cute looks and bamboo diet.",
  },
];

export default function Animals() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter animals by name or info
  const filteredAnimals = animalsData.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.info.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-800 text-center">🐾 Animals at the Zoo</h1>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for an animal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Animal Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((a) => <AnimalCard key={a.name} {...a} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No animals match your search 😢
          </p>
        )}
      </div>
    </div>
  );
}