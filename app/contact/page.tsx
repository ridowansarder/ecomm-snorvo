import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-24 md:py-32 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
                placeholder="Ridwan Sarder"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-black px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-gray-700 space-y-2 text-sm">
          <p>📍 Address: 123 Ecom St, Webville, World 00001</p>
          <p>📞 Phone: +880 1234 567890</p>
          <p>✉️ Email: support@ecommerce.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
