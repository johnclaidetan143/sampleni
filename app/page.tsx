import Image from "next/image";

export default function Home() {
  const watches = [
    {
      id: 1,
      name: "Rolex Submariner",
      price: "₱550,000",
      image: "/watch1.jpg",
    },
    {
      id: 2,
      name: "Casio G-Shock",
      price: "₱8,500",
      image: "/watch2.jpg",
    },
    {
      id: 3,
      name: "Apple Watch Series 9",
      price: "₱28,990",
      image: "/watch3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Watch Store System
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {watches.map((watch) => (
          <div
            key={watch.id}
            className="bg-white p-5 rounded-xl shadow-md"
          >
            <div className="mb-4">
              <Image
                src={watch.image}
                alt={watch.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold">{watch.name}</h2>
            <p className="text-gray-600">{watch.price}</p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}