import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-24 md:py-32 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg">
          Welcome to <span className="font-semibold text-black">Snorvo</span>, your go-to destination
          for high-quality products at unbeatable prices. Our mission is to make online shopping
          simple, fast, and enjoyable for everyone.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-6 text-gray-700 text-base leading-relaxed">
        <p>
          Founded in 2025, Snorvo was created with one goal: to bring customers a seamless
          e-commerce experience with a personal touch. Whether you are shopping for fashion, electronics,
          or everyday essentials, we have got you covered.
        </p>

        <p>
          We carefully curate our product collections to ensure they meet our high standards for
          quality, value, and reliability. We believe in excellent customer service, fast shipping,
          and secure payments.
        </p>

        <p>
          Our team is passionate about building a platform that not only sells — but serves. Thank
          you for being a part of our journey.
        </p>
      </div>

      {/* Optional: Team Section Placeholder */}
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
        <p className="text-gray-600">Coming soon...</p>
      </div> 
      
    </div>
  );
};

export default About;
