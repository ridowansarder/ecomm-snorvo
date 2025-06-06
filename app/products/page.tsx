"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/products/hand watch.jpg",
    title: "Men's Handwatch",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "/products/black shoe.jpg",
    title: "Black Nike Shoe",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: "/products/camera.jpg",
    title: "Canon EOS Camera",
    price: 799,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    image: "/products/smart watch.jpg",
    title: "Smart Watch",
    price: 199,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    image: "/products/blue shoe.jpg",
    title: "Nike Blue Shoe",
    price: 110,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    image: "/products/mouse.jpg",
    title: "Wireless Mouse",
    price: 49,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    image: "/products/perfume.jpg",
    title: "Luxury Perfume",
    price: 89,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    image: "/products/sunglasses.jpg",
    title: "Designer Sunglasses",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    image: "/products/beauty items.jpg",
    title: "Beauty Items",
    price: 75,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function ProductsList() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.title.toLowerCase().includes(term);
    const descriptionMatch =
      product.description && product.description.toLowerCase().includes(term);

    return nameMatch || descriptionMatch;
  });

  if (!products || products.length === 0) {
    return <p className="text-center text-3xl">No products available.</p>;
  }
  return (
    <div className=" flex flex-col items-center justify-center container mx-auto mb-3 py-24 md:py-32 p-4 max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        OUR PRODUCTS
      </h1>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ul className="p-4 border rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-800 font-bold my-3">${product.price}</p>
              <Button className="transition duration-300 ease-in-out hover:scale-105 mb-2 w-full">
                View Product
              </Button>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
