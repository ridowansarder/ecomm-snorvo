import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";


export default  function FeaturedProducts() {
  const products = [
     {
    id: "1",
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 40 hours battery life.",
    price: 129.99,
    category: "Electronics",
    image: "/products/headphones.jpg",
  },
  {
    id: "2",
    name: "Smartwatch Pro",
    description: "Advanced fitness tracking with heart rate and GPS support.",
    price: 199.99,
    category: "Wearables",
    image: "/products/smartwatch.jpg",
  },
  {
    id: "3",
    name: "Eco-Friendly Water Bottle",
    description: "Reusable stainless steel bottle. Keeps drinks hot/cold for hours.",
    price: 24.99,
    category: "Lifestyle",
    image: "/images/products/water-bottle.jpg",
  },
  ]
  return (
    <section className="max-w-7xl mx-auto text-center py-12">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-6 px-6"
      >
        <div className=" font-bold text-left">
          <h1 className="text-sm lg:text-xl">
            Featured products
          </h1>
          <h2 className="text-xl md:text-3xl">
            Discover our latest arrivals
          </h2>
        </div>
        <div className="lg:ml-auto"> 
          <Link href="/products">
            <Button className="p-4 text-lg  rounded-full">All Products</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => {
          const price = product.price;
          return (
            <div
              key={product.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="rounded mb-4"
                width={300}
                height={300}
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                ${price}
              </p>
              <Link href={`/products/${product.id}`}>
                <Button className="mt-4 hover:scale-105 transition-transform duration-300 dark:bg-white dark:text-black">
                  View Details
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}