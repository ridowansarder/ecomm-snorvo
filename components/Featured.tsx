"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "./ui/card";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const products = [
  {
    id: 1,
    image: "/products/hand watch.jpg",
    title: "Men's Handwatch",
    price: 100,
  },
  {
    id: 2,
    image: "/products/black shoe.jpg",
    title: "Black Nike Shoe",
    price: 120,
  },
  {
    id: 3,
    image: "/products/camera.jpg",
    title: "Canon EOS Camera",
    price: 799,
  },
  {
    id: 4,
    image: "/products/smart watch.jpg",
    title: "Smart Watch",
    price: 199,
  },
];

const Featured = () => {
  return (
    <section className="py-16">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 items-center mb-10 px-4 lg:px-12">
          <div className="uppercase font-bold">
            <h1 className="text-sm lg:text-xl text-gray-700 mb-3">
              Featured Products
            </h1>
            <h2 className="text-xl md:text-3xl mb-3">
              Discover our latest arrivals
            </h2>
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <Link
              href={"/products"}
              className="px-3 py-2 text-lg  bg-gray-800 hover:bg-gray-700 text-emerald-50 rounded-full"
            >
              All Products
            </Link>
          </div>
        </div>
        {/* slider */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              className=" flex items-center mx-3 p-2 my-2 "
            >
              <img
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className=" object-cover pt-6 rounded-lg mb-4"
              />
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="font-bold text-xl mb-3">${product.price}</p>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Featured;
